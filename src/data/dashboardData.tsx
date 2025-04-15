import { Cart, TotalRevenue } from "../assets/svg/general";

export const dashStatsData = [
  {
    title: "Total Revenue",
    count: 10.54,
    percentageChange: 22.45,
    icon: <TotalRevenue />,
    symbol: "$",
  },
  {
    title: "Orders",
    count: 1056,
    percentageChange: 15.34,
    icon: <Cart />,
  },
  {
    title: "Unique Visits",
    count: 5420,
    percentageChange: -10.24,
    barData: {
      labels: ["1", "2", "3", "4", "5"],
      data: [10, 20, 50, 40, 30],
      maxColor: "#FFC700",
      otherColor: "#FFF4C9",
    },
  },
  {
    title: "New Users",
    count: 1650,
    percentageChange: 15.34,
    barData: {
      labels: ["1", "2", "3", "4", "5"],
      data: [5, 10, 20, 30, 15],
      maxColor: "#1FD286",
      otherColor: "#C4F8E2",
    },
  },
  {
    title: "Existing Users",
    count: 9653,
    percentageChange: 22.45,
    barData: {
      labels: ["1", "2", "3", "4", "5"],
      data: [40, 60, 50, 20, 30],
      maxColor: "#1E5EFF",
      otherColor: "#D9E4FF",
    },
  },
];
