import React from 'react'

type Props = {
    children: React.ReactNode
    onSuccess?: Function
    onFailure?: Function
}

const OverLay = ({children, onFailure, onSuccess}: Props) => {
    return <div className="overlay">

    </div>
}