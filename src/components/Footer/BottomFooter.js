import React from "react";

const BottomFooter = () => {
  return (
    <div className="flex items-center pt-8">
      <div className="flex flex-grow">
        <span className="poppins text-gray-500">
          &#169; 2021 Jamiul Islam || Programming Hero Assignment 10
        </span>
      </div>

      <div className="flex justify-end items-center space-x-6">
        <span className="poppins text-white cursor-pointer hover:text-green-400">
          Privacy Policy
        </span>
        <span className="poppins text-white cursor-pointer hover:text-green-400">
          Terms of Use
        </span>
        <span className="poppins text-white cursor-pointer hover:text-green-400">
          Pricing
        </span>
      </div>
    </div>
  );
};

export default BottomFooter;
