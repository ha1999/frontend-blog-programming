import React from 'react'
import Option from './component/option'
import ContentContainer from './component/contentContainer'
const ContentDB = () => {
    return <div className="content-dashboard">
        <div className="menu-bar">
            <Option />
        </div>
        <div className="content">
            <h1>Title</h1>
            <ContentContainer />
        </div>
    </div>
}

export default React.memo(ContentDB)