import axios from "axios";

export const getData = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: "gqwn6z3i3dvmgHvXTtBwxFYmW-uMKf_E_O09YydTaSQ",
  },
  headers: {
    Accept: "aplication/json",
  },
});

/* export const getDataImageSearch = axios.create({
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
}); */
