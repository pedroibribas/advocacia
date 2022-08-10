import { ClientHistoric } from "./ClientHistoric";
import { ClientTable } from "./ClientTable";

export const ClientData = ({ client }) => {
  return (
    <>
      <ClientTable currClient={client} />
      <ClientHistoric description={client?.description} />
    </>
  );
};