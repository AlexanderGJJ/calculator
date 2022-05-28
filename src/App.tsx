import React, { useEffect, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';

import { AuthContext } from './context/AuthContext';

const App = () => {
  const { checkAuth, isAuth, user, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/login');
      console.log('checkAuth');
      checkAuth();
    }
  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    } else {
      navigate('/login');
    }
  }, [isAuth]);

  if (isLoading) {
    return <div>'Loading...'</div>;
  }

  return (
    <div>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Registration />} path="/registration" />
        <Route element={<Login />} path="/login" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export { App };
