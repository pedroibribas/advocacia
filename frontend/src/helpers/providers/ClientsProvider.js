import { useEffect, useState } from "react";
import { ClientsContext } from "../contexts/ClientsContext";
import { createClientAPIHandler, getClientsAPIHandler } from "../../api/services/clients";
import { useAuth } from "../hooks/useAuth";

export const ClientsProvider = ({ children }) => {
  const { user } = useAuth();
  const [clients, setClients] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
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
      state,
      setClients,
      setSearchResults,
      setState,
      createClient,
      resetState,
    }}>
      {children}
    </ClientsContext.Provider>
  );
};