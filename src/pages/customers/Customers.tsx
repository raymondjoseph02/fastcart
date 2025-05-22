import { useMemo, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { EditIcon, Plus, Search } from "../../assets/svg/general";
import { customersData } from "../../data/customers";
import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../../routes/RoutesPath";
import DeleteCustomer from "../../common/modals/DeleteCustomer";
import CustomersTable from "../../components/customer/CustomersTable";
import TablePagination from "../../common/TablePagination";
import Tabs from "../../common/Tabs";

const tabs = [
  "All Customers",
  "New Customers",
  "From Europe",
  "Returning Customers",
];

const filterList = ["All", "1-5 Orders", "6-10 Orders", "11+ Orders"];

export default function Customers() {
  const [activeTabs, setActiveTabs] = useState<string[]>([tabs[0]]);
  const [filter, setFilter] = useState(filterList[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);

  const [replicatedCustomers, setReplicatedCustomers] = useState(customersData); // Manage replicated customers state

  const navigate = useNavigate();

  const perPage = 10;

  const toggleTab = (tab: string) => {
    if (tab === tabs[0]) {
      setActiveTabs([tabs[0]]);
    } else {
      setActiveTabs((prev) => {
        const next = prev.includes(tab)
          ? prev.filter((t) => t !== tab)
          : [...prev, tab];
        if (!next.some((t) => t !== tabs[0])) {
          return [tabs[0]];
        }
        return next.filter((t) => t !== tabs[0]);
      });
    }
    setPage(1);
  };

  const filtered = useMemo(() => {
    return replicatedCustomers.filter((c) => {
      const orders = c.orders.length;
      if (filter !== "All") {
        if (filter === "1-5 Orders" && (orders < 1 || orders > 5)) {
          return false;
        }
        if (filter === "6-10 Orders" && (orders < 6 || orders > 10)) {
          return false;
        }
        if (filter === "11+ Orders" && orders < 11) {
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
  }, [filter, search, activeTabs, replicatedCustomers]);

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
    navigate(`${RoutePaths.EDIT_CUSTOMER}/${selected[0]}`);

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
            className="text-white text-sm items-center md:text-base border border-primary-150 py-2 px-5 bg-primary-200 rounded transition-all ease-linear hover:scale-105 flex gap-1"
          >
            <Plus /> Add Customer
          </Link>
        </div>
      </div>
      <div className="px-7 pt-3 pb-10 bg-white rounded-md shadow-bg-auth">
        {/* Tabs */}
        <Tabs activeTabs={activeTabs} onClick={toggleTab} tabs={tabs} />

        {/* Controls */}
        <div className="flex flex-wrap  items-center gap-4 mb-4">
          <div className="w-[180px] border border-primary-100 rounded">
            <Select
              value={filter}
              onChange={(val) => {
                if (val) {
                  setFilter(val);
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
              {filterList.map((opt) => (
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
        <TablePagination
          page={page}
          perPage={perPage}
          setPage={setPage}
          totalItems={filtered.length}
        />
      </div>
    </>
  );
}
