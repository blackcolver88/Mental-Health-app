import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.18.3.56:8083/api/users', // Replace with your backend's base URL
});

export default api;