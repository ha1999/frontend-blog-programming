import React from 'react'

const BlogItemUser = () => {
    return <div className="item-blog-user" data-aos-delay="300" data-aos="fade-right">
        <div className="img"></div>
        <div className="description">
            <div className="tag"></div>
        </div>
    </div>
}

export default React.memo(BlogItemUser)