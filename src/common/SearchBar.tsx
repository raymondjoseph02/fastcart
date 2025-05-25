import React, { FC } from "react";
import { Search } from "../assets/svg/general";
interface SearchBarProps {
  placeholder?: string;
  handleSearch: (e) => void;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchBar: FC<SearchBarProps> = ({
  placeholder,
  handleSearch,
  value,
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => handleSearch(e)}
        placeholder={placeholder || "Search..."}
        className="py-2 pr-4 pl-12 border placeholder:text-[#A1A7C4] border-primary-50 rounded focus:border-primary-200 outline-none placeholder:text-base placeholder:font-normal w-[21.8rem]"
      />
      <div className="text-[#7E84A3] absolute left-4 top-1/2 -translate-y-1/2">
        <Search />
      </div>
    </div>
  );
};
