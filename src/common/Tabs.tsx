import { TabsProps } from "../interface/common";

const Tabs = ({ onClick, activeTabs, tabs }: TabsProps) => {
  return (
    <ul className="flex flex-col md:flex-row  md:gap-6 text-sm mb-5 ">
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => onClick(tab)}
          className={`cursor-pointer w-fit  py-2 md:py-4 group relative overflow-hidden  ${
            activeTabs.includes(tab) ? "text-[#4944E6] " : "text-gray-100"
          }`}
        >
          {tab}
          <span
            className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#4944E6] ${
              activeTabs.includes(tab)
                ? "translate-x-0 "
                : "-translate-x-100 group-hover:translate-x-0 "
            } transition-all duration-400 ease-in`}
          />
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
