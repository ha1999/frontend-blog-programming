import React from 'react'
import './option.scss'

const Option = () => {
    const [index, setIndex] = React.useState(1)
    return <ul className="option">
        <li
        onClick={()=> setIndex(1)} 
        className={index === 1 ? 'active' : ''}>
            <span>Blog</span>
            <span className="count">0</span>
        </li>
        <li 
        onClick={()=> setIndex(2)} 
        className={index === 2 ? 'active' : ''}>
            <span>Followers</span>
            <span className="count">1530</span>
        </li>
        <li 
        onClick={()=> setIndex(3)} 
        className={index === 3 ? 'active' : ''}>
            <span>Following tags</span>
            <span className="count">0</span>
        </li>
        <li 
        onClick={()=> setIndex(4)} 
        className={index === 4 ? 'active' : ''}>
            <span>Following users</span>
            <span className="count">0</span>
        </li>
        <li 
        onClick={()=> setIndex(5)} 
        className={index === 5 ? 'active' : ''}>
            <span>Blog save</span>
            <span className="count">0</span>
        </li>
        <li 
        onClick={()=> setIndex(6)} 
        className={index === 6 ? 'active' : ''}>
            <span>Blog heart</span>
            <span className="count">0</span>
        </li>
    </ul>
}

export default React.memo(Option)