import React from 'react'
import Comment from './Comment'
import NextBlog from '../next'
import './content.scss'
import { DetailBlog } from '../../../../store/blog/blog.interface'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

type Props = {
    blog: DetailBlog | null
    img: string | undefined
}

const ContentBlog = ({blog, img}: Props) => {

    return <div className="main">
        <div className="content-blog">
            <img
                src={blog?.img}
                alt="img-cover"
                className="img-cover" />
            <div className="body-content">
                <h1 className="title">
                   {blog?.title}
                </h1>
                <div className="tags">
                  {
                      blog?.tags.split(' ').map((tag, index) => 
                      <Link to={`/t/${tag}`}>
                          <span key={index}>
                          #{tag}
                      </span>
                      </Link>
                    )
                  }
                </div>
                <div className="info-time">
                    <img
                        src={img}
                        alt="avatar"
                        className="avatar" />
                    <span className="name">{blog?.email.slice(0, blog?.email.indexOf('@'))}</span>
                    <span className="time-create-blog">{blog?.updatedAt.slice(0, 10)}</span>
                    <span className="time-read">{Math.ceil((blog?.content.length || 0) / 1000)} min read</span>
                </div>
                <div className="body-content-blog">
                    {parse(blog?.content || '')}
                </div>
            </div>
            <Comment />
        </div>
        <NextBlog />
    </div>
}

export default React.memo(ContentBlog)