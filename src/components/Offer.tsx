import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white h-screen overflow-hidden">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center gap-6 px-8 md:px-12 lg:px-20 z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-normal md:leading-tight drop-shadow-md">
          <span className="text-red-500">Delicious</span> Burger & <br />
          Crispy French Fries
        </h1>
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed">
          Enjoy the perfect blend of juicy burgers and crispy golden fries that
          will leave you craving for more.
        </p>
        {/* Countdown */}
        <CountDown />
        <div className="flex justify-center md:justify-start">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-8 rounded-lg shadow-md text-base font-medium uppercase tracking-wide transition-transform duration-300 transform hover:scale-105">
            Order Now
          </button>
        </div>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="flex-1 relative w-full h-[50vh] md:h-full">
        <Image
          src="/offerProduct.png"
          alt="Burger and Fries"
          layout="fill"
          className="object-contain transform hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* DECORATIVE BACKGROUND ELEMENTS */}
      <div className="absolute top-[-150px] right-[-150px] w-[400px] h-[400px] bg-red-500 rounded-full blur-[180px] opacity-20"></div>
      <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] bg-yellow-500 rounded-full blur-[180px] opacity-20"></div>
    </div>
  );
};

export default Offer;
