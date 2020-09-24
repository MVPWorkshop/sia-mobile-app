import { IVolunteerAction } from '../../shared/types/aidProject.types';
import { AddVolunteerAction, EVolunteerActionReduxActions, UpdateVolunteerAction } from './volunteerAction.redux.types';

export function addVolunteerAction(action: IVolunteerAction): AddVolunteerAction {
  return {
    type: EVolunteerActionReduxActions.ADD_VOLUNTEER_ACTION,
    payload: {
      action
    }
  }
}

export function updateVolunteerAction(actionId: string, action: Partial<IVolunteerAction>): UpdateVolunteerAction {
  return {
    type: EVolunteerActionReduxActions.UPDATE_VOLUNTEER_ACTION,
    payload: {
      volunteerAction: action,
      volunteerActionId: actionId
    }
  }
}
