import { ReduxAction } from '../redux.types';
import { IVolunteerTask } from '../../shared/types/aidProject.types';
import { AllKeysRequired, DynamicObject } from '../../shared/types/util.types';

export enum EVolunteerTaskActions {
  ADD_VOLUNTEER_TASK = 'ADD_VOLUNTEER_TASK',
  UPDATE_VOLUNTEER_TASK = 'UPDATE_VOLUNTEER_TASK'
}

export type AddVolunteerTask = ReduxAction<EVolunteerTaskActions.ADD_VOLUNTEER_TASK, {
  task: IVolunteerTask;
}>

export type UpdateVolunteerTask = ReduxAction<EVolunteerTaskActions.UPDATE_VOLUNTEER_TASK, {
  id: string;
  task: Partial<IVolunteerTask>;
}>

export type VolunteerTaskReduxActions  =
  AddVolunteerTask |
  UpdateVolunteerTask;

export interface IVolunteerTaskReduxReducerState {
  tasks: DynamicObject<IVolunteerTask, string, AllKeysRequired>
}
