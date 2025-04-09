import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutePaths } from "./RoutesPath";
import Login from "../pages/Login";
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
]);
