import { ClientsTable } from "../../components/DashboardComponents/ClientsTable";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Container, Dashboard } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Dashboard>
        <SearchBar />
        <ClientsTable />
      </Dashboard>
    </Container>
  );
};