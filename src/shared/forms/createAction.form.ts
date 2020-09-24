import { IInput } from '../hooks/useForm.hook';
import ValidationModel from '../models/validation.model';
import { EValidationTypes } from '../types/validation.types';
import moment from 'moment';
import { countries } from '../constants/country.constants';

export enum ECreateActionInputs {
  name = 'name',
  description = 'description',
  startDateMonth = 'startDateMonth',
  startDateDay = 'startDateDay',
  startDateYear = 'startDateYear',
  endDateMonth = 'endDateMonth',
  endDateDay = 'endDateDay',
  endDateYear = 'endDateYear',
  recurringAction = 'recurringAction',
  addressCountry = 'addressCountry',
  addressCity = 'addressCity',
  email = 'email',
  phone = 'phone',
}

const createActionForm: IInput<ECreateActionInputs>[] = [
  {
    inputName: ECreateActionInputs.name,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateActionInputs.description,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateActionInputs.startDateDay,
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
    inputName: ECreateActionInputs.startDateMonth,
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
    inputName: ECreateActionInputs.startDateYear,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MIN_VALUE,
        assertion: {
          minValue: moment().year()
        }
      }
    ])
  },
  {
    inputName: ECreateActionInputs.endDateDay,
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
    inputName: ECreateActionInputs.endDateMonth,
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
    inputName: ECreateActionInputs.endDateYear,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MIN_VALUE,
        assertion: {
          minValue: moment().year()
        }
      }
    ])
  },
  {
    inputName: ECreateActionInputs.recurringAction,
    value: 'Yes',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateActionInputs.addressCountry,
    value: countries[0].value,
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateActionInputs.addressCity,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateActionInputs.phone,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.ONLY_NUMBERS }
    ])
  },
  {
    inputName: ECreateActionInputs.email,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.EMAIL_FORMAT }
    ])
  },
]

export default createActionForm;
