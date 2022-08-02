import { useEffect, useState } from "react";
import { ClientsContext } from "../contexts/ClientsContext";
import { createClientAPIHandler, deleteClientAPIHandler, getClientAPIHandler, getClientsAPIHandler, updateClientAPIHandler } from "../../api/services/clients";
import { useAuth } from "../hooks/useAuth";

export const ClientsProvider = ({ children }) => {
  const { user } = useAuth();
  const [clients, setClients] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currClient, setCurrClient] = useState({});
  const [state, setState] = useState({
    isSuccess: false,
    isError: false,
    message: '',
  });

  useEffect(() => {
    if (user) {
      getClientsAPIHandler()
        .then(res => {
          setClients(res);
          return res;
        })
        .then(res => {
          setSearchResults(res);
        })
        .catch(err => console.log(err.response.data.message));
    }
  }, [user]);

  const createClient = (clientData) => {
    createClientAPIHandler(clientData)
      .then(res => setState({ isSuccess: true, isError: false, message: res.message }))
      .catch(err =>
        setState({
          isSuccess: false,
          isError: true,
          message: err.response.data.message
        })
      )
  };

  const getClient = (clientId) => {
    getClientAPIHandler(clientId)
      .then(res => setCurrClient(res))
      .catch(err => console.log(err.response.data.message));
  };

  const updateClient = (clientId, clientData) => {
    updateClientAPIHandler(clientId, clientData)
      .then(res => {
        setCurrClient(res);
        return res;
      })
      .then(res => setState({ isSuccess: true, isError: false, message: res.message }))
      .catch(err =>
        setState({
          isSuccess: false,
          isError: true,
          message: err.response.data.message
        })
      )
  };

  const deleteClient = (clientId) => {
    deleteClientAPIHandler(clientId)
      .then(res => setState({ isSuccess: true, isError: false, message: res.message }));
  };

  const resetState = () => {
    setState({
      isSuccess: false,
      isError: false,
      message: '',
    });
  }

  return (
    <ClientsContext.Provider value={{
      clients,
      searchResults,
      currClient,
      state,
      setClients,
      setSearchResults,
      setState,
      createClient,
      getClient,
      updateClient,
      deleteClient,
      resetState,
    }}>
      {children}
    </ClientsContext.Provider>
  );
};