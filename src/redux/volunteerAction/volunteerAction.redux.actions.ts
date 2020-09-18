import { IVolunteerAction } from '../../shared/types/aidProject.types';
import { AddVolunteerAction, EVolunteerActionReduxActions } from './volunteerAction.redux.types';

export function addVolunteerAction(action: IVolunteerAction): AddVolunteerAction {
  return {
    type: EVolunteerActionReduxActions.ADD_VOLUNTEER_ACTION,
    payload: {
      action
    }
  }
}
