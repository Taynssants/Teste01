// src/services/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // A URL base será lida das variáveis de ambiente
});

export default axiosInstance;
