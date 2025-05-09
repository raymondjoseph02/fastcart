import React from "react";
import { BackIcon } from "../../../assets/svg/general";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  const handleNavigateBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button
        onClick={handleNavigateBack}
        className="flex items-center justify-center gap-1 text-sm font-normal leading-5 text-gray-100 capitalize w-fit"
      >
        <BackIcon />
        Back
      </button>
    </div>
  );
}

export default BackButton;
