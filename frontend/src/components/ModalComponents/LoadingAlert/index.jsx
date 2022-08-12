import { ModalBG } from "../ModalBG";
import { Content, Loader, Message, Title } from "./styles";

export const LoadingAlert = ({ text }) => {
  return (
    <ModalBG>
      <Content>
        <Title>Alerta</Title>
        <Message>{text}</Message>
        <Loader />
      </Content>
    </ModalBG>
  );
};