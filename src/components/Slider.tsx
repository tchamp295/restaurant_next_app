"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Always Fresh & Crispy",
    subtitle: "Handcrafted with Passion",
    image: "/slide1.png",
    bgColor: "bg-[#FFF4E6]",
  },
  {
    id: 2,
    title: "Delivered Anywhere in NY",
    subtitle: "Hot & Fresh to Your Doorstep",
    image: "/slide2.png",
    bgColor: "bg-[#F9E4D2]",
  },
  {
    id: 3,
    title: "Family Pizza Experience",
    subtitle: "Sharing Moments, Sharing Slices",
    image: "/slide3.jpg",
    bgColor: "bg-[#FFE5B4]",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      10000
    );
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 flex flex-col lg:flex-row ${data[currentSlide].bgColor}`}
        >
          {/* TEXT CONTAINER */}
          <div className="flex-1 flex items-center justify-center flex-col text-center p-8 lg:p-16 space-y-6">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#333333] uppercase tracking-tight"
            >
              {data[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-[#666666] mb-6"
            >
              {data[currentSlide].subtitle}
            </motion.p>
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="bg-[#FF6B35] text-white px-8 py-3 rounded-full hover:bg-[#FF8A5B] transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Order Now
            </motion.button>
          </div>

          {/* IMAGE CONTAINER */}
          <div className="w-full flex-1 relative">
            <Image
              src={data[currentSlide].image}
              alt={data[currentSlide].title}
              fill
              priority
              className="object-contain lg:object-cover"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2 z-10 shadow-md transition-all duration-300"
      >
        <ChevronLeft className="text-[#FF6B35]" size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/70 rounded-full p-2 z-10 shadow-md transition-all duration-300"
      >
        <ChevronRight className="text-[#FF6B35]" size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-[#FF6B35] w-6"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
