import { ClientsSummary } from "../../components/ClientsSummary";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Container, Content } from "./styles";

export const Home = () => {
  return (
    <>
      <Header />

      <Container>
        <Content>
          <SearchBar />
          <ClientsSummary />
        </Content>
      </Container>
    </>
  );
};