import { put, takeLatest} from 'redux-saga/effects'
import { handlerError } from '../../../utils/handleError'
import ToastifyBase from '../../../utils/toastify'
import { setLoading } from '../common/CommonSlice'
import {login, logout, checkLogin} from './api'
import { AuthResult } from './auth.interface'
import {loginSaga, logoutSaga} from './authSlice'
import {LoginAction, sagaActions} from './sagaActions'

export function* userLogin(action: LoginAction){
    try {
        const data: AuthResult = yield login(action.payload)
        yield put(loginSaga(data))
        ToastifyBase.success('Login successful!')
    } catch (error) {
        handlerError(error)
        yield put(logoutSaga())
    }
}

export function* userLogout(){
    try {
        yield put(setLoading(true))
        yield logout()
        yield put(logoutSaga())
    } catch (error) {
        handlerError(error)
    } finally {
        yield put(setLoading(false))
    }
}

export function* userCheckLogin(){
    try {
        const data: AuthResult = yield checkLogin()
        yield put(loginSaga(data))
    } catch (error) {
        ToastifyBase.warn('You have not login! Please login to system')
    }
}

export const authSaga = [
    takeLatest(sagaActions.LOG_IN, userLogin),
    takeLatest(sagaActions.LOG_OUT, userLogout),
    takeLatest(sagaActions.CHECK_LOG_IN, userCheckLogin)
]

