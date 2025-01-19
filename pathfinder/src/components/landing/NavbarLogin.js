import React from "react";
import pathfinderLogo from "../../images/landing/logo.png";

const NavbarLogin = () => {
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
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLogin;
