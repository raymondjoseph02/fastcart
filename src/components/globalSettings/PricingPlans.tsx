import { CheckCircleIcon, CircleMinusIcon } from "../../assets/svg/general";
import { billingTypes, plans } from "../../data/globalSetting";

import { motion, AnimatePresence } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";

const PricingPlans = () => {
  const [billingType, setBillingType] = useState(billingTypes[0]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([null]);

  useLayoutEffect(() => {
    const index = billingTypes.indexOf(billingType);
    const btn = buttonRefs.current[index];
    if (btn) {
      setIndicatorStyle({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [billingType]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-white shadow-bg-auth p-7 md:py-10 md:px-7 rounded-md ">
      <span className="text-center">
        <h2 className="text-xl mb-4 font-bold text-gray-300">Pricing Plans</h2>

        <p className=" text-gray-100 mb-6">
          Familiarize yourself with the payment plans below.
          <br />
          Pick best pracing plan to fit your needs.
        </p>
      </span>

      <div className="border rounded border-primary-150 w-fit mx-auto relative mb-10">
        <div
          className="absolute top-0 h-full border-2 border-primary-200 rounded transition-all duration-300 ease-in-out"
          style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
        />

        {billingTypes.map((type, idx) => (
          <button
            className={
              "px-5 h-10 transition-all ease-in-out text-sm md:text-base " +
              (billingType === type
                ? "text-primary-200 rounded"
                : "text-gray-100")
            }
            onClick={() => setBillingType(type)}
            ref={(el) => {
              buttonRefs.current[idx] = el;
            }}
            key={type}
          >
            Bill {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <AnimatePresence>
        <motion.div
          key={billingType}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:pt-3.5 mx-auto container"
        >
          {plans.map((plan, idx) => {
            const price =
              billingType === "monthly" ? plan.monthlyPrice : plan.annualPrice;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={
                  "border border-gray-150 rounded p-7 relative " +
                  (plan.recommended ? "mt-3.5 xl:mt-0" : "")
                }
              >
                {plan.recommended && (
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-200 text-white px-2 py-1 rounded text-sm">
                    Recommended
                  </span>
                )}

                <span>
                  <span className="text-3xl md:text-[32px] font-bold text-gray-900">
                    ${price}
                  </span>{" "}
                  <span className="text-sm md:text-base text-gray-100">
                    / {billingType}
                  </span>
                </span>

                <p className="font-bold text-lg lg:text-xl text-gray-300 mt-5 mb-2">
                  {plan.name}
                </p>

                <p className="text-sm md:text-base text-gray-100">
                  Start your business{" "}
                </p>

                <hr className="w-full text-gray-150 my-5 lg:my-7" />

                <div className="mb-7 space-y-3">
                  {plan.features.map((feat, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-center text-gray-300"
                    >
                      {feat.included ? (
                        <CheckCircleIcon />
                      ) : (
                        <CircleMinusIcon />
                      )}
                      <p
                        className={
                          "text-sm md:text-base " +
                          (feat.included ? "" : "text-gray-100")
                        }
                      >
                        {feat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  className={
                    "h-10 w-full text-center rounded border transition-colors duration-300 text-sm md:text-base " +
                    (plan.recommended
                      ? "bg-primary-200 text-white hover:bg-primary-200/90 border-transparent"
                      : "text-primary-200 border-primary-150 hover:bg-primary-200/10 hover:border-0")
                  }
                >
                  Select Plan
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <p className="text-sm md:text-base mt-7 text-center text-gray-100">
        Cancel or upgrade your plan anytime
      </p>
    </section>
  );
};

export default PricingPlans;
