import React from 'react'
import { useHistory } from 'react-router-dom'
import './head.scss'

type Props = {
    mode: 'edit' | 'preview',
    changeMode: (mode: 'edit' | 'preview') => void
}

const Head = ({ mode, changeMode }: Props) => {
    const [leave, setLeave] = React.useState<boolean>(false)
    const history = useHistory();
    const leavePage = React.useCallback(()=> {
        history.push('/')
    }, [history])
    return <div className="head-create-blog">
        <div className="logo-title">
            <img
                onClick={()=> setLeave(true)}
                src="https://firebasestorage.googleapis.com/v0/b/blog-programming-d228e.appspot.com/o/logo.jpeg?alt=media&token=59c04b2c-0755-4d3c-a83a-1ca6f6089bc4"
                alt="logo"
            />
            <span>Create blog</span>
        </div>
        <div className="action">
            <div className="mode">
                <span
                    onClick={() => changeMode('edit')}
                    className={mode === 'edit' ? 'active' : ''}>Edit</span>
                <span
                    onClick={() => changeMode('preview')}
                    className={mode === 'preview' ? 'active' : ''}>Preview</span>
            </div>
            <span 
                onClick={()=> setLeave(true)}
                className="close">X</span>
        </div>
        {leave &&
            <div className="confirm-leave">
                <div className="container-leave">
                    <div className="head-leave">
                        Are you sure leave?
                        <hr />
                    </div>
                    <div className="content-leave">
                        These data will not save
                    </div>
                    <div className="action">
                        <button  
                            onClick={()=> setLeave(false)}
                            className="cancel">Cancel</button>
                        <button 
                        onClick={leavePage}
                        className="ok">Yes</button>
                    </div>
                </div>
            </div>
        }
    </div>
}

export default React.memo(Head)