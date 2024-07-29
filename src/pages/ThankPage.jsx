import React from "react";

const ThankYouMessage = () => {
  return (
    <div className="relative flex flex-col justify-center gap-5 w-1/3 mt-12 items-center">
      <div className="flex items-center justify-center w-16 h-16 bg-red-200 rounded-full mb-4">
        <svg
          className="w-8 h-8 text-red-600"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800">Thank you!</h1>
      <p className="text-center text-gray-600 mt-2">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYouMessage;
