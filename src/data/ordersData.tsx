export type OrderStatus = "Ready" | "Shipped" | "Received";
export type PaymentStatus = "Paid" | "Pending";

export interface Order {
  id: string;
  date: string;
  customer: string;
  payment: PaymentStatus;
  status: OrderStatus;
  total: string;
}

export const ordersData: Order[] = [
    { id: "#12512B", date: "May 5, 4:20 PM", customer: "Tom Anderson", payment: "Paid", status: "Ready", total: "$49.90" },
    { id: "#12523C", date: "May 5, 4:15 PM", customer: "Jayden Walker", payment: "Paid", status: "Ready", total: "$34.36" },
    { id: "#51232A", date: "May 5, 4:13 PM", customer: "Inez Kim", payment: "Paid", status: "Ready", total: "$5.51" },
    { id: "#23534D", date: "May 5, 4:12 PM", customer: "Francisco Henry", payment: "Paid", status: "Shipped", total: "$29.74" },
    { id: "#51233C", date: "May 5, 4:11 PM", customer: "Violet Phillips", payment: "Paid", status: "Shipped", total: "$23.06" },
    { id: "#35622A", date: "May 5, 4:10 PM", customer: "Rosetta Becker", payment: "Paid", status: "Shipped", total: "$87.44" },
    { id: "#34232D", date: "May 5, 4:09 PM", customer: "Dean Love", payment: "Paid", status: "Ready", total: "$44.55" },
    { id: "#56212D", date: "May 5, 4:08 PM", customer: "Nettie Tyler", payment: "Paid", status: "Ready", total: "$36.79" },
    { id: "#23535E", date: "May 5, 4:04 PM", customer: "Miguel Harris", payment: "Pending", status: "Ready", total: "$50.54" },
    { id: "#51234B", date: "May 5, 4:03 PM", customer: "Lena Parks", payment: "Pending", status: "Received", total: "$91.63" },
    { id: "#10001A", date: "May 1, 10:05 AM", customer: "Alice Johnson", payment: "Paid", status: "Ready", total: "$49.99" },
    { id: "#10002B", date: "May 1, 10:10 AM", customer: "Bob Smith", payment: "Pending", status: "Shipped", total: "$23.50" },
    { id: "#10003C", date: "May 1, 10:15 AM", customer: "Charlie Day", payment: "Paid", status: "Received", total: "$85.20" },
    { id: "#10004D", date: "May 1, 10:20 AM", customer: "Dana Lee", payment: "Paid", status: "Shipped", total: "$39.95" },
    { id: "#10005E", date: "May 1, 10:25 AM", customer: "Eli Turner", payment: "Pending", status: "Ready", total: "$67.10" },
    { id: "#10006F", date: "May 2, 11:00 AM", customer: "Fiona Green", payment: "Paid", status: "Received", total: "$12.30" },
    { id: "#10007G", date: "May 2, 11:05 AM", customer: "George Hall", payment: "Paid", status: "Ready", total: "$29.99" },
    { id: "#10008H", date: "May 2, 11:10 AM", customer: "Hannah Young", payment: "Paid", status: "Shipped", total: "$99.99" },
    { id: "#10009I", date: "May 2, 11:15 AM", customer: "Isaac Ford", payment: "Pending", status: "Ready", total: "$58.49" },
    { id: "#10010J", date: "May 2, 11:20 AM", customer: "Julia Clark", payment: "Paid", status: "Received", total: "$10.00" },
    { id: "#10011K", date: "May 3, 9:00 AM", customer: "Kevin Scott", payment: "Paid", status: "Ready", total: "$45.80" },
    { id: "#10012L", date: "May 3, 9:05 AM", customer: "Laura King", payment: "Paid", status: "Shipped", total: "$77.40" },
    { id: "#10013M", date: "May 3, 9:10 AM", customer: "Marcus Bell", payment: "Pending", status: "Ready", total: "$33.33" },
    { id: "#10014N", date: "May 3, 9:15 AM", customer: "Natalie Ross", payment: "Paid", status: "Received", total: "$88.88" },
    { id: "#10015O", date: "May 3, 9:20 AM", customer: "Owen Perez", payment: "Paid", status: "Shipped", total: "$54.25" },
    { id: "#10016P", date: "May 4, 1:00 PM", customer: "Paula Murphy", payment: "Paid", status: "Ready", total: "$60.00" },
    { id: "#10017Q", date: "May 4, 1:05 PM", customer: "Quinn James", payment: "Pending", status: "Received", total: "$17.89" },
    { id: "#10018R", date: "May 4, 1:10 PM", customer: "Riley Adams", payment: "Paid", status: "Shipped", total: "$22.45" },
    { id: "#10019S", date: "May 4, 1:15 PM", customer: "Sophia Rivera", payment: "Paid", status: "Ready", total: "$33.20" },
    { id: "#10020T", date: "May 4, 1:20 PM", customer: "Tyler Brooks", payment: "Pending", status: "Shipped", total: "$90.99" },
    { id: "#10021U", date: "May 5, 2:00 PM", customer: "Ursula Snyder", payment: "Paid", status: "Received", total: "$72.80" },
    { id: "#10022V", date: "May 5, 2:05 PM", customer: "Victor Price", payment: "Paid", status: "Ready", total: "$44.50" },
    { id: "#10023W", date: "May 5, 2:10 PM", customer: "Wendy Graham", payment: "Pending", status: "Shipped", total: "$36.30" },
    { id: "#10024X", date: "May 5, 2:15 PM", customer: "Xander Morgan", payment: "Paid", status: "Received", total: "$19.75" },
    { id: "#10025Y", date: "May 5, 2:20 PM", customer: "Yara Benson", payment: "Paid", status: "Ready", total: "$11.90" },
    { id: "#10026Z", date: "May 6, 3:00 PM", customer: "Zane Douglas", payment: "Pending", status: "Shipped", total: "$25.60" },
    { id: "#10027A", date: "May 6, 3:05 PM", customer: "Amber Stone", payment: "Paid", status: "Received", total: "$59.45" },
    { id: "#10028B", date: "May 6, 3:10 PM", customer: "Bruno Mills", payment: "Paid", status: "Ready", total: "$79.99" },
    { id: "#10029C", date: "May 6, 3:15 PM", customer: "Cynthia Wade", payment: "Pending", status: "Shipped", total: "$48.35" },
    { id: "#10030D", date: "May 6, 3:20 PM", customer: "Derek Lane", payment: "Paid", status: "Received", total: "$66.66" }
  ];
