import React from 'react'
import { useSelector } from 'react-redux'
import { getListBlogs } from '../../../store/blog/blog.slice'
import BlogItem from '../../blogItem/BlogItem'

const ListBlogOfTag = () => {
    const listBlogs = useSelector(getListBlogs)
    const htmlBlogOfTag = React.useMemo(() =>
    listBlogs.map((blog, index) => <BlogItem key={index} blog={blog} />)
    , [listBlogs])
    return <div className="blog-of-tag">
        <ul>
            {htmlBlogOfTag}
        </ul>
    </div>
}

export default React.memo(ListBlogOfTag)