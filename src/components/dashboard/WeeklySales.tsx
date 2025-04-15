import WeeklySalesChart from "./WeeklySalesChart";

const WeeklySales = () => {
  return (
    <div className="bg-white shadow-bg-auth rounded-md p-7 w-full flex flex-col col-span-1">
      <p className="text-gray-300 font-bold mb-6">Last 7 Days Sales</p>
      <div className="flex-1 flex flex-col sm:flex-row lg:flex-col justify-between  gap-y-[30px]">
        <div>
          <div className="mb-5">
            <p className="text-gray-300 text-xl font-bold">1,259</p>
            <p className="text-gray-100 text-sm">Items Sold</p>
          </div>

          <div>
            <p className="text-gray-300 text-xl font-bold">$12,546</p>
            <p className="text-gray-100 text-sm">Revenue</p>
          </div>
        </div>

        <hr className="h-[1px] w-full text-gray-150 sm:hidden lg:inline-block " />

        <WeeklySalesChart />
      </div>
    </div>
  );
};

export default WeeklySales;
