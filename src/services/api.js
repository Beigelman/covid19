import axios from "axios";

const api = axios.create({
  baseURL: "https://covid.mathdro.id/api"
});

export default api;
