import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-6 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row flex-wrap gap-8">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-[300px] bg-cover rounded-lg overflow-hidden flex items-end"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className="bg-gradient-to-t from-black via-transparent to-transparent w-full h-full p-6 flex flex-col justify-end">
            <h1
              className={`uppercase font-bold text-2xl md:text-3xl text-${category.color} shadow-md`}
            >
              {category.title}
            </h1>
            <p className="text-sm md:text-base text-white mt-2 mb-6">
              {category.desc}
            </p>
            <button
              className={`bg-${category.color} text-${
                category.color === "black" ? "white" : "red-500"
              } py-2 px-4 rounded-md`}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
