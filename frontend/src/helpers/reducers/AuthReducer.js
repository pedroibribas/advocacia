const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        user: null,
        isSuccess: false,
        isLoading: true,
        isError: false,
        message: 'Login em andamento'
      };

    case "LOGIN_FULFILLED":
      return {
        user: action.payload,
        isSuccess: true,
        isLoading: false,
        isError: false,
        message: 'O usuário está logado'
      };

    case "LOGIN_REJECTED":
      return {
        user: null,
        isSuccess: false,
        isLoading: false,
        isError: true,
        message: action.payload
      };

    case "LOGOUT":
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

export default AuthReducer;