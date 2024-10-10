import React from "react";
import pathfinderLogo from "../../images/landing/logo.png"; // Adjust the path according to your project structure

const Navbar = () => {
  return (
    <nav className="bg-teal-700 p-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img
            src={pathfinderLogo} // Use the imported image here
            alt="Pathfinder Logo"
            className="h-10" // Adjust the height as needed
          />
        </a>
        <ul className="flex space-x-4">
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
