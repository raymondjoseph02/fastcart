import { BackArrow } from "../assets/svg/general";
import { Link } from "react-router-dom";
import { useState } from "react";
import IntroToProduct from "../components/knowledgeBase/introToProducts";
import TutorialsForBeginners from "../components/knowledgeBase/tutorialsForBeginners";
function GettingStarted() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    "Introduction to Product",
    "Tutorials for Beginners",
    "Moving to Bolt System",
    "Accessibility",
    "Content Management",
    "Generating Reports",
  ];

  const renderContent = () => {
    switch (activeIndex) {
      case 0:
        return <IntroToProduct />;
      case 1:
        return <TutorialsForBeginners />;
      case 2:
        return <TutorialsForBeginners />;
      case 3:
        return <TutorialsForBeginners />;
      case 4:
        return <TutorialsForBeginners />;
      case 5:
        return <TutorialsForBeginners />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 flex gap-8">
      <div className="max-w-90 hidden sm:block sticky top-0 h-100">
        <Link to="/knowledge-base">
          <button className="flex items-center justify-center gap-1">
            <BackArrow /> Back
          </button>
        </Link>
        <h1 className="font-bold text-2xl text-gray-300">Getting Started</h1>
        <div className="mt-8 w-64 font-bold">
          {items.map((item, index) => (
            <p
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-11 w-full rounded-md flex items-center px-5 cursor-pointer ${
                activeIndex === index ? "bg-primary-300 text-white" : ""
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
}

export default GettingStarted;

