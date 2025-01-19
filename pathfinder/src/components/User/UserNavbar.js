import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import pathfinderLogo from "../../images/landing/logo.png";
import userProfileImage from "../../images/landing/profile_pic.jpg";

const UserNavbar = () => {
  const location = useLocation();
  const userId = localStorage.getItem("user_id");

  // State to store the number of notifications
  const [notificationCount, setNotificationCount] = useState(0);

  // Fetch notifications count
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/interview/getNotificationsByUser/${userId}`
        );
        const data = await response.json();
        setNotificationCount(data.length); // Assuming the response contains an array of notifications
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [userId]);

  // Get the active item based on the current location
  const getActiveItem = () => {
    switch (location.pathname) {
      case "/userHome":
        return "Home";
      case "/userGuideMe":
        return "Guide Me";
      case "/userJobs":
        return "Jobs";
      case "/userMyJobs":
        return "My Jobs";
      case "/userNotifications":
        return "Notifications";
      case "/userCompanies":
        return "Companies";
      default:
        return null; // Return null for pages not in the navbar
    }
  };

  const [activeItem, setActiveItem] = useState(getActiveItem());

  // Update active item whenever location changes
  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location.pathname]);

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
          {["Home", "Guide Me", "Jobs", "My Jobs", "Notifications"].map(
            (item) => (
              <div key={item} className="relative">
                <Link
                  to={item === "Jobs" ? "/userJobs" : "#"}
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
            )
          )}
          {[
            { name: "Home", path: "/userHome" },
            { name: "Guide Me", path: "/userGuideMe" },
            { name: "Jobs", path: "/userJobs" },
            { name: "My Jobs", path: "/userMyJobs" },
            {
              name: "Notifications",
              path: "/userNotifications",
              notificationCount: notificationCount,
            },
            { name: "Companies", path: "/userCompanies" },
          ].map((item) => (
            <div key={item.name} className="relative">
              <Link
                to={item.path}
                className={`text-white hover:text-gray-300 ${
                  activeItem === item.name ? "text-orange-500" : ""
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </Link>
              {/* Show notification count circle only for "Notifications" item */}
              {item.name === "Notifications" && item.notificationCount > 0 && (
                <div className="absolute right-[-18px] top-[-5px] flex items-center justify-center bg-green-500 text-white rounded-full w-5 h-5 text-xs font-bold">
                  {item.notificationCount}
                </div>
              )}

              {activeItem === item.name && (
                <div className="absolute inset-x-0 bottom-0 h-1 bg-orange-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Profile Image on the right */}
        <div className="flex items-center">
          <Link to={`/userProfile/${userId}`}>
            <img
              src={`http://localhost:8080/user/${userId}/image`}
              alt="User Profile"
              className="w-10 h-10 rounded-full border-1 border-white ml-4 mr-4"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
