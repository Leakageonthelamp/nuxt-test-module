export interface IError {
  code: string;
  message: any;
}

export interface IOption {
  value: any;
  label: string;
}

interface IGetParams {
  params?: {
    [key: string]: any;
  };
}
