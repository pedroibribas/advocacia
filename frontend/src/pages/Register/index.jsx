import { Header } from "../../components/Header";
import { CreateClientForm } from "../../components/CreateClientForm";
import { Container } from "./styles";

export const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Cadastramento de cliente</h1>
        <CreateClientForm />
      </Container>
    </>
  )
};