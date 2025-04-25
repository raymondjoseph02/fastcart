import { Search } from "../../assets/svg/general";

export const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 pr-4 pl-12 border placeholder:text-[#A1A7C4] border-primary-50 rounded focus:border-primary-200 outline-none placeholder:text-base placeholder:font-normal w-[21.8rem]"
      />
      <div className="text-[#7E84A3] absolute left-4 top-1/2 -translate-y-1/2">
        <Search />
      </div>
    </div>
  );
};
