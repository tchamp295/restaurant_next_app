import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-center text-gray-800 md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}
      {singleProduct.img && (
        <div className="relative w-full h-72 md:h-[60%] xl:h-[70%] rounded-lg overflow-hidden  group hover:scale-105 transition-transform duration-300">
          <Image
            src={singleProduct.img}
            alt={singleProduct.title}
            className="object-contain w-full h-full"
            layout="fill"
          />
        </div>
      )}

      {/* TEXT CONTAINER */}
      <div className="flex flex-col justify-center gap-6 md:h-[70%] md:justify-start xl:gap-8 mt-6 md:mt-0">
        <h1 className="text-3xl font-bold uppercase text-red-600 xl:text-5xl tracking-tight">
          {singleProduct.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          {singleProduct.desc}
        </p>

        {/* Price Display */}
        <div className="text-xl font-semibold text-gray-800 w-full md:w-3/4">
          <Price
            price={singleProduct.price}
            id={singleProduct.id}
            options={singleProduct.options}
          />
          <button className="bg-red-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-red-600 text-sm font-semibold uppercase transition-colors duration-300 mt-6 w-full  mx-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
