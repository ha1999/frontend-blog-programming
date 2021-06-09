import {combineReducers} from '@reduxjs/toolkit' 
import fakeReducers from './fake/fakeSlice'
import usersReducers from './users/usersSlice'
const rootReducer = combineReducers({
    fake: fakeReducers,
    users: usersReducers
})
export type RootState = ReturnType<typeof rootReducer>
export default rootReducer