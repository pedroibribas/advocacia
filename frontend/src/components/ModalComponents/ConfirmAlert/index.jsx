import { ModalBG } from "../ModalBG";
import { Content } from "./styles";

export const ConfirmAlert = ({ text, handleClose, handleConfirm }) => {
  return (
    <ModalBG handleClick={handleClose}>
      <Content>
        <span>{text}</span>
        <div>
          <button onClick={handleConfirm}>Sim</button>
          <button onClick={handleClose}>Não</button>
        </div>
      </Content>
    </ModalBG>
  );
};