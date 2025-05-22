import { PlusIcon } from "../assets/svg/general";
import { CategoriesSection } from "../components/categories/Categories";
import { AddCategory } from "../components/common/modals/AddCategory";
import { useState } from "react";
function Categories() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const addCategory = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleCategorySubmit = () => {
    // Handle the category submission logic here
    alert(`Category and  Product added successfully!`);
    setIsModalOpen(false); // Close the modal after submission
  };

  return (
    <div className="space-y-[1.87rem] ">
      <div className="flex flex-row justify-between gap-2 xs:items-center">
        <h1 className="text-lg font-bold leading-9 text-gray-300 xs:text-xl sm:text-2xl">
          Categories
        </h1>
        <div>
          <button
            onClick={addCategory}
            className="flex items-center justify-center gap-1 px-5 py-2 text-sm sm:text-base font-normal leading-6 text-white rounded bg-primary-200 hover:bg-[#1e5effe8] transition-colors ease-in-out duration-300"
          >
            <PlusIcon />
            Add Category
          </button>
        </div>
      </div>
      <AddCategory
        isOpen={isModalOpen}
        onClose={addCategory}
        onSubmit={handleCategorySubmit}
      />
      <CategoriesSection />
    </div>
  );
}

export default Categories;
