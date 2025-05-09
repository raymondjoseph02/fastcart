import { FC } from "react";
import { PlusIcon } from "../../assets/svg/general";
import { ProductHeadingProps } from "../../interface/Product";
export const Heading: FC<ProductHeadingProps> = ({
  title,
  primaryBtnIcon,
  primaryBtnText,
  SecondaryBtnText,
  handleOnClickPrimaryButton,
}) => {
  return (
    <div className="flex flex-row justify-between gap-2 xs:items-center">
      <h1 className="text-lg font-bold leading-9 text-gray-300 xs:text-xl sm:text-2xl">
        {title}{" "}
      </h1>
      <div className="flex gap-3">
        <button
          //   onClick={addCategory}
          className="flex items-center justify-center gap-1 px-5 py-2 text-sm sm:text-base font-normal leading-6 bg-white rounded text-primary-200 hover:text-[#1e5effe8] transition-colors ease-in-out duration-300 border-primary-150 border"
        >
          {SecondaryBtnText}{" "}
        </button>
        <button
          onClick={handleOnClickPrimaryButton}
          className="flex items-center justify-center gap-1 px-5 py-2 text-sm sm:text-base font-normal leading-6 text-white rounded bg-primary-200 hover:bg-[#1e5effe8] transition-colors ease-in-out duration-300"
        >
          {primaryBtnIcon && <PlusIcon />}
          {primaryBtnText}
        </button>
      </div>
    </div>
  );
};
