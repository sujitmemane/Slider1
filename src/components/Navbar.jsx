import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex py-4 px-12  items-center justify-between bg-transparent navbar ">
        <img src={Logo} alt="Logo" className="h-16 w-36" />
        <ul className="flex items-center space-x-4   space-x-12 border-black ">
          <li className="text-md font-extrabold cursor-pointer  uppercase ">
            Home
          </li>
          <li className="text-md font-bold cursor-pointer  uppercase">
            Contact
          </li>
          <li className="text-md font-bold cursor-pointer  uppercase">About</li>
          <li className="text-md font-bold cursor-pointer  uppercase">Team</li>
          <li className="text-md font-bold cursor-pointer  uppercase">
            Pricing
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
