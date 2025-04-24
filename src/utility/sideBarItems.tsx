import { CustomersIcon, DashboardIcon } from "../assets/svg/general";
import { RoutePaths } from "../routes/RoutesPath";

export const sidebarItems = [
  {
    name: "Dashboard",
    link: RoutePaths.DASHBOARD,
    icon: <DashboardIcon />,
  },
  {
    name: "Customers",
    link: RoutePaths.CUSTOMERS,
    icon: <CustomersIcon />,
  },
];
