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
        <div className="mt-2 flex items-center flex-grow flex-shrink-0 sm:flex-grow-0 ">
          {/* top nav */}
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
        <div>{/* bottom nav */}</div>
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  );
};

export default Header;
