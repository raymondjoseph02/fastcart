import React, { useState } from "react";
import { ordersData } from "../data/ordersData";
import { Search } from "../assets/svg/general";
import { Check } from "../assets/svg/general";
import { Select, Option } from "@material-tailwind/react";
import DeleteCustomer from "../components/common/modals/DeleteCustomer";

// Define the PaymentStatus type
type PaymentStatus = "Paid" | "Pending";

const ITEMS_PER_PAGE = 14;

const Orders: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [paymentFilter, setPaymentFilter] = useState<PaymentStatus | "All">("All");
  const [replicatedOrders, setReplicatedOrders] = useState(ordersData);

  const filteredOrders = replicatedOrders.filter((order) => {
    const matchesSearch = order.customer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = paymentFilter === "All" || order.payment === paymentFilter;
    return matchesSearch && matchesFilter;
  });

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCheck = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCheckAll = () => {
    const allIds = paginatedData.map((item) => item.id);
    const allSelected = allIds.every((id) => selected.includes(id));
    setSelected((prev) =>
      allSelected
        ? prev.filter((id) => !allIds.includes(id))
        : [...prev, ...allIds.filter((id) => !prev.includes(id))]
    );
  };

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

    const csvContent = [headers.join(","), ...rows.map((row) => row.join(","))].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "orders.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = () => {
    if (selected.length === 0) {
      alert("No orders selected for deletion.");
      return;
    }

    const updatedOrders = replicatedOrders.filter(
      (order) => !selected.includes(order.id)
    );

    setReplicatedOrders(updatedOrders);
    setSelected([]);
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Orders</h1>
        <div className="flex gap-3">
          <button onClick={handleExport} className="bg-white text-primary-200 h-10 w-[6.125rem] rounded">
            Export
          </button>
          <button className="bg-primary-200 text-white h-10 w-[9.1875rem] rounded">+ Add Order</button>
        </div>
      </div>

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
                labelProps={{ className: "after:border-none before:border-none" }}
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

          <div className="flex gap-2 items-center">
            <DeleteCustomer
              disabled={selected.length < 1}
              buttonType="icon"
              onDelete={handleDelete}
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-left">
          <thead className="text-gray-100 text-sm">
            <tr className="border-b border-gray-200 h-[2.75rem]">
              <th className="px-4 py-2">
                <div className="flex items-center relative">
                  <input
                    type="checkbox"
                    checked={paginatedData.every((d) => selected.includes(d.id))}
                    onChange={handleCheckAll}
                    className="flex items-center justify-center peer w-5 h-5 appearance-none border border-primary-150 rounded checked:bg-primary-200 checked:border-0 cursor-pointer"
                  />
                  <Check className="absolute w-3 h-3 top-1 left-1 stroke-white hidden peer-checked:block pointer-events-none" />
                </div>
              </th>
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
              <tr key={order.id} className="border-b border-gray-50 h-[3.25rem] text-gray-300 text-sm">
                <td className="px-4 py-2">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={selected.includes(order.id)}
                      onChange={() => handleCheck(order.id)}
                      className="peer w-5 h-5 appearance-none border border-primary-150 rounded checked:bg-primary-200 checked:border-0 cursor-pointer"
                    />
                    <Check className="absolute w-3 h-3 top-1 left-1 stroke-white hidden peer-checked:block pointer-events-none" />
                  </div>
                </td>
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
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"
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
              currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"
            }`}
          >
            →
          </button>
        </div>

        <span className="text-base text-gray-100">{filteredOrders.length} results</span>
      </div>
    </div>
  );
};

export default Orders;
