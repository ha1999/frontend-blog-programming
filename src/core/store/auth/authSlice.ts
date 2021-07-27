import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import { AuthResult } from './auth.interface'

type InitialState = {
    login: boolean
    name: string
    email: string
    avatar: string
}

const initialState: InitialState = {
    login: false,
    name: '',
    email: '',
    avatar: ''
}


const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState,
    reducers: {
        loginSaga(state, action: PayloadAction<AuthResult>){
            state = Object.assign(state, {login: true} ,action.payload)
        },
        logoutSaga(state){
            state = Object.assign(state, {login: false,name: '',email: ''})
        }
    }
})

export const {loginSaga, logoutSaga} = AuthSlice.actions

export const getLogin = (state: RootState) => state.auth.login

export const getUser = (state: RootState) => state.auth

export default AuthSlice.reducer