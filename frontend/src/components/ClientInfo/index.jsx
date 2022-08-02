import { Container, Historic } from "./styles";

export const ClientInfo = ({ currClient }) => {
  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>Nome:</th>
            <td>
              {currClient?.name?.firstName}&nbsp;
              {currClient?.name?.lastName}
            </td>
          </tr>
          <tr>
            <th>Gênero:</th>
            <td>{currClient?.gender}</td>
          </tr>
          <tr>
            <th>Estado Civil:</th>
            <td>{currClient?.civilStatus}</td>
          </tr>
          <tr>
            <th>Profissão:</th>
            <td>{currClient?.job}</td>
          </tr>
          <tr>
            <th>CPF Nº:</th>
            <td>{currClient?.securityNumber}</td>
          </tr>
          <tr>
            <th>RG:</th>
            <td>
              {currClient?.registerNumber?.rgNumber}&nbsp;
              &#40;{currClient?.registerNumber?.rgOrigin}&#41;
            </td>
          </tr>
          <tr>
            <th>Data de Nascimento:</th>
            <td>
              {currClient?.birth?.birthDay}/
              {currClient?.birth?.birthMonth}/
              {currClient?.birth?.birthYear}
            </td>
          </tr>
          <tr>
            <th>Endereço:</th>
            <td>
              {currClient?.address?.street},&nbsp;
              nº {currClient?.address?.addressNumber},&nbsp;
              {currClient?.address?.cityArea},&nbsp;
              {currClient?.address?.city},&nbsp;
              {currClient?.address?.state},&nbsp;
              {currClient?.address?.country},&nbsp;
              CEP {currClient?.address?.postalCode}&nbsp;
            </td>
          </tr>
          <tr>
            <th>Telefone:</th>
            <td>
              {currClient?.phone?.countryCode}&nbsp;
              {currClient?.phone?.areaCode}&nbsp;
              {currClient?.phone?.phoneNumber}&nbsp;
            </td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{currClient?.email}</td>
          </tr>
          <tr>
            <th>Processo Nº:</th>
            <td>{currClient?.lawsuitNumber}</td>
          </tr>
        </tbody>
      </table>
      <Historic>
        <h2>Histórico</h2>
        <p>{currClient?.description}</p>
      </Historic>
    </Container>
  );
};