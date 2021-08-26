import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ResponseGetBlog } from '../../store/blog/blog.interface'

import './item.scss'

type Props = {
    blog: ResponseGetBlog
}
const BlogItem = ({ blog }: Props) => {
    const history = useHistory()
    const pushRoute = React.useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>, link: string) => {
        e.stopPropagation()
        e.preventDefault()
        history.push(`/t/${link}`)
    }, [history])
    const htmlTags = React.useMemo(() =>
        blog.tags.split(' ')
            .map((tag, index) => <span onClick={(e) => pushRoute(e,tag)} key={index} >#{tag}</span>),
        [blog, pushRoute])
    return <Link to={`/${blog.url}`} className="item-blog"><li>
        <img
            src={blog.img}
            alt="Nestjs" />
        <div className="content">
            <div className="tag">
                {htmlTags}
            </div>
            <h3 className="title">{blog.title}</h3>
            <div className="auth-time">
                <span>
                    <i className="fa fa-user" aria-hidden="true" />
                    {blog.email}
                </span>
                <span>
                    <i className="far fa-clock" aria-hidden="true" />
                    {blog.updatedAt}
                </span>
                <span>
                    <i className="fa fa-comments" aria-hidden="true" />
                    {0}
                </span>
            </div>
            <p className="short-content">{blog.overview}</p>
            <button>Read more</button>
        </div>
    </li>
    </Link>
}

export default React.memo(BlogItem)
