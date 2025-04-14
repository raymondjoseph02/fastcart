import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { sidebarItems } from "../../utility/sideBarItems";
import { NavBarProps, SidebarLinkProps } from "../../interface/navbar";

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
          "px-4 rounded py-2.5 flex gap-4 items-center " +
          (isActive ? "bg-white text-gray-100" : "text-white ")
        }
        onClick={toggleSidebar}
      >
        <span className={isActive ? "text-[#979797]" : "text-white"}>
          {icon}
        </span>

        <p className="text-sm  ">{name}</p>
      </Link>
    );
  };

  return (
    <div
      className={
        "w-[250px] bg-primary-300 backdrop-blur-sm p-4 fixed top-[69px] left-0 bottom-0 h-full lg:translate-x-0 z-20 transition-transform  ease-linear " +
        (isOpen ? "translate-x-0" : "-translate-x-full")
      }
      lg:translate-x-0
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
