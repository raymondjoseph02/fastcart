import React from "react";
import StatusBadge from "./StatusBar";

type Transaction = {
  name: string;
  date: string;
  amount: string;
  status: "Paid" | "Pending";
};

const transactions: Transaction[] = [
  {
    name: "Jagarnath S.",
    date: "24.05.2023",
    amount: "$124.97",
    status: "Paid",
  },
  { name: "Anand G.", date: "23.05.2023", amount: "$55.42", status: "Pending" },
  { name: "Kartik S.", date: "23.05.2023", amount: "$89.90", status: "Paid" },
  {
    name: "Rakesh S.",
    date: "22.05.2023",
    amount: "$144.94",
    status: "Pending",
  },
  { name: "Anup S.", date: "22.05.2023", amount: "$70.52", status: "Paid" },
];

const RecentTransactions: React.FC = () => {
  return (
    <div className="w-full shadow-bg-auth rounded-md p-7 border border-gray-50 bg-white">
      <h2 className="text-base mb-5 text-gray-300 font-bold">
        Recent Transactions
      </h2>
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-gray-100 border-b-2 border-gray-150 h-11 font-normal">
              <th className="pb-2 font-normal">Name</th>
              <th className="pb-2 font-normal">Date</th>
              <th className="pb-2 font-normal">Amount</th>
              <th className="pb-2 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr
                key={i}
                className="border-b last:border-b-0 border-gray-200 h-[3.25rem] text-gray-300 py-2  px-2 text-nowrap"
              >
                <td className="px-2 text-nowrap font-medium">{t.name}</td>
                <td className="px-2 text-nowrap">{t.date}</td>
                <td className="px-2 text-nowrap">{t.amount}</td>
                <td className="px-2 text-nowrap">
                  <StatusBadge status={t.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
