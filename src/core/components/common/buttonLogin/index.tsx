import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'
import { getLogin } from '../../../store/auth/authSlice'
import UserInfoHead from '../../common/infoHead'
import { useHistory } from 'react-router-dom'
const ButtonLogin = () => {
    const history = useHistory()
    const userLogin = useSelector(getLogin)
    const pushRoute = React.useCallback(() => {
        history.push('/login')
    }, [history])
    return !userLogin ? <span className="signIn-button"
        onClick={pushRoute}
    >SignIn</span> :
        <UserInfoHead />
}

export default React.memo(ButtonLogin)