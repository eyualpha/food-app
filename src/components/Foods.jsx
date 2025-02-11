import React, { useState } from "react";
import { data } from "../data/data";

const Foods = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    const filtedData = data.filter((food) => food.category === category);
    setFoods(filtedData);
  };

  const filterPrice = (price) => {
    const filtedData = data.filter((food) => food.price === price);
    setFoods(filtedData);
  };
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        Top Rated Menu Items
      </h1>
      {/* Filtering row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* filter by type */}
        <div className="">
          <p className="font-bold py-1">Filter Type</p>
          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={() => setFoods(data)}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              Chicken
            </button>
          </div>
        </div>
        {/* filter by price */}
        <div className="">
          <p className="font-bold py-1">Filter Price</p>
          <div className="flex justify-between flex-wrap gap-2 max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Dispaly food */}
      <div className=" grid grid-cols-2  lg:grid-cols-4 w-full pt-6 gap-6">
        {foods.map((food, index) => {
          return (
            <div
              className=" shadow-lg hover:scale-105 duration-300 rounded-lg"
              key={index}
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={food.image}
                alt={food.name}
              />
              <div className=" flex justify-between px-2 py-4">
                <p className=" font-bold">{food.name}</p>
                <span className="bg-orange-500 text-white rounded-full p-1">
                  <p>{food.price}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Foods;
