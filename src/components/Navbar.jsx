import React from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className=" max-w-[1640px] flex justify-between p-4 mx-auto items-center">
      {/* left side */}
      <div className="flex items-center">
        <AiOutlineMenu size={30} />
        <div className=" cursor-pointer items-center flex">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className=" font-bold">Eats</span>
          </h1>
        </div>
        <div className="hidden lg:flex items-center bg-gray-200 p-1 rounded-full text-[14px]">
          <p className=" bg-black p-2 rounded-full text-white">Delivery</p>
          <p className=" p-2">Pickup</p>
        </div>
      </div>

      {/* search input */}
      <div className=" flex items-center bg-gray-200 p-2 rounded-full w-[200px] sm:w-[400px] lg:w-[500px] gap-1">
        <AiOutlineSearch size={25} />
        <input
          className=" focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* cart-container */}
      <div className="hidden md:flex bg-black p-2 rounded-full items-center text-white">
        <BsFillCartFill className=" mr-2" size={20} />
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
