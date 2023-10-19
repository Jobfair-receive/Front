import customAxios from "../axios/customAxios";

export const createAnswer = async (data) => {
    try {
      const response = await customAxios.post("/test", data);
      return response.data;
 
    } catch (error) {
      console.log(error);
      throw new Error(""); 
    }
  };