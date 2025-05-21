import React from "react";

const brandsData = [
  {
    lightImageSrc: "/img/partners/1.png",
  },
  {
    lightImageSrc: "/img/partners/2.png",
  },
  {
    lightImageSrc: "/img/partners/3.png",
  },
  {
    lightImageSrc: "/img/partners/4.png",
  },
];

const SingleImage = ({ brand }) => {
  const { lightImageSrc } = brand;
  return (
    <a href="/" className="flex w-20 sm:w-36 items-center justify-center py-4">
      <img src={lightImageSrc} className="h-8 sm:h-10 object-contain" />
    </a>
  );
};

const Partners = () => {
  return (
    <section className="bg-[#FCFAFA] py-20 lg:py-[120px] flex flex-col lg:flex-row items-center justify-center gap-10">
      <div className="text-center lg:text-left">
        <h2 className="text-5xl font-bold text-[#2F241F]">25+</h2>
        <p className="text-[#2F241F]">PARTNERED BRANDS</p>
      </div>

      <div className="w-full max-w-4xl px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
          {brandsData.map((brand, i) => (
            <SingleImage key={i} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
