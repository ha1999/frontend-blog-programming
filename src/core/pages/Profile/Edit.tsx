import React from 'react'
import { useSelector } from 'react-redux'
import { getUser, profile } from '../../store/auth/authSlice'

const Edit = () => {
    const user = useSelector(getUser)
    const profileUser = useSelector(profile)
    return <div className="edit-info-user">
        <div className="user">
            <h1>User</h1>
            <label data-aos="fade-up-right">
                Name
                <input type="text" value={user.name}/>
            </label>
            <label data-aos="fade-up-right">
                UserName
                <input type="text" value={user.email} />
            </label >
            <label data-aos="fade-up-right">
                Upload file
                <input type="text" value={user.avatar} />
            </label>
            <label data-aos="fade-up-right">
                Date of birth
                <input type="date" />
            </label>
        </div>
        <div className="basic">
            <h1>Basic</h1>
            <label data-aos="fade-up-right">
                Web URL
                <input type="text" value={profileUser.location} />
            </label>
            <label data-aos="fade-up-right">
                Work
                <input type="text" value={profileUser.work} />
            </label>
            <label data-aos="fade-up-right">
                Location
                <input type="text" value={profileUser.location} />
            </label>
            <label data-aos="fade-up-right">
                Slogan
                <input type="text" value={profileUser.slogan}/>
            </label>
        </div>
    </div>
}

export default React.memo(Edit)