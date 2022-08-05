import { Container } from "./styles";

export const ClientHistoric = ({ description }) => {
  return (
    <Container>
      <span>Histórico</span>
      <p>{description}</p>
    </Container>
  );
};