import { combineReducers } from '@reduxjs/toolkit';
import fakeReducers from './fake/fakeSlice';
import usersReducers from './users/usersSlice';
import commonReducer from './common/CommonSlice'

const rootReducer = combineReducers({
  fake: fakeReducers,
  users: usersReducers,
  common: commonReducer
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
