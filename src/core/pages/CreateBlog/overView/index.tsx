import React from 'react'
import Description from '../descript'

import './overView.scss'

type Props = {
    overView: string
    setOverView: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const OverView  = ({overView, setOverView}: Props) => {
    return <div className="overview">
    <input 
            value={overView}
            onChange={setOverView}
            placeholder="Add short content of blog..."
            type="text" 
            autoComplete="off"
            name="overview"/>
            <Description    
            title="Writing a Great Post Title" 
            content="Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
            Use keywords where appropriate to help ensure people can find your post by search."
            />
    </div>
}

export default React.memo(OverView)