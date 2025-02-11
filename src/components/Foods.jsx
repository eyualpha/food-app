import React from "react";
import { data } from "../data/data";

const Foods = () => {
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
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              All
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              Burgers
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              Piza
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              Salads
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              Chicken
            </button>
          </div>
        </div>
        {/* filter by price */}
        <div className="">
          <p className="font-bold py-1">Filter Price</p>
          <div className="flex justify-between flex-wrap gap-2 max-w-[390px] w-full">
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              $
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              $$
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              $$$
            </button>
            <button className="border-orange-500 text-orange-500 hover:text-white hover:bg-orange-500 font-medium">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Dispaly food */}
    </div>
  );
};

export default Foods;
