import { ModalOverlay, ModalContent } from "../styles/modal";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  secondary?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, secondary }) => {
  return (
    <ModalOverlay onClick={onClose} secondary={secondary}>
      <ModalContent onClick={(e) => e.stopPropagation()} secondary={secondary}>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
