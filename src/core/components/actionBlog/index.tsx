import React, { useState } from 'react'
import EditorBase from '../editor/Editor'
const ActionBlog = () => {
    const [content, setContent] = useState('')
    return (
        <div>
            
            <EditorBase content={content} setContent={setContent} />
        </div>
    )
}

export default React.memo(ActionBlog)