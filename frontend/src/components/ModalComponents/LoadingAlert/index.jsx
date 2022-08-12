import { ModalBG } from "../ModalBG";
import { Content, Loader, Message, Title } from "./styles";

export const LoadingAlert = ({ handleClose, text }) => {
  return (
    <ModalBG handleClick={handleClose}>
      <Content>
        <Title>Alerta</Title>
        <Message>{text}</Message>
        <Loader />
      </Content>
    </ModalBG>
  );
};