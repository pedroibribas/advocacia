import axios from 'axios';

export const axiosUser = axios.create({
  baseURL: "/api/users"
});