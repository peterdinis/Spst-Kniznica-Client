import { Navigate, Outlet } from "react-router-dom";

interface IRouteProps {
    teacherCode: string;
}

function PrivateRoute({teacherCode}: IRouteProps) {
  return teacherCode ? <Outlet /> : <Navigate to="/teacher/login" />;
}

export default PrivateRoute;