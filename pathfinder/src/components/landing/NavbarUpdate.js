import React from "react";
import pathfinderLogo from "../../images/landing/logo.png";
import { useNavigate } from "react-router-dom";

const NavbarUpdate = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
  };

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
              onClick={handleSignOut}
              className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600 transition"
            >
              Sign Out
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUpdate;
