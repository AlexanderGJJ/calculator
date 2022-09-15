import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuth } from './hooks/useAuth';
import { ROUTE_PATHS } from './constants/routePaths';
import { Loader } from './components/Loader';

const App = () => {
  const { checkAuth, isLoading, isAuth } = useAuth();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route element={<ProtectedRoute isAllowed={isAuth} redirectPath={ROUTE_PATHS.LOGIN} />}>
        <Route element={<Main />} path={ROUTE_PATHS.ROOT} />
      </Route>
      <Route element={<Registration />} path={ROUTE_PATHS.REGISTRATION} />
      <Route element={<Login />} path={ROUTE_PATHS.LOGIN} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { App };
