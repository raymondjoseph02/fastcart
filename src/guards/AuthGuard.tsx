import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "../pages/auth/Login";

interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const location = useLocation();
  const accessToken = Cookies.get("accessToken");

  if (!accessToken) {
    return location.pathname !== "/" ? (
      <Navigate to="/" state={{ from: location }} replace />
    ) : (
      <Login />
    );
  }

  return <>{children}</>;
}

export default AuthGuard;
