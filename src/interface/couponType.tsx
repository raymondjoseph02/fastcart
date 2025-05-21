import { Dispatch, SetStateAction } from "react";

export interface Coupon {
  id: string;
  couponName: string;
  usage: number;
  status: string;
  startDate: string;
  endDate: string;
  couponCode: string;
  type: string;
}
export interface CouponsTableProps {
  selected: string[];
  paged: Coupon[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}
