import React from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../store/auth/authSlice'
import './comment.scss'
const Comment = () => {
    const user = useSelector(getUser)
    return <div className="comment-blog">
        <span className="discuss">Discussion(200)</span>
        <div className="container-comment">
            <img 
                src={user.avatar}
                alt="avatar" 
                className="avatar" />
            <div className="editor-action">
                <textarea 
                    name="editor" 
                    className="editor">
                </textarea>
                <div className="upload-img">

                </div>
                <div className="submit-preview">
                    <button className="submit">Submit</button>
                    <button className="preview">Preview</button>
                </div>
            </div>
        </div>
    </div>
}

export default React.memo(Comment)