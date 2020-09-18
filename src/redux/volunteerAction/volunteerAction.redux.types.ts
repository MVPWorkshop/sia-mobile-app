import { ReduxAction } from '../redux.types';
import { IVolunteerAction } from '../../shared/types/aidProject.types';

export enum EVolunteerActionReduxActions {
  ADD_VOLUNTEER_ACTION = 'ADD_VOLUNTEER_ACTION',
}

export type AddVolunteerAction = ReduxAction<EVolunteerActionReduxActions.ADD_VOLUNTEER_ACTION, {
  action: IVolunteerAction;
}>

export type VolunteerActionReduxActions =
  AddVolunteerAction

export interface IVolunteerActionReduxReducerState {
  actions: IVolunteerAction[];
}
