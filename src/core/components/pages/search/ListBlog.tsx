import React from "react"
import { useSelector } from "react-redux"
import { getListBlogs } from "../../../store/blog/blog.slice"
import BlogItem from "../../blogItem/BlogItem"

function ListBlog() {
    const listBlogs = useSelector(getListBlogs)
    const htmlBlogs = React.useMemo(() =>
        listBlogs.map((blog, index) => <BlogItem key={index} blog={blog} />)
        , [listBlogs])

    return <ul>
        {htmlBlogs}
    </ul>
}

export default React.memo(ListBlog)