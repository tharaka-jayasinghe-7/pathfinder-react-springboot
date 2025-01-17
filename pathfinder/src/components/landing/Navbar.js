import React from "react";
import pathfinderLogo from "../../images/landing/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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
            <button
              onClick={() => navigate("/adminLogin")}
              className="bg-white text-teal-700 px-4 py-2 rounded hover:bg-gray-200 transition"
            >
              Admin Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
