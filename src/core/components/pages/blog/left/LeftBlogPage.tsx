import React from 'react'

import './left.scss'

type Props = {
    heart: number | undefined
    view: number | undefined
}

const LeftBlog = ({heart, view}: Props) => {
    return <ul className="left-blog">
        <li>
            <i className="far fa-heart" />
            <span>{heart && heart}</span>
        </li>
        <li>
            <i className="far fa-eye" />
            <span>{view && view}</span>
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