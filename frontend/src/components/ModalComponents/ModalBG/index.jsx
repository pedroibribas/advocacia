import { Overlay } from "./styles";

export const ModalBG = ({ handleClick, children }) => {
  return (
    <Overlay onClick={handleClick}>
      {children}
    </Overlay>
  );
};