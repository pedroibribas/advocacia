import { LoginForm } from "../../components/LoginForm";
import { Container, Content } from "./styles";

export const Login = () => {
  return (
    <Container>
      <Content>
        <h2>Entrar</h2>
        <LoginForm />
      </Content>
    </Container>
  );
};