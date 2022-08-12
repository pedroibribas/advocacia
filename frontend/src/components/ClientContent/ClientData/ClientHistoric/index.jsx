import { Container, Content, Title } from "./styles";

export const ClientHistoric = ({ description }) => {
  const paragraphs = description?.split("\n");

  return (
    <Container>
      <Title>Histórico</Title>
      <Content>
        {paragraphs?.map((par, i) => (
          <p key={i}>{par}</p>
        ))}
      </Content>
    </Container>
  );
};