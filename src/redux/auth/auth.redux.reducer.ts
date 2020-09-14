import { AuthReduxActions, EAuthActions, IAuthReduxReducerState } from './auth.redux.types';
import { Reducer } from 'redux';

const initialState: IAuthReduxReducerState = {
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
    case EAuthActions.CLEAR_USER: {
      return {
        ...state,
        user: undefined
      }
    }
    default: {
      return state;
    }
  }
}

export default AuthReduxReducer;
