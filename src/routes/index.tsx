import { createBrowserRouter } from "react-router-dom";
import { RoutePaths } from "./RoutesPath";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { DashboardLayout } from "../layout/dashboardLayout";
import Dashboard from "../pages/Dashboard";

export const routes = createBrowserRouter([
  {
    path: RoutePaths.ROOT,
    element: <DashboardLayout />,
    children: [
      {
        path: RoutePaths.DASHBOARD,
        element: <Dashboard />,
      },
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
]);
