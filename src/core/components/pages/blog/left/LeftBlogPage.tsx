import React from 'react'

import './left.scss'

const LeftBlog = () => {
    return <ul className="left-blog">
        <li>
            <i className="far fa-heart" />
            <span>30</span>
        </li>
        <li>
            <i className="far fa-eye" />
            <span>30</span>
        </li>
        <li>
            <i className="far fa-bookmark" />
            <span>30</span>
        </li>
        <li>
            <i className="fas fa-ellipsis-h" />
        </li>
    </ul>
}

export default React.memo(LeftBlog)