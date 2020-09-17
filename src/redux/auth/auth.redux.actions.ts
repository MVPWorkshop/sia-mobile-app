import { EAuthActions, SetUser, ToggleIsAuthenticated, ToggleIsVerified, UpdateUser } from './auth.redux.types';
import { IUser } from '../../shared/types/user.types';

export function setUser(user: IUser): SetUser {
  return {
    type: EAuthActions.SET_USER,
    payload: {
      user
    }
  }
}

export function updateUser(user: Partial<IUser>): UpdateUser {
  return {
    type: EAuthActions.UPDATE_USER,
    payload: {
      user
    }
  }
}

export function toggleIsAuthenticated(authenticated: boolean): ToggleIsAuthenticated {
  return {
    type: EAuthActions.TOGGLE_IS_AUTHENTICATED,
    payload: {
      authenticated
    }
  }
}

export function toggleIsVerified(verified: boolean): ToggleIsVerified {
  return {
    type: EAuthActions.TOGGLE_IS_VERIFIED,
    payload: {
      verified
    }
  }
}
