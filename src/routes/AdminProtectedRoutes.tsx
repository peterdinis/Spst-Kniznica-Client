import { Navigate, Outlet } from "react-router-dom";

interface IRouteProps {
    adminCode: string;
    isAdmin: boolean;
}

function PrivateRoute({adminCode, isAdmin}: IRouteProps) {
  return adminCode || isAdmin ? <Outlet /> : <Navigate to="/teacher/login" />;
}

export default PrivateRoute;