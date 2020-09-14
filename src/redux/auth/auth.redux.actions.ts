import { ClearUser, EAuthActions, SetUser } from './auth.redux.types';
import { IUser } from '../../shared/types/user.types';

export function setUser(user: IUser): SetUser {
  return {
    type: EAuthActions.SET_USER,
    payload: {
      user
    }
  }
}

export function clearUser(): ClearUser {
  return {
    type: EAuthActions.CLEAR_USER,
    payload: {}
  }
}
