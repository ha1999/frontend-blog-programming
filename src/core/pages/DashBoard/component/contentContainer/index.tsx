import React from 'react'
import BlogOfUser from './blog/BlogOfUser'

const ContentContainer = () => {
    return <div className="container">
        <BlogOfUser />
    </div>
}


export default React.memo(ContentContainer)