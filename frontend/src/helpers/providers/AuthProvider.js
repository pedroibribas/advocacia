import { useContext, useReducer } from "react";
import { loginUserAPIHandler } from "../../api/services/user";
import { AuthContext, AuthReducer, INITIAL_STATE, loginFulfilled, loginRejected, logout } from "../contexts/AuthContext";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const loginUser = (userData) => {
    loginUserAPIHandler(userData)
      .then(res => {
        const formatedUser = JSON.stringify(res);
        localStorage.setItem('user', formatedUser);
        dispatch(loginFulfilled(res));
      })
      .catch(err => dispatch(loginRejected(err.response.data.message)));
  };

  const logoutUser = () => {
    localStorage.removeItem('user');
    dispatch(logout());
  };

  const providerData = {
    user: state.user,
    isSuccess: state.isSuccess,
    isError: state.isError,
    isLoading: state.isLoading,
    message: state.message,
    dispatch,
    loginUser,
    logoutUser
  };

  return (
    <AuthContext.Provider value={providerData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};
