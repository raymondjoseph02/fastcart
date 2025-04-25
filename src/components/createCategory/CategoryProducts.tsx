import { FC, useEffect, useState } from "react";
import { CategoryProductsProps } from "../../interface/category";
import { categories } from "../../data/category";
import { CategoryProps } from "../../interface/category";
import smaple_image from "../../assets/images/category_sample.png";
import { DelectIcon, EditIcon, PlusIcon } from "../../assets/svg/general";
import { ToggleVisibility } from "./ToggleVisibility";
import { CategoryForm } from "./CategoryForm";
import { IoMdMore } from "react-icons/io";

export const CategoryProducts: FC<CategoryProductsProps> = ({ isEdit, id }) => {
  const [editCategory, setEditCategory] = useState<CategoryProps | null>(null);

  const fetchCategory = () => {
    const category = categories.find(
      (category) =>
        category.categoryName.toLocaleLowerCase() === id?.toLocaleLowerCase()
    );
    if (category) {
      setEditCategory(category);
    }
  };
  useEffect(() => {
    if (isEdit && id) {
      fetchCategory();
    }
  }, []);
  return (
    <div className="flex gap-[1.875rem] sm:flex-row flex-col-reverse">
      {isEdit && id ? (
        <div className="space-y-6 bg-white p-7 basis-[70%]">
          <div className="flex justify-between">
            <p className="text-base font-bold text-gray-300 capitalize">
              product{" "}
              <span className="font-normal text-gray-100">
                {editCategory?.products.length}
              </span>
            </p>
            <div>
              <button className="h-10 py-2 px-4 text-base font-normal leading-6 rounded  border text-primary-200 hover:text-white  bg-white border-primary-150  hover:bg-primary-200 hover:border-[#b6b8c3] transition-colors ease-initial duration-900 flex  items-center gap-1">
                <PlusIcon />
                Add product
              </button>
            </div>
          </div>
          <div className="space-y-2">
            {editCategory?.products.map((product, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between gap-4 p-4 bg-white border rounded border-gray-150 group"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="rounded-full size-0.5 bg-[#979797]"></span>
                    <span className="rounded-full size-0.5 bg-[#979797]"></span>
                    <span className="rounded-full size-0.5 bg-[#979797]"></span>
                    <span className="rounded-full size-0.5 bg-[#979797]"></span>
                  </div>
                  <img
                    src={smaple_image}
                    alt={product.productName}
                    className="hidden object-cover rounded size-12 xs:flex"
                  />
                  <p className="font-medium leading-5 text-gray-300 xs:text-sm">
                    {product.productName}
                  </p>
                </div>
                <div className="absolute items-center hidden gap-5 group-hover:sm:flex right-4 ">
                  <button className="text-[#7E84A3] hover:text-[#3d404e] transition-colors">
                    <EditIcon />
                  </button>
                  <button className="text-[#7E84A3] hover:text-[#3d404e] transition-colors">
                    <DelectIcon />
                  </button>
                </div>
                <div>
                  <IoMdMore className="text-gray-300 size-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="basis-[30%] space-y-[1.875rem]">
        <ToggleVisibility />
        <CategoryForm isEdit editCategory={editCategory} />
      </div>
    </div>
  );
};
