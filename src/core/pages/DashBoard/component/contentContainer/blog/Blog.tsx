import React from 'react'

const BlogItemUser = () => {
    return <div className="item-blog-user">
        <div className="img"></div>
        <div className="description">
            <div className="tag"></div>
        </div>
    </div>
}

export default React.memo(BlogItemUser)