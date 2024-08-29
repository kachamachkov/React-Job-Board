import { Navigate } from 'react-router-dom';
import { useLogout } from '../hooks/useAuth';
import { useEffect } from 'react';

const LogoutPage = () => {
  const logout = useLogout();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to='/' />;
};
export default LogoutPage;
