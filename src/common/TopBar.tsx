import {
  ChevronDown,
  Logo,
  Message,
  Notification,
  Search,
} from "../assets/svg/general";
import { NavBarProps } from "../interface/common";

const TopBar = ({ isOpen, toggleSidebar }: NavBarProps) => {
  return (
    <>
      <div className="bg-[#070B1D] z-100 sticky top-0 shadow-top-nav px-5 py-2.5 w-full justify-between flex ">
        <div className="flex items-center gap-25 flex-1">
          <div className=" flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              className=" z-50 flex flex-col items-center justify-center  lg:hidden"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1" : "mb-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              />
            </button>
            <Logo className="w-25 md:w-[170px]" />
          </div>

          <div className=" items-center gap-2 lg:w-[50%] hidden lg:flex">
            <Search className="text-[#F9F9F9]" />
            <input
              type="search"
              className="outline-none text-sm placeholder:text-white text-gray-50"
              placeholder="Search..."
            />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:gap-9">
          <div className="flex items-center gap-2 lg:gap-5">
            <Message className="w-[1.4rem] md:w-6 h-[1.4rem] md:h-6 hover:scale-110 hover:opacity-90 transition-all duration-300" />
            <div className="relative hover:scale-110 hover:opacity-90 transition-all duration-300">
              <span className="w-4 text-center font-semibold md:font-bold h-4 rounded-full text-xs text-white bg-primary-200 absolute -top-1 -right-1">
                5
              </span>
              <Notification className=" w-[1.4rem] md:w-6 h-[1.4rem] md:h-6" />
            </div>
          </div>

          <div className="lg:flex lg:items-center">
            <span className="w-8 h-8 md:w-9 md:h-9 font-bold text-sm lg:text-lg text-white rounded-full bg-green-100 flex font-inter items-center justify-center">
              R
            </span>
            <p className="text-sm text-white ml-3 mr-[17px] hidden lg:inline">
              Randhir kumar
            </p>

            <ChevronDown className="hidden lg:inline-block text-[#F9F9F9]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
