"use client";

import { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          "https://682c56f8d29df7a95be695ef.mockapi.io/api/v1/category"
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const activeCategory = categories[activeIndex];

  return (
    <section className="px-8 sm:px-20 py-12  text-[#2C1F1F] flex flex-col-reverse lg:flex-row gap-8 mx-auto ">
      <div className="flex-1 flex gap-4 h-[400px]">
        {activeCategory &&
          [
            activeCategory.image1,
            activeCategory.image2,
            activeCategory.image3,
          ].map((img, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredImageIndex(idx)}
              onMouseLeave={() => setHoveredImageIndex(null)}
              className={`relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer ${
                hoveredImageIndex === idx ? "flex-[2]" : "flex-[1]"
              }`}
            >
              <img
                src={img}
                alt={`category-${idx}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
      </div>

      <div className="flex-1">
        <p className="text-xl mb-3 sm:mb-8 text-center lg:text-left text-[#2F241F]">
          Categories
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center lg:text-left text-[#2F241F]">
          Furniture Sets <br /> Recommendations
        </h2>

        <div className="bg-[#FCF9F6] rounded-xl divide-y">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`p-6 cursor-pointer transition ${
                idx === activeIndex ? "bg-[#E8F1B9]" : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveIndex(idx)}
            >
              <h3 className="font-semibold text-lg">{cat.name}</h3>
              {idx === activeIndex && (
                <p className="text-sm text-gray-700 mt-2">{cat.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
