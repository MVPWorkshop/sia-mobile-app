import { AuthReduxActions, EAuthActions, IAuthReduxReducerState } from './auth.redux.types';
import { Reducer } from 'redux';
import { IUser } from '../../shared/types/user.types';
import { sanitizeEmptyFields } from '../../shared/utils/common.util';

const initialState: IAuthReduxReducerState = {
  user: {
    firstName: 'Jason',
    lastName: 'Grigorsky',
    email: 'test@gmail.com',
    addressCity: 'Los Angeles',
    addressCountry: 'US',
    addressStreet: 'Wilson St. 12',
    addressPostalCode: '90002'
  },
  isVerified: false,
  isAuthenticated: true
}

const AuthReduxReducer: Reducer<IAuthReduxReducerState, AuthReduxActions> = (state = initialState, action) => {
  switch (action.type) {
    case EAuthActions.SET_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload.user
        }
      }
    }
    case EAuthActions.UPDATE_USER: {
      return {
        ...state,
        user: {
          ...state.user,
          ...(sanitizeEmptyFields(action.payload.user) as IUser)
        }
      }
    }
    case EAuthActions.TOGGLE_IS_AUTHENTICATED: {
      return {
        ...state,
        isAuthenticated: action.payload.authenticated
      }
    }
    case EAuthActions.TOGGLE_IS_VERIFIED: {
      return {
        ...state,
        isVerified: action.payload.verified
      }
    }
    default: {
      return state;
    }
  }
}

export default AuthReduxReducer;
