import { useState } from "react";
import { Heading } from "../../common/Heading";
import { motion } from "framer-motion";
import { ProfileSettings } from "../../components/personalSettings/ProfileSettings";
import { Security } from "../../components/personalSettings/Security";
import { Account } from "../../components/personalSettings/Account";
import { Notification } from "../../components/personalSettings/Notifications";

const PersonalSettings = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabs = [
    {
      name: "Profile",
      action: () => setActiveTab("Profile"),
    },
    {
      name: "Notifications",
      action: () => setActiveTab("Notifications"),
    },
    {
      name: "Accounts",
      action: () => setActiveTab("Accounts"),
    },
    {
      name: "Security",
      action: () => setActiveTab("Security"),
    },
  ];

  const tabSection = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileSettings />;
      case "Notifications":
        return <Notification />;
      case "Accounts":
        return <Account />;
      case "Security":
        return <Security />;

      default:
        return <ProfileSettings />;
    }
  };
  return (
    <section className="space-y-7.5">
      <Heading
        SecondaryBtnText="Cancel"
        primaryBtnText="Save"
        title="Settings"
        primaryBtnIcon={false}
      />
      <div className="bg-white rounded-md p-7 ">
        <div>
          <ul className="flex flex-col gap-3 sm:gap-8 md:gap-12 sm:flex-row ">
            {tabs.map((tab, index) => {
              const active =
                tab.name.toLocaleLowerCase() === activeTab.toLocaleLowerCase();
              return (
                <li
                  key={index}
                  role="tab"
                  onClick={tab.action}
                  className={` ${
                    active
                      ? "border-b-[2px] border-transparent"
                      : "hover:border-b-[2px] hover:border-[#4944E6]"
                  } pb-3.5 relative cursor-pointer transition duration-200 ease-in-out group`}
                >
                  <span
                    className={`${
                      active ? "text-[#4944E6]  " : "text-[#5A607F]"
                    }`}
                  >
                    {tab.name}
                  </span>

                  {active && (
                    <motion.div
                      id="activeTab"
                      layout="position"
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#4944E6] hidden sm:block"
                    ></motion.div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div>{tabSection()}</div>
      </div>
    </section>
  );
};

export default PersonalSettings;
