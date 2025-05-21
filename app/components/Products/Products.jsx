"use client";

import { useEffect, useState } from "react";
import Carousel from "./Carousel";

const Products = () => {
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
    <section className="bg-[#2C1F1F] text-[#E5F0B6] px-6 py-10 flex justify-center overflow-hidden">
      <div className="container ">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[#E5F0B6] text-normal sm:text-xl my-4 sm:my-8">
              OUR PRODUCTS
            </p>
            <h2 className="font-bold text-xl sm:text-3xl lg:text-4xl text-[#E5F0B6]">
              This month’s best seller
            </h2>
          </div>
          <button className="bg-lime-200 text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-lime-300 transition">
            See More
          </button>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Products;
