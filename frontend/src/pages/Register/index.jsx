import { Header } from "../../components/Header";
import { RegisterForm } from "../../components/RegisterForm";
import { Container } from "./styles";

export const Register = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Cadastramento de cliente</h1>
        <RegisterForm />
      </Container>
    </>
  )
};