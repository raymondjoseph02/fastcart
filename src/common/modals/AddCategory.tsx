import { FC, useState } from "react";
import { Cancel } from "../../assets/svg/general";
import MultiSelect from "../MultiSelect";
import { categories } from "../../data/category";
import { ImageDropInput } from "../ImageDropInput";
interface AddCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
}

export const AddCategory: FC<AddCategoryProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const handleSelectChange = (selected: string[]) => {
    setSelectedProducts(selected);
  };
  const options = categories.flatMap((category) =>
    category.products.map((product) => ({
      label: product.name,
      value: product.name.toString(),
    }))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit?.();
  };

  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center w-full h-screen transition-all duration-200 ease-in-out bg-black/50 z-1000">
      <dialog
        open
        className="relative w-full max-w-lg mx-auto transition-all duration-200 ease-in-out bg-white rounded shadow-xl p-7 space-y-7"
      >
        {/* cancel icon  */}

        <button onClick={onClose} className="absolute top-5 right-5">
          <Cancel />
        </button>

        {/* Title */}
        <div>
          <p className="text-lg font-bold leading-9 text-gray-800 xs:text-xl sm:text-2xl">
            Add Category
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          {/* Category Name Input */}
          <div className="space-y-1">
            <label
              htmlFor="category"
              className="text-sm font-normal leading-5 text-gray-600"
            >
              Category Name
            </label>
            <input
              id="category"
              name="category"
              className="w-full auth_input"
              type="text"
              placeholder="Women Clothes"
              required
            />
          </div>

          {/* Product Select */}
          <div className="space-y-1">
            <label
              htmlFor="product"
              className="text-sm font-normal leading-5 text-gray-600"
            >
              Add Products
            </label>
            <div className="relative">
              <MultiSelect
                onChange={handleSelectChange}
                options={options}
                value={selectedProducts}
                placeholder="Choose a Product"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-sm font-normal leading-5 text-gray-600">
              category image
            </label>
            <ImageDropInput isEdit={false} />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-primary-200 hover:text-primary-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={selectedProducts.length === 0}
              // disabled={!selectedProducts.length}
              className="button button_bg_primary !w-fit !px-6"
            >
              Create Category
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};
