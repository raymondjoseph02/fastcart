const customers = [
  {
    id: "1",
    firstName: "Rakesh",
    lastName: "Mishra",
    location: "Sawaynchester",
    orders: [
      {
        orderId: "#23534D",
        date: "May 25, 3:12 PM",
        status: "Pending",
        price: "$29.74",
      },
      {
        orderId: "#12512B",
        date: "May 10, 2:00 PM",
        status: "Completed",
        price: "$23.06",
      },
      {
        orderId: "#23534D",
        date: "April 18, 8:00 AM",
        status: "Completed",
        price: "$29.74",
      },
    ],
    spent: "$96.14",
    orderStatus: "Ready",
    tabs: ["All Customers", "New Customers", "From Europe"],
    notes: "",
    tags: ["VIP Customer"],
    address: "123 Main St, Sawaynchester, Nigeria",
    addressDetails: {
      apartment: "123 Main St",
      city: "Sawaynchester",
      postalCode: "844124",
      country: "Nigeria",
    },
    email: "rakeshmishra@example.com",
    phone: "+44 123 456 7890",
  },
  {
    id: "2",
    firstName: "Lakshman",
    lastName: "Singh",
    location: "Kaydenville",
    orders: [
      {
        orderId: "#23534D",
        date: "May 25, 3:12 PM",
        status: "Pending",
        price: "$29.74",
      },
      {
        orderId: "#12512B",
        date: "May 10, 2:00 PM",
        status: "Completed",
        price: "$23.06",
      },
    ],
    spent: "$22.18",
    orderStatus: "Ready",
    tabs: ["All Customers", "Returning Customers"],
    notes: "",
    tags: ["Returning"],
    address: "456 Oak St, Kaydenville, United States",
    addressDetails: {
      apartment: "456 Oak St",
      city: "Kaydenville",
      postalCode: "123456",
      country: "United States",
    },
    email: "lakshmansingh@example.com",
    phone: "+1 555 123 4567",
  },
  {
    id: "3",
    firstName: "Dinanath",
    lastName: "Sah",
    location: "East Freidaton",
    orders: [
      {
        orderId: "#23534D",
        date: "May 25, 3:12 PM",
        status: "Pending",
        price: "$29.74",
      },
      {
        orderId: "#12512B",
        date: "May 10, 2:00 PM",
        status: "Completed",
        price: "$23.06",
      },
    ],
    spent: "$59.64",
    orderStatus: "Ready",
    tabs: ["All Customers", "Returning Customers", "From Europe"],
    notes: "",
    tags: ["New Customer"],
    address: "789 Pine St, East Freidaton, India",
    addressDetails: {
      apartment: "789 Pine St",
      city: "East Freidaton",
      postalCode: "789101",
      country: "India",
    },
    email: "dinanathsah@example.com",
    phone: "+91 987 654 3210",
  },
  {
    id: "4",
    firstName: "Anmol",
    lastName: "Yadav",
    location: "South Marcellus",
    orders: [
      {
        orderId: "#23534D",
        date: "May 25, 3:12 PM",
        status: "Pending",
        price: "$29.74",
      },
    ],
    spent: "$54.52",
    orderStatus: "Ready",
    tabs: ["All Customers", "New Customers"],
    notes: "",
    tags: ["VIP Customer", "Europe"],
    address: "321 Birch St, South Marcellus, France",
    addressDetails: {
      apartment: "321 Birch St",
      city: "South Marcellus",
      postalCode: "212134",
      country: "France",
    },
    email: "anmol@example.com",
    phone: "+33 1 234 567 890",
  },
  {
    id: "5",
    firstName: "Raushan",
    lastName: "Singh Rajput",
    location: "South Olestad",
    orders: [
      {
        orderId: "#76543E",
        date: "April 12, 8:00 AM",
        status: "Completed",
        price: "$23.06",
      },
      {
        orderId: "#51323C",
        date: "April 10, 4:12 PM",
        status: "Completed",
        price: "$23.06",
      },
    ],
    spent: "$45.80",
    orderStatus: "Shipped",
    tabs: ["All Customers", "Returning Customers"],
    notes: "",
    tags: ["Frequent Shopper"],
    address: "654 Maple St, South Olestad, United States",
    addressDetails: {
      apartment: "654 Maple St",
      city: "South Olestad",
      postalCode: "456789",
      country: "United States",
    },
    email: "raushanrajput@example.com",
    phone: "+1 555 987 6543",
  },
];

const totalCustomers = 240; // For 24 pages, 10 items per page
export const customersData = Array.from(
  { length: totalCustomers },
  (_, index) => {
    const customer = customers[index % customers.length]; // replicate the existing data
    return {
      ...customer,
      id: `${index + 1}`,
      spent: `$${(Math.random() * 100 + 40).toFixed(2)}`, // Randomized spending amount
    };
  }
);
