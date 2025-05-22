import { Search } from "../../assets/svg/general";
import BigCard from "../knowledgeBase/bigCards";

function tutorialsForBeginners() {
  return (
    <div>
        <div className="mt-9 bg-white h-12 py-2 px-4 rounded flex  items-center gap-2 border border-primary-50 w-full">
              <Search className="text-[#7E84A3]" />
              <input
                type="search"
                className="outline-none w-full text-gray-400"
                placeholder="Search..."
              />
            </div>
      <h1 className="font-bold text-4xl sm:text-7xl mt-50 text-center">UNDER PROCESSING</h1>
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
  )
}

export default tutorialsForBeginners
