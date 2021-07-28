import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../store/auth/authSlice'

import './right.scss'

const RightBlog = () => {
    const userLogin = useSelector(getUser)
    return <div className="right-blog">
        <div className="info-author">
            <span className="head-color"></span>
            <div className="avatar-name">
                <img src={userLogin.avatar} alt="avatar" />
                <span>{userLogin.name}</span>
            </div>
            <div className="slogan">
            Computer jock, Programmer, Technology enthusiast and Math ❤️ er.  
            </div>
            <button className="follow">Follow</button>
            <div className="work">
                <label>WORK</label>
                <p>UI Developer at Thoughworks</p>
            </div>
            <div className="location">
                <label>LOCATION</label>
                <p>India</p>
            </div>
            <div className="joined">
                <label>JOINED</label>
                <p>May 26, 2020</p>
            </div>
        </div>
        <div className="more-blogs-author">
            <span className="title">More from 
            <a href={`/${userLogin.name.replace(/' '/i, '')}`}>{userLogin.name}</a>
            </span>
            <div className="more-blog">
                <a href='/123' className="blog">
                    <p className="title">A Complete Guide To Decorators In Typescript</p>
                    <div className="tags">
                        <span>#html</span>
                        <span>#react</span>
                        <span>#nodejs</span>
                        <span>#Reactjs</span>
                    </div>
                </a>
                <a href='/123' className="blog">
                    <p className="title">A Complete Guide To Decorators In Typescript</p>
                    <div className="tags">
                        <span>#html</span>
                        <span>#react</span>
                        <span>#nodejs</span>
                        <span>#Reactjs</span>
                    </div>
                </a>
                <a href='/123' className="blog">
                    <p className="title">A Complete Guide To Decorators In Typescript</p>
                    <div className="tags">
                        <span>#html</span>
                        <span>#react</span>
                        <span>#nodejs</span>
                        <span>#Reactjs</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
}

export default React.memo(RightBlog)