import Modal from 'react-modal'
import ContentModal from './Content'
import { customStyles } from '../../../../utils/config'
Modal.setAppElement('#root')

type Props  = {
  children?: React.ReactNode
  isOpen: boolean
  closeModal: () => void
  title: string
}
  function ModalBase({children, isOpen, closeModal, title}: Props){
      return (
        <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          shouldCloseOnOverlayClick={false}
          preventScroll={true}
          overlayClassName="Overlay"
        >
         <ContentModal title={title} closeModal={closeModal}>
          {children}
         </ContentModal>
        </Modal>
      </div>
      )
  }

  export default ModalBase