import { JSX } from "react";

export interface NavBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface SidebarLinkProps {
  to: string;
  icon: JSX.Element;
  name: string;
  toggleSidebar: () => void;
}
