import React, { useEffect, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Registration } from './pages/registration';
import { Login } from './pages/login';
import { NotFound } from './pages/NotFound';
import { AuthContext } from './context/AuthContext';

function App() {
  const { checkAuth, isAuth, user, isLoading } = useContext(AuthContext);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth();
    }
  }, []);

  if (isLoading) {
    return <div>'Loading...'</div>;
  }

  return (
    <div>
      <h3>
        {isAuth ? `Пользователь авторизован ${user.email}` : ' Не авторизован'}
      </h3>
      <h4>
        {user.isActivated
          ? 'Activated'
          : `Пользователь не активирован ${user.email}`}
      </h4>
      <Routes>
        <Route element={<Registration />} path="/" />
        <Route element={<Login />} path="login" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export { App };
