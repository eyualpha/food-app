import React from "react";
import { categories } from "../data/data";

const Category = () => {
  return (
    <div className="max-w-[1640px] px-4 py-12 m-auto">
      <div className="">
        <h1 className="text-4xl text-bold text-center font-bold text-orange-500">
          Top Rated Menu Items
        </h1>
        {/* categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
          {categories.map((category, index) => {
            return (
              <div
                className="bg-gray-100 rounded-lg p-4 flex justify-between items-center"
                key={index}
              >
                <h1 className=" font-bold sm:text-xl">{category.name}</h1>
                <img className ="w-20"src={category.image} alt={category.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
