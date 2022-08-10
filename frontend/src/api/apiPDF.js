import axios from "axios";

export const axiosPDF = axios.create({
  baseURL: "/api/pdf"
});