import React from 'react'
import ContainerInfo from './component/containerInfo/ContainerInfo'

const ListInfoDashBoard = () => {
    return <div className="info-blog">
        <ContainerInfo
            bg="yellow"
            color="black"
            value="500"
            description="Total post" />
        <ContainerInfo
            value="500"
            description="Total views"
        />
        <ContainerInfo
            bg="yellow"
            color="black"
            value="500"
            description="Total comments"
        />
        <ContainerInfo
            value="500"
            description="Total hearts"
        />
    </div>
}

export default React.memo(ListInfoDashBoard)