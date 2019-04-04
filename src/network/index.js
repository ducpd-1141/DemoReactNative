import { create } from 'apisauce';
import { BASE_URL } from '../constants/index';

const api = create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

export default api;
