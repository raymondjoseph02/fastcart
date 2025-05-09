import {
  CategoriesIcon,
  CustomersIcon,
  DashboardIcon,
  ProductsIcon,
  OrderIcon,
  CouponIcon,
} from "../assets/svg/general";
import { RoutePaths } from "../routes/RoutesPath";

export const sidebarItems = [
  {
    name: "Dashboard",
    link: RoutePaths.DASHBOARD,
    icon: <DashboardIcon />,
  },
  {
    name: "Orders",
    link: RoutePaths.ORDERS,
    icon: <OrderIcon />,
  },
  {
    name: "Categories",
    link: RoutePaths.CATEGORIES,
    icon: <CategoriesIcon />,
  },
  {
    name: "Products",
    link: RoutePaths.PRODUCTS,
    icon: <ProductsIcon />,
  },
  {
    name: "Customers",
    link: RoutePaths.CUSTOMERS,
    icon: <CustomersIcon />,
  },
  {
    name: "Coupons",
    link: RoutePaths.COUPONS,
    icon: <CouponIcon />,
  },
];
