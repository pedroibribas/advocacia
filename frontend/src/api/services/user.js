import { axiosUser } from "../apiUser";

export const createUserAPIHandler = async (data) => {
  const response = await axiosUser.post("/", data)
  return response.data;
};

export const loginUserAPIHandler = async (data) => {
  const response = await axiosUser.post("/login", data);
  return response.data;
};