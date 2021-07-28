import React from 'react'
import './next.scss'
const NextBlog = () => {
    const htmlData = <ul className="list-next-blog">
        {[1,2,3,4].map((value, index) => <li 
        key={index}
        className="item">
        <img 
            src="https://lebaotinhbmt.com/uploads/news/2020_03/con-meo.jpg" 
            alt="avatar" 
            className="avatar" />
        <div className="title-name">
            <p className="title">
            Make a glass-morph card in less than 5 minutes!
            </p>
            <p className="name">Le Ngoc ha</p>
        </div>
    </li>)}
    </ul>
    return <div className="next-blog">
        <div className="title">Read next</div>
            {htmlData}
    </div>
}

export default React.memo(NextBlog)