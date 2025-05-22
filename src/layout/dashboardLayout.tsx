import { useState } from "react";
import { DashboardLayoutProps } from "../interface/dataType";
import { Outlet, useLocation } from "react-router-dom";
import SideBar from "../common/SideBar";

import TopBar from "../common/TopBar";
import { RoutePaths } from "../routes/RoutesPath";

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation(); // Get the current location
  const isDashboardRoute = location.pathname === RoutePaths.DASHBOARD;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full  flex flex-col relative h-screen">
      <TopBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="relative flex-1 ">
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={
            "lg:max-w-[calc(100%-250px)] w-full absolute top-0 right-0 h-full overflow-y-auto py-4 px-5 lg:py-[30px] lg:px-10  " +
            (isDashboardRoute ? "bg-[#FFF6F4]" : "")
          }
        >
          {children ? children : <Outlet />}
        </div>
      </div>
    </div>
  );
};
