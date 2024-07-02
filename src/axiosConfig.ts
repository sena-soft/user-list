import axios from "axios";

const API_URL = "https://gorest.co.in";
const API_TOKEN = 'c11a80b8c1caab1ffe5ec51d21266db6eb26113f6425e04eea6da3644a7230c6';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Authorization":
      `Bearer ${API_TOKEN}`,
  },
});

export default axiosInstance;
