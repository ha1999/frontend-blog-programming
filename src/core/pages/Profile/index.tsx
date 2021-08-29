import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalBase from '../../components/common/modal'
import { getUser, profile } from '../../store/auth/authSlice'
import Layout from '../Layout'
import Edit from './Edit'

import './profile.scss'

const Profile = () => {
    const user = useSelector(getUser)
    const dispatch = useDispatch()
    const profileUser = useSelector(profile)
    const [open, setOpen] = useState(false)
    React.useEffect(() => {
        dispatch({ type: 'PRO_FILE' })
    }, [dispatch])

    return <Layout>
        <div className="profile" data-aos="zoom-in"
            data-aos-delay="300"
        >
            <div 
                className="edit" 
                onClick={()=> setOpen(true)}>
                <i className="fas fa-edit"></i>
            </div>
            <ModalBase
                title="Edit infomation of user" 
                isOpen={open} 
                closeModal={() => setOpen(false)} >
                    <Edit />
            </ModalBase>
            <img
                alt="avatar"
                src={user.avatar}
                data-aos="zoom-in"
                data-aos-delay="500"
                className="avatar" />
            <h1 className="name">{user.name}</h1>
            <p className="email">{user.email}</p>
            <div className="work-skill-address">
                <div data-aos="zoom-in" data-aos-delay="500">
                    <i className="fas fa-building"></i>
                    <span>{profileUser.work}</span>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500">
                    <i className="fab fa-android"></i>
                    <span>{profileUser.slogan}</span>
                </div>
                <div data-aos="zoom-in" data-aos-delay="500">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{profileUser.location}</span>
                </div>
            </div>
            <div className="basic-info">
                <label htmlFor="" data-aos="fade-right" data-aos-delay="500">
                    Github:
                    <input id="github" />
                </label>
                <label htmlFor="" data-aos="fade-right" data-aos-delay="500">
                    Date of birth:
                    <input id="birth" />
                </label>
                <label htmlFor="" data-aos="fade-right" data-aos-delay="500">
                    Website URL:
                    <input id="web-url" />
                </label>
                <label htmlFor="" data-aos="fade-right" data-aos-delay="500">
                    Education:
                    <input id="edu" />
                </label>
            </div>
        </div>
    </Layout>
}

export default React.memo(Profile)