import {
  CategoriesIcon,
  CustomersIcon,
  DashboardIcon,
  ProductsIcon,
  OrderIcon,
  KnowledgeBaseIcon,
<<<<<<< HEAD
  UserIcon,
=======
  GlobalSettingsIcon,
>>>>>>> 1b3d3d12d351acce47b28206bb14da0bceec7ff4
} from "../assets/svg/general";
import { SidebarItems } from "../interface/common";
import { RoutePaths } from "../routes/RoutesPath";

<<<<<<< HEAD
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
=======
export const sidebarItems: SidebarItems[] = [
>>>>>>> 1b3d3d12d351acce47b28206bb14da0bceec7ff4
  {
    children: [
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
    ],
  },
  {
    title: "Other Information",
    children: [
      {
        name: "Knowledge Base",
        link: RoutePaths.KNOWLEDGE_BASE,
        icon: <KnowledgeBaseIcon />,
      },
    ],
  },
  {
    title: "Settings",
    children: [
      {
        name: "Global Settings",
        link: RoutePaths.GLOBAL_SETTINGS,
        icon: <GlobalSettingsIcon />,
      },
    ],
  },
  {
    name: "Personal Settings",
    link: RoutePaths.PERSONAL_SETTINGS,
    icon: <UserIcon />,
  },
];
