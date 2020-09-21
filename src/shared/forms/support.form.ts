import { IInput } from '../hooks/useForm.hook';
import ValidationModel from '../models/validation.model';
import { EValidationTypes } from '../types/validation.types';

export enum ESupportFormInputs {
  message = 'message'
}

const supportForm: IInput<ESupportFormInputs>[] = [
  {
    inputName: ESupportFormInputs.message,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      {
        type: EValidationTypes.MAX_CHARACTERS,
        assertion: {
          maxCharacters: 200
        }
      }
    ])
  }
]

export default supportForm;
