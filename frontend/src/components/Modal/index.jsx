import { ModalContainer, Overlay } from "./styles";

export const Modal = ({ text, handleClose, handleConfirmation }) => {
  return (
    <>
      <Overlay onClick={handleClose} />

      <ModalContainer>
        <span>{text}</span>
        <div>
          <button onClick={handleConfirmation}>Sim</button>
          <button onClick={handleClose}>Não</button>
        </div>
      </ModalContainer>
    </>
  );
};