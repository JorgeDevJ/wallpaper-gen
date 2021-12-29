import axios from "axios";

export const getDataImage = axios.create({
  baseURL: "/api/top",
  headers: {
    Accept: "aplication/json",
  },
});

export const getDataImageSearch = axios.create({
  baseURL: "/api/searchimage",
  headers: {
    Accept: "aplication/json",
  },
});
export const getSearchUser = axios.create({
  baseURL: "/api/user",
  headers: {
    Accept: "aplication/json",
  },
});
export const getIdPhoto = axios.create({
  baseURL: "/api/getphotoid",
  headers: {
    Accept: "aplication/json",
  },
});
