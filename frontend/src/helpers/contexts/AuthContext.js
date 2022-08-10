import { createContext } from "react";

const user = JSON.parse(localStorage.getItem('user'));

export const INITIAL_STATE = {
  user: user ? user : null,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: ''
};

export const AuthContext = createContext(INITIAL_STATE);

// Actions
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_FULFILLED = "LOGIN_FULFILLED";
export const LOGIN_REJECTED = "LOGIN_REJECTED";
export const LOGOUT = "LOGOUT";

// Action creators
export const loginPending = () => ({
  type: LOGIN_PENDING
});

export const loginFulfilled = (user) => ({
  type: LOGIN_FULFILLED,
  payload: user
});

export const loginRejected = (message) => ({
  type: LOGIN_REJECTED,
  payload: message
});

export const logout = () => ({
  type: LOGOUT,
});

// Reducer
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        user: null,
        isSuccess: false,
        isLoading: true,
        isError: false,
        message: 'Login em andamento'
      };

    case LOGIN_FULFILLED:
      return {
        user: action.payload,
        isSuccess: true,
        isLoading: false,
        isError: false,
        message: 'O usuário está logado'
      };

    case LOGIN_REJECTED:
      return {
        user: null,
        isSuccess: false,
        isLoading: false,
        isError: true,
        message: action.payload
      };

    case LOGOUT:
      return {
        user: null,
        isSuccess: false,
        isLoading: false,
        isError: false,
        message: 'Usuário fez logout'
      };

    default:
      return state;
  }
};