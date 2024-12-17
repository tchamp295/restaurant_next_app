"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-6">
      {/* Total Price */}
      <h2 className="text-3xl font-bold text-gray-800">${total.toFixed(2)}</h2>

      {/* Options Container */}
      {options?.length && (
        <div className="flex gap-4">
          {options.map((option, index) => (
            <button
              key={option.title}
              className={`min-w-[6rem] p-2 rounded-md ${
                selected === index
                  ? "bg-red-500 text-white"
                  : "bg-white text-red-500"
              } border border-red-500 transition-colors duration-300`}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
        </div>
      )}

      {/* Quantity Container */}
      <div className="flex justify-between items-center ring-1 ring-red-500 p-3 rounded-md">
        <span className="text-lg font-semibold">Quantity</span>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            className="text-xl font-bold text-red-500"
          >
            {"<"}
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            className="text-xl font-bold text-red-500"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
