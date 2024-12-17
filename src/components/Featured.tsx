"use client"
import { useState } from "react";
import { featuredProducts } from "@/data";
import Image from "next/image";

const Featured = () => {
  // State to manage the number of displayed items
  const [visibleItems, setVisibleItems] = useState(6);

  // Function to load more items
  const loadMore = () => {
    setVisibleItems((prev) => prev + 6); // Load 6 more items each time
  };

  return (
    <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-20">
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-10 md:text-4xl">
        Featured Products
      </h1>
      {/* Grid Wrapper */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.slice(0, visibleItems).map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center overflow-hidden"
          >
            {/* Image Container */}
            {item.img && (
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            {/* Text Content */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800 group-hover:text-red-500 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {item.desc}
              </p>
              <div className="mt-2">
                <span className="text-md font-semibold text-red-500">
                  ${item.price}
                </span>
              </div>
              <button className="mt-4 bg-red-500 hover:bg-red-600 text-white py-1.5 px-4 rounded-full text-sm shadow-md transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleItems < featuredProducts.length && (
        <div className="mt-10 text-center">
          <button
            onClick={loadMore}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg text-sm shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Featured;
