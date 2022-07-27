import { loginAxiosInstance, registerAxiosInstance } from "../axios";

export const registerUserService = async (data) => {
  registerAxiosInstance()
    .post("/", data)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response.data.message)
    });
};

export const loginUserService = async (data) => {
  return loginAxiosInstance()
    .post("/", data)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err.response.data.message)
    });
};
