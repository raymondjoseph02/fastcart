import { Dispatch, SetStateAction } from "react";

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
