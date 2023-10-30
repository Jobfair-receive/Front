import axios from "axios";

export const customAxios = axios.create({
  baseURL: "*",
  withCredentials: true,
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
