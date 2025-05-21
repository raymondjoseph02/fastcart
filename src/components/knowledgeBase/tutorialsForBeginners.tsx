import { Search } from "../../assets/svg/general";

function tutorialsForBeginners() {
  return (
    <div>
        <div className="mt-9 bg-white h-12 py-2 px-4 rounded flex gap-2 border border-primary-50 w-full">
              <Search className="text-[#7E84A3]" />
              <input
                type="search"
                className="outline-none w-full text-gray-400"
                placeholder="Search..."
              />
            </div>
      <h1 className="font-bold text-4xl sm:text-7xl mt-50 text-center">UNDER PROCESSING</h1>
    </div>
  )
}

export default tutorialsForBeginners
