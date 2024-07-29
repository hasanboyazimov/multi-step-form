import React from "react";

const PricingCard = () => {
  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="text-lg font-semibold text-gray-800">
        Arcade (Monthly)
      </div>
      <div className="text-xl font-bold text-blue-600 mt-1">$9/mo</div>
      <a href="#" className="text-blue-500 underline mt-1 block">
        Change
      </a>
      <div className="border-t mt-4 mb-4"></div>
      <div className="text-gray-500">Online service</div>
      <div className="text-gray-500 mt-1">+$1/mo</div>
      <div className="text-gray-500 mt-2">Larger storage</div>
      <div className="text-gray-500 mt-1">+$2/mo</div>
      <div className="text-lg font-semibold text-gray-800 mt-4">
        Total (per month)
      </div>
      <div className="text-xl font-bold text-blue-600">+$12/mo</div>
    </div>
  );
};

export default PricingCard;
