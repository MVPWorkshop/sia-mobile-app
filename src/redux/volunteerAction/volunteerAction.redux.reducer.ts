import {
  EVolunteerActionReduxActions,
  IVolunteerActionReduxReducerState,
  VolunteerActionReduxActions
} from './volunteerAction.redux.types';
import { Reducer } from 'redux';
import moment from 'moment';
import { Images } from '../../shared/constants/images.constants';
import { EVolunteerActionStatus } from '../../shared/types/aidProject.types';

const initialState: IVolunteerActionReduxReducerState = {
  actions: [
    {
      id: '450f4234-6e57-40af-a1c0-51bdc83823f8',
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
      startDateTimestamp: moment('01-10-2020 00:00', 'DD-MM-YYYY H:mm').unix(),
      endDateTimestamp: moment('31-12-2020 23:59', 'DD-MM-YYYY H:mm').unix(),
      organizer: 'Latvia Food Bank',
      image: Images.volunteerActionNgoAccountingImg,
      tasks: [
        'ecbb94e8-75b8-4c56-82ff-25ce3f934d23',
        'aa7d7b00-546f-4d35-a1a2-33bfa5d94893',
        '66dd2e95-9d44-4e65-a5d4-9034523b5b99'
      ],
      status: EVolunteerActionStatus.ACTIVE
    },
    {
      id: 'f32d92e5-a053-4126-ac10-a87c8c4bec6b',
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
      startDateTimestamp: moment().subtract(5, 'days').unix(),
      endDateTimestamp: moment().add(5, 'days').unix(),
      organizer: 'Columbian Children',
      image: Images.volunteerActionRecreationalImg,
      tasks: [
        'c0de4833-e033-4705-9ba5-f202ad694a15'
      ],
      status: EVolunteerActionStatus.ACTIVE
    },
    {
      id: 'aeb6890c-9132-4e1b-b2db-99ae1ca4adbe',
      name: 'Helping children with homework',
      addressCountry: 'CO',
      addressCity: 'Pasto',
      description: [
        'Our children are 7 and 12 years old, and they attend the local primary schools. Since we are not in a situation to send them to private lessons and they need additional consultations for finishing their homework, we are looking for someone who can help them during the weekends.',
        'Additionally, both of them will have final exams at the end of the month, so assistance is welcomed for that too. Unfortunately, I and my husband are not educated enough to support them with their homework and tests.',
      ].join('\n'),
      contactEmail: 'mailto:marck@col.co',
      contactPhone: '+40(246)221281',
      isRecurring: true,
      startDateTimestamp: moment('08-11-2020 00:00', 'DD-MM-YYYY H:mm').unix(),
      endDateTimestamp: moment('18-11-2020 23:59', 'DD-MM-YYYY H:mm').unix(),
      organizer: 'Columbian Children',
      image: Images.homeworkImg,
      tasks: [],
      status: EVolunteerActionStatus.CANCELLED
    }
  ]
};

const VolunteerActionReduxReducer: Reducer<IVolunteerActionReduxReducerState, VolunteerActionReduxActions> = (state= initialState, action) => {
  switch (action.type) {
    case EVolunteerActionReduxActions.ADD_VOLUNTEER_ACTION: {
      return {
        ...state,
        actions: [
          action.payload.action,
          ...state.actions,
        ]
      }
    }
    default: {
      return state;
    }
  }
}

export default VolunteerActionReduxReducer;
