import { combineReducers } from '@reduxjs/toolkit';
import fakeReducers from './fake/fakeSlice';
import usersReducers from './users/usersSlice';
import commonReducers from './common/CommonSlice'
import authReducers from './auth/authSlice'

const rootReducer = combineReducers({
  fake: fakeReducers,
  users: usersReducers,
  common: commonReducers,
  auth: authReducers
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
