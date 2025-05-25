// CreateProductForm.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ImageDropInput } from "../../common/ImageDropInput";
import { ArrowDown } from "../../assets/svg/general";
import { MultipleOptions } from "./MultiOptions";
import { OptionBlock, OptionType } from "../../interface/dataType";
import { categories } from "../../data/category";

function CreateProductForm() {
  const [isEdit, setIsEdit] = useState(false);
  const { id: productCategory, productName } = useParams();

  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    discountPrice: "",
    addTax: false,
    multipleOptions: false,
    optionBlocks: [] as OptionBlock[],
    weight: "",
    country: "",
    digitalItem: false,
  });

  const [optionBlocks, setOptionBlocks] = useState<OptionBlock[]>([
    { type: "size", values: [] },
  ]);

  const countryList = [
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

  useEffect(() => {
    if (productCategory && productName) {
      const product = categories
        .find(
          (category) =>
            category.categoryName.toLowerCase() ===
            productCategory.toLowerCase()
        )
        ?.products.find(
          (product) => product.name.toLowerCase() === productName.toLowerCase()
        );

      if (product) {
        setFormData({
          productName: product.name,
          productDescription: product.description,
          productPrice: product.price.toString(),
          discountPrice: product.discount?.toString() || "",
          addTax: product.addTax || false,
          multipleOptions: product.multiOptions || false,
          optionBlocks: product.options.map((opt) => ({
            type: opt.type.toLowerCase() as OptionType,
            values: opt.values,
          })),
          weight: product.weight?.toString() || "",
          country: product.country || "",
          digitalItem: true,
        });
        setOptionBlocks(
          product.options.map((opt) => ({
            type: opt.type.toLowerCase() as OptionType,
            values: opt.values,
          }))
        );

        console.log(product.options);
        setIsEdit(true);
      }
    }
  }, [productCategory, productName]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checkValidity } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checkValidity : value,
    }));
  };

  return (
    <div>
      <form className="space-y-6">
        <div className="space-y-6 pb-10 border-b border-[#979797]">
          <p className="text-base font-semibold text-gray-300 capitalize">
            Information
          </p>

          <div>
            <label htmlFor="productName" className="text-sm text-gray-100">
              Product Name
            </label>
            <input
              className="auth_input"
              type="text"
              id="productName"
              name="productName"
              placeholder="Summer T-Shirt"
              value={formData.productName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label
              htmlFor="productDescription"
              className="text-sm text-gray-100"
            >
              Product Description
            </label>
            <textarea
              className="resize-none auth_input min-h-24"
              id="productDescription"
              name="productDescription"
              placeholder="Product Description"
              value={formData.productDescription}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="pb-10 space-y-6 border-b border-[#979797]">
          <p className="text-base font-semibold text-gray-300 capitalize">
            Image
          </p>
          <ImageDropInput isEdit={isEdit} />
        </div>

        <div className="space-y-6 pb-10 border-b border-[#979797]">
          <p className="text-base font-semibold text-gray-300 capitalize">
            Price
          </p>

          <div className="flex flex-col sm:flex-row gap-7">
            <div className="w-full sm:w-1/2">
              <label htmlFor="productPrice" className="text-sm text-gray-100">
                Product Price
              </label>
              <input
                className="auth_input"
                type="text"
                id="productPrice"
                name="productPrice"
                placeholder="Enter price"
                value={formData.productPrice}
                onChange={handleChange}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="discountPrice" className="text-sm text-gray-100">
                Discount Price
              </label>
              <input
                className="auth_input"
                type="text"
                id="discountPrice"
                name="discountPrice"
                placeholder="Price at Discount"
                value={formData.discountPrice}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              name="addTax"
              id="addTax"
              className="switch"
              checked={formData.addTax}
              onChange={handleChange}
            />
            <label htmlFor="addTax" className="text-base text-gray-[#131523]">
              Add tax for this product
            </label>
          </div>
        </div>

        <MultipleOptions
          optionBlocks={optionBlocks}
          setOptionBlocks={setOptionBlocks}
          isEdit={isEdit}
        />

        <div className="space-y-6">
          <p className="text-base font-semibold text-gray-300 capitalize">
            Shipping
          </p>

          <div className="flex flex-col sm:flex-row gap-7">
            <div className="w-full sm:w-1/2">
              <label htmlFor="weight" className="text-sm text-gray-100">
                Weight
              </label>
              <input
                className="auth_input"
                type="text"
                id="weight"
                name="weight"
                placeholder="Enter weight"
                value={formData.weight}
                onChange={handleChange}
              />
            </div>

            <div className="w-full sm:w-1/2">
              <label htmlFor="country" className="text-sm text-gray-100">
                Country
              </label>
              <div className="select-wrapper">
                <div className="select-icon">
                  <ArrowDown />
                </div>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select Country</option>
                  {countryList.map((cty, index) => (
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
              checked={formData.digitalItem}
              onChange={handleChange}
            />
            <label
              htmlFor="digitalItem"
              className="text-base text-gray-[#131523]"
            >
              This is a digital item
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateProductForm;
