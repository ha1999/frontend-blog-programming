import React from 'react'
import './rigthBar.scss'
const RightBar = () => {
    return <div className="right-bar">
            <div className="ads">
                <img 
                    src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/bear.jpg?alt=media&token=ad9c99c6-05e1-44de-b992-f12deb461ea9" 
                    alt="logo-ads" />
                <p className="title">
                Submit a short video for CodeLand Recess!
                </p>
                <p className="short-content">
                Show off your creativity at CodeLand 2021.
                </p>
                <a href="/tags" className="read-more">Learn more</a>
            </div>
            <div className="news">
                <div className="title">
                    <a href='/tags'>News</a>
                    <a href='/tags'>see all</a>
                </div>
                <ul>
                    {
                        [1,2,3,4,5,6,7,8,9].map((value, index) => 
                        <li key={index}>
                            <p>20+ Super DevTools you may have not heard of </p>
                            <span>education</span>
                        </li>
                    )
                    }
                </ul>
            </div>

            <div className="news">
                <div className="title">
                    <a href='/tags'>Jobs</a>
                    <a href='/tags'>select skill</a>
                </div>
                <ul>
                    {
                        [1,2,3,4,5,6,7,8,9].map((value, index) => 
                        <li key={index}>
                            <p>20+ Super DevTools you may have not heard of </p>
                            <span>education</span>
                        </li>
                    )
                    }
                </ul>
            </div>
    </div>
}

export default React.memo(RightBar)

