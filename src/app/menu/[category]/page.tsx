import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {pizzas.map((item) => (
        <Link
          className="group relative w-full h-[400px] rounded-lg border border-red-500 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative w-full h-[70%]">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}

          {/* TEXT CONTAINER */}
          <div className="p-4 flex flex-col justify-between bg-white text-center">
            <h1 className="text-xl font-semibold uppercase text-gray-800 group-hover:text-red-500 transition-colors duration-300">
              {item.title}
            </h1>
            <div className="flex justify-between items-center mt-2">
              <h2 className="text-lg text-gray-700">${item.price}</h2>
              <button className="bg-red-500 text-white py-1.5 px-4 rounded-md text-sm font-semibold uppercase hidden group-hover:block transition-colors duration-300 hover:bg-red-600">
                Add to Cart
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
