function NewArticle(){
    return <div className="new-article">
            <h2>Bài viết mới</h2>
            <ul>
                <li>
                    <img 
                        src="https://cdn.dribbble.com/users/808903/screenshots/3831862/dribbble_szablon__1_1.png?compress=1&resize=400x300" 
                        alt="Nestjs" />
                    <div className="content">
                        <div className="tag">
                            <span>Nestjs</span>
                            <span>Backend</span>
                            <span>Nodejs</span>
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
                        <p className="short-content">Hàm này actionService.checkExitsElement(actionId, listAction) được gọi đến nhiều lần,
                         em nên gán cho một biến nhé.Hàm này actionService.checkExitsElement(actionId, listAction) được gọi đến nhiều lần, em nên gán cho một biến nhé.</p>
                        <button>Read more</button>
                    </div>
                </li>
                <li>
                    <img 
                        src="https://cdn.dribbble.com/users/808903/screenshots/3831862/dribbble_szablon__1_1.png?compress=1&resize=400x300" 
                        alt="Nestjs" />
                    <div className="content">
                        <div className="tag">
                            <span>Nestjs</span>
                            <span>Backend</span>
                            <span>Nodejs</span>
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
                        <p className="short-content">Hàm này actionService.checkExitsElement(actionId, listAction) được gọi đến nhiều lần,
                         em nên gán cho một biến nhé.Hàm này actionService.checkExitsElement(actionId, listAction) được gọi đến nhiều lần, em nên gán cho một biến nhé.</p>
                        <button>Read more</button>
                    </div>
                </li>
            </ul>
    </div>
}

export default NewArticle