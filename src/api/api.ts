import axios, { AxiosRequestConfig } from 'axios';
import { AuthResponse } from '../models/response/AuthResponse';
import { ENDPOINTS, ROOT_ENDPOINT } from './endpoints';

const api = axios.create({
  withCredentials: true,
  baseURL: ROOT_ENDPOINT,
});

api.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log('interceptors.request');
  const token = localStorage.getItem('token');
  if (!config.headers) {
    config.headers = {};
  }
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originRequest = error.config;

    if (error.response.status === 401 && error.config && !error.config._isRetry) {
      originRequest._isRetry = true;
      try {
        const response = await axios.get<AuthResponse>(`${ENDPOINTS.REFRESH}`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return api.request(originRequest);
      } catch (e) {
        console.log('Не авторизован!');
      }
    }

    throw error;
  }
);

export { api };
