// export const ENDPOINTS_ROOT = process.env.REACT_APP_API_ENDPOINT;
export const ROOT_ENDPOINT = 'http://localhost:7001/api';

export const ENDPOINTS = {
  LOGIN: `${ROOT_ENDPOINT}/login`,
  LOG_OUT: `${ROOT_ENDPOINT}/logout`,
  REGISTRATION: `${ROOT_ENDPOINT}/registration`,
  REFRESH: `${ROOT_ENDPOINT}/refresh`,
};
