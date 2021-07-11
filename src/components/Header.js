import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      {/* top nav */}
      <div className="top-nav">
        <Image
          src={"https://links.papareact.com/f90"}
          width={150}
          height={40}
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>
      {/* bottom nav */}
      <div></div>
    </header>
  );
};

export default Header;
