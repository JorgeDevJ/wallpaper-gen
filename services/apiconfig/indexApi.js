import axios from "axios";

export const getDataImage = axios.create({
  baseURL: "https://api.unsplash.com/",
  params: {
    client_id: 'gqwn6z3i3dvmgHvXTtBwxFYmW-uMKf_E_O09YydTaSQ',
  },
  headers: {
    Accept: "aplication/json",
  },
});
