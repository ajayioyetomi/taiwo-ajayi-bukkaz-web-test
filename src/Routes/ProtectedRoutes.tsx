import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { isAuthenticated } from '../utils';

import { MainScreen } from '../views';

export default function ProtectedRoute() {
  const location = useLocation();

  if (!isAuthenticated()) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location }}
      />
    );
  }

  return (
    <MainScreen>
      <Outlet />
    </MainScreen>
    
  );
}
