import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://student-backend-e4fq.onrender.com/api"
});

// Attach token automatically
api.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = token;
  }
  return req;
});

export default api;