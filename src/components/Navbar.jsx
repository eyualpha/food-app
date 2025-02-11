import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" max-w-[1640px] flex justify-between p-4 mx-auto items-center">
      {/* left side */}
      <div className="flex items-center">
        <AiOutlineMenu
          className=" cursor-pointer"
          size={30}
          onClick={() => setNav(!nav)}
        />
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
          className=" focus:outline-none w-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      {/* cart-container */}
      <div className="hidden md:flex bg-black p-2 rounded-full items-center text-white">
        <BsFillCartFill className=" mr-2" size={20} />
        <p>Cart</p>
      </div>

      {/* Mobile-Menu */}
      {/* Overlay */}

      <div
        className={
          nav ? " bg-black/70 fixed w-full z-10 top-0 h-screen left-0" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "fixed w-[300px] h-screen bg-white duration-300 top-0 left-0 ease-in-out"
              : "fixed w-[300px] h-screen bg-white duration-300 top-0 left-[-300px] "
          }
        >
          <AiOutlineClose
            size={25}
            className=" absolute right-4 top-4 cursor-pointer"
            onClick={() => setNav(!nav)}
          />
          <h2 className=" text-2xl p-4">
            Best<span className=" font-bold">Eats</span>
          </h2>

          <nav>
            <ul className=" flex flex-col p-4 text-gray-800">
              <li className="flex items-center text-xl py-4 cur">
                <TbTruckDelivery className=" mr-4" /> Orders
              </li>
              <li className="flex items-center text-xl py-4 cur">
                <MdFavorite className=" mr-4" /> Favorite
              </li>
              <li className="flex items-center text-xl py-4 cur">
                <FaWallet className=" mr-4" /> Wallet
              </li>
              <li className="flex items-center text-xl py-4 cur">
                <MdHelp className=" mr-4" /> Help
              </li>
              <li className="flex items-center text-xl py-4 cur">
                <AiFillTag className=" mr-4" /> Promotions
              </li>
              <li className="flex items-center text-xl py-4 cur">
                <BsFillSaveFill className=" mr-4" /> Best Ones
              </li>
              <li className="flex items-center text-xl py-4 cur">
                <FaUserFriends className=" mr-4" /> Invite Firends
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
