import React from 'react';

type Transaction = {
  name: string;
  date: string;
  amount: string;
  status: 'Paid' | 'Pending';
};

const transactions: Transaction[] = [
  { name: 'Jagarnath S.', date: '24.05.2023', amount: '$124.97', status: 'Paid' },
  { name: 'Anand G.', date: '23.05.2023', amount: '$55.42', status: 'Pending' },
  { name: 'Kartik S.', date: '23.05.2023', amount: '$89.90', status: 'Paid' },
  { name: 'Rakesh S.', date: '22.05.2023', amount: '$144.94', status: 'Pending' },
  { name: 'Anup S.', date: '22.05.2023', amount: '$70.52', status: 'Paid' },
];

const StatusBadge: React.FC<{ status: 'Paid' | 'Pending' }> = ({ status }) => {
  const baseClasses = 'px-3 py-1 rounded-sm text-sm font-medium';
  const statusClasses =
    status === 'Paid'
      ? 'bg-green-50 text-green-200'
      : 'bg-gray-200 text-gray-100';
  return <span className={`${baseClasses} ${statusClasses}`}>{status}</span>;
};

const RecentTransactions: React.FC = () => {
  return (
    <div className="w-[33.75rem] h-[24.75rem] shadow-bg-auth rounded-md p-7 border border-gray-50">
      <h2 className="text-base mb-5 text-gray-300 font-bold">Recent Transactions</h2>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-gray-100 border-b-2 border-gray-200 h-11 font-normal">
            <th className="pb-2">Name</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Amount</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="border-b last:border-b-0 border-gray-200 h-[3.25rem] text-gray-300 py-2 font-medium">
              <td>{t.name}</td>
              <td>{t.date}</td>
              <td>{t.amount}</td>
              <td>
                <StatusBadge status={t.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
