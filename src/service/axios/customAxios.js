import axios from "axios";

export const customAxios = axios.create({
  baseURL: "https://port-0-acon-backend-euegqv2blnyn4a7i.sel5.cloudtype.app:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.data.message);
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default customAxios;
