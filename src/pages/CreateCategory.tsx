import { BackIcon } from "../assets/svg/general";
import { useNavigate, useParams } from "react-router-dom";
import { CategoryProducts } from "../components/createCategory/CategoryProducts";
function CreateCategory() {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };
  const { id } = useParams();
  console.log(id);

  const isEdit = Boolean(id);
  return (
    <div className="space-y-[1.875rem] ">
      <div className="space-y-2 ">
        <div>
          <button
            onClick={handleNavigateBack}
            className="flex items-center justify-center gap-1 text-sm font-normal leading-5 text-gray-100 capitalize w-fit"
          >
            <BackIcon />
            Back
          </button>
        </div>
        <div className="flex flex-col justify-between gap-4 xs:gap-2 xs:items-center xs:flex-row">
          <h1 className="text-lg font-bold leading-9 text-gray-300 sm:text-2xl sm:font-bold">
            {isEdit && id ? id : "Add category"}
          </h1>
          <div className="flex gap-3">
            <button className="h-10 py-2 text-base font-normal leading-6 rounded w-[6.31rem] border text-primary-200 bg-white border-primary-150 hover:text-primary-200/80 hover:bg-[#ffffff]/50 hover:border-[#b6b8c3] transition-colors ease-in-out duration-300">
              Cancel
            </button>
            <button className="h-10 py-2 text-base font-normal leading-6 text-white rounded bg-primary-200 w-[5.37rem] hover:bg-[#1e5effe8] transition-colors ease-in-out duration-300">
              Save
            </button>
          </div>
        </div>
      </div>
      <div>
        <CategoryProducts isEdit id={id} />
      </div>
    </div>
  );
}

export default CreateCategory;
