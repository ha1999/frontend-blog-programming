import {takeEvery, put, takeLatest, call} from 'redux-saga/effects'
import { updateCoords, setListTags, clearTags, setLoading } from './CommonSlice'
import {ChangeCoords, ChangeLoading, sagaActions} from './sagaActions'
import {getListTags} from './api'
import { handlerError } from '../../../utils/handleError'


export function* updateCoordsSaga(action: ChangeCoords) {
    yield put(updateCoords(action.payload))
}

export function* clearListTags(){
    yield put(clearTags())
}

export function* sagaListTags(){
    try {
        const listTags: string[] = yield call(getListTags)
        yield put(setListTags(listTags))
    } catch (error) {
        handlerError(error)
    }
}

export function* updateLoading(action: ChangeLoading){
    yield put(setLoading(action.payload))
}


export const commonSaga = [
    takeEvery(sagaActions.UPDATE_COORDS, updateCoordsSaga),
    takeLatest(sagaActions.GET_LIST_TAGS, sagaListTags),
    takeEvery(sagaActions.CLEAR_TAGS, clearListTags),
    takeLatest(sagaActions.CHANGE_LOADING, updateLoading)
]