import React from "react";
import pathfinderLogo from "../../images/landing/logo.png"; 

const Navbar = () => {
  return (
    <nav className="bg-teal-700 p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full">
     
        <a href="#" className="flex items-center">
          <img
            src={pathfinderLogo}
            alt="Pathfinder Logo"
            className="h-8 ml-4" 
          />
        </a>

        <ul className="flex space-x-4 mr-4">
          <li>
            <a href="#" className="text-white hover:text-gray-400">
              Admin Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
