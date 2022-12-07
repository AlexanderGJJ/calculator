import { User } from '../../models/user/User';

export interface InitalState {
  isAuth: boolean;
  isLoading: boolean;
  user: User;
}

export interface AuthContext extends InitalState {
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

export enum ACTIONS {
  SET_AUTH = 'SET_AUTH',
  SET_USER = 'SET_USER',
  LOADING = 'LOADING',
}

export type Action =
  | { type: ACTIONS.SET_AUTH; payload: { isAuth: boolean } }
  | { type: ACTIONS.SET_USER; payload: { user: User } }
  | { type: ACTIONS.LOADING; payload: { isLoading: boolean } };

export const initialContext: AuthContext = {
  isAuth: false,
  isLoading: false,
  user: {} as User,
  login: () => {},
  logout: () => {},
  registration: () => {},
  checkAuth: () => {},
};

export const initialStateReducer: InitalState = {
  isAuth: false,
  isLoading: false,
  user: {} as User,
};
