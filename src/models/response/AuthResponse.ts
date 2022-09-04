import { User } from '../user/User';

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
