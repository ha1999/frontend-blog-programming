import React from 'react'
import {Div, I} from './tagStyle'

type PropsTag = {
    id: number,
    name: string,
    clearTag: (id: number) => void
}

const Tag = ({ id, name, clearTag }: PropsTag) => {
    return (
        <Div>
            <I 
            onClick={() => clearTag(id)}
            className="fa fa-times-circle"
            />
            {name}
        </Div>
    )
}


export default React.memo(Tag)