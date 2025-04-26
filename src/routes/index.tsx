import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./RoutesPath";
import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";
import ConfirmEmail from "../pages/ConfirmEmail";
import RegisterationComplete from "../pages/RegisterationComplete";
import Register from "../pages/Register";
import { DashboardLayout } from "../layout/dashboardLayout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";

export const routes = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <Navigate to={RoutePaths.LOG_IN} />,
  },
  {
    path: RoutePaths.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        path: RoutePaths.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: RoutePaths.ORDERS,
        element: <Orders />,
      }
    ],
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
    path: RoutePaths.FORGOT_PASSWORD,
    element: <PasswordReset />,
  },
  {
    path: RoutePaths.CONFIRM_EMAIL,
    element: <ConfirmEmail />,
  },
  {
    path: RoutePaths.REGISTERATION_COMPLETE,
    element: <RegisterationComplete />,
  }
]);
