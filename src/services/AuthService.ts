import { AxiosResponse } from 'axios';
import { api } from '../api';
import { AuthResponse } from '../models/response/AuthResponse';

class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/login', { email, password });
  }

  static async logout(): Promise<void> {
    return api.post('/logout');
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return api.post<AuthResponse>('/registration', {
      email,
      password,
    });
  }
}

export { AuthService };
