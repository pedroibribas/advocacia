import { ClientContent } from "../../components/ClientContent";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export const Client = () => {
  return (
    <>
      <Header />

      <Container>
        <h1>Cadastro</h1>
        <ClientContent />
      </Container>
    </>
  );
};