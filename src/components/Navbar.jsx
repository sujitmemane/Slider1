import React from "react";

const Navbar = () => {
  return (
    <div className="absolute z-40 flex py-4 px-12  text-white w-full items-center justify-between bg-transparent navbar ">
      <h1 className="text-4xl uppercase font-bold">Logo</h1>
      <ul className="flex items-center space-x-8   space-x-12 border-black ">
        <li className="text-md font-extrabold cursor-pointer  uppercase ">
          Home
        </li>
        <li className="text-md font-bold cursor-pointer  uppercase">Contact</li>
        <li className="text-md font-bold cursor-pointer  uppercase">About</li>
        <li className="text-md font-bold cursor-pointer  uppercase">Team</li>
        <li className="text-md font-bold cursor-pointer  uppercase">Pricing</li>
      </ul>
    </div>
  );
};

export default Navbar;
