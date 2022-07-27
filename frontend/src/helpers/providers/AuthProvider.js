import { useEffect, useReducer } from "react";
import { AuthContext, INITIAL_STATE } from "../contexts/AuthContext";
import AuthReducer from "../reducers/AuthReducer";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    const formatedUser = JSON.stringify(state.user);
    localStorage.setItem('user', formatedUser);
  }, [state.user]);

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isSuccess: state.isSuccess,
      isError: state.isError,
      isLoading: state.isLoading,
      message: state.message,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};
