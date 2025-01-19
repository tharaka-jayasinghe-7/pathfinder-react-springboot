import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-gray-800 w-64 min-h-screen fixed top-16 left-0">
      {/* Added margin at the top */}
      <div className="flex flex-col items-start p-4">
        {/* Navigation Links */}
        {[
          "Dashboard",
          "Users",
          "Jobs",
          "Companies",
          "Courses",
          "Subscriptions",
          "Payment",
        ].map((item) => (
          <div key={item} className="w-full">
            <Link
              to={
                item === "Dashboard"
                  ? "/adminDashboard"
                  : item === "Users"
                  ? "/getUsers"
                  : item === "Jobs"
                  ? "/getJobs"
                  : item === "Companies"
                  ? "/getCompanies"
                  : item === "Courses"
                  ? "/getCourse"
                  : item === "Subscriptions"
                  ? "/getSubscription"
                  : item === "Payment"
                  ? "/getPayment"
                  : "#"
              }
              className={`block text-white py-2 px-4 rounded-lg hover:bg-gray-700 ${
                activeItem === item ? "bg-gray-700" : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default AdminNavbar;
