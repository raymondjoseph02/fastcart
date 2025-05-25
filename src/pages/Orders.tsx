import React, { useState } from "react";
import { ordersData } from "../data/ordersData";
import { Search } from "../assets/svg/general";
import { Select, Option } from "@material-tailwind/react";
import { Heading } from "../common/Heading";

// Define the PaymentStatus type
type PaymentStatus = "Paid" | "Pending";

const ITEMS_PER_PAGE = 14;

const Orders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState<PaymentStatus | "All">(
    "All"
  );
  const [replicatedOrders] = useState(ordersData);

  const filteredOrders = replicatedOrders.filter((order) => {
    const matchesSearch = order.customer
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesFilter =
      paymentFilter === "All" || order.payment === paymentFilter;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredOrders.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleExport = () => {
    const headers = ["ID", "Date", "Customer", "Payment", "Status", "Total"];
    const rows = filteredOrders.map((order) => [
      order.id,
      order.date,
      order.customer,
      order.payment,
      order.status,
      order.total,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-50">
      <Heading
        title="Orders"
        primaryBtnIcon={true}
        SecondaryBtnText="Export"
        handleOnClickSecondaryButton={handleExport}
      />

      <div className="p-8 w-full mt-7 bg-white rounded shadow overflow-hidden">
        {/* Filter + Search */}
        <div className="flex flex-wrap mb-4 justify-between">
          <div className="flex gap-4 text-gray-400 items-center">
            <div className="w-[180px] border border-primary-100 rounded">
              <Select
                value={paymentFilter}
                onChange={(val) => {
                  if (val) {
                    setPaymentFilter(val as PaymentStatus | "All");
                    setCurrentPage(1);
                  }
                }}
                placeholder="Select Payment Status"
                labelProps={{
                  className: "after:border-none before:border-none",
                }}
                containerProps={{ className: "!border-0 !min-w-full" }}
                className="border-0"
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                {["All", "Paid", "Pending"].map((opt) => (
                  <Option key={opt} value={opt}>
                    {opt}
                  </Option>
                ))}
              </Select>
            </div>

            <div className="py-2 px-4 rounded flex gap-2 border border-primary-50">
              <Search className="text-[#7E84A3]" />
              <input
                type="search"
                className="outline-none w-full text-gray-400"
                placeholder="Search orders..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="text-gray-100 text-sm">
            <tr className="border-b border-gray-200 h-[2.75rem]">
              <th className="px-4 py-2">Order</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Customer</th>
              <th className="px-4 py-2">Payment status</th>
              <th className="px-4 py-2">Order Status</th>
              <th className="px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((order) => (
              <tr
                key={order.id}
                className="border-b border-gray-50 h-[3.25rem] text-gray-300 text-sm"
              >
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">{order.customer}</td>
                <td className="px-4 py-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      order.payment === "Paid"
                        ? "bg-green-50 text-green-200"
                        : "bg-gray-200 text-gray-100"
                    }`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      order.status === "Ready"
                        ? "bg-yellow-100 text-white"
                        : order.status === "Shipped"
                        ? "bg-gray-100 text-white"
                        : "bg-primary-200 text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-2">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            ←
          </button>

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded font-medium w-9 h-9 ${
                  currentPage === page
                    ? "text-primary-200 bg-[#ECF2FF]"
                    : "text-gray-100 hover:bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            →
          </button>
        </div>

        <span className="text-base text-gray-100">
          {filteredOrders.length} results
        </span>
      </div>
    </div>
  );
};

export default Orders;
