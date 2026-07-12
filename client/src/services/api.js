import axios from "axios";

const api = axios.create({
  baseURL: "https://eventhub-backend-dmsu.onrender.com/api"
});

export default api;