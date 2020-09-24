import { IInput } from '../hooks/useForm.hook';
import ValidationModel from '../models/validation.model';
import { EValidationTypes } from '../types/validation.types';
import moment from 'moment';

export enum ECreateTaskInputs {
  name = 'name',
  description = 'description',
  startDateMonth = 'startDateMonth',
  startDateDay = 'startDateDay',
  startDateYear = 'startDateYear',
  endDateMonth = 'endDateMonth',
  endDateDay = 'endDateDay',
  endDateYear = 'endDateYear',
  timeHours = 'timeHours',
  timeMinutes = 'timeMinutes',
  durationHours = 'durationHours',
  durationMinutes = 'durationMinutes',
  addressNumber = 'addressNumber',
  requirements = 'requirements',
  rewardAmount = 'rewardAmount'
}

const createTaskForm: IInput<ECreateTaskInputs>[] = [
  {
    inputName: ECreateTaskInputs.name,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.description,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.startDateDay,
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
    inputName: ECreateTaskInputs.startDateMonth,
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
    inputName: ECreateTaskInputs.startDateYear,
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
    inputName: ECreateTaskInputs.endDateDay,
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
    inputName: ECreateTaskInputs.endDateMonth,
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
    inputName: ECreateTaskInputs.endDateYear,
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
    inputName: ECreateTaskInputs.timeHours,
    value: '8',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.timeMinutes,
    value: '30',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.durationHours,
    value: '1',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.durationMinutes,
    value: '30',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.addressNumber,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.requirements,
    value: '',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED }
    ])
  },
  {
    inputName: ECreateTaskInputs.rewardAmount,
    value: '0',
    validation: new ValidationModel([
      { type: EValidationTypes.REQUIRED },
      { type: EValidationTypes.ONLY_NUMBERS }
    ])
  }
]

export default createTaskForm;
