import axios from "axios";

const api = axios.create({
  baseURL: "https://skypass-backend.onrender.com/api"
});

export default api;