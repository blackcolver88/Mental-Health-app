import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.20:8083/api/users', // Replace with your backend's base URL
});

export default api;