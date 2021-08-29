import React from 'react'
import BlogItemUser from './Blog'

import './blog.scss'

const BlogOfUser = () => {
    return <div className="blog-of-user">
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
        <BlogItemUser  />
    </div>
}

export default React.memo(BlogOfUser)