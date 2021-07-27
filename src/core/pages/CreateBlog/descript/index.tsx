import React from 'react'
import './description.scss'
type Props = {
    title: string
    content: string
}

const Description = ({title, content}: Props) => {
    return <div className="description">
        <p>{title}</p>
        <section>{content}</section>
    </div>
}

export default React.memo(Description)