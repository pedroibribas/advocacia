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