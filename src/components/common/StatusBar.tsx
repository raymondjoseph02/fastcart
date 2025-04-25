const StatusBadge: React.FC<{ status: "Paid" | "Pending" }> = ({ status }) => {
  const baseClasses = "px-3 py-1 rounded-sm text-sm ";
  const statusClasses =
    status === "Paid"
      ? "bg-green-50 text-green-200"
      : "bg-gray-200 text-gray-100";
  return <span className={`${baseClasses} ${statusClasses}`}>{status}</span>;
};

export default StatusBadge;
