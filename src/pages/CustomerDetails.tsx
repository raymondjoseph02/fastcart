import { FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { customersData } from "../data/customers";
import { RoutePaths } from "../routes/RoutesPath";
import { BackArrow, Cancel } from "../assets/svg/general";
import StatusBadge from "../components/common/StatusBar";
import DeleteCustomer from "../components/common/modals/DeleteCustomer";

const CustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(() =>
    customersData.find((c) => c.id === id)
  );

  const handleBack = () => {
    navigate(RoutePaths.CUSTOMERS);
  };

  if (!customer) {
    return null;
  }

  const [notes, setNotes] = useState(customer.notes || "");
  const [tags, setTags] = useState(customer.tags || []);
  const [tag, setTag] = useState("");
  const handleSave = () => {
    const updatedCustomer = { ...customer, notes, tags };

    setCustomer(updatedCustomer);
    alert("Customer data saved!");
  };

  const handleRemoveTag = (tag: string) => {
    tags.includes(tag) && setTags(tags.filter((tg) => tg != tag));
  };
  const handleAddTag = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!tags.includes(tag)) {
      setTags((tgs) => [...tgs, tag]);
      setTag("");
    }
  };

  const addressDetails = customer.addressDetails;

  return (
    <>
      <button
        onClick={handleBack}
        className="text-sm flex items-center gap-1 text-gray-100 hover:scale-110 transition-transform ease-linear"
      >
        <BackArrow />
        Back
      </button>

      <div className="flex flex-wrap gap-2 md:gap-4 mb-7 justify-between items-center ">
        <h1 className="text-xl md:text-2xl font-bold text-gray-300">
          Customer Information
        </h1>

        <div className="flex items-center text-sm md:text-base gap-2 md:gap-3">
          <button
            onClick={handleBack}
            className="bg-white border border-primary-150 py-2 px-5 text-primary-200 rounded hover:scale-110 transition-all ease-linear"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-white border border-primary-150 py-2 px-5 bg-primary-200 rounded transition-all ease-linear hover:scale-110"
          >
            Save
          </button>
        </div>
      </div>

      <section className="flex flex-col overflow-hidden lg:flex-row w-full gap-[30px]">
        {/* Left side */}
        <div className="space-y-6 md:space-y-[30px] lg:w-2/3 xl:w-3/4">
          {/* customer details */}
          <section className="bg-white shadow-bg-auth p-7 rounded-md">
            <div className="flex  justify-between items-center flex-wrap">
              <div className="flex flex-wrap gap-4">
                <span className="bg-gray-400 text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center text-white">
                  {customer.firstName.charAt(0).toUpperCase()}
                </span>

                <span>
                  <p className="font-bold mb-2 text-gray-300">
                    {customer.firstName} {customer.lastName}
                  </p>

                  <span className="text-gray-100 text-sm">
                    <p>{customer.location}</p>
                    <p>{customer.orders.length} Orders</p>
                    <p>Customer for 2 years</p>
                  </span>
                </span>
              </div>
            </div>

            <hr className="text-gray-150 h-[1px] w-full my-6 md:mt-10 md:mb-7" />

            <div className="">
              <label htmlFor="notes" className="text-sm text-gray-100">
                Notes
              </label>

              <textarea
                className="w-full text-sm md:text-base mt-1 resize-none py-3 px-4 border border-primary-50 rounded placeholder:text-gray-400 "
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes about customer"
              ></textarea>
            </div>
          </section>

          {/* Customer Orders Table */}
          <section>
            <div className="w-full shadow-bg-auth rounded-md p-7 border border-gray-50 bg-white">
              <h2 className="text-base mb-5 text-gray-300 font-bold">
                Customer Orders
              </h2>
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-100 border-b-2 border-gray-150 h-11 font-normal">
                      <th className="pb-2 font-normal">Order</th>
                      <th className="pb-2 font-normal">Date</th>
                      <th className="pb-2 font-normal">Order Status</th>
                      <th className="pb-2 font-normal">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer.orders.map((t, i) => (
                      <tr
                        key={i}
                        className="border-b whitespace-nowrap last:border-b-0 border-gray-200 h-[3.25rem] text-gray-300 py-2  px-2 text-nowrap"
                      >
                        <td className="px-2 text-nowrap font-medium">
                          {t.orderId}
                        </td>
                        <td className="px-2 text-nowrap">{t.date}</td>
                        <td className="px-2 text-nowrap">
                          <StatusBadge
                            status={
                              t.status === "Completed" ? "Paid" : "Pending"
                            }
                          />
                        </td>
                        <td className="px-2 text-nowrap">{t.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* right hand side */}
        <div className="xl:w-1/4 lg:w-1/3 space-y-[30px]">
          {/* Overview */}
          <section className="bg-white shadow-bg-auth rounded-md p-7">
            <div className="flex flex-wrap gap-2 items-center mb-6 justify-between">
              <h4 className="text-gray-300 font-bold text-base ">Overview</h4>
              <Link
                to="edit"
                className="border-0   text-primary-200 text-sm hover:scale-110 hover:text-primary-300 transition-all ease-linear"
              >
                Edit
              </Link>
            </div>

            <div className="mt-2 space-y-6 text-sm">
              <div className="">
                <p className="text-gray-400 mb-[7px]">Address:</p>
                <p className="text-gray-100 text-sm">
                  {addressDetails.apartment}
                  <br /> {addressDetails.city}
                  <br /> {addressDetails.postalCode}
                  <br /> {addressDetails.country}
                </p>
              </div>

              <div className="w-full">
                <p className="text-gray-400 mb-1">Email:</p>
                <p className="text-gray-100 break-words">{customer.email}</p>
              </div>

              <div>
                <p className="text-gray-400 mb-1">Phone:</p>
                <p className="text-gray-100 break-words">{customer.phone}</p>
              </div>
            </div>

            <hr className="text-gray-150 h-[1px] w-full mt-7 mb-5" />

            <DeleteCustomer buttonType="text" onDelete={handleBack} />
          </section>

          {/* Tags    */}
          <section className="bg-white shadow-bg-auth rounded-md p-7">
            <form onSubmit={(e) => handleAddTag(e)} className="w-full">
              <div className="flex items-center mb-6 justify-between">
                <h4 className="text-gray-300 font-bold text-base ">Tags</h4>
                <button
                  disabled={tag.length < 1}
                  className="border-0 disabled:text-gray-100 disabled:opacity-50  text-primary-200 text-sm hover:scale-110 hover:text-primary-300 transition-all ease-linear"
                >
                  Add
                </button>
              </div>

              <label htmlFor="tags" className="text-sm text-gray-100">
                Add Tags
              </label>
              <input
                type="text"
                className="outline-none placeholder:text-gray-400 mt-3 border rounded border-primary-50 py-2 px-3 w-full"
                placeholder="Enter tag name"
                value={tag}
                required
                onChange={(e) => setTag(e.target.value)}
              />
            </form>

            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm w-fit flex items-center gap-1 bg-primary-150 rounded text-gray-100 "
                  onClick={() => handleRemoveTag(tag)}
                >
                  {tag}

                  <span className="hover:cursor-pointer">
                    <Cancel />
                  </span>
                </span>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default CustomerDetails;
