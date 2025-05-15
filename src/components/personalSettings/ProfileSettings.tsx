import { ArrowDown } from "../../assets/svg/general";
import { ImageDropInput } from "../common/ImageDropInput";
import { motion } from "framer-motion";
export const ProfileSettings = () => {
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
      className="w-full space-y-6 pt-7"
    >
      <div className="">
        <p className="text-base font-bold leading-6 text-[#131523]">
          Profile Details
        </p>
        <p className="text-sm leading-5 text-[#5A607F]">
          Enter your profile information
        </p>
      </div>
      <div>
        <form>
          <div className="pb-10 space-y-6 border-b border-[#E6E9F4]">
            <div className="space-y-1">
              <label className="auth_label">Profile Image</label>
              <ImageDropInput isEdit={false} />
            </div>
            <div className="flex flex-col w-full gap-6 sm:flex-row">
              <div className="grow">
                <label htmlFor="firstName" className="auth_label">
                  First Name
                </label>
                <input type="text" className="auth_input" id="firstName" />
              </div>
              <div className="grow">
                <label htmlFor="lastName" className="auth_label">
                  Last Name{" "}
                </label>
                <input type="text" className="auth_input" id="lastName" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-6 sm:flex-row">
              <div className="grow">
                <label htmlFor="email" className="auth_label">
                  Email Address{" "}
                </label>
                <input type="email" className="auth_input" id="email" />
              </div>
              <div className="grow">
                <label htmlFor="tel" className="auth_label">
                  Phone Number
                </label>
                <input type="text" className="auth_input" id="tel" />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="pt-10">
              <p className="text-base font-bold leading-6 text-[#131523]">
                Regional Settings{" "}
              </p>
              <p className="text-sm leading-5 text-[#5A607F]">
                Set your language and timezone{" "}
              </p>
            </div>
            <div className="flex flex-col gap-6 sm:flex-row ">
              <div className="grow">
                <div>
                  <label htmlFor="language" className="auth_label">
                    Language
                  </label>
                  <div className="select-wrapper">
                    <select name="language" id="label">
                      <option value="english">English</option>
                    </select>
                    <span className="select-icon">
                      <ArrowDown />
                    </span>
                  </div>
                </div>
              </div>
              <div className="grow">
                <div>
                  <label htmlFor="timeZone" className="auth_label">
                    Timezone{" "}
                  </label>
                  <div className="select-wrapper">
                    <select name="timeZone" id="timeZone">
                      <option value="GMT +02:00">GMT +02:00</option>
                    </select>
                    <span className="select-icon">
                      <ArrowDown />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
