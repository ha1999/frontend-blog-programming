import React from 'react'
import GoogleLoginButton from 'google-login-react-uet'
import { useDispatch } from 'react-redux'
import {Link} from 'react-router-dom'
import useQuery from '../../../useHook/useQuery'
import './login.scss'

const Login = () => {
    const query = useQuery().get('code')
    const GITHUB_ID = process.env.REACT_APP_GITHUB_ID
    const dispatch = useDispatch()
    const handleGoogleSuccess = React.useCallback((googleUser: any) => {
        const id_token = googleUser.getAuthResponse().id_token as string
        if (id_token) dispatch({
            type: 'LOG_IN',
            payload: id_token
        })
    }, [dispatch])
    const openAuthGitHub = React.useCallback(()=> {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_ID}&scope=user`
    },[GITHUB_ID]) 

    const handleGoogleError = React.useCallback((error: any) => {
        console.log(error)
    }, [])
    React.useEffect(()=> {
        console.log(query, 'query')
        if(query){
            dispatch({
                type: 'LOG_IN_GH',
                payload: query
            })
        }
    },[query, dispatch])
    return <div className="login-page">
        <img 
            src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/system%2Flogin.png?alt=media" 
            alt="top-img" 
            className="top-absolute" />
        <div className="container">
            <Link to="/" >
            <img
                src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/logo.png?alt=media"
                alt="logo"
            />
            </Link>
            <div className="group-login">
                <GoogleLoginButton
                    clientId='298814766395-hin3if2dp1ste47cs6b50jko5s5feu05'
                    onSuccess={handleGoogleSuccess}
                    onFailure={handleGoogleError} />
                <div 
                    onClick={openAuthGitHub}
                    className="login-with-github">
                    Sing in with github
                </div>
            </div>
            <p className="des">Chỉ hỗ trợ login qua google và github</p>
        </div>
        <img 
            src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/system%2Fbottom-login.png?alt=media" 
            alt="bottom-img" 
            className="bottom-absolute" />
    </div>
}

export default React.memo(Login)
