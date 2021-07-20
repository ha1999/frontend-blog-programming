import {takeEvery, put} from 'redux-saga/effects'
import { updateCoords } from './CommonSlice'
import {ChangeCoords, sagaActions} from './sagaActions'

export function* updateCoordsSaga(action: ChangeCoords) {
    yield put(updateCoords(action.payload))
}
export const commonSaga = [
    takeEvery(sagaActions.UPDATE_COORDS, updateCoordsSaga)
]