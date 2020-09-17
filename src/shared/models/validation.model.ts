import BigNumber from 'bignumber.js';
import { EValidationTypes, IValidation } from '../types/validation.types';
import moment from 'moment';
import stringFormat from 'string-format';

export const defaultValidationError: {[K in EValidationTypes]: string} = {
  [EValidationTypes.REQUIRED]: 'This field must be completed.',
  [EValidationTypes.ONLY_LETTERS]: 'Please enter only letters.',
  [EValidationTypes.ONLY_NUMBERS]: 'Please enter only numbers.',
  [EValidationTypes.NO_SPECIAL_CHARACTERS]: 'Special characters are not allowed!',
  [EValidationTypes.MAX_CHARACTERS]: `Maximum allowed characters ({maxCharacters} exceeded.`,
  [EValidationTypes.MIN_CHARACTERS]: 'Minimum required characters is {minCharacters}.',
  [EValidationTypes.MAX_VALUE]: 'Max allowed value is {maxValue}.',
  [EValidationTypes.MIN_VALUE]: 'Min allowed value is {minValue}.',
  [EValidationTypes.EMAIL_FORMAT]: 'Invalid email format.',
  [EValidationTypes.VALID_DATE_FORMAT]: 'Invalid date format or range.',
  [EValidationTypes.MATCH_REGEXP]: 'Must match {regExp}',
  [EValidationTypes.MAX_ITEMS]: 'You can\'t add more than {maxItems} items',
  [EValidationTypes.MIN_ITEMS]: 'You can\'t add less than {minItems} items',
  [EValidationTypes.ENUM]: 'Must be one of {enums}',
  [EValidationTypes.FORMAT]: 'Should be of format {format}',
  [EValidationTypes.IS_URI]: 'Not a valid URI.',
  [EValidationTypes.IS_URL]: 'Not a valid URL. (https://www.example.com/)'
};

export const commonPatterns = {
  onlyLetters: '^\\D+$',
  onlyNumbers: '^-?\\d*\\.{0,1}\\d+$',
  noSpecialCharacters: '[^A-Za-z0-9 ]+',
  validEmailFormat: '^[a-z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$',
  // Complex as in regex is more complex and bullet proof, but not used in backend so we use the one bellow
  complexUrl: '^(?:(?:http[s\u017F]?|ftp):\\/\\/)(?:(?:[\\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\\.[0-9]{1,3}){3})(?!127(?:\\.[0-9]{1,3}){3})(?!169\\.254(?:\\.[0-9]{1,3}){2})(?!192\\.168(?:\\.[0-9]{1,3}){2})(?!172\\.(?:1[6-9]|2[0-9]|3[01])(?:\\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\\/(?:[\\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$',
  url: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/',
  uri: '^(?:[a-z][a-z0-9+\\-.]*:)(?:\\/?\\/(?:(?:[a-z0-9\\-._~!$&\'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\\.[a-z0-9\\-._~!$&\'()*+,;=:]+)\\]|(?:(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d\\d?)|(?:[a-z0-9\\-._~!$&\'()*+,;=]|%[0-9a-f]{2})*)(?::\\d*)?(?:\\/(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})*)*|\\/(?:(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})+(?:\\/(?:[a-z0-9\\-._~!$&\'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\\?(?:[a-z0-9\\-._~!$&\'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\\-._~!$&\'()*+,;=:@/?]|%[0-9a-f]{2})*)?$',
};

class ValidationModel {

  /**
   * @description is false for [], '', false, undefined, null, NaN
   */
  public static hasValue = (value: any): boolean => {
    if (typeof value === 'number' && !isNaN(value)) {
      return true;
    }

    if (Array.isArray(value)) {
      return value.length > 0;
    }

    return !!value;
  }

  // All letters are truthy(special characters too)
  public static hasOnlyLetters = (value: any): boolean => {
    return new RegExp(commonPatterns.onlyLetters).test(value);
  }

  // Positive and negative values are truthy
  public static hasOnlyNumbers = (value: any): boolean => {
    return new RegExp(commonPatterns.onlyNumbers).test(value);
  }

  public static noSpecialCharacters = (value: any): boolean => {
    return !new RegExp(commonPatterns.noSpecialCharacters).test(value);
  }

  // If string has less or equal number of characters, it will be truthy
  public static lessThanMaxCharacters = (value: string, assertion: number): boolean => {
    return new BigNumber(value.length).lte(assertion);
  }

  // If string has more or equal than min number of characters, it will be truthy
  public static moreThanMinCharacters = (value: string, assertion: number): boolean => {
    return new BigNumber(value.length).gte(assertion);
  }

  // If value is greater or equal than min value, it will be truthy
  public static moreThanMinValue = (value: string, assertion: number): boolean => {
    return new BigNumber(value).gte(assertion);
  }

  // if value is less than max value, it will be truthy
  public static lessThanMaxValue = (value: string, assertion: number): boolean => {
    return new BigNumber(value).lte(assertion);
  }

  public static validEmailFormat = (value: string): boolean => {
    // Basic email regex validation, required structure _@_._
    return new RegExp(commonPatterns.validEmailFormat).test(value);
  }

  public static validDateFormat = (value: string): boolean => {
    return moment(value).isValid();
  }

  public static matchRegExp = (value: string, assertion: string): boolean => {
    return new RegExp(assertion).test(value);
  }

  public static lessThanMaxItems = (value: number, assertion: number) => {
    return value <= assertion;
  }

  public static moreThanMinItems = (value: number, assertion: number) => {
    return value >= assertion;
  }

  public static matchesEnum = (value: number | string, assertion: string) => {
    return assertion.split(' ').includes(value.toString());
  }

  public static isURI = (value: string) => {
    const NOT_URI_FRAGMENT = '\/|:';

    return new RegExp(NOT_URI_FRAGMENT).test(value) && new RegExp(commonPatterns.uri).test(value);
  }

  public static isURL = (value: string) => {
    // The first is used for compatibility reasons with BE, the latter for better protection
    return new RegExp(commonPatterns.url).test(value) && RegExp(commonPatterns.complexUrl).test(value);
  }

  private _listOfValidations: IValidation[] = [];
  get listOfValidations(): IValidation[] {
    return this._listOfValidations;
  }

  public removeValidator(type: EValidationTypes) {
    this._listOfValidations = this._listOfValidations.filter(validation => validation.type !== type);
  }

  constructor(validations: IValidation[]) {
    for (const validation of validations) {
      if (!validation.error) {
        const message = defaultValidationError[validation.type];
        const values = validation.assertion;

        validation.error = {
          // @ts-ignore
          formattedMessage: stringFormat(message, values),
          message,
          values
        };
      }

      this._listOfValidations.push(validation);
    }
  }

  public static validate = (value: any, validation: IValidation): boolean => {
    switch (validation.type) {
      case EValidationTypes.REQUIRED: {
        return ValidationModel.hasValue(value);
      }
      case EValidationTypes.ONLY_LETTERS: {
        return ValidationModel.hasOnlyLetters(value);
      }
      case EValidationTypes.ONLY_NUMBERS: {
        return ValidationModel.hasOnlyNumbers(value);
      }
      case EValidationTypes.NO_SPECIAL_CHARACTERS: {
        return ValidationModel.noSpecialCharacters(value);
      }
      case EValidationTypes.MAX_CHARACTERS: {
        return ValidationModel.lessThanMaxCharacters(value, validation.assertion.maxCharacters);
      }
      case EValidationTypes.MIN_CHARACTERS: {
        return ValidationModel.moreThanMinCharacters(value, validation.assertion.minCharacters);
      }
      case EValidationTypes.MAX_VALUE: {
        return ValidationModel.lessThanMaxValue(value, validation.assertion.maxValue);
      }
      case EValidationTypes.MIN_VALUE: {
        return ValidationModel.moreThanMinValue(value, validation.assertion.minValue);
      }
      case EValidationTypes.EMAIL_FORMAT: {
        return ValidationModel.validEmailFormat(value);
      }
      case EValidationTypes.VALID_DATE_FORMAT:{
        return ValidationModel.validDateFormat(value);
      }
      case EValidationTypes.MATCH_REGEXP: {
        return ValidationModel.matchRegExp(value, validation.assertion.regExp);
      }
      case EValidationTypes.MAX_ITEMS: {
        return ValidationModel.lessThanMaxItems(value.length, validation.assertion.maxItems);
      }
      case EValidationTypes.MIN_ITEMS: {
        return ValidationModel.moreThanMinItems(value.length, validation.assertion.minItems);
      }
      case EValidationTypes.ENUM: {
        return ValidationModel.matchesEnum(value, validation.assertion.enums);
      }
      case EValidationTypes.IS_URI: {
        return ValidationModel.isURI(value);
      }
      case EValidationTypes.IS_URL: {
        return ValidationModel.isURL(value);
      }
      default: {
        return false;
      }
    }
  }
}

export default ValidationModel;
