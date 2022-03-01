import axiosInstance from "./config";

export const getPokemons = (limit = 151) => {
  return axiosInstance.get(`/pokemon?limit=${limit}`);
};