import React from "react";
import pathfinderLogo from "../../images/landing/logo.png"; // Adjust the path according to your project structure

const Navbar = () => {
  return (
    <nav className="bg-teal-700 p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full">
        {/* Logo Section */}
        <a href="#" className="flex items-center">
          <img
            src={pathfinderLogo}
            alt="Pathfinder Logo"
            className="h-8 ml-4" // Adjust the height and add margin for logo spacing
          />
        </a>

        {/* Admin Login on the far right */}
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
