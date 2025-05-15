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

import Categories from "../pages/Categories";
import CreateCategory from "../pages/CreateCategory";
import { Products } from "../pages/Products";
import Customers from "../pages/Customers";
import CustomerDetails from "../pages/CustomerDetails";
import ManageCustomer from "../pages/ManageCustomer";
import { CreateProduct } from "../pages/CreateProduct";
import Coupons from "../pages/Coupons";
import ManageCoupon from "../pages/ManageCoupon";
import KnowledgeBase from "../pages/KnowledgeBase";
import GettingStarted from "../pages/GettingStarted";
import PersonalSettings from "../pages/PersonalSettings";
import GlobalSettings from "../pages/GlobalSettings";

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
      },

      { path: RoutePaths.PRODUCTS, element: <Products /> },
      {
        path: RoutePaths.CREATE_PRODUCTS,
        element: <CreateProduct />,
      },
      {
        path: RoutePaths.EDIT_PRODUCT,
        element: <CreateProduct />,
      },

      {
        path: RoutePaths.CATEGORIES,
        element: <Categories />,
      },
      {
        path: RoutePaths.CREATE_CATEGORY,
        element: <CreateCategory />,
      },
      {
        path: RoutePaths.EDIT_CATEGORY,
        element: <CreateCategory />,
      },
      {
        path: RoutePaths.CUSTOMERS,
        element: <Customers />,
      },
      {
        path: RoutePaths.NEW_CUSTOMER,
        element: <ManageCustomer />,
      },
      {
        path: `${RoutePaths.CUSTOMERS}/:id`,
        element: <CustomerDetails />,
      },
      {
        path: `${RoutePaths.EDIT_CUSTOMER}/:id`,
        element: <ManageCustomer />,
      },
      {
        path: RoutePaths.COUPONS,
        element: <Coupons />,
      },
      {
        path: `${RoutePaths.NEW_COUPON}`,
        element: <ManageCoupon />,
      },
      {
        path: `${RoutePaths.EDIT_COUPON}/:id`,
        element: <ManageCoupon />,
      },
      {
        path: RoutePaths.KNOWLEDGE_BASE,
        element: <KnowledgeBase />,
      },
      {
        path: `${RoutePaths.KNOWLEDGE_BASE}/:getting-started`,
        element: <GettingStarted />,
      },
      {
        path: RoutePaths.PERSONAL_SETTINGS,
        element: <PersonalSettings />,
      },
      {
        path: RoutePaths.GLOBAL_SETTINGS,
        element: <GlobalSettings />,
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
  },
]);
