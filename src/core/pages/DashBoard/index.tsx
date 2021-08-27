import React from 'react'
import Layout from '../Layout'
import ListInfoDashBoard from './ListInfoDashBoard'
import ContentDB from './ContentDB'


import './dashBoard.scss'

const DashBoard = () => {
    return <Layout>
        <div className="dash-board">
            <h1>DashBoard</h1>
            <ListInfoDashBoard />
            <ContentDB />
        </div>
    </Layout>
}

export default React.memo(DashBoard)