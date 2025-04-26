import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../assets/svg/general";
import { CategoriesSection } from "../components/categories/Categories";
import { RoutePaths } from "../routes/RoutesPath";
function Categories() {
  const navigate = useNavigate();
  const addCategory = () => {
    navigate(RoutePaths.CREATE_CATEGORY);
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
      <CategoriesSection />
    </div>
  );
}

export default Categories;
