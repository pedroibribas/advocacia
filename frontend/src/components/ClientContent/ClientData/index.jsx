import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useClients } from "../../../helpers/providers/ClientsProvider";
import { ClientHistoric } from "./ClientHistoric";
import { ClientTable } from "./ClientTable";

export const ClientData = () => {
  const { client, getClient } = useClients();

  const path = useLocation().pathname.split('/')[2];

  useEffect(() => {
    getClient(path);
  }, [getClient, path]);

  return (
    <>
      <ClientTable currClient={client} />
      <ClientHistoric description={client?.description} />
    </>
  );
};