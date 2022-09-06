import { AxiosResponse } from 'axios';
import { api, ENDPOINTS } from '../api';
import { AuthResponse } from '../models/response/AuthResponse';

class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(`${ENDPOINTS.LOGIN}`, { email, password });
  }

  static async logout(): Promise<void> {
    return api.post(`${ENDPOINTS.LOG_OUT}`);
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>(`${ENDPOINTS.REGISTRATION}`, {
      email,
      password,
    });
  }
}

export { AuthService };
