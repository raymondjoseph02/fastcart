import { Switch } from "@material-tailwind/react";
export const ToggleVisibility = () => {
  return (
    <div className="space-y-6 bg-white rounded p-7">
      <p className="text-base font-bold leading-6 text-gray-300">
        Category Visibility
      </p>
      <div>
        <Switch color="blue" label="Visible on site" />
      </div>
    </div>
  );
};
