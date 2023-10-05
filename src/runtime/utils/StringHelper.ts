import urlJoin from "url-join";

export class StringHelper {
  static genString = (length = 5) => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  };

  static withComma = (value: number | string = 0): string => {
    return (+(value || 0)).toLocaleString();
  };

  static split = (
    str: string | null | undefined,
    separator: string | RegExp
  ): string[] => {
    return `${str || ""}`
      .split(separator)
      .filter((item: string) => item)
      .map((item: string) => item.trim());
  };

  static joinURL = (value: any, value2: any): string => {
    return urlJoin(value, value2);
  };

  static truncate = (str: any, num = 300) => {
    const newStr = str || "";

    if (newStr.length > num) {
      return newStr.slice(0, num) + "...";
    }

    return newStr;
  };

  static getError = (
    errorData: { code: string; message: any; fields: object } | any,
    defaultErrorMessage = "มีบางอย่างผิดพลาด"
  ) => {
    let msg = errorData?.message;

    if (!errorData.code || !msg) {
      return defaultErrorMessage;
    }

    if (errorData.code !== "INVALID_PARAMS" && !errorData.fields) {
      return msg;
    }

    for (const [_, value] of Object.entries<any>(errorData.fields)) {
      msg = value.message;
    }

    return msg;
  };
}
