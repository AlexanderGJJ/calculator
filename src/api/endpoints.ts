export const ROOT_ENDPOINT = import.meta.env.VITE_REACT_APP_API_ENDPOINT;

export const ENDPOINTS = {
  LOGIN: `${ROOT_ENDPOINT}/login`,
  LOG_OUT: `${ROOT_ENDPOINT}/logout`,
  REGISTRATION: `${ROOT_ENDPOINT}/registration`,
  REFRESH: `${ROOT_ENDPOINT}/refresh`,
};
