import { ImageDropInput } from "../../common/ImageDropInput";
import { CategoryFormProps } from "../../interface/category";
import { FC, useEffect, useState } from "react";

export const CategoryForm: FC<CategoryFormProps> = ({
  isEdit,
  editCategory,
}) => {
  const [editCategoryName, setEditCategoryName] = useState("");
  const [editCategoryImage, setEditCategoryImage] = useState("");
  const getCategoryDetails = () => {
    if (isEdit && editCategory) {
      const categoryName = editCategory.categoryName;
      const categoryImage = editCategory.image;
      setEditCategoryName(categoryName);
      setEditCategoryImage(categoryImage);
    }
  };
  useEffect(() => {
    if (isEdit) {
      getCategoryDetails();
    }
  }, [editCategory]);
  return (
    <div className="space-y-6 bg-white rounded p-7">
      <p className="text-base font-bold leading-6 text-gray-300">
        Category Info
      </p>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-normal leading-5 text-gray-100">
          Category Name
        </p>
        <input
          type="text"
          value={editCategoryName}
          onChange={(e) => setEditCategoryName(e.target.value)}
          id="categoryName"
          name="categoryName"
          className="px-4 py-2 text-base font-normal leading-6 text-gray-300 bg-white border rounded outline-none border-primary-50 focus:border-primary-200"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm font-normal leading-5 text-gray-100">Image</p>
        <ImageDropInput isEdit imageUrl={editCategoryImage} />
      </div>
    </div>
  );
};
