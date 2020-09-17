import { IInput } from '../hooks/useForm.hook';
import ValidationModel from '../models/validation.model';
import { EValidationTypes } from '../types/validation.types';

export enum ERegisterFormInputs {
  firstName = 'firstName',
  lastName = 'lastName',
  email = 'email',
  password = 'password',
  volunteeringInfo = 'volunteeringInfo',
  volunteeringRegularly = 'volunteeringRegularly',
  termsOfService = 'termsOfService'
}

const registerForm: IInput<ERegisterFormInputs>[] = [
  {
    inputName: ERegisterFormInputs.firstName,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ERegisterFormInputs.lastName,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ERegisterFormInputs.email,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.EMAIL_FORMAT }
    ])
  },
  {
    inputName: ERegisterFormInputs.password,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MIN_CHARACTERS,
        assertion: {
          minCharacters: 8
        }
      }
    ])
  },
  {
    inputName: ERegisterFormInputs.volunteeringInfo,
    value: '1-5h/week',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  }
  ,
  {
    inputName: ERegisterFormInputs.volunteeringRegularly,
    value: 'No',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ERegisterFormInputs.termsOfService,
    value: false,
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  }
]

export default registerForm;
