import { createContext, ReactChild, useState } from 'react';
import axios from 'axios';

import { IUser } from '../../models/user/IUser';
import { AuthService } from '../../services/AuthService';
import { API_URL } from '../../http';

interface AuthContext {
  isAuth: boolean;
  isLoading: boolean;
  user: IUser;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

const initialState: AuthContext = {
  isAuth: false,
  isLoading: false,
  user: {} as IUser,
  login: () => {},
  logout: () => {},
  registration: () => {},
  checkAuth: () => {},
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = (props: { children: ReactChild }) => {
  const [isAuth, setAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [isLoading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e) {
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
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      setAuth(false);
      setUser({} as IUser);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });

      console.log(response);

      localStorage.setItem('token', response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const contextValues = {
    isAuth,
    isLoading,
    user,
    login,
    logout,
    registration,
    checkAuth,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {props.children}
    </AuthContext.Provider>
  );
};
