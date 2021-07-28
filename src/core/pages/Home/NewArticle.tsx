import React from "react"

function NewArticle(){
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
            <ul>
                {[1,2,3,4,5,6,7].map((value, index) => <li key={index}>
                    <img 
                        src="https://cdn.dribbble.com/users/808903/screenshots/3831862/dribbble_szablon__1_1.png?compress=1&resize=400x300" 
                        alt="Nestjs" />
                    <div className="content">
                        <div className="tag">
                            <span># Nestjs</span>
                            <span># Backend</span>
                            <span># Nodejs</span>
                        </div>
                        <h3 className="title"> NEW FRAME FOR NODEJS </h3>
                        <div className="auth-time">
                        <span>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                Le Ngoc Ha
                            </span>
                            <span>
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                                2020-12-02
                            </span>
                            <span>
                                <i className="fa fa-comments" aria-hidden="true"></i>
                                5
                            </span>
                        </div>
                        <p className="short-content">Hàm này actionService.checkExitsElement(actionId, listAction) được gọi đến nhiều lần</p>
                        <button>Read more</button>
                    </div>
                </li>)}
            </ul>
    </div>
}

export default React.memo(NewArticle)