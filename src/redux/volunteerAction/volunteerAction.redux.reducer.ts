import {
  EVolunteerActionReduxActions,
  IVolunteerActionReduxReducerState,
  VolunteerActionReduxActions
} from './volunteerAction.redux.types';
import { Reducer } from 'redux';
import moment from 'moment';
import { Images } from '../../shared/constants/images.constants';

const initialState: IVolunteerActionReduxReducerState = {
  actions: [
    {
      name: 'Help our NGO with accounting operations',
      addressCountry: 'LV',
      addressCity: 'Riga',
      description: [
        'We are a small local NGO that needs an assistant in the accounting operations, more precise with filing payroll tax reports.',
        ' ',
        'We are looking for someone with an accounting background or similar experience to help us at the end of each month.'
      ].join('\n'),
      contactEmail: 'marck@col.co',
      contactPhone: '+371(67)381087',
      isRecurring: true,
      startDateTimestamp: moment().subtract(5, 'days').unix(),
      endDateTimestamp: moment().add(5, 'days').unix(),
      organizer: 'Latvia Food Bank',
      image: Images.volunteerActionNgoAccountingImg,
      tasks: ['1','2','3']
    },
    {
      name: 'Recreational activities for our children',
      addressCountry: 'CO',
      addressCity: 'Pasto',
      description: [
        'Organize and lead 2 hours of recreational activities for our children. Special skills are not required, everything we need is goodwill and desire to help others. Some of the activities that can be organized are arts, yoga, crafts, sports anything that you are comfortable with.',
        ' ',
        'The children at the projects we work with require a lot of care, attention, and most importantly, companionship.',
        'There are about 50 Children attending our program, their families come from poor or broken marriages. Some of these children are orphans and taken care of by relatives.'
      ].join('\n'),
      contactEmail: 'dan.saren@cc.co',
      contactPhone: '+40(246)221281',
      isRecurring: true,
      startDateTimestamp: moment().subtract(2, 'days').unix(),
      endDateTimestamp: moment().add(25, 'days').unix(),
      organizer: 'Columbian Children',
      image: Images.volunteerActionRecreationalImg,
      tasks: ['1','2']
    }
  ]
};

const VolunteerActionReduxReducer: Reducer<IVolunteerActionReduxReducerState, VolunteerActionReduxActions> = (state= initialState, action) => {
  switch (action.type) {
    case EVolunteerActionReduxActions.ADD_VOLUNTEER_ACTION: {
      return {
        ...state,
        actions: [
          ...state.actions,
          action.payload.action
        ]
      }
    }
    default: {
      return state;
    }
  }
}

export default VolunteerActionReduxReducer;
