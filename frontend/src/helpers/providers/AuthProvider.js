import { useReducer } from "react";
import { loginUserAPIHandler } from "../../api/services/user";
import { LoginFulfilled, LoginRejected, Logout } from "../actions/AuthActions";
import { AuthContext, INITIAL_STATE } from "../contexts/AuthContext";
import AuthReducer from "../reducers/AuthReducer";

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const loginUser = (userData) => {
    loginUserAPIHandler(userData)
      .then(res => {
        const formatedUser = JSON.stringify(res);
        localStorage.setItem('user', formatedUser);
        dispatch(LoginFulfilled(res));
      })
      .catch(err => dispatch(LoginRejected(err.response.data.message)));
  };

  const logoutUser = () => {
    localStorage.removeItem('user');
    dispatch(Logout());
  };

  return (
    <AuthContext.Provider value={{
      user: state.user,
      isSuccess: state.isSuccess,
      isError: state.isError,
      isLoading: state.isLoading,
      message: state.message,
      dispatch,
      loginUser,
      logoutUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
