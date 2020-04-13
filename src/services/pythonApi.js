import axios from "axios";

const api = axios.create({
  baseURL: "http://18.189.27.55:8080",
});

export default api;
