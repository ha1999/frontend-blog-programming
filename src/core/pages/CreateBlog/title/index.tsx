import React from 'react'
import Description from '../descript'
import './title.scss'

type Props = {
    title: string
    setTitle: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Tittle = ({title, setTitle}: Props) => {
    return <div className="title">
    <input 
        onChange={setTitle}
        value={title}
        placeholder="New blog title here..."
        type="text" 
        name="title"/>
    <Description    
        title="Writing a Great Post Title" 
        content="    Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence.
        Use keywords where appropriate to help ensure people can find your post by search."
        />
</div>
}

export default React.memo(Tittle)