import { _get } from "./lodash";
import { IError, IGetParams } from "../types/common";

export class ParamHelper {
  static getParams = (opts: IGetParams, reqOptions: IGetParams) => {
    if (opts.params) {
      return {
        ...reqOptions.params,
        ...opts.params,
      };
    }

    return reqOptions.params;
  };

  static getBoolTrue = (bool: any): boolean => {
    if (bool === "false") {
      return false;
    }

    if (bool === "true") {
      return true;
    }

    return bool === null ? true : !!bool;
  };

  static getBoolFalse = (bool: any): boolean => {
    if (bool === "false") {
      return false;
    }

    if (bool === "true") {
      return true;
    }

    return bool === null ? false : !!bool;
  };

  static isNotFoundError = (error: IError | any): boolean => {
    return _get(error, "code", true) === "NOT_FOUND";
  };

  static isChangeWithFalse = (value: boolean, oldValue: boolean): boolean => {
    return oldValue !== value && !value;
  };

  static isChangeWithTrue = (value: boolean, oldValue: boolean): boolean => {
    return oldValue !== value && value;
  };
}
