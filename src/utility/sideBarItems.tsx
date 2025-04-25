import {
  CategoriesIcon,
  DashboardIcon,
  ProductsIcon,
} from "../assets/svg/general";
import { RoutePaths } from "../routes/RoutesPath";

export const sidebarItems = [
  {
    name: "Dashboard",
    link: RoutePaths.DASHBOARD,
    icon: <DashboardIcon />,
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
];
