import React from 'react'
import './content.scss'
type Props = {
    title: string,
    closeModal: (isShow: boolean) => void
    children?: React.ReactNode
}

const ContentModal = ({ title, closeModal, children }: Props) => {
    const submitModal = () => {

    }
    return (
        <div className="content-modal">
            <h1>{title}</h1>
            <div className="content">
                {children}
            </div>
            <div className="submit-close">

                <button
                    className="submit"
                    onClick={submitModal}
                >
                    Submit
                </button>
                <button
                    className="cancel"
                    onClick={() => closeModal(false)}
                >Cancel
                </button>
            </div>
        </div>
    )
}

export default React.memo(ContentModal)