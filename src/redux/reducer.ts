import { combineReducers } from 'redux';
import AuthReducer from './auth/auth.redux.reducer';
import VolunteerActionReducer from './volunteerAction/volunteerAction.redux.reducer';
import VolunteerTaskReducer from './volunteerTask/volunteerTask.redux.reducer';
import WalletReducer from './wallet/wallet.redux.reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  volunteerAction: VolunteerActionReducer,
  volunteerTask: VolunteerTaskReducer,
  wallet: WalletReducer
});

export default rootReducer;
