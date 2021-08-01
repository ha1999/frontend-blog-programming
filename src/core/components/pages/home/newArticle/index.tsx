import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { getFilterBlog, getTakePage } from "../../../../store/blog/blog.slice"
import ListBlog from './ListBlogs'
import './newArticle.scss'

function NewArticle() {
    const dispatch = useDispatch()
    const take = useSelector(getTakePage)
    const filter = useSelector(getFilterBlog)
    const [page, setPage] = React.useState<number>(1)
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
    return <div className="new-article">
        <div className="menu">
            <h2>Blogs</h2>
            <ul>
                <li className="active">Feed</li>
                <li>Week</li>
                <li>Month</li>
                <li>Year</li>
                <li>Infinity</li>
                <li>Lastest</li>
            </ul>
        </div>
        <ListBlog />
    </div>
}

export default React.memo(NewArticle)