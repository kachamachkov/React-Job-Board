import { Navigate } from "react-router-dom";
import { useLogout } from "../hooks/useAuth";

const LogoutPage = () => {
  const logout = useLogout();

  logout();

  return <Navigate to='/' />;
};
export default LogoutPage;