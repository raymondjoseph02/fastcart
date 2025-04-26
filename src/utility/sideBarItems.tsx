import { DashboardIcon, OrderIcon } from "../assets/svg/general";
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
];
