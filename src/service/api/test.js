import customAxios from "../axios/customAxios";

export const createAnswer = async (data) => {
    try {
      const response = await customAxios.post("/경로경로", data);
      return response.data;
 
    } catch (error) {
      console.log(error);
      throw new Error(""); 
    }
  };