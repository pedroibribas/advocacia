import { EditContent } from "../../components/EditContent";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export const Edit = () => {
  return (
    <>
      <Header />

      <Container>

        <h1>Atualizar cliente</h1>

        <EditContent />

      </Container>
    </>
  )
};