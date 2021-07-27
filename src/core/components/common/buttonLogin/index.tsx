import React from 'react'
import GoogleLoginButton from 'google-login-react-uet'
import {useDispatch, useSelector} from 'react-redux'
import './index.scss'
import { getLogin } from '../../../store/auth/authSlice'
import { useEffect } from 'react'
import UserInfoHead from '../../common/infoHead'
const ButtonLogin = () => {
    const dispatch = useDispatch()
    const userLogin = useSelector(getLogin)
    const handleGoogleSuccess = React.useCallback((googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token as string
        if(id_token)dispatch({
            type: 'LOG_IN',
            payload: id_token
        })
    },[dispatch])

    const handleGoogleError = React.useCallback((error: any) => {
        console.log(error)
    },[])

    useEffect(()=> {
        if((window as any).gapi) {
            const auth2 = (window as any).gapi.auth2.getAuthInstance();
        if(auth2) auth2.signOut().then(() => {
        });
        }
          
    },[])

    return  !userLogin ? <GoogleLoginButton 
                clientId='298814766395-hin3if2dp1ste47cs6b50jko5s5feu05'
                onSuccess={handleGoogleSuccess}
                onFailure={handleGoogleError} /> : 
                <UserInfoHead />
}

export default React.memo(ButtonLogin)