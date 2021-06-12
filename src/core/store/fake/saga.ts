import { takeEvery, put } from 'redux-saga/effects';
import { sagaActions, AddtoCount } from './sagaActions';
import { addToCount, subOfCount } from './fakeSlice';

export function* addToCountSaga(action: AddtoCount) {
  yield put(addToCount(action.payload));
}
export function* subOfCountSaga(action: AddtoCount) {
  yield put(subOfCount(action.payload));
}

export default function* fakeSaga() {
  yield takeEvery(sagaActions.ADD_TO_COUNT, addToCountSaga);
  yield takeEvery(sagaActions.SUB_OF_COUNT, subOfCountSaga);
}
