import { Link, useNavigate } from "react-router-dom";
import { RoutePaths } from "../routes/RoutesPath";
import { EditIcon, Plus, Search } from "../assets/svg/general";
import { Option, Select } from "@material-tailwind/react";
import { useMemo, useState } from "react";
import { couponData } from "../data/coupon";
import TablePagination from "../components/common/TablePagination";
import DeleteCustomer from "../components/common/modals/DeleteCustomer";
import CouponsTable from "../components/coupon/CouponsTable";
import Tabs from "../components/common/Tabs";

const tabs = ["All Coupons", "Active Coupons", "Expired Coupons"];
const filterList = ["All", "Summer2020", "Shipfreetomee15", "Womenclothing5"];

const Coupons = () => {
  const [activeTabs, setActiveTabs] = useState([tabs[0]]);
  const [filter, setFilter] = useState(filterList[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [coupons, setCoupons] = useState(couponData); // Manage replicated customers state

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
    return coupons.filter((c) => {
      const status = c.couponCode;
      if (filter !== "All") {
        if (filter === filterList[1] && status !== filterList[1]) {
          return false;
        }
        if (filter === filterList[2] && status !== filterList[2]) {
          return false;
        }
        if (filter === filterList[3] && status !== filterList[3]) {
          return false;
        }
      }

      const q = search.toLowerCase();
      if (
        !(
          c.couponName.toLowerCase().includes(q) ||
          c.couponCode.toLowerCase().includes(q)
        )
      ) {
        return false;
      }

      if (activeTabs.includes(tabs[0])) {
        return true;
      }
      if (activeTabs.includes(tabs[1]) && !c.status.includes("Active")) {
        return false;
      }
      if (activeTabs.includes(tabs[2]) && !c.status.includes("Expired")) {
        return false;
      }

      return true;
    });
  }, [filter, search, activeTabs, coupons]);

  const paged = useMemo(() => {
    const start = (page - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, page]);

  const handleDelete = () => {
    if (selected.length === 0) {
      alert("No customers selected for deletion.");
      return;
    }

    const updatedCustomers = coupons.filter(
      (customer) => !selected.includes(customer.id)
    );

    setCoupons(updatedCustomers);

    setSelected([]);
  };

  const handleEdit = () => navigate(`${RoutePaths.EDIT_COUPON}/${selected[0]}`);

  return (
    <>
      <div className="flex  flex-wrap gap-4 mb-7 justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-300">Coupons</h1>

        <Link
          to={RoutePaths.NEW_COUPON}
          className="text-white text-sm items-center md:text-base border border-primary-150 py-2 px-5 bg-primary-200 rounded transition-all ease-linear hover:scale-105 flex gap-1"
        >
          <Plus /> Create
        </Link>
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
        <CouponsTable
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
};

export default Coupons;
