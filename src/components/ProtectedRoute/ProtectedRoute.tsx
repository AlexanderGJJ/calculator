import { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { ROUTE_PATHS } from '../../constants/routePaths';
import { useAuth } from '../../hooks/useAuth';

interface ProtectedRouteProps {
  isAllowed: boolean;
  redirectPath?: string;
  children?: JSX.Element;
}

const ProtectedRoute = ({ isAllowed, redirectPath = '/login1', children }: ProtectedRouteProps) => {
  // const { checkAuth } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   console.log('ProtectedRoute', 'ProtectedRoute');

  //   if (localStorage.getItem('token')) {
  //     checkAuth();
  //   }

  //   if (isAllowed) {
  //     navigate(ROUTE_PATHS.ROOT);
  //   }
  // }, [isAllowed]);

  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children || <Outlet />;
};

export { ProtectedRoute };
