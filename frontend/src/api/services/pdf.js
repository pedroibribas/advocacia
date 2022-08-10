import { axiosPDF } from "../apiPDF";

export const getPDFAPIHandler = async (data) => {
  const response = await axiosPDF.post("/", data, {
    responseType: "arraybuffer",
    headers: {
      "Accept": "application/pdf"
    }
  });

  return response.data;
};