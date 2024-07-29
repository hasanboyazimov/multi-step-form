import React, { useState } from "react";

const ServiceOption = ({ title, description, price, selected, onSelect }) => (
  <div
    className={`flex items-center justify-between border rounded-lg p-4 mb-4 ${
      selected ? "border-blue-500" : "border-gray-300"
    }`}
  >
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={selected}
        onChange={onSelect}
        className="form-checkbox text-blue-500 mr-4"
      />
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
    <span className="text-blue-500">{price}</span>
  </div>
);

const Services = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    onlineService: true,
    largerStorage: true,
    customizableProfile: false,
  });

  const toggleOption = (option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));
  };

  return (
    <div className="w-full mx-auto">
      <ServiceOption
        title="Online service"
        description="Access to multiplayer games"
        price="+$1/mo"
        selected={selectedOptions.onlineService}
        onSelect={() => toggleOption("onlineService")}
      />
      <ServiceOption
        title="Larger storage"
        description="Extra 1TB of cloud save"
        price="+$2/mo"
        selected={selectedOptions.largerStorage}
        onSelect={() => toggleOption("largerStorage")}
      />
      <ServiceOption
        title="Customizable profile"
        description="Custom theme on your profile"
        price="+$2/mo"
        selected={selectedOptions.customizableProfile}
        onSelect={() => toggleOption("customizableProfile")}
      />
    </div>
  );
};

export default Services;
