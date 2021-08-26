import React from 'react'
import './loading.scss'
const Loading = () => {
    return <div className='loading-container'>
        <div className="loader"></div>
        <span>Loading ...</span>
    </div>
}

export default React.memo(Loading)