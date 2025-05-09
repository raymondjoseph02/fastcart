import { FC } from "react";
import { Cancel } from "../../assets/svg/general";
import { TagProps } from "../../interface/common";

export const Tag: FC<TagProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-between gap-3 px-3 py-1 text-[#5A607F] bg-[#E6E9F4] rounded ">
      <p className="text-sm font-normal leading-5">{text}</p>
      <button className="flex items-center justify-center w-fit">
        <Cancel />
      </button>
    </div>
  );
};
