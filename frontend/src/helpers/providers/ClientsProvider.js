import { useEffect, useState } from "react";
import { getClientsAPIHandler } from "../../api/services/clients";
import { ClientsContext } from "../contexts/ClientsContext";
import { useAuth } from "../hooks/useAuth";

export const ClientsProvider = ({ children }) => {
  const { user } = useAuth();
  const [clients, setClients] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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

  console.log(searchResults);

  return (
    <ClientsContext.Provider value={{
      clients,
      setClients,
      searchResults,
      setSearchResults
    }}>
      {children}
    </ClientsContext.Provider>
  );
};