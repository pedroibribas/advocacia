import { useContext, useEffect, useState } from "react";
import { createClientAPIHandler, deleteClientAPIHandler, getClientAPIHandler, getClientsAPIHandler, updateClientAPIHandler } from "../../api/services/clients";
import { ClientsContext, INITIAL_STATE } from "../contexts/ClientsContext";

export const ClientsProvider = ({ children }) => {
  const [clients, setClients] = useState(INITIAL_STATE);
  const [searchResult, setSearchResult] = useState([]);
  const [client, setClient] = useState({});

  // Get Clients
  useEffect(() => {
    getClientsAPIHandler()
      .then(res => {
        setClients(res);
        return res;
      })
      .then(res => setSearchResult(res))
      .catch(err => console.log(err.response.data));
  }, []);

  // Create Client
  const createClient = async (data) => {
    await createClientAPIHandler(data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };


  // Get Client
  const getClient = async (id) => {
    await getClientAPIHandler(id)
      .then(res => setClient(res))
      .catch(err => console.log(err));
  };

  // Update Client
  const updateClient = async (id, data) => {
    await updateClientAPIHandler(id, data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // Delete Client
  const deleteClient = async (id) => {
    await deleteClientAPIHandler(id)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const providerData = {
    clients,
    searchResult,
    client,
    setSearchResult,
    getClient,
    createClient,
    updateClient,
    deleteClient,
  };

  return (
    <ClientsContext.Provider value={providerData}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => {
  const context = useContext(ClientsContext);
  return context;
};