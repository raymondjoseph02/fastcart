import { FC } from "react";
import { ArrowDown, Cancel } from "../../../assets/svg/general";

interface AddCategoryProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (category: string, product: string) => void;
}

export const AddCategory: FC<AddCategoryProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const category = (form.elements.namedItem("category") as HTMLInputElement)
      .value;
    const product = (form.elements.namedItem("product") as HTMLSelectElement)
      .value;

    onSubmit?.(category, product);
  };

  if (!isOpen) return null;

  return (
    <div className="w-full h-screen inset-0 flex items-center justify-center absolute bg-black/50 transition-all ease-in-out duration-200">
      <dialog
        open
        className="bg-white rounded p-7 space-y-7 w-full max-w-lg shadow-xl relative mx-auto transition-all ease-in-out duration-200"
      >
        {/* cancle icon  */}

        <button onClick={onClose} className="top-5 right-5 absolute">
          <Cancel />
        </button>

        {/* Title */}
        <div>
          <p className="text-lg font-bold leading-9 text-gray-800 xs:text-xl sm:text-2xl">
            Add Category
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
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
              className="auth_input w-full"
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
              <select
                id="product"
                name="product"
                className="appearance-none w-full border border-[#D9E1EC] rounded px-4 py-2 text-sm font-normal text-gray-800"
                required
              >
                <option value="">Choose a Product</option>
                <option value="1">Product A</option>
                <option value="2">Product B</option>
              </select>
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                <ArrowDown />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-primary-200 hover:text-primary-300 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
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
