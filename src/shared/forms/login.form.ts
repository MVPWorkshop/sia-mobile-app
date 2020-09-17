import { IInput } from '../hooks/useForm.hook';
import ValidationModel from '../models/validation.model';
import { EValidationTypes } from '../types/validation.types';

export enum ELoginFormInputs {
  email = 'email',
  password = 'password'
}

const loginForm: IInput<ELoginFormInputs>[] = [
  {
    inputName: ELoginFormInputs.email,
    value: '',
    validation: new ValidationModel([
      {
        type: EValidationTypes.REQUIRED
      },
      {
        type:  EValidationTypes.EMAIL_FORMAT
      }
    ])
  },
  {
    inputName: ELoginFormInputs.password,
    value: '',
    validation: new ValidationModel([
      {
        type: EValidationTypes.REQUIRED
      },
      {
        type: EValidationTypes.MIN_CHARACTERS,
        assertion: {
          minCharacters: 8
        }
      }
    ])
  }
]

export default loginForm;
