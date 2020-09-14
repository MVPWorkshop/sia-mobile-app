import { ReduxAction } from '../redux.types';
import { IUser } from '../../shared/types/user.types';

export enum EAuthActions{
  SET_USER = 'SET_USER',
  CLEAR_USER = 'CLEAR_USER'
}

export type SetUser = ReduxAction<EAuthActions.SET_USER, {
  user: IUser;
}>;

export type ClearUser = ReduxAction<EAuthActions.CLEAR_USER, {}>

export type AuthReduxActions =
  SetUser |
  ClearUser;

export interface IAuthReduxReducerState {
  user?: IUser;
}
