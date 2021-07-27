import React from 'react'
import './styles.scss'
import { useSelector } from 'react-redux'
import { getUser } from '../../../store/auth/authSlice'
import { Link } from 'react-router-dom'
const UserInfoHead = () => {
    const user = useSelector(getUser)
    return <div className="info-head">
        <span className="create-blog">
            <Link to='/new'>Create blog</Link>
        </span>
        <i className="far fa-bell" aria-hidden="true" />
        <div className="drop-down">
            <img src={user.avatar} alt="avatar"  />
            <ul>
                <li>Sing out</li>
                <li>Sing out</li>
                <li>Sing out</li>
                <li>Sing out</li>
            </ul>
        </div>
    </div>
}

export default React.memo(UserInfoHead)