export enum EValidationTypes {
  REQUIRED = 'REQUIRED',
  ONLY_LETTERS = 'ONLY_LETTERS',
  ONLY_NUMBERS = 'ONLY_NUMBERS',
  MAX_CHARACTERS = 'MAX_CHARACTERS',
  MIN_CHARACTERS = 'MIN_CHARACTERS',
  MAX_VALUE = 'MAX_VALUE',
  MIN_VALUE = 'MIN_VALUE',
  NO_SPECIAL_CHARACTERS = 'NO_SPECIAL_CHARACTERS',
  VALID_DATE_FORMAT = 'VALID_DATE_FORMAT',
  EMAIL_FORMAT = 'EMAIL_FORMAT',
  MATCH_REGEXP = 'MATCH_REGEXP',
  MAX_ITEMS = 'MAX_ITEMS',
  MIN_ITEMS = 'MIN_ITEMS',
  ENUM = 'ENUM',
  FORMAT = 'FORMAT',
  IS_URI = 'IS_URI',
  IS_URL = 'IS_URL'
}

export type ValidationError<T = object> = {
  message: string, // The message string, dynamic variables are marked with curly brackets
  values?: T // Values used for dynamic variables
  formattedMessage: string
};

interface IBaseValidationField<T extends EValidationTypes> {
  error?: ValidationError;
  type: T;
  manualValidation?: boolean; // If set to true, form validator won't trigger this validation and it has to be triggered manually
}

interface IRequired extends IBaseValidationField<EValidationTypes.REQUIRED> {
  assertion?: object;
}

interface IOnlyLetters extends IBaseValidationField<EValidationTypes.ONLY_LETTERS> {
  assertion?: object;
}

interface IOnlyNumbers extends IBaseValidationField<EValidationTypes.ONLY_NUMBERS> {
  assertion?: object;
}

interface IMaxCharacters extends IBaseValidationField<EValidationTypes.MAX_CHARACTERS> {
  assertion: {
    maxCharacters: number
  };
}

interface IMinCharacters extends IBaseValidationField<EValidationTypes.MIN_CHARACTERS> {
  assertion: {
    minCharacters: number
  };
}

interface IMaxValue extends IBaseValidationField<EValidationTypes.MAX_VALUE> {
  assertion: {
    maxValue: number
  };
}

interface IMinValue extends IBaseValidationField<EValidationTypes.MIN_VALUE> {
  assertion: {
    minValue: number
  };
}

interface IOnlyNumbers extends IBaseValidationField<EValidationTypes.ONLY_NUMBERS> {
  assertion?: object;
}

interface INoSpecialCharacters extends IBaseValidationField<EValidationTypes.NO_SPECIAL_CHARACTERS> {
  assertion?: object;
}

interface IValidDateFormat extends IBaseValidationField<EValidationTypes.VALID_DATE_FORMAT> {
  assertion?: object;
}

interface IEmail extends IBaseValidationField<EValidationTypes.EMAIL_FORMAT> {
  assertion?: object;
}

interface IMatchRegExp extends IBaseValidationField<EValidationTypes.MATCH_REGEXP> {
  assertion: {
    regExp: string;
  };
}

interface IMaxItems extends IBaseValidationField<EValidationTypes.MAX_ITEMS>{
  assertion: {
    maxItems: number;
  };
}

interface IMinItems extends IBaseValidationField<EValidationTypes.MIN_ITEMS>{
  assertion: {
    minItems: number;
  };
}

interface IEnum extends IBaseValidationField<EValidationTypes.ENUM>{
  assertion: { // String representation of enums [a, b, c] => 'a b c'
    enums: string;
  };
}

interface IFormat extends IBaseValidationField<EValidationTypes.FORMAT>{
  assertion: {
    format: string;
  };
}

interface IUriFormat extends IBaseValidationField<EValidationTypes.IS_URI> {
  assertion?: object;
}

interface IUrlFormat extends IBaseValidationField<EValidationTypes.IS_URL> {
  assertion?: object;
}

export type IValidation =
  IRequired |
  IOnlyLetters |
  IOnlyNumbers |
  IMaxCharacters |
  IMinCharacters |
  IMaxValue |
  IMinValue |
  INoSpecialCharacters |
  IValidDateFormat |
  IEmail |
  IMatchRegExp |
  IMaxItems |
  IMinItems |
  IEnum |
  IFormat |
  IUriFormat |
  IUrlFormat;
