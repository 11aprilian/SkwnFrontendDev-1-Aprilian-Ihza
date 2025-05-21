import React from "react";
import {
  MdOutlinePlayCircle,
  MdOutlineSearch,
  MdOutlineNavigateNext,
} from "react-icons/md";

const HeroSection = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full sm:w-7/12 mb-10">
        <div className="container mx-auto h-full sm:p-10">
          <header className="container px-4 mt-10 items-center h-full lg:mt-0 lg:flex lg:items-center lg:text-left text-center">
            <div className="w-full">
              <h1 className="text-4xl lg:text-6xl text-[#2F241F] font-bold mb-8">
                The kind of <span className="text-[#817253]">furniture</span>{" "}
                you have been looking for
              </h1>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="w-full lg:w-auto max-w-xs flex items-center justify-center gap-2 bg-[#E5F0B6] text-[#553B33] text-xl font-normal px-8 py-4 rounded-xl shadow">
                  <MdOutlineSearch className="text-2xl" />
                  SEARCH CATALOG
                </button>

                <button className="w-full lg:w-auto max-w-xs flex items-center justify-center gap-2 border text-[#553B33] border-[#553B33] text-xl font-normal px-8 py-4 rounded-xl shadow">
                  <MdOutlinePlayCircle className="text-2xl" />
                  WATCH VIDEOS
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      <div
        className="w-full h-96 sm:h-dvh sm:w-5/12 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/image64.png')" }}
      >
        <div className="flex flex-col justify-end items-start h-full p-4 sm:p-8 max-w-xs sm:max-w-full">
          <h5 className="mb-4 bg-white bg-opacity-50 text-[#2F241F] rounded-xl py-1 px-3 text-xl sm:text-2xl">
            $329
          </h5>
          <h2 className="text-white text-3xl sm:text-6xl font-normal leading-tight">
            Pösht Sofa
          </h2>
          <button className="flex items-center gap-2 text-white bg-[#2F241F] font-light mt-4 px-6 py-3 rounded-xl shadow text-sm sm:text-base">
            VIEW DETAIL
            <MdOutlineNavigateNext className="text-xl sm:text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
