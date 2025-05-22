import { Search } from "../../assets/svg/general";
import BigCard from "../knowledgeBase/bigCards";
import { useState } from "react";

function IntroToProducts() {
  const [activeTab, setActiveTab] = useState("Onboarding");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Onboarding":
        return (
          <>
            <p>
              In addition to our guides and video tutorials, we offer webinars to help you get comfortable and explore our product functionality.
            </p>
            <p className="mt-5">
              After it ends, we'll email you a video link to the webinar so you can remember everything you have learned anytime. If you can't attend the webinar at its scheduled time, you can watch it later.
            </p>
          </>
        );
      case "Tutorials":
        return (
          <>
            <p>Explore our bite-sized tutorials designed to get you up and running in no time.</p>
            <p className="mt-5">Each tutorial walks you through common tasks and product features.</p>
          </>
        );
      case "Guides for Beginners":
        return (
          <>
            <p>Our beginner guides help new users understand the basics of Bolt.</p>
            <p className="mt-5">Includes setup, navigation tips, and best practices.</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full rounded-lg">
      <div className="mt-9 bg-white h-12 py-2 px-4 rounded flex items-center gap-2 border border-primary-50 w-full">
        <Search className="text-[#7E84A3]" />
        <input
          type="search"
          className="outline-none w-full text-gray-400"
          placeholder="Search..."
        />
      </div>

      <div className="pt-8 bg-white rounded-lg mt-1 px-7">
        <h2 className="font-bold text-xl text-gray-300">Introduction to Product</h2>
        <p className="mt-6 text-gray-300">
          Bolt is content management system, or CMS. Subscription includes content hosting, professionally designed layouts, 24/7 support, and access to our user-friendly platform for managing your business. You can use bolt to create management systems.
        </p>

        <section className="mt-6 bg-gray-50 w-full rounded-md p-5 text-gray-100">
          <p>Recommended: <br /> You can learn faster by looking some onboarding videos in video gallery.</p>
        </section>

        <section className="border-y border-gray-150 mt-7 pt-10 pb-7">
          <h2 className="font-bold text-xl text-gray-300">Starting Guide</h2>
          <p className="mt-6 text-gray-300">You can choose from a range of billing plans to get your idea working, whether you’re starting with a website or launching a new business.</p>

          {[1, 2, 3].map((n) => (
            <section key={n} className="flex gap-6 mt-5">
              <section className="h-9 w-9 shrink-0 bg-gray-50 flex items-center justify-center rounded-full">{n}</section>
              <p className="max-w-177">
                All billing plans are available on monthly and annual payment cycles. On an annual billing cycle, the average monthly cost is lower, and you can get a 3 months free.
              </p>
            </section>
          ))}
        </section>
        <section className="pt-10">
          <h2 className="font-bold text-xl text-gray-300">Additional Information</h2>

          <section className="flex gap-2 sm:gap-3 h-14 mt-5 pt-4">
            {["Onboarding", "Tutorials", "Guides for Beginners"].map((tab) => (
              <p
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-10 cursor-pointer border-b-2 transition-all text-sm sm:text-base ${
                  activeTab === tab
                    ? "border-primary-200 text-primary-200"
                    : "border-transparent text-gray-100"
                } ${tab === "Guides for Beginners" ? "ml-0 sm:ml-8" : ""}`}
              >
                {tab}
              </p>
            ))}
          </section>

          <section className="border-t border-gray-150 pt-5 pb-7 text-gray-300">
            {renderTabContent()}
          </section>

          <section className="py-10 -mx-7 px-7 border-t border-gray-150">
            <h2 className="font-bold text-xl text-gray-300">Was this article helpful?</h2>
            <section className="pt-5 gap-3 flex">
              <button className="w-16 h-9 text-primary-200 border border-gray-150 rounded-sm hover:bg-gray-50">Yes</button>

              <button className="w-16 h-9 text-primary-200 border border-gray-150 rounded-sm hover:bg-gray-50">No</button>
            </section>
            <p className="text-gray-100 mt-3">50 people found this article helpful</p>
          </section>
        </section>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        <BigCard
          title="Community Forum"
          text="Get help from community members, ask any questions and get answers faster."
          link="Join Community"
          className="mt-10"
        />
        <BigCard
          title="Webinars"
          text="Join our series of webinars where you can ask questions live and see a presentation."
          link="Register"
          className="mt-10"
        />
      </div>
    </div>
  );
}

export default IntroToProducts;
