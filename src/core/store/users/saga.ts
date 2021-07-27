import { put, takeEvery, call, takeLatest} from 'redux-saga/effects';
import { changeName, clearName, setListUsers} from './usersSlice';
import { sagaActions, ChangeName } from './sagaActions';
import {LOAD_TODO_FAKE} from '../sagaActions'
import {getDataTodo, User} from '../api'

export function* changeNameSaga(action: ChangeName) {
  yield put(changeName(action.payload));
}
export function* clearNameSaga() {
  yield put(clearName());
}
export function* loadTodoUsers() {
  try {
    const data: User[] = yield call(getDataTodo)
    yield put(setListUsers(data))    
  } catch (error) {
    console.log(error, 'Fetch data is fail!')
  }
}

export const usersSaga = [
    takeEvery(sagaActions.CHANGE_NAME, changeNameSaga),
    takeEvery(sagaActions.CLEAR_NAME, clearNameSaga),
    takeLatest(LOAD_TODO_FAKE, loadTodoUsers)
]
