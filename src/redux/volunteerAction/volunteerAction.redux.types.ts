import { ReduxAction } from '../redux.types';
import { IVolunteerAction } from '../../shared/types/aidProject.types';

export enum EVolunteerActionReduxActions {
  ADD_VOLUNTEER_ACTION = 'ADD_VOLUNTEER_ACTION',
  UPDATE_VOLUNTEER_ACTION = 'UPDATE_ACTION'
}

export type AddVolunteerAction = ReduxAction<EVolunteerActionReduxActions.ADD_VOLUNTEER_ACTION, {
  action: IVolunteerAction;
}>

export type UpdateVolunteerAction = ReduxAction<EVolunteerActionReduxActions.UPDATE_VOLUNTEER_ACTION, {
  volunteerActionId: string;
  volunteerAction: Partial<IVolunteerAction>;
}>

export type VolunteerActionReduxActions =
  AddVolunteerAction |
  UpdateVolunteerAction;

export interface IVolunteerActionReduxReducerState {
  actions: IVolunteerAction[];
}
