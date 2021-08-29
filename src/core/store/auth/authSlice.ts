import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import { AuthResult, Profile } from './auth.interface'

type InitialState = {
    login: boolean
    name: string
    email: string
    avatar: string
    profile: Profile
}

const initialState: InitialState = {
    login: false,
    name: '',
    email: '',
    avatar: '',
    profile: {
        work: '',
        slogan: '',
        location: ''
    }
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
        },
        updateProfile(state, action: PayloadAction<Profile>){
            state.profile = action.payload
        }
    }
})

export const {loginSaga, logoutSaga, updateProfile} = AuthSlice.actions

export const getLogin = (state: RootState) => state.auth.login

export const getUser = (state: RootState) => state.auth

export const profile = (state: RootState) => state.auth.profile

export default AuthSlice.reducer