import { useMemo, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { EditIcon, Plus, Search } from "../assets/svg/general";
import { customersData } from "../data/customers";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
import DeleteCustomer from "../components/common/modals/DeleteCustomer";
import CustomersTable from "../components/customer/CustomersTable";
import CustomersTablePagination from "../components/customer/CustomersPagination";

const TABS = [
  "All Customers",
  "New Customers",
  "From Europe",
  "Returning Customers",
] as const;

const orderRanges = ["All", "1-5 Orders", "6-10 Orders", "11+ Orders"] as const;

export default function Customers() {
  const [activeTabs, setActiveTabs] = useState<string[]>(["All Customers"]);
  const [statusFilter, setStatusFilter] = useState<string>(orderRanges[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  

  const [replicatedCustomers, setReplicatedCustomers] = useState(customersData); // Manage replicated customers state

  const navigate = useNavigate();

  const perPage = 10;

  const toggleTab = (tab: string) => {
    if (tab === "All Customers") {
      setActiveTabs(["All Customers"]);
    } else {
      setActiveTabs((prev) => {
        const next = prev.includes(tab)
          ? prev.filter((t) => t !== tab)
          : [...prev, tab];
        if (!next.some((t) => t !== "All Customers")) {
          return ["All Customers"];
        }
        return next.filter((t) => t !== "All Customers");
      });
    }
    setPage(1);
  };

  const filtered = useMemo(() => {
    return replicatedCustomers.filter((c) => {
      const orders = c.orders.length;
      if (statusFilter !== "All") {
        if (statusFilter === "1-5 Orders" && (orders < 1 || orders > 5)) {
          return false;
        }
        if (statusFilter === "6-10 Orders" && (orders < 6 || orders > 10)) {
          return false;
        }
        if (statusFilter === "11+ Orders" && orders < 11) {
          return false;
        }
      }

      const q = search.toLowerCase();
      if (
        !(
          c.firstName.toLowerCase().includes(q) ||
          c.lastName.toLowerCase().includes(q)
        ) &&
        !c.location.toLowerCase().includes(q)
      ) {
        return false;
      }

      if (activeTabs.includes("All Customers")) {
        return true;
      }
      if (activeTabs.includes("New Customers") && !c.id.includes("1")) {
        return false;
      }
      if (
        activeTabs.includes("From Europe") &&
        !c.location.toLowerCase().includes("south")
      ) {
        return false;
      }
      if (activeTabs.includes("Returning Customers") && orders < 10) {
        return false;
      }
      return true;
    });
  }, [statusFilter, search, activeTabs, replicatedCustomers]);

  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  const handleDelete = () => {
    if (selected.length === 0) {
      alert("No customers selected for deletion.");
      return;
    }

    const updatedCustomers = replicatedCustomers.filter(
      (customer) => !selected.includes(customer.id)
    );

    setReplicatedCustomers(updatedCustomers);

    setSelected([]);
  };

  const handleEdit = () =>
    navigate(`${RoutePaths.CUSTOMERS}/${selected[0]}/edit`);

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-7 justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-300">Customers</h1>

        <div className="flex items-center gap-3">
          <button className="bg-white border border-primary-150 py-2 px-5 text-primary-200 rounded hover:scale-105 transition-all ease-linear">
            Export
          </button>
          <Link
            to={RoutePaths.NEW_CUSTOMER}
            className="text-white border border-primary-150 py-2 px-5 bg-primary-200 rounded transition-all ease-linear hover:scale-105 flex gap-1"
          >
            <Plus /> Add Customer
          </Link>
        </div>
      </div>
      <div className="px-7 pt-3 pb-10 bg-white rounded-md shadow-bg-auth">
        {/* Tabs */}
        <ul className="flex flex-col md:flex-row  md:gap-6 text-sm mb-5 ">
          {TABS.map((tab) => (
            <li
              key={tab}
              onClick={() => toggleTab(tab)}
              className={`cursor-pointer w-fit  py-2 md:py-4 group relative overflow-hidden  ${
                activeTabs.includes(tab) ? "text-[#4944E6] " : "text-gray-100"
              }`}
            >
              {tab}
              <span
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#4944E6] ${
                  activeTabs.includes(tab)
                    ? "translate-x-0 "
                    : "-translate-x-100 group-hover:translate-x-0 "
                } transition-all duration-400 ease-in`}
              />
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex flex-wrap  items-center gap-4 mb-4">
          <div className="w-[180px] border border-primary-100 rounded">
            <Select
              value={statusFilter}
              onChange={(val) => {
                if (val) {
                  setStatusFilter(val);
                  setPage(1);
                }
              }}
              onPointerEnterCapture={() => null}
              onPointerLeaveCapture={() => null}
              placeholder=""
              labelProps={{
                className: "after:border-none before:border-none",
              }}
              containerProps={{ className: "!border-0 !min-w-full" }}
              className="border-0"
            >
              {orderRanges.map((opt) => (
                <Option key={opt} value={opt}>
                  {opt}
                </Option>
              ))}
            </Select>
          </div>

          <div className=" py-2 px-4 rounded flex gap-2 border border-primary-50">
            <Search className="text-[#7E84A3]" />
            <input
              type="search"
              className="outline-none w-full text-gray-400"
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>

          <div className="ml-auto flex space-x-2 ">
            <button
              onClick={handleEdit}
              className="p-2 disabled:opacity-50 hover:text-white  hover:bg-primary-200 text-primary-200 border rounded border-gray-150"
              aria-label="Edit selected"
              disabled={selected.length !== 1}
            >
              <EditIcon />
            </button>

            <DeleteCustomer
              disabled={selected.length < 1}
              buttonType="icon"
              onDelete={handleDelete}
            />
          </div>
        </div>

        {/* ─── Table ─── */}
        <CustomersTable
          paged={paged}
          selected={selected}
          setSelected={setSelected}
        />

        {/* ─── Pagination & Results ─── */}
        <CustomersTablePagination
          page={page}
          perPage={perPage}
          setPage={setPage}
          totalCustomer={filtered.length}
        />
      </div>
    </>
  );
}
