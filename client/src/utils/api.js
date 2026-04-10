import axios from "axios";

const api = axios.create({
  baseURL: "https://student-backend-e4fq.onrender.com"
});

export default api;