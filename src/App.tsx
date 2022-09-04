import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import { ROUTE_PATHS } from './constants/routePaths';

const App = () => {
  const { checkAuth, isLoading, isAuth } = useAuth();

  console.log(useAuth(), 'useAuth()');

  useEffect(() => {
    const check = async () => {
      console.log('check func call');
      console.log(isAuth, 'isAuth');
      if (localStorage.getItem('token')) {
        await checkAuth();
      }
    };

    check(); // func call
  }, []);

  if (isLoading) {
    return <div>'Loading...'</div>;
  }

  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed />}>
        <Route element={<Main />} path={ROUTE_PATHS.ROOT} />
      </Route>
      <Route
        element={<Registration />}
        path={ROUTE_PATHS.REGISTRATION}
      />
      <Route element={<Login />} path={ROUTE_PATHS.LOGIN} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { App };
