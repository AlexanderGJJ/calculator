import React, { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { checkAuth, isLoading, isAuth } = useContext(AuthContext);

  useEffect(() => {
    const check = async () => {
      if (localStorage.getItem('token')) {
        await checkAuth();
        console.log(isAuth, 'isAuth');
      }
    };

    check();
  }, []);

  if (isLoading) {
    return <div>'Loading...'</div>;
  }

  return (
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<Registration />} path="/registration" />
      <Route element={<Login />} path="/login" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { App };
