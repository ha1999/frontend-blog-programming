import React from 'react'
import MoreFromAuthor from './MoreFromAuthor'
import { User } from '../../../../store/blog/blog.interface'

import './right.scss'

interface Props {
    user: User | null
}

const RightBlog = ({user}: Props) => {
    return <div className="right-blog">
        <div className="info-author">
            <span className="head-color"></span>
            <div className="avatar-name">
                <img 
                    src={user?.avatar} 
                    alt="avatar" />
                <span>{user?.name}</span>
            </div>
            { user?.slogan && <div className="slogan">{user.slogan}</div>}
            <button className="follow">Follow</button>
            { user?.work && <div className="work">
                <label>WORK</label>
                <p>{user.work}</p>
            </div>}
            { user?.location && <div className="location">
                <label>LOCATION</label>
                <p>{user.location}</p>
            </div>}
            <div className="joined">
                <label>JOINED</label>
                <p>{user?.createdAt.slice(0, 10)}</p>
            </div>
        </div>
        <MoreFromAuthor name={user?.name} />
    </div>
}

export default React.memo(RightBlog)