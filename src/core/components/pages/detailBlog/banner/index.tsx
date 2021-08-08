import React from 'react'

import './banner.scss'

const Banner = () => {
    return <div className="banner-tag">
        <div className="color-top"></div>
        <div className="logo-info">
            <div className="logo-tag">
                <img
                    src='https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/blog%2Ftags%2Freact.png?alt=media&token=266d260a-87af-4114-a63d-87ce6d4ce27f'
                    alt='logo-tag'
                />
            </div>
            <div className="info-tag">
                <div className="name-follow">
                    <span className="name">Javascript</span>
                    <button className="follow">Follow</button>
                </div>
                <div className="description">
                    Once relegated to the browser as one of the 3 core technologies of the web,
                    JavaScript can now be found almost anywhere you find code. JavaScript developers
                    move fast and push software development forward; they can be as opinionated as
                    the frameworks they use, so let's keep it clean here and make it a place to learn
                    from each other!
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(Banner)