import React from 'react'
import GoogleLoginButton from 'google-login-react-uet'
import './styles.scss'
const Login = () => {
    const handleGoogleError = React.useCallback((error: any) => {
        console.log(error);
    },[])
    return <div className="login-page">
            <div className="login-container">
                <h3 className="title">Blog programming - UET</h3>
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/bear.jpg?alt=media&token=ad9c99c6-05e1-44de-b992-f12deb461ea9" 
                    alt="logo" />
                <div className="login-button"></div>
                <GoogleLoginButton 
                    clientId='298814766395-hin3if2dp1ste47cs6b50jko5s5feu05'
                    onSuccess={handleGoogleError}
                    onFailure={handleGoogleError}
                />
                {/* <i className="fa fa fa-home" aria-hidden="true" /> */}

            </div>
    </div>
}

export default React.memo(Login)