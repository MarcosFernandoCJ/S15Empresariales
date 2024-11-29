import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/series/api/v1/',
});

// Interceptor para agregar el token a cada solicitud
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default API;
