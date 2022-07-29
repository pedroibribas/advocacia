import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "/api/clients"
});

axiosClient.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem("user")).token;

  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }

  return config;
}, error => Promise.reject(error)
);