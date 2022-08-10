import { formatDate } from "../../../helpers/utils/formatDate";
import { ClientHistoric } from "./ClientHistoric";
import { ClientTable } from "./ClientTable";
import { UpdateInfo } from "./styles";

export const ClientData = ({ client }) => {
  const dateParam = client?.updatedAt ? client.updatedAt : null;
  const formatedDate = !dateParam ? '00/00/0000' : formatDate(dateParam);

  return (
    <>
      <UpdateInfo>Última atualização em {formatedDate}</UpdateInfo>
      <ClientTable currClient={client} />
      <ClientHistoric description={client?.description} />
    </>
  );
};