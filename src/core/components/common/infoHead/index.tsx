import React from 'react'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../../store/auth/authSlice'
import { Link, useHistory } from 'react-router-dom'
const UserInfoHead = () => {
    const history = useHistory()
    const user = useSelector(getUser)
    const dispatch  = useDispatch()
    const logout = React.useCallback(()=> dispatch({type: 'LOG_OUT'}) , [dispatch])
    const pushRoute = React.useCallback((route: string)=>{
        history.push(route)
    },[history])
    return <div className="info-head">
        <span className="create-blog">
            <Link to='/new'>Create blog</Link>
        </span>
        <i className="far fa-bell" aria-hidden="true" />
        <div className="drop-down">
            <img src={user.avatar} alt="avatar" />
            <ul>
                <li className="info">
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </li>
                <li 
                onClick={()=> pushRoute('/dash-board')}
                className="icon-text">
                    <i className="fas fa-chart-pie"></i>
                    Dashboard</li>
                <li className="icon-text">
                    <i className="fas fa-cogs"></i>
                    Setting</li>

                <li 
                onClick={logout}
                className="icon-text">

                    <i className="fas fa-sign-out-alt"></i>
                    Sing out
                </li>
            </ul>
        </div>
    </div>
}

export default React.memo(UserInfoHead)