import { FC } from "react";
import { DashboardLayoutProps } from "../interface/dataType";
import { Outlet } from "react-router-dom";
export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => (
  <>
    // nav goes here
    <div>
      // side bar goes her
      {children ? children : <Outlet />}
    </div>
  </>
);
