import React from 'react'
import './ci.scss'

type Props = {
    value: string | number
    description: string
    bg?: string
    color?: string
}

const ContainerInfo = ({value, description, bg, color}: Props) => {
    return <div 
                data-aos-duration="1000"
                data-aos="zoom-in-down"
                className="container-info" 
                style={{backgroundColor: bg ?? "#3cc6ef", color: color ?? "#ffff"}}>
            <h1>{value}</h1>
            <p>{description}</p>
    </div>
}

export default React.memo(ContainerInfo)