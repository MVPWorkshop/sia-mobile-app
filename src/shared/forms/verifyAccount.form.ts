import { IInput } from '../hooks/useForm.hook';
import ValidationModel from '../models/validation.model';
import { EValidationTypes } from '../types/validation.types';
import moment from 'moment';
import { EDocumentType } from '../types/user.types';

export enum EVerifyAccountFormInputs {
  addressCountry = 'addressCountry',
  addressCity = 'addressCity',
  addressPostalCode = 'addressPostalCode',
  addressStreet = 'addressStreet',
  profession = 'profession',
  phoneNumber = 'phoneNumber',
  birthDay = 'birthDay',
  birthMonth = 'birthMonth',
  birthYear = 'birthYear',
  documentType = 'documentType'
}

const verifyAccountForm: IInput<EVerifyAccountFormInputs>[] = [
  {
    inputName: EVerifyAccountFormInputs.addressCountry,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.addressCity,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.addressPostalCode,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.addressStreet,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.profession,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.phoneNumber,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.birthDay,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MIN_VALUE,
        assertion: {
          minValue: 1
        }
      },
      {
        type: EValidationTypes.MAX_VALUE,
        assertion: {
          maxValue: 31
        }
      }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.birthMonth,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MIN_VALUE,
        assertion: {
          minValue: 1
        }
      },
      {
        type: EValidationTypes.MAX_VALUE,
        assertion: {
          maxValue: 12
        }
      }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.birthYear,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MIN_VALUE,
        assertion: {
          minValue: 1900
        }
      },
      {
        type: EValidationTypes.MAX_VALUE,
        assertion: {
          maxValue: moment().year() - 1
        }
      }
    ])
  },
  {
    inputName: EVerifyAccountFormInputs.documentType,
    value: EDocumentType.ID,
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  }
]

export default verifyAccountForm;
