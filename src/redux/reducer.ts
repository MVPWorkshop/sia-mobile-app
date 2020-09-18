import { combineReducers } from 'redux';
import AuthReducer from './auth/auth.redux.reducer';
import VolunteerActionReducer from './volunteerAction/volunteerAction.redux.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  volunteerAction: VolunteerActionReducer
});

export default rootReducer;
