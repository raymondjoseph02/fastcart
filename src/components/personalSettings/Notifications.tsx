import { useState } from "react";
import { motion } from "framer-motion";
export const Notification = () => {
  const securityOptions = [
    {
      option: "Personalized Offers",
      description: "Receive offers made special for you",
    },
    {
      option: "Online Webinars",
      description: "Get notified about upcoming webinars",
    },
    {
      option: "New Features",
      description: "Updates about new features and product releases",
    },
    {
      option: "Security and Billing",
      description: "Account security and notifications about billing",
    },
    {
      option: "Marketing",
      description: "Receive marketing newsletters about our new products.",
    },
  ];

  const [checkedOptions, setCheckedOptions] = useState(
    Array(securityOptions.length).fill(true)
  );

  const toggleOption = (index: number) => {
    const updated = [...checkedOptions];
    updated[index] = !updated[index];
    setCheckedOptions(updated);
  };

  return (
    <motion.div
      initial={{
        x: "-32px",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        delay: 0.2,
        ease: "easeOut",
      }}
    >
      {securityOptions.map((opt, index) => {
        return (
          <div
            key={index}
            className="py-6 border-t border-[#D9E1EC] flex justify-between items-center gap-5"
          >
            <div>
              <p className="text-base font-bold text-[#131523] leading-6">
                {opt.option}
              </p>
              <p className="text-sm leading-5 text-[#5A607F]">
                {opt.description}
              </p>
            </div>
            <div>
              <input
                type="checkbox"
                checked={checkedOptions[index]}
                onChange={() => toggleOption(index)}
                className="switch"
              />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};
