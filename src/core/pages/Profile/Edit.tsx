import React from 'react'
import { useSelector } from 'react-redux'
import { getUser, profile } from '../../store/auth/authSlice'

const Edit = () => {
    const user = useSelector(getUser)
    const profileUser = useSelector(profile)
    return <div className="edit-info-user">
        <div className="user">
            <h1>User</h1>
            <label>
                Name
                <input type="text" value={user.name}/>
            </label>
            <label>
                UserName
                <input type="text" value={user.email} />
            </label>
            <label>
                Upload file
                <input type="text" value={user.avatar} />
            </label>
            <label>
                Date of birth
                <input type="date" />
            </label>
        </div>
        <div className="basic">
            <h1>Basic</h1>
            <label>
                Web URL
                <input type="text" value={profileUser.location} />
            </label>
            <label>
                Work
                <input type="text" value={profileUser.work} />
            </label>
            <label>
                Location
                <input type="text" value={profileUser.location} />
            </label>
            <label>
                Slogan
                <input type="text" value={profileUser.slogan}/>
            </label>
        </div>
    </div>
}

export default React.memo(Edit)