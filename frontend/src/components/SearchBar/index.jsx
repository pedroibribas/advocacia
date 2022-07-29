import { useClients } from "../../helpers/hooks/useClients";
import { MdSearch } from "react-icons/md";
import { Container, IconContainer } from "./styles";

export const SearchBar = () => {
  const { clients, setSearchResults } = useClients();

  const handleSubmit = e => e.preventDefault();

  const handleSearchChange = e => {
    const value = e.target.value.toLowerCase();

    if (!value) {
      setSearchResults(clients);
    }

    const resultArr = clients.filter(
      client =>
        client.name.firstName.toLowerCase().includes(value) ||
        client.name.lastName.toLowerCase().includes(value)
    );

    setSearchResults(resultArr);
  };

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder="Insira aqui os termos da pesquisa"
        onChange={handleSearchChange}
      />
      <IconContainer>
        <MdSearch />
      </IconContainer>
    </Container>
  );
};