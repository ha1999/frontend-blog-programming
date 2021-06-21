import { useState } from 'react';
import Modal from 'react-modal'
Modal.setAppElement('#root')

type Props = {
    children?: React.ReactNode
}
  function ModalBase({children}: Props){
    const [modalIsOpen,setIsOpen] = useState<boolean>(false);
    const openModal = () => {
        setIsOpen(true);
      }
      const closeModal = () => {
        setIsOpen(false);
      }
      return (
        <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.75)'
            },
            content: {
              position: 'absolute',
              top: '40px',
              left: '20%',
              right: '20%',
              bottom: '40px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
            }
          }}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
          preventScroll={true} // not close modal when click outsite
        >
         {children}
        </Modal>
      </div>
      )
  }

  export default ModalBase