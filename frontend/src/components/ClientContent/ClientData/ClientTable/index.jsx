import { formatDate } from "../../../../helpers/utils/formatDate";
import { Container } from "./styles";

export const ClientTable = ({ currClient }) => {
  const { gender, civilStatus, job, securityNumber, email, lawsuitNumber } = currClient || {};
  const { firstName, lastName } = currClient?.name || {}
  const { street, addressNumber, cityArea, city, state, country, postalCode } = currClient?.address || {};
  const { rgNumber, rgOrigin } = currClient?.registerNumber || {};
  const { birthDay, birthMonth, birthYear } = currClient?.birth || {};
  const { countryCode, areaCode, phoneNumber } = currClient?.phone || {};

  const fullname = `${firstName} ${lastName}`;
  const phone = `${countryCode} (${areaCode}) ${phoneNumber}`;

  // Check birth date
  const dynamicParam = `${birthYear}-${birthMonth}-${birthDay}`;
  const dateParam = currClient?.birth ? dynamicParam : null;
  const formatedBirthDate = !dateParam ? '00/00/0000' : formatDate(dateParam);

  return (
    <Container>
      <table>
        <tbody>
          <tr>
            <th>Nome:</th>
            <td>{fullname}</td>
          </tr>
          <tr>
            <th>Gênero:</th>
            <td>{gender}</td>
          </tr>
          <tr>
            <th>Estado Civil:</th>
            <td>{civilStatus}</td>
          </tr>
          <tr>
            <th>Profissão:</th>
            <td>{job}</td>
          </tr>
          <tr>
            <th>CPF Nº:</th>
            <td>{securityNumber}</td>
          </tr>
          <tr>
            <th>RG:</th>
            <td>{rgNumber}</td>
          </tr>
          <tr>
            <th>Órgão Emissor</th>
            <td>{rgOrigin}</td>
          </tr>
          <tr>
            <th>Data de Nascimento:</th>
            <td>{formatedBirthDate}</td>
          </tr>
          <tr>
            <th>Endereço:</th>
            <td>{street}</td>
          </tr>
          <tr>
            <th>Nº:</th>
            <td>{addressNumber}</td>
          </tr>
          <tr>
            <th>Bairro:</th>
            <td>{cityArea}</td>
          </tr>
          <tr>
            <th>Cidade:</th>
            <td>{city}</td>
          </tr>
          <tr>
            <th>Estado:</th>
            <td>{state}</td>
          </tr>
          <tr>
            <th>País:</th>
            <td>{country}</td>
          </tr>
          <tr>
            <th>CEP:</th>
            <td>{postalCode}</td>
          </tr>
          <tr>
            <th>Telefone</th>
            <td>{phone}</td>
          </tr>
          <tr>
            <th>Email:</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Processo Nº:</th>
            <td>{lawsuitNumber}</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};