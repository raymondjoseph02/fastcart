import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { sidebarItems } from "../../utility/sideBarItems";
import { NavBarProps, SidebarLinkProps } from "../../interface/navbar";
import { motion } from "framer-motion";
const SideBar = ({ isOpen, toggleSidebar }: NavBarProps) => {
  const SideBarLink = ({ icon, name, to, toggleSidebar }: SidebarLinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({
      path: `${resolvedPath.pathname}/*`,
      end: true,
    });

    return (
      <Link
        to={to}
        className={
          "px-4 rounded py-2.5 flex gap-4 items-center relative  " +
          (isActive ? " text-gray-100" : "text-white ")
        }
        onClick={toggleSidebar}
      >
        <span
          className={isActive ? "text-[#979797] relative z-20" : "text-white"}
        >
          {icon}
        </span>

        <p className="relative z-20 text-sm">{name}</p>

        {isActive && (
          <motion.div
            id="backgroundAnimation"
            layoutId="backgroundAnimation"
            className="absolute top-0 left-0 w-full h-full bg-white rounded "
          ></motion.div>
        )}
      </Link>
    );
  };

  return (
    <div
      className={
        "w-[250px] bg-primary-300 backdrop-blur-sm p-4 fixed top-[69px] left-0 bottom-0 h-full lg:translate-x-0 z-20 transition-transform  ease-linear " +
        (isOpen ? "translate-x-0" : "-translate-x-full")
      }
    >
      {sidebarItems.map((item) => (
        <SideBarLink
          icon={item.icon}
          name={item.name}
          to={item.link}
          toggleSidebar={toggleSidebar}
          key={item.name}
        />
      ))}
    </div>
  );
};

export default SideBar;
