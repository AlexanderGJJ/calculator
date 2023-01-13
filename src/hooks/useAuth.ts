import { useContext, useEffect } from 'react';
import { AuthContext } from '../context';

const useAuth = () => {
  const context = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      context.checkAuth();
    }
  }, []);

  return context;
};

// pass mihotin123

export { useAuth };
