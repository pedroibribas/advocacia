// Actions
const CLIENT_SUCCESS = 'CLIENT_SUCCESS';
const CLIENT_ERROR = 'CLIENT_ERROR';
const RESET = 'RESET';

// Action creators

export const clientSuccess = (message) => ({
  type: CLIENT_SUCCESS,
  payload: message
});

export const clientError = (message) => ({
  type: CLIENT_ERROR,
  payload: message
});

export const reset = () => ({
  type: RESET
});

// Reducer
export const ClientStatesReducer = (state, action) => {
  switch (action.type) {
    case CLIENT_SUCCESS:
      return {
        isError: false,
        isSuccess: true,
        message: action.payload
      };

    case CLIENT_ERROR:
      return {
        isError: true,
        isSuccess: false,
        message: action.payload
      };

    case RESET:
      return {
        isError: false,
        isSuccess: false,
        message: ''
      };

    default:
      return state;
  }
};