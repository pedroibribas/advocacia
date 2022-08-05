import { ModalContainer, Overlay } from "./styles";

export const Modal = ({ text, handleClose, handleConfirm }) => {
  return (
    <>
      <Overlay onClick={handleClose} />

      <ModalContainer>
        <span>{text}</span>
        <div>
          <button onClick={handleConfirm}>Sim</button>
          <button onClick={handleClose}>Não</button>
        </div>
      </ModalContainer>
    </>
  );
};