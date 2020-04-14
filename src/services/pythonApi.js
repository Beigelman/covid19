import axios from "axios";

const api = axios.create({
  baseURL: "https://covid19.insites.tech",
});

export default api;
