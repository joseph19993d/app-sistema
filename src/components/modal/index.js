import DefaultModal from "react-modal"



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // This sets the background to a semi-transparent black
  },
};

export const Modal = ({
  isOpen, closeModal, children, ...props }) => {
  return (
      <DefaultModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style = {customStyles}
        {...props}
      >
        {children}
      </DefaultModal>
       )

}