
import { CommonConstant } from "../constants/commonConstant";

export class ValidateHelper {
  public static validateEmail(item: string) {
    const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(item);
  }

  public static validateEnglishOnly(value: string): boolean {
    //set Default
    let isValidFormat = false;
    if (value != undefined && value != null && value != '') {
      //Validate MinUppercase
      if (value.match("^[a-zA-Z]+$"))
        isValidFormat = true;
    }
    return isValidFormat;
  }

  public static validateAnyCharacterAndEnglishOnly(value: string): boolean {
    //set Default
    let isValidFormat = false;
    if (value != undefined && value != null && value != '') {
      if (/^[a-zA-Z0-9/,:<>!~@.#$%^&_*()+={};?()\"\'\-\]|!\\[\s]+$/.test(value))
        isValidFormat = true;
    }
    return isValidFormat;
  }

  public static validatePasswordUppercase(value: string): boolean {
    //set Default
    let isValidFormat = false;
    if (value != undefined && value != null && value != '') {
      //Validate MinUppercase
      if (/^[a-zA-Z0-9/,:<>!~@.#$%^&_*()+={};?()\"\'\-\]|!\\[]+$/.test(value))
        if (value.match("[A-Z]{" + CommonConstant.uppercaseMinNumber + ",}") && value.match("[a-z]{" + CommonConstant.uppercaseMinNumber + ",}"))
          isValidFormat = true;
    }
    return isValidFormat;
  }

  public static validatePasswordSpecialCharacter(value: string): boolean {
    //set Default
    let isValidFormat = false;
    if (value != undefined && value != null && value != '') {
      //Validate MinSpecialCharacter
      if (/[/,:<>!~@.#$%^&_*()+={};?()\-\"\'\]\[|!\\[]/.test(value))
        isValidFormat = true;
    }
    return isValidFormat;
  }

  public static validatePasswordNumber(value: string): boolean {
    //set Default
    let isValidFormat = false;
    if (value != undefined && value != null && value != '') {
      //Validate MinNumber
      if (value.match("[0-9]{" + CommonConstant.specialMinNumber + ",}"))
        isValidFormat = true;
    }
    return isValidFormat;
  }

  public static validatePasswordMinimumCharacter(value: string): boolean {
    //set Default
    let isValidFormat = false;
    if (value != undefined && value != null && value != '') {
      //Validate MinPasswordLength
      if (value.length >= CommonConstant.minimumNumber)
        isValidFormat = true;
    }
    return isValidFormat;
  }

  public static validateTaxIdThaiInvalidFormat(value: string): boolean {
    const firstTaxCode: string = value.substring(0, 1);
    const provinceTaxCode: string = value.substring(1, 3);
    const fourPosition: string = value.substring(3, 4);

    // == 0
    if (firstTaxCode !== CommonConstant.TaxCodeFirstPosition) {
      return true;
    }

    const findTaxCodeSecondThird: string[] = CommonConstant.TaxCodeSecondThirdPosition;
    if (findTaxCodeSecondThird.filter(f => f === provinceTaxCode).length === 0) {
      return true;
    }

    // == 1
    if (fourPosition === CommonConstant.TaxCodeNotPositionFour) {
      return true;
    }

    return false;
  }

  public static isNumber(item: any): boolean {
    return !isNaN(item);
  }

  public static isPhoneNumber(item: any): boolean {
    if (ValidateHelper.isEmptyOrNullOrSpace(item)) {
      return true;
    }
    if (!/[0-9-+]+$/.test(item)) {
      return false;
    }

    if (item.length <= 4 && !item.includes('+')
      || item.length <= 5 && item.includes('+')) {
      return false;
    }

    return true;
  }

  public static isEmptyOrNullOrSpace(item: string): boolean {
    if (item === undefined)
      return false;
    else
      return (item === null || item.toString() === '' || item.toString().trim() === '') ? true : false;
  }



  public static isEmptyOrNull(item: string): boolean {
    if (item === undefined)
      return false;
    else
      return (item === null || item.toString() === '') ? true : false;
  }

  public static isEmptyOrNullOrUndefined(item: string): boolean {
    return (item === undefined || item === null || item.toString().trim() === '') ? true : false;
  }

  public static isObjectEmptyOrNullOrUndefined(item: object): boolean {

    return (item === undefined
      || item === null
      || Object.keys(item).length === 0
      || JSON.stringify(item) === JSON.stringify({}))
      ? true : false;
  }

  public static isFunctionNullOrUndefined(item: any): boolean {

    return (item === undefined || item === null) ? true : false;
  }

  public static isValidFileExtension(fileName: string, limitedFileType: string[]): boolean {

    const fileExtExtractor = /(?:\.([^.]+))?$/;

    const ext: string = fileExtExtractor.exec(fileName)[0]
    return limitedFileType.findIndex(item => item.toLowerCase() === ext.toLowerCase()) !== -1;

  }

}

