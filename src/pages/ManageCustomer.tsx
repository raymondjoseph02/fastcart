import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { customersData } from "../data/customers";
import { BackArrow } from "../assets/svg/general";
import { RoutePaths } from "../routes/RoutesPath";
import { Select, Option } from "@material-tailwind/react";

const empty = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  apartment: "",
  city: "",
  postalCode: "",
  country: "",
  notes: "",
};

const ManageCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(empty);

  // Handle form input change
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (customer) {
      setCustomer({
        ...customer,
        [name]: value,
      });
    }
  };
  useEffect(() => {
    if (id) {
      const foundCustomer = customersData.find(
        (customer) => customer.id === id
      );
      if (foundCustomer) {
        const {
          address,
          email,
          notes,
          phone,
          firstName,
          lastName,
          addressDetails,
        } = foundCustomer;

        setCustomer({
          address,
          email,
          firstName,
          lastName,
          notes,
          phone,
          apartment: addressDetails.apartment,
          city: addressDetails.city,
          country: addressDetails.country,
          postalCode: addressDetails.postalCode,
        });
      } else navigate(RoutePaths.CUSTOMERS);
    } else {
      setCustomer(empty);
    }
  }, [id, navigate]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = () => {
    alert("Customer data saved!");
  };

  return (
    <>
      <button
        onClick={handleBack}
        className="text-sm flex items-center gap-1 text-gray-100 hover:scale-110 transition-transform ease-linear"
      >
        <BackArrow />
        Back
      </button>

      <div className="flex flex-wrap gap-2 md:gap-4 mb-7 justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-300">
          {id ? "Edit" : "Add"} Customer
        </h1>

        <div className="flex text-sm md:text-base items-center gap-2 md:gap-3">
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

      <form
        className="bg-white shadow-bg-auth p-7 rounded"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg text-gray-300 font-bold mb-1">
          Customer Information
        </h2>
        <p className="text-gray-100 text-sm mb-6">
          Most important information about the customer
        </p>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="auth_label " htmlFor="firstName">
              First Name
            </label>
            <input
              className="auth_input"
              type="text"
              id="firstName"
              name="firstName"
              value={customer.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="auth_label " htmlFor="lastName">
              Last Name
            </label>
            <input
              className="auth_input"
              type="text"
              id="lastName"
              name="lastName"
              value={customer.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="auth_label " htmlFor="email">
              Email Address
            </label>
            <input
              className="auth_input"
              type="email"
              id="email"
              name="email"
              value={customer.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="auth_label " htmlFor="phone">
              Phone Number
            </label>
            <input
              className="auth_input"
              type="tel"
              id="phone"
              name="phone"
              value={customer.phone}
              onChange={handleInputChange}
            />
          </div>
        </section>

        <hr className="h-[1px] w-full text-gray-150 mt-10 mb-7" />

        <h2 className="text-lg text-gray-300 font-bold mb-1">
          Customer Address
        </h2>
        <p className="text-gray-100 text-sm mb-6">
          Shipping address information
        </p>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="auth_label " htmlFor="address">
              Address
            </label>
            <input
              className="auth_input"
              type="text"
              id="address"
              name="address"
              value={customer.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="auth_label " htmlFor="apartment">
              Apartment
            </label>
            <input
              className="auth_input"
              type="text"
              id="apartment"
              name="apartment"
              value={customer.apartment}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="auth_label " htmlFor="city">
              City
            </label>
            <input
              className="auth_input"
              type="text"
              id="city"
              name="city"
              value={customer.city}
              onChange={handleInputChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label className="auth_label " htmlFor="country">
                Country
              </label>
              <div className="border border-primary-100 pl-4 md:pl-0 flex items-center rounded h-10 mt-1">
                <Select
                  className="border-none w-full "
                  id="country"
                  name="country"
                  value={customer.country}
                  onChange={(val) => {
                    val &&
                      setCustomer((customer) => ({
                        ...customer,
                        country: val,
                      }));
                  }}
                  onPointerEnterCapture={() => null}
                  onPointerLeaveCapture={() => null}
                  placeholder=""
                  labelProps={{
                    className: "after:border-none before:border-none",
                  }}
                  containerProps={{ className: "!border-0 !min-w-full" }}
                >
                  <Option value="Nigeria">Nigeria</Option>
                  <Option value="United States">United States</Option>
                  <Option value="Canada">Canada</Option>
                  <Option value="France">France</Option>
                  <Option value="India">India</Option>
                </Select>
              </div>
            </div>
            <div>
              <label className="auth_label " htmlFor="postalCode">
                Postal Code
              </label>
              <input
                className="auth_input"
                type="text"
                id="postalCode"
                name="postalCode"
                value={customer.postalCode}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

        <hr className="h-[1px] w-full text-gray-150 mt-10 mb-7" />

        <h2 className="text-lg text-gray-300 font-bold mb-1">Customer Notes</h2>
        <p className="text-gray-100 text-sm mb-6">Add notes about customer</p>

        <div>
          <label className="auth_label " htmlFor="notes">
            Notes
          </label>
          <textarea
            className="h-18 resize-none full px-4 w-full py-3 mt-1 border rounded outline-none border-primary-100 placeholder:text-gray-400 text-sm md:text-base"
            id="notes"
            name="notes"
            placeholder="Add notes about the customer"
            value={customer.notes}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  );
};

export default ManageCustomer;
