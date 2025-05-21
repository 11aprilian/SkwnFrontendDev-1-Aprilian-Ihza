import React from "react";
import { MdOutlineSearch } from "react-icons/md";
import { PiNumberFiveBold } from "react-icons/pi";
import { PiBagBold } from "react-icons/pi";

const Features = () => {
  return (
    <div className="mx-auto px-6 sm:px-24 bg-[#2F241F] py-8 pb-16">
      <div className="text-center lg:text-left lg:items-center">
        <p className="text-[#E5F0B6] text-xl my-6 sm:my-12">WHY CHOOSE US?</p>
        <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#E5F0B6]">
          We care about details and the quality of our products
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="flex gap-4 items-start">
          <span className="text-white bg-[#E5F0B680] p-2 rounded-lg">
            <MdOutlineSearch size={20} />
          </span>
          <div>
            <h3 className="font-semibold text-xl text-[#E5F0B6]">
              MANUFACTURED WITH QUALITY MATERIALS
            </h3>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-white bg-[#E5F0B680] p-2 rounded-lg">
            <PiNumberFiveBold size={20} />
          </span>
          <div>
            <h3 className="font-semibold text-xl text-[#E5F0B6]">
              5 YEARS OF WARRANTY FOR EACH PRODUCT
            </h3>
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <span className="text-white bg-[#E5F0B680] p-2 rounded-lg">
            <PiBagBold size={20} />
          </span>
          <div>
            <h3 className="font-semibold text-xl text-[#E5F0B6]">
              20 YEARS OF EXPERTISE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
