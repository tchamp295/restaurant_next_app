import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row gap-6">
      {/* PRODUCTS CONTAINER */}
      <div className="flex flex-col justify-between lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 bg-white shadow-lg rounded-lg p-4 overflow-y-auto">
        {/* SINGLE ITEM */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 border-b pb-4"
          >
            <Image
              src="/temporary/p1.png"
              alt="Product Image"
              width={100}
              height={100}
              className="rounded-md"
            />
            <div className="flex flex-col ml-4">
              <h1 className="uppercase text-xl font-bold text-gray-800">
                Sicilian
              </h1>
              <span className="text-sm text-gray-500">Large</span>
            </div>
            <h2 className="font-bold text-xl text-gray-800">$79.90</h2>
            <span className="cursor-pointer text-red-500 hover:text-red-600 text-lg">
              X
            </span>
          </div>
        ))}
      </div>

      {/* PAYMENT CONTAINER */}
      <div className="lg:w-1/3 2xl:w-1/2 p-6 bg-fuchsia-50 flex flex-col gap-6 shadow-lg rounded-lg">
        <div className="flex justify-between text-lg font-semibold">
          <span>Subtotal (3 items)</span>
          <span>$81.70</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between text-xl font-semibold">
          <span>TOTAL (INCL. VAT)</span>
          <span className="font-bold text-gray-900">$81.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-full sm:w-1/2 self-center mt-4 hover:bg-red-600 transition-all">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
