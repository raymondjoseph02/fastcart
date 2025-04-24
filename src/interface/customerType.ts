import { Dispatch, SetStateAction } from "react";

interface Order {
  orderId: string;
  date: string;
  status: string;
  price: string;
}

interface AddressDetails {
  apartment: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  location: string;
  orders: Order[];
  spent: string;
  orderStatus: string;
  tabs: string[];
  notes: string;
  tags: string[];
  address: string;
  addressDetails: AddressDetails;
  email: string;
  phone: string;
}

export interface CustomersTableProps {
  selected: string[];
  paged: Customer[];
  setSelected: Dispatch<SetStateAction<string[]>>;
}

export interface CustomersTablePaginationProps {
  setPage: Dispatch<SetStateAction<number>>;
  perPage: number;
  page: number;
  totalCustomer: number;
}
