import { useNavigate } from "react-router-dom";
import defaultCategoryImage from "../../assets/images/category_sample.png";
import { EditIcon } from "../../assets/svg/general";
import { FC } from "react";
import { CategoryCardPrpos } from "../../interface/category";
const CategoriesCard: FC<CategoryCardPrpos> = ({
  categoryTitle,
  numberOfProduct,
  image,
}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/category/${categoryTitle}/edit`);
  };
  return (
    <div className="flex flex-col rounded overflow-hidden h-[20.25rem] bg-red-100 group">
      <div className="h-[15rem] relative">
        <img
          src={defaultCategoryImage}
          alt=""
          className="object-cover size-full"
          loading="eager"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 group-hover:flex items-center justify-center w-full h-full bg-[#333752]/70 hidden transition-all ease-in-out duration-1000">
          <div>
            <button
              onClick={handleEdit}
              className="px-2.5 py-2 gap-1 bg-white flex text-primary-200 rounded  items-center justify-center w-[6.12rem] hover:bg-[#ffffff]/95 hover:text-primary-200/90"
            >
              <EditIcon />
              Edit
            </button>
          </div>
        </div>
      </div>
      <div className="py-5 bg-white px-7 flex-[30%]">
        <p className="text-base font-bold leading-6 text-gray-300">
          {categoryTitle}
        </p>
        <p className="text-sm font-normal text-gray-100">
          {numberOfProduct} items
        </p>
      </div>
    </div>
  );
};

export default CategoriesCard;
