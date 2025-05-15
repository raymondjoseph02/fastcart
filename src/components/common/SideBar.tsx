import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { sidebarItems } from "../../utility/sideBarItems";
import { NavBarProps, SidebarLinkProps } from "../../interface/common";
import { motion } from "framer-motion";

const SideBar = ({ isOpen, toggleSidebar }: NavBarProps) => {
  const SideBarLink = ({ icon, name, to, toggleSidebar }: SidebarLinkProps) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({
      path: `${resolvedPath.pathname}/*`,
      end: true,
    });

    console.log(isActive);
    console.log(resolvedPath.pathname);

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
        <>
          {item.title && (
            <p className="text-xs px-4 mt-7 mb-3 text-white">{item.title}</p>
          )}
          {item.children.map((link) => (
            <SideBarLink
              icon={link.icon}
              name={link.name}
              to={link.link}
              toggleSidebar={toggleSidebar}
              key={link.name}
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default SideBar;
