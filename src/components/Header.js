import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2;">
        {/* top nav */}
        <div className="mt-2 flex items-center flex-grow flex-shrink-0 sm:flex-grow-0 ">
          <Image
            src={"https://links.papareact.com/f90"}
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input
            className="flex-grow py-2 w-6 rounded-l-md outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* right */}
        <div className="flex space-x-5  mx-4 text-white whitespace-nowrap	">
          <div className="text-white  link">
            <p>Hello,ahmet</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div className=" link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative flex items-center link">
            <span className="absolute top-0 h-4 w-4 bg-yellow-400 rounded-full text-center text-xs font-bold text-black right-0 md:right-10">
              4
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-4 pl-6 amazon-blue-light ">
        <p className="link flex items-center ">
          <MenuIcon className="menu-icon" />
          All
        </p>
        <p className="link whitespace-nowrap">Prime Video</p>
        <p className="link whitespace-nowrap">Amazon Bussiness</p>
        <p className="link whitespace-nowrap">Today's Deals</p>
        <p className="link hidden whitespace-nowrap  md:inline-flex">
          Electronics
        </p>
        <p className="link hidden whitespace-nowrap md:inline-flex">
          Food & Grocery
        </p>
        <p className="link hidden whitespace-nowrap md:inline-flex">Prime</p>
        <p className="link hidden whitespace-nowrap md:inline-flex">
          Buy Again
        </p>
        <p className="link hidden whitespace-nowrap md:inline-flex">
          Snopper Toolkit
        </p>
        <p className="link hidden whitespace-nowrap md:inline-flex">
          Health & Personal Care
        </p>
      </div>
    </header>
  );
};

export default Header;
