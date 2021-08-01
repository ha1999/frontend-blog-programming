import React from 'react'
import { Link } from 'react-router-dom'
import { ResponseGetBlog } from '../../../../store/blog/blog.interface'

type Props = {
    blog: ResponseGetBlog
}
const BlogItem = ({ blog }: Props) => {
    return <Link to={blog.url}><li>
        <img
            src={blog.img}
            alt="Nestjs" />
        <div className="content">
            <div className="tag">
                {
                    blog.tags.split(' ')
                        .map((tag, index) => <span key={index} ><Link to={`t/${tag}`}>#{tag}</Link></span>)
                }
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
                    {blog.view}
                </span>
            </div>
            <p className="short-content">{blog.overview}</p>
            <button>Read more</button>
        </div>
    </li>
    </Link>
}

export default React.memo(BlogItem)
