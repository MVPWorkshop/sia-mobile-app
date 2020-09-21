import {
  EVolunteerTaskActions,
  IVolunteerTaskReduxReducerState,
  VolunteerTaskReduxActions
} from './volunteerTask.redux.types';
import { Reducer } from 'redux';
import moment from 'moment';
import { EVolunteerTaskStatus } from '../../shared/types/aidProject.types';

const initialState: IVolunteerTaskReduxReducerState = {
  tasks: {
    'ecbb94e8-75b8-4c56-82ff-25ce3f934d23': {
      id: 'ecbb94e8-75b8-4c56-82ff-25ce3f934d23',
      actionId: '450f4234-6e57-40af-a1c0-51bdc83823f8',
      addressNumber: 'Lubānas iela 82',
      startDateTimestamp: moment('21-10-2020 00:00', 'DD-MM-YYYY H:mm').unix(),
      endDateTimestamp: moment('28-10-2020 23:59', 'DD-MM-YYYY H:mm').unix(),
      durationMinutes: 120,
      description: [
        'We are flexibly, and willing to schedule a meeting whenever it suits you between October 21st and 28th.',
        '',
        'Thank you for putting your skills to good use and helping our NGO.'
      ].join('\n'),
      name: 'October payroll tax report',
      requirements: 'Specific requirements for this task.',
      status: EVolunteerTaskStatus.APPLIED,
      updates: []
    },
    'aa7d7b00-546f-4d35-a1a2-33bfa5d94893': {
      id: 'aa7d7b00-546f-4d35-a1a2-33bfa5d94893',
      actionId: '450f4234-6e57-40af-a1c0-51bdc83823f8',
      addressNumber: 'Lubānas iela 82',
      startDateTimestamp: moment('21-11-2020 00:00', 'DD-MM-YYYY H:mm').unix(),
      endDateTimestamp: moment('28-11-2020 23:59', 'DD-MM-YYYY H:mm').unix(),
      durationMinutes: 120,
      description: [
        'We are flexibly, and willing to schedule a meeting whenever it suits you between November 21st and 28th.',
        '',
        'Thank you for putting your skills to good use and helping our NGO.'
      ].join('\n'),
      name: 'November payroll tax report',
      requirements: 'Specific requirements for this task.',
      status: EVolunteerTaskStatus.NEUTRAL,
      updates: []
    },
    '66dd2e95-9d44-4e65-a5d4-9034523b5b99': {
      id: '66dd2e95-9d44-4e65-a5d4-9034523b5b99',
      actionId: '450f4234-6e57-40af-a1c0-51bdc83823f8',
      addressNumber: 'Lubānas iela 82',
      startDateTimestamp: moment('21-12-2020 00:00', 'DD-MM-YYYY H:mm').unix(),
      endDateTimestamp: moment('28-12-2020 23:59', 'DD-MM-YYYY H:mm').unix(),
      durationMinutes: 120,
      description: [
        'We are flexibly, and willing to schedule a meeting whenever it suits you between December 21st and 28th.',
        '',
        'Thank you for putting your skills to good use and helping our NGO.'
      ].join('\n'),
      name: 'December payroll tax report',
      requirements: 'Specific requirements for this task.',
      status: EVolunteerTaskStatus.CANCELLED,
      updates: []
    },
    'c0de4833-e033-4705-9ba5-f202ad694a15': {
      id: 'c0de4833-e033-4705-9ba5-f202ad694a15',
      actionId: 'f32d92e5-a053-4126-ac10-a87c8c4bec6b',
      addressNumber: 'Carrera 34',
      startDateTimestamp: moment('01-10-2020 00:00', 'DD-MM-YYYY H:mm').unix(),
      endDateTimestamp: moment('07-10-2020 23:59', 'DD-MM-YYYY H:mm').unix(),
      durationMinutes: 120,
      description: [
        'We are looking for someone who can organize and lead recreational activities such as arts, yoga, crafts, sports, and others. We will be waiting for you at the front door, from where we will go to our gym. We will be given a health & safety and program orientation, and you will have time to meet the children before you start with planned activities.',
        '',
        'We are flexible and any time during the week suits us.'
      ].join('\n'),
      name: 'Recreational activities - First week of Octobers',
      requirements: 'Specific requirements for this task.',
      status: EVolunteerTaskStatus.NEUTRAL,
      updates: []
    },
  }
}

const VolunteerTaskReduxReducer: Reducer<IVolunteerTaskReduxReducerState, VolunteerTaskReduxActions> = (state = initialState, action) => {
  switch (action.type) {
    case EVolunteerTaskActions.ADD_VOLUNTEER_TASK: {
      const { task } = action.payload;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [task.id]: task
        }
      }
    }
    case EVolunteerTaskActions.UPDATE_VOLUNTEER_TASK: {
      const { task, id } = action.payload;

      return {
        ...state,
        tasks: {
          ...state.tasks,
          [id]: {
            ...state.tasks[id],
            ...task
          }
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default VolunteerTaskReduxReducer;