import { Select, Option } from "@material-tailwind/react";

import { useEffect, useState } from "react";
import LineChat from "./LineChart";

const OrdersChat = () => {
  const [timeSelected, setTimeSelected] = useState<string | undefined>("12h");
  useEffect(() => {
    console.log(timeSelected);
  }, [timeSelected]);
  return (
    <div className="px-7 bg-white pt-7 pb-5 max-w-[51.6rem] rounded-md">
      <div className="space-y-6">
        <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
          <p className="text-base font-semibold leading-6 text-gray-300 sm:font-bold">
            Orders Over Time
          </p>
          <div className="flex flex-col gap-6 pt-2 w-fit">
            <Select
              variant="static"
              label=""
              animate
              className="text-sm font-normal leading-5 text-gray-100 capitalize bg-white border-none appearance-auto focus:bg-transparent focus:outline-none "
              value={timeSelected}
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              onChange={(value: any) => setTimeSelected(value)}
            >
              <Option value="12h">last 12 hours</Option>
              <Option value="24h">last 24 hours</Option>
              <Option value="7d">last 7 days</Option>
              <Option value="30d">last 30 days</Option>
            </Select>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 sm:items-center sm:flex-row">
          <div className="flex gap-10">
            <div>
              <p className="text-lg font-bold leading-7 text-gray-300 sm:text-xl">
                645
              </p>
              <p className="text-sm leading-5 text-gray-100">
                Orders on May 22
              </p>
            </div>
            <div>
              <p className="text-lg font-bold leading-7 text-gray-300 sm:text-xl">
                472
              </p>
              <p className="text-sm leading-5 text-gray-100">
                Orders on May 21
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                className="relative w-5 h-5 border rounded outline-none appearance-none border-primary-150 shrink-0 checked:bg-primary-200 checked:border-0 hover:cursor-pointer bg-primary-100"
              />
              <p className="text-sm leading-5 text-gray-100 capitalize">
                may 21
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                className="relative w-5 h-5 border rounded outline-none appearance-none border-primary-150 shrink-0 checked:bg-primary-200 checked:border-0 hover:cursor-pointer bg-primary-100"
              />
              <p className="text-sm leading-5 text-gray-100 capitalize">
                may 22
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <LineChat />
      </div>
    </div>
  );
};

export default OrdersChat;
