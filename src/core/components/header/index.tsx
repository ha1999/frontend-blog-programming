import React from 'react'
import './styles.scss'
import ButtonLogin from '../common/buttonLogin'
const Header = () => {
    return <div id="header">
        <div className="logo">
            <img 
                src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/logo.jpeg?alt=media&token=59c04b2c-0755-4d3c-a83a-1ca6f6089bc4" 
                alt="logo" 
            />
        </div>
        <div className="input-search">
            <input 
                placeholder="Search ..."
                type="text" 
                name="input-search" />
        </div>
        <div className="login-info">
            <ButtonLogin />
        </div>
        <div className="over-lay"></div>
    </div>
}

export default React.memo(Header)