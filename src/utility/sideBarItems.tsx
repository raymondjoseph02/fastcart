import {
  CategoriesIcon,
  CustomersIcon,
  DashboardIcon,
  ProductsIcon,
  OrderIcon,
  KnowledgeBaseIcon,
  UserIcon,
  GlobalSettingsIcon,
} from "../assets/svg/general";
import { SidebarItems } from "../interface/common";
import { RoutePaths } from "../routes/RoutesPath";

export const sidebarItems: SidebarItems[] = [
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
        name: "Personal Settings",
        link: RoutePaths.PERSONAL_SETTINGS,
        icon: <UserIcon />,
      },
      {
        name: "Global Settings",
        link: RoutePaths.GLOBAL_SETTINGS,
        icon: <GlobalSettingsIcon />,
      },
    ],
  },
];
