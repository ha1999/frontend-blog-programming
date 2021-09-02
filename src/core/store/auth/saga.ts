import { call, put, takeLatest} from 'redux-saga/effects'
import { handlerError } from '../../../utils/handleError'
import ToastifyBase from '../../../utils/toastify'
import { setLoading } from '../common/CommonSlice'
import {login, logout, checkLogin, getProfile, loginGitHub} from './api'
import { AuthResult, Profile } from './auth.interface'
import {loginSaga, logoutSaga, updateProfile} from './authSlice'
import {LoginAction, sagaActions, LoginGHAction} from './sagaActions'

export function* userLoginGG(action: LoginAction){
    try {
        yield put(setLoading(true))
        const data: AuthResult = yield login(action.payload)
        yield put(loginSaga(data))
        window.location.href = window.location.origin + '/'
    } catch (error) {
        yield put(setLoading(false))
        handlerError(error)
        yield put(logoutSaga())
    }
}

export function* userLoginGH(action: LoginGHAction){
    try {
        yield put(setLoading(true))
        const data: AuthResult = yield call(loginGitHub, action.payload)
        yield put(loginSaga(data))
        window.location.href = window.location.origin + '/'
    } catch (error) {
        yield put(setLoading(false))
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

export function* getProfileSaga() {
    try {
        const profile: Profile = yield call(getProfile)
        yield put(updateProfile(profile))
    } catch (error) {
        handlerError(error)
    }
}

export const authSaga = [
    takeLatest(sagaActions.LOG_IN, userLoginGG),
    takeLatest(sagaActions.LOG_OUT, userLogout),
    takeLatest(sagaActions.CHECK_LOG_IN, userCheckLogin),
    takeLatest(sagaActions.PRO_FILE, getProfileSaga),
    takeLatest(sagaActions.LOG_IN_GH, userLoginGH)
]

