// import { useState } from "react";
import { ImageDropInput } from "../../common/ImageDropInput";
import { ArrowDown } from "../../assets/svg/general";

function CreateProductForm() {
  const country = [
    "USA",
    "Canada",
    "UK",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Nigeria",
    "South Africa",
    "India",
    "China",
    "Japan",
    "Brazil",
    "Mexico",
    "Argentina",
    "Russia",
    "Turkey",
    "Saudi Arabia",
    "UAE",
    "Singapore",
    "Malaysia",
    "Indonesia",
    "Philippines",
    "Thailand",
    "Vietnam",
  ];
  // const option = {
  //   size: ["S", "M", "L", "XL", "XXL"],
  //   color: ["Red", "Blue", "Green", "Black", "White"],
  //   material: ["Cotton", "Polyester", "Wool", "Silk", "Linen"],
  //   pattern: ["Solid", "Striped", "Checked", "Floral", "Geometric"],
  //   style: ["Casual", "Formal", "Sporty", "Vintage", "Bohemian"],
  //   brand: ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"],
  // };
  // const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <div className="">
      <form className="space-y-6">
        <div className="space-y-6 pb-10 border-b-[0.5px] border-[#979797]">
          <p className="text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
            Information
          </p>
          <div>
            <label
              htmlFor="productName"
              className="text-sm font-normal leading-5 text-gray-100"
            >
              Product Name
            </label>
            <input
              className="auth_input"
              type="text"
              id="productName"
              name="productName"
              placeholder="Summer T-Shirt"
            />
          </div>{" "}
          <div>
            <label
              htmlFor="productDescription"
              className="text-sm font-normal leading-5 text-gray-100"
            >
              Product Description
            </label>
            <textarea
              className="py-3 resize-none auth_input min-h-24"
              id="productDescription"
              name="productDescription"
              placeholder="Product Description"
            />
          </div>
        </div>
        <div className="pb-10 space-y-6 border-b-[0.5px] border-[#979797]">
          <p className="text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
            Image
          </p>
          <ImageDropInput isEdit={false} />
        </div>
        <div className="space-y-6 pb-10 border-b-[0.5px] border-[#979797]">
          <p className="text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
            Price
          </p>
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="productPrice"
                className="text-sm font-normal leading-5 text-gray-100"
              >
                Product Price
              </label>
              <input
                className="auth_input "
                type="text"
                id="productPrice"
                name="productPrice"
                placeholder="Enter price"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="discountPrice"
                className="text-sm font-normal leading-5 text-gray-100"
              >
                Discount Price{" "}
              </label>
              <input
                className="auth_input "
                type="text"
                id="discountPrice"
                name="discountPrice"
                placeholder="Price at Discount"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name="addTax"
              id="addTax"
              className="switch"
            />
            <label
              className="text-base font-normal leading-5 text-gray-[#131523] select-none"
              htmlFor="addTax"
            >
              Add tax for this product
            </label>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
            Different Options{" "}
          </p>
          <div>
            <div className="flex items-center pb-10 gap-x-3">
              <div className="switch-wrapper">
                <input
                  className="switch"
                  type="checkbox"
                  name="multipleOptions"
                  id="multipleOptions"
                />
              </div>
              <label
                className="text-base font-normal leading-5 text-gray-[#131523] select-none"
                htmlFor="multipleOptions"
              >
                This product has multiple options
              </label>
            </div>
            <div>
              <p className="pb-5 text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
                Option 1
              </p>
              <div className="flex flex-col sm:flex-row gap-7">
                <div className="grow">
                  <label className="text-sm text-[#5A607F]">size</label>
                  <div className="select-wrapper">
                    <div className="select-icon">
                      <ArrowDown />
                    </div>
                    <select name="" id="">
                      <option>size</option>
                      <option value="option-1">option-1</option>
                      <option value="option-2">option-2</option>
                      <option value="option-3">option-3</option>
                    </select>
                  </div>
                </div>
                <div className="grow">
                  <label className="text-sm text-[#5A607F]">Value</label>
                  <div className="select-wrapper">
                    <div className="select-icon">
                      <ArrowDown />
                    </div>
                    <select name="" id="">
                      <option>Value</option>
                      <option value="option-1">option-1</option>
                      <option value="option-2">option-2</option>
                      <option value="option-3">option-3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-base font-semibold leading-6 text-gray-300 capitalize sm:font-bold">
            Shipping
          </p>
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="Weight"
                className="text-sm font-normal leading-5 text-gray-100"
              >
                Weight
              </label>
              <input
                className="auth_input "
                type="text"
                id="Weight"
                name="Weight"
                placeholder="Enter Weight"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="Country"
                className="text-sm font-normal leading-5 text-gray-100"
              >
                Country
              </label>
              <div className="select-wrapper">
                <div className="select-icon">
                  <ArrowDown />
                </div>
                <select name="" id="">
                  <option>Country</option>
                  {country.map((cty, index) => (
                    <option key={index} value={cty}>
                      {cty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name="digitalItem"
              id="digitalItem"
              className="switch"
            />
            <label
              className="text-base font-normal leading-5 text-gray-[#131523] select-none"
              htmlFor="digitalItem"
            >
              This is digital item{" "}
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProductForm;
