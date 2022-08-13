import { useContext, useEffect, useReducer, useState } from "react";
import { createClientAPIHandler, deleteClientAPIHandler, getClientAPIHandler, getClientsAPIHandler, updateClientAPIHandler } from "../../api/services/clients";
import { ClientsContext } from "../contexts/ClientsContext";
import { clientError, ClientStatesReducer, clientSuccess } from "../reducers/ClientStatesReducer";

export const ClientsProvider = ({ children }) => {
  const [clientStatesState, dispatchClientStates] = useReducer(ClientStatesReducer, {
    isError: false,
    isSuccess: false,
    message: ''
  });
  const [clients, setClients] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [client, setClient] = useState(null);

  useEffect(() => {
    getClients();
  }, []);

  // Get Clients
  const getClients = async () => {
    await getClientsAPIHandler()
      .then(res => {
        setClients(res);
        return res;
      })
      .then(res => setSearchResult(res))
      .catch(err => console.log(err.response.data));
  };

  // Create Client
  const createClient = async (data) => {
    await createClientAPIHandler(data)
      .then(res => dispatchClientStates(clientSuccess(res.message)))
      .catch(err => dispatchClientStates(clientError(err.response.data.message)));
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
      .then(res => dispatchClientStates(clientSuccess(res.message)))
      .catch(err => dispatchClientStates(clientError(err.reponse.data.message)));
  };

  // Delete Client
  const deleteClient = async (id) => {
    await deleteClientAPIHandler(id)
      .then(res => {
        setClient(null);
        dispatchClientStates(clientSuccess(res.message))
      })
      .catch(err => dispatchClientStates(clientError(err.response.data.message)));
  };

  const providerData = {
    clients,
    searchResult,
    client,
    setSearchResult,
    clientStatesState,
    dispatchClientStates,
    getClients,
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