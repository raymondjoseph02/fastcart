import FAQ from "../../components/globalSettings/FAQ";
import PricingPlans from "../../components/globalSettings/PricingPlans";

const GlobalSettings = () => {
  return (
    <div className="space-y-7">
      <h1 className="text-2xl font-bold text-gray-300">Choose a Plan</h1>

      <PricingPlans />

      <FAQ />
    </div>
  );
};

export default GlobalSettings;
