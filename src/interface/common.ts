import { JSX } from "react";

export interface SelectFilterProps {
  name: string;
  id?: string;
  option: string[];
  handleOnChange: (value: string) => void;
  value?: string;
  defaultValue?: string;
}
export interface TagProps {
  text: string;
  handleCancle?: () => void;
}

export interface SidebarItems {
  children: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
  title?: string;
}

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
