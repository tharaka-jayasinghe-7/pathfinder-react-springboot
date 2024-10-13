import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom
import pathfinderLogo from "../../images/landing/logo.png";

const UserNavbar = () => {
  // Get the current route path using useLocation
  const location = useLocation();

  // Map routes to the active item names
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
      default:
        return "Home"; // Default to Home if path is not recognized
    }
  };

  // Track the active menu item based on the current route
  const [activeItem, setActiveItem] = React.useState(getActiveItem());

  // Update activeItem whenever the route changes
  useEffect(() => {
    setActiveItem(getActiveItem());
  }, [location.pathname]);

  return (
    <nav className="bg-teal-700 p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full">
        <Link to="/userHome" className="flex items-center">
          <img
            src={pathfinderLogo}
            alt="Pathfinder Logo"
            className="h-8 ml-4"
          />
        </Link>

        {/* Center Menu Items */}
        <div className="flex flex-grow justify-center space-x-6">
          {[
            { name: "Home", path: "/userHome" },
            { name: "Guide Me", path: "/userGuideMe" },
            { name: "Jobs", path: "/userJobs" },
            { name: "My Jobs", path: "/userMyJobs" },
            { name: "Notifications", path: "/userNotifications" },
          ].map((item) => (
            <div key={item.name} className="relative">
              <Link
                to={item.path} // Assign corresponding path
                className={`text-white hover:text-gray-300 ${
                  activeItem === item.name ? "text-orange-500" : ""
                }`}
                onClick={() => setActiveItem(item.name)} // Manually set active item
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
