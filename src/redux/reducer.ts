import { combineReducers } from 'redux';
import AuthReducer from './auth/auth.redux.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer
});

export default rootReducer;
