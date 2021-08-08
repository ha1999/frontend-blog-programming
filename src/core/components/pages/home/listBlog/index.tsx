import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFilterBlog, getListBlogs, getTakePage } from "../../../../store/blog/blog.slice"
import BlogItem from "../../../blogItem/BlogItem"
import TopMenu from "../../../menuTop"

import './listBlogs.scss'

function ListBlogs() {
    const dispatch = useDispatch()
    const take = useSelector(getTakePage)
    const filter = useSelector(getFilterBlog)
    const [page, setPage] = React.useState<number>(1)
    const listBlogs = useSelector(getListBlogs)
    console.log(setPage)
    React.useEffect(() => {
        dispatch({
            type: 'BLOG_GET_PAGE',
            payload: {
                page,
                take,
                ...filter
            }
        })
    }, [dispatch, take, filter, page])
    const htmlBlogs = React.useMemo(() =>
    listBlogs.map((blog, index) => <BlogItem key={index} blog={blog} />)
    , [listBlogs])

    return <div className="new-article">
        <TopMenu />
        <ul>
            {htmlBlogs}
        </ul>
    </div>
}

export default React.memo(ListBlogs)