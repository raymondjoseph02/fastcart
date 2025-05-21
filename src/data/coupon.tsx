import {
  FixedDiscount,
  PercentageDiscount,
  ProductsIcon,
  ShippingIcon,
} from "../assets/svg/general";

const couponTransaction = [
  {
    couponName: "Summer discount 10% off",
    usage: 15,
    status: "Active",
    startDate: "2020-05-05T00:00:00",
    endDate: "2020-05-15T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
  {
    couponName: "Free shipping on all items",
    usage: 42,
    status: "Active",
    startDate: "2020-05-05T00:00:00",
    endDate: "2020-05-15T23:59:59",
    type: "shipping",
    couponCode: "Summer2020",
  },
  {
    couponName: "Discount for women clothes 5%",
    usage: 12,
    status: "Active",
    startDate: "2020-04-12T00:00:00",
    endDate: "2020-04-20T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
  {
    couponName: "Summer discount 10% off",
    usage: 8,
    status: "Active",
    startDate: "2020-04-12T00:00:00",
    endDate: "2020-04-20T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
  {
    couponName: "Free shipping on all items",
    usage: 18,
    status: "Active",
    startDate: "2020-04-12T00:00:00",
    endDate: "2020-04-20T23:59:59",
    type: "shipping",
    couponCode: "Shipfreetomee15",
  },
  {
    couponName: "Discount for women clothes 10%",
    usage: 57,
    status: "Active",
    startDate: "2020-02-14T00:00:00",
    endDate: "2020-02-20T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
  {
    couponName: "Summer discount 15% off",
    usage: 16,
    status: "Active",
    startDate: "2020-02-14T00:00:00",
    endDate: "2020-02-20T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
  {
    couponName: "Free shipping on all items",
    usage: 15,
    status: "Expired",
    startDate: "2020-02-14T00:00:00",
    endDate: "2020-02-20T23:59:59",
    type: "shipping",
    couponCode: "Shipfreetomee15",
  },
  {
    couponName: "Discount for women clothes 10%",
    usage: 12,
    status: "Expired",
    startDate: "2020-02-14T00:00:00",
    endDate: "2020-02-20T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
  {
    couponName: "Discount for women clothes 5%",
    usage: 76,
    status: "Expired",
    startDate: "2020-02-14T00:00:00",
    endDate: "2020-02-20T23:59:59",
    type: "discount",
    couponCode: "Womenclothing5",
  },
];

const totalCustomers = 120; // For 12 pages, 10 items per page
export const couponData = Array.from({ length: totalCustomers }, (_, index) => {
  const customer = couponTransaction[index % couponTransaction.length];
  return {
    ...customer,
    id: `${index + 1}`,
  };
});

export const couponType = [
  {
    title: "Fixed Discount",
    icon: <FixedDiscount />,
  },
  {
    title: "Percentage Discount",
    icon: <PercentageDiscount />,
  },
  {
    title: "Free Shipping",
    icon: <ShippingIcon />,
  },
  {
    title: "Price Discount",
    icon: <ProductsIcon />,
  },
];
