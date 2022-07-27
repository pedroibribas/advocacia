export const LoginPending = () => ({
  type: 'LOGIN_PENDING'
});

export const LoginFulfilled = (user) => ({
  type: 'LOGIN_FULFILLED',
  payload: user
});

export const LoginRejected = (message) => ({
  type: 'LOGIN_REJECTED',
  payload: message
});

export const Logout = () => ({
  type: 'LOGOUT',
});