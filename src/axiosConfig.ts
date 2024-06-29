import axios from 'axios';

const API_URL = 'https://gorest.co.in';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
