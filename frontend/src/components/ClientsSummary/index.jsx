import { Link } from "react-router-dom";
import { useClients } from "../../helpers/providers/ClientsProvider";
import { formatDate } from "../../helpers/utils/formatDate";
import { Container } from "./styles";

export const ClientsSummary = () => {
  const { searchResult } = useClients();

  //TODO
  // - Ordenar clientes do mais novo para o mais antigo

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Processo</th>
            <th>Cadastrado em</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {searchResult?.map(client => (
            <tr key={client._id}>
              <td>
                {client.name.firstName}&nbsp;
                {client.name.lastName}
              </td>
              <td>
                {client.lawsuitNumber}
              </td>
              <td>
                {formatDate(client.createdAt)}
              </td>
              <td>
                <Link to={"/client/" + client._id}>Ver</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};