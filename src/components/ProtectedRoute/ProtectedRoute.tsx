import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath: string;
  children?: JSX.Element; // TODO: выяснить что делать с этим
}

const ProtectedRoute = ({ isAllowed, redirectPath, children }: ProtectedRouteProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export { ProtectedRoute };
