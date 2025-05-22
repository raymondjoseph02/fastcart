import { BackArrow } from "../assets/svg/general";
import { Link } from "react-router-dom";
import { useState } from "react";
import IntroToProduct from "../components/knowledgeBase/introToProducts";
import TutorialsForBeginners from "../components/knowledgeBase/tutorialsForBeginners";

function GettingStarted() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false); // toggle state

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
      case 2:
      case 3:
      case 4:
      case 5:
        return <TutorialsForBeginners />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 flex gap-8 relative">
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className="md:hidden absolute top-0 left-4 z-50 bg-primary-300 text-white px-3 py-1 rounded"
      >
        {showSidebar ? "Close" : "Menu"}
      </button>
      <div
        className={`max-w-90 absolute md:sticky h-100 border bg-gray-50 top-12 ${
          showSidebar ? "block" : "hidden"
        } sm:block`}
      >
        <Link to="/knowledge-base">
          <button className="flex items-center justify-center gap-1 text-sm text-gray-100">
            <BackArrow /> Back
          </button>
        </Link>
        <h1 className="font-bold text-2xl text-gray-300">Getting Started</h1>
        <div className="mt-8 w-64 font-bold text-sm text-gray-600">
          {items.map((item, index) => (
            <p
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setShowSidebar(false); // hide sidebar after click on mobile
              }}
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


