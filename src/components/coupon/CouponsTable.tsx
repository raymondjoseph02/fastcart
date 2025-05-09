import { Check, ProductsIcon, ShippingIcon } from "../../assets/svg/general";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/RoutesPath";
import StatusBadge from "../common/StatusBar";
import { CouponsTableProps } from "../../interface/couponType";
import { formatDate } from "../../utility/time";

const CouponsTable = ({ selected, setSelected, paged }: CouponsTableProps) => {
  const toggleSelectAll = () => {
    if (selected.length === paged.length) {
      setSelected([]);
    } else {
      setSelected(paged.map((c) => c.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelected(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // Deselect if already selected
          : [...prevSelected, id] // Select if not already selected
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto ">
        <thead>
          <tr className="text-left text-gray-100 text-sm border-b-2 border-gray-150">
            <th className="px-2 py-3">
              <div className="flex items-center w-full gap-3">
                <div className="flex items-center relative ">
                  <input
                    type="checkbox"
                    checked={paged.every((c) => selected.includes(c.id))}
                    onChange={toggleSelectAll}
                    className="relative w-5 outline-none h-5 border border-primary-150 rounded appearance-none peer shrink-0  checked:bg-primary-200 checked:border-0 hover:cursor-pointer"
                  />
                  <Check className="absolute hidden w-3 h-3 mt-[0.7px] ml-[4.55px] outline-none pointer-events-none peer-checked:block stroke-white " />
                </div>
                <p>Coupon Name</p>
              </div>
            </th>
            <th className="px-2 py-3">Usage</th>
            <th className="px-2 py-3">Status</th>
            <th className="px-2 py-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((c) => (
            <tr
              key={c.id}
              className=" hover:bg-gray-50 whitespace-nowrap transition-colors border-b border-gray-150 text-sm text-gray-300 "
            >
              <td className="p-2 text-gray-800 ">
                <div className="flex items-center w-full gap-3">
                  <div className="flex items-center relative ">
                    <input
                      type="checkbox"
                      checked={selected.includes(c.id)}
                      onChange={() => toggleSelect(c.id)}
                      className="relative w-5 outline-none h-5 border border-primary-150 rounded appearance-none peer shrink-0  checked:bg-primary-200 checked:border-0 hover:cursor-pointer"
                    />
                    <Check className="absolute hidden w-3 h-3 mt-[0.7px] ml-[4.55px] outline-none pointer-events-none peer-checked:block stroke-white " />
                  </div>
                  <Link
                    to={`${RoutePaths.EDIT_COUPON}/${c.id}`}
                    className="flex items-center  gap-4"
                  >
                    <div
                      className={
                        "rounded p-3 text-white " +
                        (c.type === "shipping"
                          ? "bg-primary-500"
                          : "bg-gray-500")
                      }
                    >
                      {c.type === "shipping" ? (
                        <ProductsIcon />
                      ) : (
                        <ShippingIcon />
                      )}
                    </div>
                    <span>
                      <p className="whitespace-nowrap font-medium">
                        {c.couponName}
                      </p>
                      <p className="whitespace-nowrap text-gray-100">
                        {c.couponCode}
                      </p>
                    </span>
                  </Link>
                </div>
              </td>
              <td className="p-2 ">{c.usage} times</td>
              <td className="p-2 ">
                <StatusBadge
                  status={c.status === "Active" ? "Paid" : "Pending"}
                  value={c.status}
                />
              </td>
              <td className="p-2">
                {formatDate(c.startDate) + " - " + formatDate(c.endDate)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponsTable;
