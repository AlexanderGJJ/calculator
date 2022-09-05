import { createContext, ReactChild, useState, useMemo } from 'react';
import axios from 'axios';

import { User } from '../../models/user/User';
import { AuthService } from '../../services/AuthService';
import { api, API_URL } from '../../api';
import { AuthResponse } from '../../models/response/AuthResponse';

interface AuthContext {
  isAuth: boolean;
  isLoading: boolean;
  user: User;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

const initialState: AuthContext = {
  isAuth: false,
  isLoading: false,
  user: {} as User,
  login: () => {},
  logout: () => {},
  registration: () => {},
  checkAuth: () => {},
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }: { children: ReactChild }) => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<User>({} as User);
  const [isLoading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  const registration = async (email: string, password: string) => {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      setAuth(false);
      setUser({} as User);
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      localStorage.setItem('token', response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e: any) {
      console.log(e, 'error');
      setAuth(false);
      console.log(e.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const contextValues = useMemo(
    () => ({
      isAuth,
      isLoading,
      user,
      login,
      logout,
      registration,
      checkAuth,
    }),
    [isAuth, isLoading, user, login, logout, registration, checkAuth]
  ); // should read dock

  return <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>;
};
