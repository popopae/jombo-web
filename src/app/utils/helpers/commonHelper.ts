import moment from "moment";
import { ValidateHelper } from "./validateHelper";
import CryptoJS from "crypto-js";

export class CommonHelper {
  public static replaceDoubleSpaceToSingleSpace(item: string): string {
    return item.replace(/\s\s+/g, " ");
  }

  public static ToStringArg(source: string, arg: string[]): string {
    let index = 0;
    arg.forEach(function(value) {
      source = source.replace("{" + index + "}", value);
      index++;
    });
    return source;
  }

  public static isObjectEmpty(obj: any) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  public static convertDateTime(text: string, format: string) {
    return moment(text).format(format);
  }

  public static getCurrentDateInMilli() {
    const currentDateInMilli = Math.floor(moment().valueOf() / 1000);
    return currentDateInMilli;
  }

  public static checkRequireAddressTextField(
    isEnglishPrimary: boolean,
    valueInter: string,
    valueLocal: string
  ) {
    if (isEnglishPrimary) {
      return false;
    }

    if (
      (valueLocal === undefined ||
        valueLocal === null ||
        valueLocal.trim().length === 0) &&
      (valueInter === undefined ||
        valueInter === null ||
        valueInter.trim().length === 0)
    ) {
      return false;
    }

    return true;
  }

  public static isArrayEqual(array1: Array<any>, array2: Array<any>) {
    return (
      array1.length === array2.length &&
      array1.every((value, index) => value === array2[index])
    );
  }

  public static convertFileSize(bytes: number) {
    let sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes == 0) return "n/a";
    let i: number = Math.floor(Math.log(bytes) / Math.log(1024));
    if (i == 0) return bytes + " " + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
  }

  public static changeDuplFilenameInList(
    fileList: Array<any>,
    filename: string,
    fieldName: string
  ): string {
    const filterList = fileList.filter((item) => item[fieldName] == filename);

    if (filterList.length > 0) {
      const curDate = new Date(Date.now());
      const mm = curDate.getMonth() + 1; // getMonth() is zero-based
      const dd = curDate.getDate();
      const hh = curDate.getHours();
      const mn = curDate.getMinutes();
      const ss = curDate.getSeconds();

      const prefixDate = [
        curDate.getFullYear(),
        (mm <= 9 ? "0" : "") + mm,
        (dd <= 9 ? "0" : "") + dd,
        (hh <= 9 ? "0" : "") + hh,
        (mn <= 9 ? "0" : "") + mn,
        (ss <= 9 ? "0" : "") + ss,
      ].join("");
      let ext = filename.split(".").pop();
      let filenameNoExt = filename;
      if (ext == filename) {
        ext = "";
      } else {
        filenameNoExt = filename.substr(0, filename.length - ext.length - 1);
      }

      return [filenameNoExt, "_", prefixDate, "." + ext].join("");
    }
    return filename;
  }

  public static getFileExtension(fileName: string): string {
    return fileName.slice(
      (Math.max(0, fileName.lastIndexOf(".")) || Infinity) + 1
    );
  }

  public static formatBranchNumber(
    branchNumber: string,
    width: number,
    format?: string
  ): string {
    format = format || "0";
    branchNumber = branchNumber + "";
    return branchNumber.length >= width
      ? branchNumber
      : new Array(width - branchNumber.length + 1).join(format) + branchNumber;
  }

  public static calculateArrayPosition(
    columnIndex: number,
    rowIndex: number,
    amountRowDisplay: number
  ) {
    return columnIndex + rowIndex * amountRowDisplay;
  }

  public static replaceDashOrNullToEmpty(value: string) {
    return value === "-" || value === null ? "" : value;
  }

  public static returnValueOrEmptyString(value: string) {
    if (ValidateHelper.isEmptyOrNullOrUndefined(value)) {
      return "";
    }
    return value;
  }

  public static formatPhoneCode(valuePhoneNum: string, phoneCode: string) {
    if (ValidateHelper.isEmptyOrNullOrUndefined(valuePhoneNum)) {
      return "";
    }

    if (valuePhoneNum.charAt(0) === "0") {
      valuePhoneNum = valuePhoneNum.replace("0", "+" + phoneCode);
    } else if (valuePhoneNum.charAt(0) !== "+") {
      valuePhoneNum = "+" + phoneCode + valuePhoneNum;
    }

    return valuePhoneNum;
  }

  public static encryptData = (payload: any): string => {
    const encryptData = CryptoJS.AES.encrypt(payload, "ptvnpassword");
    return encryptData.toString();
  };

  public static decryptData = (payload: any): string => {
    const decryptData = CryptoJS.AES.decrypt(payload, "ptvnpassword");
    return decryptData.toString(CryptoJS.enc.Utf8);
  };

  public static encodeBase64 = (payload: string): string => {
    const bufferData = new Buffer(payload);
    return bufferData.toString("base64");
  };

  public static decodeBase64 = (payload: string): string => {
    const bufferData = new Buffer(payload, "base64");
    return bufferData.toString();
  };

  public static setLocalStorage(name: string, data: any) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  public static getLocalStorageByName(name: string) {
    const token = localStorage.getItem(name);
    return JSON.parse(token);
  }

  public static setSessionStorage(name: string, data: any) {
    sessionStorage.setItem(name, JSON.stringify(data));
  }

  public static getSessionStorageByName(name: string) {
    const token = sessionStorage.getItem(name);
    return JSON.parse(token);
  }

  public static clearLocalStorageByName(name: string) {
    localStorage.removeItem(name);
  }

  public static setCookie(cookieName: string, cookieValue: string, expireInDay?: number) {
    const d = new Date();
    d.setTime(d.getTime() + expireInDay * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    
    if (expireInDay === null) {
      document.cookie = cookieName + "=" + cookieValue + ";domain=.pantavanij.com;path=/;SameSite=None;secure";
    } else {
      document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";domain=.pantavanij.com;path=/;SameSite=None;secure";
    }
  }

  public static getCookie(cookieName: string) {
    let name = cookieName + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  public static convertToNumber(number: string) {
    return Number(number.replace(/[^0-9.-]+/g, ''));
  }

  public static convertToNumberFormat(numberValue: number, numberFormat: string = 'en-US') {
    return new Intl.NumberFormat(numberFormat).format(numberValue);
  }

  public static numberOnly(value: string) {
    return value.replace(/\D/,'');
  }

  public static replaceSpaceToDash(text: string) {
    if (text === null) {
      return '';
    }

    return text.replace(/\s+/g, '-');
  }

  public static generateQueryString(params: any): string {
    return Object.keys(params).map(key => key + '=' + params[key]).join('&');
  }
}
