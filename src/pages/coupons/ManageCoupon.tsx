import { FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackArrow, Check } from "../../assets/svg/general";
import { RoutePaths } from "../../routes/RoutesPath";
import { Select, Option } from "@material-tailwind/react";
import { couponData, couponType } from "../../data/coupon";

const empty = {
  couponCode: "",
  couponName: "",
  discountValue: "",
  appliesTo: "",
  duration: "",
  limit: "",
  isLimit: false,
  isDuration: false,
  type: "",
};

const ManageCoupon = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState(empty);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    console.log(name, checked);
    if (customer) {
      setCustomer({
        ...customer,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  useEffect(() => {
    if (id) {
      const foundCoupon = couponData.find((customer) => customer.id === id);
      if (foundCoupon) {
        setCustomer((coupons) => ({
          ...coupons,
          couponCode: foundCoupon.couponCode,
          couponName: foundCoupon.couponName,
          type:
            foundCoupon.type == "discount"
              ? couponType[0].title
              : couponType[2].title,
        }));
      } else navigate(RoutePaths.CUSTOMERS);
    } else {
      setCustomer({
        ...empty,
        type: couponType[0].title,
      });
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
          {id ? "Edit" : "Create"} Coupon
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
        className="bg-white shadow-bg-auth p-7 rounded-md pb-10"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg text-gray-300 font-bold mb-1">
          Coupon Information
        </h2>
        <p className="text-gray-100 text-sm mb-6">
          Code will be used by users in checkout
        </p>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="auth_label " htmlFor="couponCode">
              Coupon Code
            </label>
            <input
              className="auth_input"
              type="text"
              id="couponCode"
              name="couponCode"
              value={customer.couponCode}
              onChange={handleInputChange}
              placeholder="Shipfree20"
            />
          </div>
          <div>
            <label className="auth_label " htmlFor="couponName">
              Coupon Name
            </label>
            <input
              className="auth_input"
              type="text"
              id="couponName"
              name="couponName"
              value={customer.couponName}
              onChange={handleInputChange}
              placeholder="Free Shipping"
            />
          </div>
        </section>

        <hr className="h-[1px] w-full text-gray-150 mt-10 mb-7" />

        <h2 className="text-lg text-gray-300 font-bold mb-1">Coupon Type</h2>
        <p className="text-gray-100 text-sm mb-6">
          Type of coupon you want to create
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {couponType.map((type) => (
            <button
              key={type.title}
              className={
                "border-2 text-sm xl:text-base justify-center rounded py-6 flex flex-col gap-3 items-center transition-all duration-300 " +
                (customer.type === type.title
                  ? "text-primary-200 border-primary-200"
                  : "text-gray-100 border-gray-150")
              }
              onClick={() =>
                setCustomer((customers) => ({ ...customers, type: type.title }))
              }
            >
              <span
                className={customer.type === type.title ? "" : "text-gray-500 "}
              >
                {type.icon}
              </span>
              <p>{type.title}</p>
            </button>
          ))}
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <label className="auth_label " htmlFor="discountValue">
              Discount Value
            </label>
            <input
              className="auth_input"
              type="text"
              id="discountValue"
              name="discountValue"
              value={customer.discountValue}
              onChange={handleInputChange}
              placeholder="Amount"
            />
          </div>

          <div>
            <label className="auth_label " htmlFor="appliesTo">
              Applies to
            </label>
            <div className="border border-primary-100 pl-4 md:pl-0 flex items-center rounded h-10 mt-1">
              <Select
                className="border-none w-full "
                id="appliesTo"
                name="appliesTo"
                value={customer.appliesTo}
                onChange={(val) => {
                  val &&
                    setCustomer((customer) => ({
                      ...customer,
                      appliesTo: val,
                    }));
                }}
                onPointerEnterCapture={() => null}
                onPointerLeaveCapture={() => null}
                placeholder="Choose"
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
            <label className="auth_label " htmlFor="duration">
              Duration
            </label>
            <input
              className="auth_input"
              type="date"
              id="duration"
              name="duration"
              value={customer.duration}
              onChange={handleInputChange}
              disabled={customer.isDuration}
            />

            <div className="flex items-center w-full gap-3 mt-3">
              <div className="flex items-center relative ">
                <input
                  type="checkbox"
                  checked={customer.isDuration}
                  onChange={handleInputChange}
                  id="isDuration"
                  name="isDuration"
                  className="relative w-5 outline-none h-5 border border-primary-150 rounded appearance-none peer shrink-0  checked:bg-primary-200 checked:border-0 hover:cursor-pointer"
                />
                <Check className="absolute hidden w-3 h-3 mt-[0.7px] ml-[4.55px] outline-none pointer-events-none peer-checked:block stroke-white " />
              </div>
              <label htmlFor="isDuration" className="text-gray-300">
                Don't set duration
              </label>
            </div>
          </div>

          <div>
            <label className="auth_label " htmlFor="limit">
              Usage Limits
            </label>
            <input
              className="auth_input"
              type="number"
              id="limit"
              name="limit"
              value={customer.limit}
              onChange={handleInputChange}
              disabled={customer.isLimit}
            />

            <div className="flex items-center w-full gap-3 mt-3">
              <div className="flex items-center relative ">
                <input
                  type="checkbox"
                  checked={customer.isLimit}
                  onChange={handleInputChange}
                  id="isLimit"
                  name="isLimit"
                  className="relative w-5 outline-none h-5 border border-primary-150 rounded appearance-none peer shrink-0  checked:bg-primary-200 checked:border-0 hover:cursor-pointer"
                />
                <Check className="absolute hidden w-3 h-3 mt-[0.7px] ml-[4.55px] outline-none pointer-events-none peer-checked:block stroke-white " />
              </div>
              <label htmlFor="isLimit" className="text-gray-300">
                Don't limit amout of uses
              </label>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default ManageCoupon;
