import OrdersChat from "../components/dashboard/OrdersChat";
import StatCards from "../components/dashboard/StatCards";
import RecentTransactions from "../common/RecentTransactions";
import TopProducts from "../common/TopProducts";
import WeeklySales from "../components/dashboard/WeeklySales";
import { ManageIcon } from "../assets/svg/general";

function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 font-bold text-2xl">Dashboard</h1>

        <button className="ease-linear border border-primary-150 py-2 px-6 rounded hover:bg-primary-200 bg-white hover:text-white transition-colors duration-300 flex items-center justify-center gap-1 text-primary-200 w-fit text-sm md:text-base">
          <ManageIcon /> Manage
        </button>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-[30px]">
        <OrdersChat />
        <WeeklySales />
      </div>

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-6 xl:gap-[30px]">
        <RecentTransactions />
        <TopProducts />
      </div>
    </div>
  );
}

export default Dashboard;
