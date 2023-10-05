export class FileHelper {
  static toBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  static readFileAsync = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (ev) => {
        resolve((ev.target ? ev.target.result : "") as any);
      };

      reader.onerror = reject;

      reader.readAsText(file);
    });
  };

  static dataURLtoFile = async (
    dataUrl: string,
    filename: string
  ): Promise<File> => {
    const res: Response = await fetch(dataUrl);
    const blob: Blob = await res.blob();

    return new File([blob], filename, { type: "image/png" });
  };
}
