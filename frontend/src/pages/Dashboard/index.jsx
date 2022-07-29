import { ClientsTable } from "../../components/DashboardComponents/ClientsTable";
import { Header } from "../../components/Header";
import { SearchBar } from "../../components/SearchBar";
import { Container } from "./styles";

export const Dashboard = () => {

  return (
    <>
      <Header />
      <Container>
        <SearchBar />
        <ClientsTable />
      </Container>
    </>
  );
};