import React from 'react'
import Comment from './Comment'
import NextBlog from '../next'
import './content.scss'

const ContentBlog = () => {
    return <div className="main">
        <div className="content-blog">
            <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--zYulMdjH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0n4g9h7np3igjxvjzadg.png"
                alt="img-cover"
                className="img-cover" />
            <div className="body-content">
                <h1 className="title">
                    To Typescript Or To Not?
                </h1>
                <div className="tags">
                    <span>#reactjs</span>
                    <span>#reactjs</span>
                    <span>#reactjs</span>
                    <span>#reactjs</span>
                </div>
                <div className="info-time">
                    <img
                        src="https://lebaotinhbmt.com/uploads/news/2020_03/con-meo.jpg"
                        alt="avatar"
                        className="avatar" />
                    <span className="name">Le Ngoc Ha</span>
                    <span className="time-create-blog">17-04-2021</span>
                    <span className="time-read">5 min read</span>
                </div>
                <div className="body-content-blog">

                </div>
            </div>
            <Comment />
        </div>
        <NextBlog />
    </div>
}

export default React.memo(ContentBlog)