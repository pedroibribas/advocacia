import axios from 'axios';

export const registerAxiosInstance = () => {
  return axios.create({ baseURL: '/api/users' });
};

export const loginAxiosInstance = () => {
  return axios.create({ baseURL: "/api/users/login" });
};