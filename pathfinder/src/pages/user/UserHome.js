import React from "react";
import chefImage from "../../images/landing/chef1.jpg";
import Navbar from "../../components/landing/Navbar";

const UserHome = () => {
  // Example company data
  const companies = [
    {
      id: 1,
      name: "Galadari Hotel",
      date: "03/25/2024",
      description:
        "Looking to boost your skills and land your dream job? We've got you covered at Galadari Hotel. Join our workshops to get expert guidance and apply for top positions.",
      logo: chefImage, // Replace with actual path
      image: chefImage, // Replace with actual path
    },
    {
      id: 2,
      name: "Volkswagen - Kuliyapitiya",
      date: "03/25/2024",
      description:
        "Want to join the automotive industry? Volkswagen offers a great opportunity to work with cutting-edge technology and skilled professionals in their Kuliyapitiya plant.",
      logo: chefImage, // Replace with actual path
      image: chefImage, // Replace with actual path
    },
    // Add more companies as needed
  ];

  return (
    <div>
      <Navbar />

      {/* Main content container with margin-top to account for the navbar */}
      <div className="min-h-screen bg-gray-200 flex mt-16">
        {/* Parent container for the sidebar and content */}
        <div className="flex w-full">
          {/* Sidebar */}
          <div className="fixed h-full bg-white shadow-lg p-6 flex flex-col items-center">
            {/* User Profile */}
            <img
              src={chefImage}
              alt="User Profile"
              className="w-28 h-28 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">Tharaka Jayasinghe</h2>
            <p className="text-gray-600 mb-6">Certification in welding</p>
            <button className="bg-teal-600 text-white py-2 px-6 rounded-lg mb-2">
              View Profile
            </button>
            <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
              Log Out
            </button>
          </div>

          {/* Main content (this div will start to the right of the sidebar) */}
          <div className="flex-1 p-6">
            {/* Search Bar */}
            <div className="mt-6 flex justify-center">
              <input
                type="text"
                placeholder="Search company"
                className="px-4 py-2 border border-gray-300 rounded-l-lg w-1/2"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-r-lg">
                Search
              </button>
            </div>

            {/* Company Cards */}
            <div className="mt-8 space-y-6">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white shadow-lg rounded-lg p-4 flex"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold">{company.name}</h3>
                    <p className="text-gray-500 text-sm">{company.date}</p>
                    <p className="text-gray-700 mt-2">{company.description}</p>
                    <img
                      src={company.image}
                      style={{ width: "850px", height: "600px" }}
                      alt={`${company.name} Image`}
                      className="rounded-lg object-cover mt-4"
                    />
                    <button className="mt-9 justify-center mb-9 bg-teal-500 text-white px-4 py-2 rounded-lg">
                      View Company
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
