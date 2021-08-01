import { combineReducers } from '@reduxjs/toolkit';
import commonReducers from './common/CommonSlice'
import authReducers from './auth/authSlice'
import blogReducers from './blog/blog.slice'

const rootReducer = combineReducers({
  common: commonReducers,
  auth: authReducers,
  blog: blogReducers
});
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
