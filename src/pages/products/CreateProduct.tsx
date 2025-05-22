import { useState } from "react";
import { Heading } from "../../common/Heading";
import BackButton from "../../common/button/BackButton";
import { useParams } from "react-router-dom";
import CreateProductForm from "../../components/createProduct/CreateProductForm";
import { categories } from "../../data/category";
import { Tag } from "../../components/createProduct/Tag";
import { AddCategory } from "../../common/modals/AddCategory";
export const CreateProduct = () => {
  const { id } = useParams();
  const [openAddModal, setOpenAddModal] = useState(false);
  const [title, setTitle] = useState(
    (id ? "Edit Product" : "Add Product") as string
  );
  return (
    <div className="space-y-7.5">
      <div className="space-y-1">
        <BackButton />
        <Heading
          title={title}
          SecondaryBtnText="Cancel"
          primaryBtnText="Save"
          primaryBtnIcon={false}
        />
      </div>
      <div className="flex gap-7.5 flex-col-reverse xl:flex-row">
        <div className="flex-1 pb-10 bg-white rounded-md px-7 pt-7">
          <CreateProductForm />
        </div>
        <AddCategory
          isOpen={openAddModal}
          onClose={() => setOpenAddModal(!openAddModal)}
        />
        <div className="xl:w-[21.875rem] ">
          <div className="space-y-6 bg-white rounded-md p-7">
            <p className="text-base font-bold text-[#131523]">Categories</p>
            {categories.map((category, index) => (
              <div className="flex items-center gap-3">
                <input
                  key={index}
                  type="radio"
                  name="categoryVisibility"
                  id="categoryVisibility"
                  className="p-1 border rounded-sm appearance-none checked:bg-primary-200 size-5 border-[#D7DBEC]"
                />
                <label
                  className="text-base font-normal leading-5 text-gray-[#131523] select-none"
                  htmlFor="categoryVisibility"
                >
                  {category.categoryName}
                </label>
              </div>
            ))}
            <button
              onClick={() => setOpenAddModal(true)}
              className="text-base font-normal leading-6 text-primary-200"
            >
              Create New
            </button>
          </div>
          <div>
            <form>
              <div className="p-8 my-8 space-y-6 bg-white rounded-md">
                <p className="text-base font-bold text-[#131523]">Tags</p>

                <div>
                  <label
                    htmlFor="categoryName"
                    className="text-sm font-normal leading-5 text-gray-100"
                  >
                    Add Tags
                  </label>
                  <input
                    className="auth_input"
                    type="text"
                    id="categoryName"
                    name="categoryName"
                    placeholder="Enter tag name"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="T-Shirt" />
                  <Tag text="Men Clothes" />
                  <Tag text="Summer Collection" />
                </div>
              </div>
              <div className="p-8 my-8 space-y-6 bg-white rounded-md">
                <p className="text-base font-bold text-[#131523]">
                  SEO Settings
                </p>

                <div>
                  <label
                    htmlFor="seoTitle"
                    className="text-sm font-normal leading-5 text-gray-100"
                  >
                    Title{" "}
                  </label>
                  <input
                    className="auth_input"
                    type="text"
                    id="seoTitle"
                    name="seoTitle"
                  />
                </div>
                <div>
                  <label
                    htmlFor="seoDescription"
                    className="text-sm font-normal leading-5 text-gray-100"
                  >
                    Description{" "}
                  </label>
                  <textarea
                    className="resize-none auth_input py-3 px-4 !h-23"
                    id="seoDescription"
                    name="seoDescription"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
