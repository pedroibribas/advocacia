import { axiosClient } from "../apiClient";

export const getClientsAPIHandler = async () => {
  const response = await axiosClient.get("/");
  return response.data;
};

export const createClientAPIHandler = async (data) => {
  const response = await axiosClient.post("/", data);
  return response.data;
};

export const getClientAPIHandler = async (id) => {
  const response = await axiosClient.get("/" + id);
  return response.data;
};

export const updateClientAPIHandler = async (id, data) => {
  const response = await axiosClient.patch("/" + id, data);
  return response.data;
};

export const deleteClientAPIHandler = async (id) => {
  const response = await axiosClient.delete("/" + id);
  return response.data;
};
