import { put, takeEvery } from 'redux-saga/effects';
import { changeName, clearName } from './usersSlice';
import { sagaActions, ChangeName } from './sagaActions';

export function* changeNameSaga(action: ChangeName) {
  yield put(changeName(action.payload));
}
export function* clearNameSaga() {
  yield put(clearName());
}

export default function* usersSaga() {
  yield takeEvery(sagaActions.CHANGE_NAME, changeNameSaga);
  yield takeEvery(sagaActions.CLEAR_NAME, clearNameSaga);
}
