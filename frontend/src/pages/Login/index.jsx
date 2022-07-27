import { Form } from "../../components/LoginComponents/Form";
import { Container, Content, FormContainer } from "./styles";

export const Login = () => {
  return (
    <Container>
      <Content>
        <h2>Entrar</h2>
        <FormContainer>
          <Form />
        </FormContainer>
      </Content>
    </Container>
  );
};