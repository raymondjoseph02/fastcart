import Card from "../../components/knowledgeBase/cards";
import BigCard from "../../components/knowledgeBase/bigCards";
import { Search } from "../../assets/svg/general";
import GettingStarted from "../../assets/images/GettingStarted.png";
import PersonalSettings from "../../assets/images/PersonalSettings.png";
import Billing from "../../assets/images/Billing.png";
import Commerce from "../../assets/images/Commerce.png";
function KnowledgeBase() {
  return (
    <div className="bg-gray-50 pb-9">
      <h1 className="font-bold text-xl sm:text-2xl">Knowledge Base</h1>
      <div className="mt-13 h-12 py-2 px-4 rounded flex items-center gap-2 border border-primary-50">
        <Search className="text-[#7E84A3]" />
        <input
          type="search"
          className="outline-none w-full text-gray-400"
          placeholder="Search orders..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7 mt-2">
        <Card
          imageSrc={GettingStarted}
          title="Getting Started"
          li1="Guide to get started faster"
          li2="Video tutorials for beginners"
          li3="Moving to Bolt system"
        />
        <Card
          imageSrc={PersonalSettings}
          title="Personal Settings"
          li1="Setting up your profile"
          li2="Changing business name"
          li3="Changing email address"
        />
        <Card
          imageSrc={Billing}
          title="Billing"
          li1="Payment declined"
          li2="Get a refund"
          li3="Subscriptions"
        />
        <Card
          imageSrc={Commerce}
          title="Commerce"
          li1="Add products"
          li2="Selling guide"
          li3="Create categories"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-7">
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
      <div className="border-t border-gray-200 mt-8 text-center">
        <h2 className="mt-9 font-bold text-gray-300 text-2xl">
          Still Need Help?
        </h2>
        <p className="mt-2 text-base text-gray-100">
          Get in touch with us and we will be happy to help you out!
        </p>
        <button className="mt-7 h-10 w-43 bg-primary-200 rounded-md text-white">
          Contact Support
        </button>
      </div>
    </div>
  );
}

export default KnowledgeBase;
