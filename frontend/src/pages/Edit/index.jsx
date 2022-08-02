import { ClientForm } from "../../components/ClientForm";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export const Edit = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Atualizar cliente</h1>
        <ClientForm>
          <button type="submit">Atualizar</button>
          <button>Cancelar</button>
        </ClientForm>
      </Container>
    </>
  )
};