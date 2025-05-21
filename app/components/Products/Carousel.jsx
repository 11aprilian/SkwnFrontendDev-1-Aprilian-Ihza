"use client";

import { useEffect, useState } from "react";

const Carousel = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://682c56f8d29df7a95be695ef.mockapi.io/api/v1/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("error fetch:", error);
      }
    };

    fetchProducts();
  }, []);

  const scroll = (dir) => {
    const newIndex =
      dir === "left"
        ? Math.max(activeIndex - 1, 0)
        : Math.min(activeIndex + 1, products.length - 1);
    setActiveIndex(newIndex);
  };

  return (
    <div className="relative overflow-visible">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${activeIndex * 280}px)`,
          gap: "2rem",
          width: products.length * 280,
        }}
      >
        {products.map((product, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={product.id}
              className={`flex-shrink-0 w-64 rounded-xl overflow-hidden bg-white transform transition-transform duration-300 text-center relative ${
                isActive ? "scale-110 z-10" : "scale-90 opacity-50"
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
              />
              {isActive && (
                <div className="absolute bottom-0 left-0 w-full px-3 py-2 bg-gradient-to-t from-black/60 to-transparent text-left">
                  <p className="bg-white inline-block bg-opacity-70 rounded px-2 py-1 text-sm text-black font-medium mb-1">
                    ${product.price}
                  </p>
                  <h2 className="text-white font-semibold text-lg drop-shadow">
                    {product.name}
                  </h2>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-end gap-8 mt-6">
        <button
          onClick={() => scroll("left")}
          className="bg-lime-200 p-2 rounded-full hover:bg-lime-300 transition"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="bg-lime-200 p-2 rounded-full hover:bg-lime-300 transition"
        >
          <svg
            className="w-5 h-5 text-black"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
