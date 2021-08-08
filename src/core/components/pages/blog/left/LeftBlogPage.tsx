import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ToastifyBase from '../../../../../utils/toastify'
import { getUser } from '../../../../store/auth/authSlice'
import { getDetailInfoBlog } from '../../../../store/blog/blog.slice'

import './left.scss'

type Props = {
    title: string
}

const LeftBlog = ({title}: Props) => {
    const user = useSelector(getUser)
    const detail = useSelector(getDetailInfoBlog)
    const dispatch = useDispatch()

    const heartToBlog = React.useCallback(()=> {
        if(user.email){
            dispatch({
                type: 'HEART_TO_BLOG',
                payload: title.split('-').pop()
            })
        }
        else ToastifyBase.warn('You have to login to add heart to this blog!')
    },[user, dispatch, title])

    const userSaveBlog = React.useCallback(()=> {
        if(user.email){
            dispatch({
                type: 'USER_SAVE_BLOG',
                payload: title.split('-').pop()
            })
        }
        else ToastifyBase.warn('You have to login to add heart to this blog!')
    }, [user, dispatch, title])

    return <ul className="left-blog">
        <li>
            <i 
                onClick={heartToBlog}
                className="far fa-heart" />
            <span>{detail?.heart}</span>
        </li>
        <li>
            <i className="far fa-eye" />
            <span>{detail?.view}</span>
        </li>
        <li>
            <i 
                onClick={userSaveBlog}
                className="far fa-bookmark" />
            <span>{detail?.book_mark}</span>
        </li>
        <li>
            <i className="fas fa-ellipsis-h" />
        </li>
    </ul>
}

export default React.memo(LeftBlog)