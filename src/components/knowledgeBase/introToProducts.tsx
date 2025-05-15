import { Search } from "../../assets/svg/general";
import BigCard from "../knowledgeBase/bigCards"
function introToProducts() {
  return (
    <div className="w-full rounded-lg" >
    <div className="mt-9 bg-white h-12 py-2 px-4 rounded flex gap-2 border border-primary-50 w-full">
      <Search className="text-[#7E84A3]" />
      <input
        type="search"
        className="outline-none w-full text-gray-400"
        placeholder="Search..."
      />
    </div>
    <div className="pt-8 bg-white rounded-lg mt-1 px-7">
      <h2 className="font-bold text-lg text-gray-300">Introduction to Product</h2>
      <p className="mt-6 text-gray-300">Bolt is content management system, or CMS. Subscription includes content hosting, professionally designed layouts, 24/7 support, and access to our user-friendly platform for managing your business. You can use bolt to create management systems.</p>
      <section className="mt-6 bg-gray-50 w-full rounded-md p-5 text-gray-100">
        <p>Recommended: <br /> You can learn faster by looking some onboarding videos in video gallery.</p>
      </section>
      <section className="border-y border-gray-150 mt-7 pt-10 pb-7">
        <h2 className="font-bold text-lg text-gray-300">Starting Guide</h2>
        <p className="mt-6 text-gray-300">You can choose from a range of billing plans to get your idea working, whether you’re starting with a website or launching a new business.</p>
        <section className="flex gap-6 mt-5">
          <section className="h-9 w-9 bg-gray-50 flex items-center justify-center rounded-full">1</section>
          <p className="max-w-177">All billing plans are available on monthly and annual payment cycles. On an annual billing cycle, the average monthly cost is lower, and you can get a 3 months free.</p>
        </section>
        <section className="flex gap-6 mt-5">
          <section className="h-9 w-9 bg-gray-50 flex items-center justify-center rounded-full">2</section>
          <p className="max-w-177">All billing plans are available on monthly and annual payment cycles. On an annual billing cycle, the average monthly cost is lower, and you can get a 3 months free.</p>
        </section>
        <section className="flex gap-6 mt-5">
          <section className="h-9 w-9 bg-gray-50 flex items-center justify-center rounded-full">3</section>
          <p className="max-w-177">All billing plans are available on monthly and annual payment cycles. On an annual billing cycle, the average monthly cost is lower, and you can get a 3 months free.</p>
        </section>
      </section>
      <section className="pt-10">
        <h2 className="font-bold text-lg text-gray-300">Additional Information</h2>
        <section className="flex gap-3 h-14 mt-5 pt-4">
          <p className="h-10 border-b-2 border-primary-200 text-primary-200">Onboarding</p>
          <p className="text-gray-100">Tutorials</p>
          <p className="text-gray-100 ml-8">Guides for Beginners</p>
        </section>
        <section className="border-y border-gray-150 pt-5 pb-7">
          <p>In addition to our guides and video tutorials, we offer webinars to help you get comfortable and explore our product functionality. In our webinars, we walk you through the basics of setting up and growing your business.</p>
          <p className="mt-5">After it ends, we'll email you a video link to the webinar so you can remember everything you have learn anytime. If you can't attend the webinar at its scheduled time, you can watch it later.</p>
        </section>
        <section className="py-10">
          <h2 className="font-bold text-lg text-gray-300">Was this article helpfull?</h2>
          <section className="pt-5 gap-3 flex">
            <button className="w-16 h-9 text-primary-200 border border-gray-150 rounded-sm">Yes</button>
            <button className="w-16 h-9 text-primary-200 border border-gray-150 rounded-sm">No</button>
          </section>
          <p className="text-gray-100 mt-3">50 people find this article helpfull</p>
        </section>
      </section>
    </div>
    <div className="flex flex-wrap justify-between gap-2 mt-7">
      <BigCard
        title="Community Forum"
        text="Get help from community members, ask any questions and get answers faster."
        link="Join Community"
        className="mt-10 max-w-100"
      />
      <BigCard
        title="Webinars"
        text="Join our series of webinars where you can ask questions live and see a presentation."
        link="Register"
        className="mt-10  max-w-100"
      />
    </div>
  </div>
  )
}

export default introToProducts
