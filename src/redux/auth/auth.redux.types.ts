import { ReduxAction } from '../redux.types';
import { IUser } from '../../shared/types/user.types';

export enum EAuthActions{
  SET_USER = 'SET_USER',
  UPDATE_USER = 'UPDATE_USER',
  TOGGLE_IS_AUTHENTICATED = 'TOGGLE_IS_AUTHENTICATED',
  TOGGLE_IS_VERIFIED = 'TOGGLE_IS_VERIFIED'
}

export type SetUser = ReduxAction<EAuthActions.SET_USER, {
  user: IUser;
}>;

export type UpdateUser = ReduxAction<EAuthActions.UPDATE_USER, {
  user: Partial<IUser>;
}>

export type ToggleIsAuthenticated = ReduxAction<EAuthActions.TOGGLE_IS_AUTHENTICATED, {
  authenticated: boolean;
}>

export type ToggleIsVerified = ReduxAction<EAuthActions.TOGGLE_IS_VERIFIED, {
  verified: boolean;
}>

export type AuthReduxActions =
  SetUser |
  UpdateUser |
  ToggleIsAuthenticated |
  ToggleIsVerified;

export interface IAuthReduxReducerState {
  user?: IUser;
  isVerified: boolean;
  isAuthenticated: boolean;
}
