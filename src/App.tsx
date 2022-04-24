import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Registration } from './pages/registration';
import { Login } from './pages/login';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Registration />} path="/" />
      <Route element={<Login />} path="login" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export { App };
