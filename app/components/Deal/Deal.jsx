import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Deal = () => {
  return (
    <div className=" px-4 py-8 sm:px-6 lg:py-10 lg:px-8 bg-[#FCFAFA]">
      <div className="px-6 py-6 rounded-lg flex flex-col items-center text-center sm:items-start sm:text-left">
        <div className="w-full sm:max-w-4xl">
          <p className="text-[#2F241F] mb-4">LIMITED DEAL</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2F241F]">
            Become a member and get 10% off of your first purchase
          </h2>
        </div>

        <div className="mt-8 w-full max-w-md">
          <fieldset>
            <div className="join w-full">
              <input
                type="text"
                className="input join-item w-full"
                placeholder="Enter your email here"
              />
              <button className="btn join-item bg-[#E5F0B6] text-[#2F241F]">
                <MdOutlineEmail size={24} />
              </button>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Deal;
