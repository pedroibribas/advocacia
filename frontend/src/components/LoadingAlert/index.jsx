import { Content, Loader, Message, Overlay, Title } from "./styles";

export const LoadingAlert = ({ text }) => {
  return (
    <Overlay>
      <Content>
        <Title>Alerta</Title>
        <Message>{text}</Message>
        <Loader />
      </Content>
    </Overlay>
  );
};