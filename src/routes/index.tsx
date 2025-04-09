import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./RoutesPath";
import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";
import ConfirmEmail from "../pages/ConfirmEmail";
import RegisterationComplete from "../pages/RegisterationComplete";
import Register from "../pages/Register";

export const routes = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Navigate to={RoutePaths.LOG_IN} />,
  },
  {
    path: RoutePaths.LOG_IN,
    element: <Login />,
  },
  {
    path: RoutePaths.REGISTER,
    element: <Register />,
  },
  {
    path: RoutePaths.PASSWORD_RESET,
    element: <PasswordReset />,
  },
  {
    path: RoutePaths.CONFIRM_EMAIL,
    element: <ConfirmEmail />,
  },
  {
    path: RoutePaths.REGISTERATION_COMPLETE,
    element: <RegisterationComplete />,
  },
]);

