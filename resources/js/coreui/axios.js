import axios from 'axios';
export const HTTP = axios.create({
  baseURL: '127.0.0.1:8888',
})
