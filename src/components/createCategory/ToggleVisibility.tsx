import { FC } from "react";
import { categories } from "../../data/category";
interface ToggleVisibilityProps {
  handleOnChange?: () => void;
  id?: string | undefined;
}
export const ToggleVisibility: FC<ToggleVisibilityProps> = ({
  handleOnChange,
  id,
}) => {
  const category = categories.find((cat) => cat.categoryName === id);
  console.log(category);

  const isVisible = category?.visibility;
  return (
    <div className="space-y-6 bg-white rounded p-7">
      <p className="text-base font-bold leading-6 text-gray-300">
        Category Visibility
      </p>
      <div>
        <input
          type="checkbox"
          checked={isVisible}
          onChange={handleOnChange}
          className="switch"
        />
      </div>
    </div>
  );
};
