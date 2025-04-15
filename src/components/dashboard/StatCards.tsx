import { UpArrow } from "../../assets/svg/general";
import StatBarChart from "./StatBarChart";
import { dashStatsData } from "../../data/dashboardData";

const StatCards = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[17px] ">
        {dashStatsData.map(
          (stat, index) =>
            stat && (
              <div
                key={index}
                className="bg-white hover:scale-110 transition-transform ease-linear font-inter rounded-md shadow-bg-auth py-1.5 px-3 flex justify-between gap-6 col-span-1 items-center"
              >
                <div className="text-[10px] leading-5">
                  <p className="font-bold text-gray-300 text-base leading-7 ">
                    {stat?.symbol || ""} {stat.count}
                  </p>
                  <p className="text-gray-100 text-nowrap">{stat.title}</p>
                  <span
                    className={
                      " flex items-center gap-1.5 " +
                      (stat.percentageChange >= 0
                        ? "text-green-200"
                        : "text-red-100")
                    }
                  >
                    {stat.percentageChange}%{" "}
                    <UpArrow
                      className={stat.percentageChange >= 0 ? "" : "rotate-180"}
                    />
                  </span>
                </div>
                {stat.icon ? (
                  stat.icon
                ) : (
                  <StatBarChart
                    labels={stat.barData.labels}
                    data={stat.barData.data}
                    maxColor={stat.barData.maxColor}
                    otherColor={stat.barData.otherColor}
                  />
                )}
              </div>
            )
        )}
      </div>
    </>
  );
};

export default StatCards;
