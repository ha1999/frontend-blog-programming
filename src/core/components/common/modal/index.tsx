import { useState } from 'react'
import Modal from 'react-modal'
import ContentModal from './Content'
import { customStyles } from '../../../../utils/config'
Modal.setAppElement('#root')

type Props  = {
  children?: React.ReactNode
}
  function ModalBase({children}: Props){
    const [modalIsOpen,setIsOpen] = useState<boolean>(false)
    const openModal = () => {
        setIsOpen(true)
      }
      const closeModal = () => {
        setIsOpen(false)
      }
      return (
        <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
          preventScroll={true}
        >
         <ContentModal title="Upload avatar" closeModal={setIsOpen}>
          {children}
         </ContentModal>
        </Modal>
      </div>
      )
  }

  export default ModalBase