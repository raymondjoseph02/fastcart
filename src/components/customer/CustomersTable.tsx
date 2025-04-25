import { Check } from "../../assets/svg/general";
import { CustomersTableProps } from "../../interface/customerType";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/RoutesPath";

const CustomersTable = ({
  selected,
  setSelected,
  paged,
}: CustomersTableProps) => {
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
                <p>Name</p>
              </div>
            </th>
            <th className="px-2 py-3">Location</th>
            <th className="px-2 py-3">Orders</th>
            <th className="px-2 py-3">Spent</th>
          </tr>
        </thead>
        <tbody>
          {paged.map((c) => (
            <tr
              key={c.id}
              className=" hover:bg-gray-50 whitespace-nowrap transition-colors border-b border-gray-150 text-sm text-gray-300 font-medium"
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
                    to={`${RoutePaths.CUSTOMERS}/${c.id}`}
                    className="flex items-center  gap-4"
                  >
                    <div className="bg-gray-400 text-lg md:text-2xl font-bold rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white">
                      {c.firstName.charAt(0).toUpperCase()}
                    </div>
                    <p className="whitespace-nowrap">
                      {c.firstName} {c.lastName}
                    </p>
                  </Link>
                </div>
              </td>
              <td className="p-2 ">{c.location}</td>
              <td className="p-2 ">{c.orders.length}</td>
              <td className="p-2">{c.spent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
