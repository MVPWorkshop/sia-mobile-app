import { combineReducers } from 'redux';
import AuthReducer from './auth/auth.redux.reducer';
import VolunteerActionReducer from './volunteerAction/volunteerAction.redux.reducer';
import VolunteerTaskReducer from './volunteerTask/volunteerTask.redux.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  volunteerAction: VolunteerActionReducer,
  volunteerTask: VolunteerTaskReducer
});

export default rootReducer;
