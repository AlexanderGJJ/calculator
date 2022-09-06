// export const ENDPOINTS_ROOT = process.env.REACT_APP_API_ENDPOINT;
export const ENDPOINTS_ROOT = 'http://localhost:7001/api';

export const ENDPOINTS = {
  LOGIN: `${ENDPOINTS_ROOT}/login`,
  LOG_OUT: `${ENDPOINTS_ROOT}/logout`,
  REGISTRATION: `${ENDPOINTS_ROOT}/registration`,
  REFRESH: `${ENDPOINTS_ROOT}/refresh`,
};
