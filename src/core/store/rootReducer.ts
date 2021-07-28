import { combineReducers } from '@reduxjs/toolkit';
import commonReducers from './common/CommonSlice'
import authReducers from './auth/authSlice'

const rootReducer = combineReducers({
  common: commonReducers,
  auth: authReducers
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
