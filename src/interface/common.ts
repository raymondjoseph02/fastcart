import { Dispatch, SetStateAction } from "react";

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

export interface NavBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface TablePaginationProps {
  setPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  page: number;
  totalItems: number;
}

export interface TabsProps {
  onClick: (tab: string) => void;
  activeTabs: string[];
  tabs: string[];
}

export interface StatusBadgeProps {
  status: "Paid" | "Pending";
  value?: string;
}

export interface SidebarLinkProps {
  to: string;
  icon: JSX.Element;
  name: string;
  toggleSidebar: () => void;
}

export interface SidebarItems {
  children: {
    name: string;
    link: string;
    icon: JSX.Element;
  }[];
  title?: string;
}
