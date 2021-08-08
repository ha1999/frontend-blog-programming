import React from 'react'
import { Size, useWindowSize } from '../../../useHook/sizeWindow';
import './menu.scss'
const itemMenu = ['Feed', 'Week', 'Month', 'Year', 'Infinity', 'Lastest']
const TopMenu = () => {
    const size: Size = useWindowSize();

    const select = React.useMemo(() => <select>
        {
            itemMenu.map((item, index) =>
                <option 
                    key={index} 
                    value={item}>
                    {item}
                </option>
            )
        }
    </select>, [])

    const list = React.useMemo(() => <ul>
        {
            itemMenu.map((item, index) =>
                <li
                    key={index}
                    className={index === 0 ? 'active' : ''}>
                    {item}
                </li>
            )
        }
    </ul>, [])

    return <div className="menu">
        <h2>Blogs</h2>
        {size.width > 600 ? list : select}
    </div>
}

export default React.memo(TopMenu)