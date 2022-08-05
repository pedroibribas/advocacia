import { MdSearch } from "react-icons/md";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { Container, IconContainer } from "./styles";

export const SearchBar = () => {
  const { clients, setSearchResult } = useClients();

  const handleSubmit = e => e.preventDefault();

  const handleSearchChange = e => {
    const value = e.target.value.toLowerCase();

    if (!value) {
      setSearchResult(clients);
    }

    const resultArr = clients.filter(
      client =>
        client.name.firstName.toLowerCase().includes(value) ||
        client.name.lastName.toLowerCase().includes(value)
    );

    setSearchResult(resultArr);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Insira aqui o nome do cliente"
        onChange={handleSearchChange}
      />
      <IconContainer>
        <MdSearch />
      </IconContainer>
    </Container>
  );
};