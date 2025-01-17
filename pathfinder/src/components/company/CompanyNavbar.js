import React, { useState } from "react";
import { Link } from "react-router-dom";
import pathfinderLogo from "../../images/landing/logo.png";

const CompanyNavbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

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

        <div className="flex flex-grow justify-end space-x-6 mr-4">
          {["Home", "Job", "Notification", "About Us"].map((item) => (
            <div key={item} className="relative">
              <Link
                to={
                  item === "Job"
                    ? "/companyJob"
                    : item === "About Us"
                    ? "/about-us"
                    : item === "Home"
                    ? "/companyHome"
                    : item === "Notification"
                    ? "/companyNot" // Link to the notification page
                    : "#"
                }
                className={`text-white hover:text-gray-300 ${
                  activeItem === item ? "text-orange-500" : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </Link>
              {activeItem === item && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CompanyNavbar;
