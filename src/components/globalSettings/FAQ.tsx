import { useRef, useState } from "react";
import { faqs } from "../../data/globalSetting";
import { ChevronDown } from "../../assets/svg/general";

const FAQ = () => {
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="bg-white shadow-bg-auth p-7 rounded-md">
      <h3 className="text-xl mb-4 font-bold text-gray-300">
        Frequently Asked Questions
      </h3>

      <div>
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          const height = contentRefs.current[idx]?.scrollHeight || 0;

          return (
            <div key={idx} className="border-t border-gray-150 px-3  lg:px-6">
              <button
                onClick={() => toggle(idx)}
                className="w-full py-5 flex justify-between items-center focus:outline-none"
              >
                <p
                  className={
                    "text-gray-300 text-left " +
                    (isOpen ? "font-bold" : "font-normal")
                  }
                >
                  {item.question}
                </p>

                <ChevronDown
                  className={
                    "text-[#7E84A3] transform transition-transform duration-300 " +
                    (isOpen ? "rotate-180" : "")
                  }
                />
              </button>
              <div
                ref={(el) => {
                  contentRefs.current[idx] = el;
                }}
                style={{ height: isOpen ? `${height}px` : "0px" }}
                className={
                  "overflow-hidden transition-all duration-300 ease-in-out "
                }
              >
                <p className="text-gray-600 pb-4">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
