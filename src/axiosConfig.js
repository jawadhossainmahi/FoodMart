// src/services/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your base URL
  timeout: 10000,
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token'); // Or get from cookies, context, etc.

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // You can also set other dynamic headers here
    // config.headers['Accept-Language'] = localStorage.getItem('lang') || 'en';

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
