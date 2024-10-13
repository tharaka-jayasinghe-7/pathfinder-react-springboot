import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import pathfinderLogo from "../../images/landing/logo.png";

const UserNavbar = () => {
  // State to track the active menu item
  const [activeItem, setActiveItem] = useState("Home");

  // Function to handle menu item click
  const handleItemClick = (item) => {
    setActiveItem(item);
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

        {/* Center Menu Items */}
        <div className="flex flex-grow justify-center space-x-6">
          {[
            { name: "Home", path: "/userHome" },
            { name: "Guide Me", path: "/userGuideMe" },
            { name: "Jobs", path: "/userJobs" },
            { name: "My Jobs", path: "/myJobs" },
            { name: "Notifications", path: "/notifications" },
          ].map((item) => (
            <div key={item.name} className="relative">
              <Link
                to={item.path} // Assign corresponding path
                className={`text-white hover:text-gray-300 ${
                  activeItem === item.name ? "text-orange-500" : ""
                }`}
                onClick={() => handleItemClick(item.name)}
              >
                {item.name}
              </Link>
              {activeItem === item.name && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
