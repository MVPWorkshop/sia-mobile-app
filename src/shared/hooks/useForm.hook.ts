import ValidationModel from '../models/validation.model';
import { useEffect, useState } from 'react';
import { AllKeysRequired, DynamicObject } from '../types/util.types';
import { arrayToObjectsByKey, keys } from '../utils/common.util';
import { ValidationError } from '../types/validation.types';

export interface IInput<Keys = string> {
  inputName: Keys;
  value: any;
  validation: ValidationModel;
  error?: ValidationError;
}

const useForm = <Keys extends string = string>(inputs: IInput<Keys>[]) => {
  const [formState, setFormState] = useState<DynamicObject<IInput, Keys, AllKeysRequired>>(
    arrayToObjectsByKey(inputs, 'inputName') as unknown as DynamicObject<IInput, Keys, AllKeysRequired>
  );
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  const resetForm = () => {
    setFormState(
      arrayToObjectsByKey(inputs, 'inputName') as unknown as DynamicObject<IInput, Keys, AllKeysRequired>
    )
  }

  const updateInput = (data: {name: string, value: any}) => {
    const {name, value} = data;

    setFormState(prevState => {
     const input = prevState[name as Keys] as IInput;

     if (input) {
       const error = validateInput({...input, value});

       return {
         ...prevState,
         [input.inputName]: {
           ...input,
           value,
           error
         }
       }
     } else {
       return prevState;
     }
    })
  }

  const validateInput = (input: IInput) => {
    let error: ValidationError | undefined;

    for (let i = 0; i < input.validation.listOfValidations.length; i++) {
      const validation = input.validation.listOfValidations[i];

      const isValid = ValidationModel.validate(input.value, validation);
      if (!isValid) {
        error = validation.error!;
        break;
      }
    }

    return error;
  }

  useEffect(() => {
    let areInputsValid = true;

    keys(formState).forEach(inputName => {
      if (!!validateInput(formState[inputName])) {
        areInputsValid = false;
      }
    })

    setIsFormValid(areInputsValid);
  }, [formState])

  return {
    updateInput,
    isFormValid,
    formState,
    resetForm
  }
}

export default useForm;
