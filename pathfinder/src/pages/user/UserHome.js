import React from "react";
import hotelImage from "../../images/landing/hotel1.jpg";
import hotelLogo from "../../images/landing/galadari_logo.jpg";
import vLogo from "../../images/landing/volkswagen_logo.jpg";
import vImage from "../../images/landing/v_img.jpg";
import profPic from "../../images/landing/profile_pic.jpg";
import UserNavbar from "../../components/User/UserNavbar";

const UserHome = () => {
  const companies = [
    {
      id: 1,
      name: "Galadari Hotel",
      date: "03/25/2024",
      description:
        "Looking to boost your skills and land your dream job? We've got you covered at Galadari Hotel. Join our workshops to get expert guidance and apply for top positions.",
      logo: hotelLogo,
      image: hotelImage,
    },
    {
      id: 2,
      name: "Volkswagen - Kuliyapitiya",
      date: "03/25/2024",
      description:
        "Want to join the automotive industry? Volkswagen offers a great opportunity to work with cutting-edge technology and skilled professionals in their Kuliyapitiya plant.",
      logo: vLogo,
      image: vImage,
    },
  ];

  return (
    <div>
      <UserNavbar />

      {/* Sidebar */}
      <div className="fixed h-full bg-white shadow-lg p-6 flex flex-col items-center w-64	">
        {/* User Profile */}
        <img
          src={profPic}
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

      <div className="min-h-screen bg-gray-200 flex mt-16 ps-64 pr-32">
        {/* Parent container for the sidebar and content */}
        <div className="flex w-full ps-32">
          {/* Main content (this div will start to the right of the sidebar) */}
          <div className="flex-1 ps-8 ">
            {/* Search Bar */}
            <div className="mt-12 flex justify-center">
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
            <div className="mt-12 space-y-6 mb-16">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className="bg-white shadow-lg rounded-xl p-6 w-4/5 mx-auto pb-6"
                >
                  <div className="flex items-start space-x-4">
                    {" "}
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-left">
                        {company.name}
                      </h3>
                      <p className="text-gray-500 text-sm text-left">
                        {company.date}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mt-5 px-6 mb-6">
                    {company.description}
                  </p>

                  {/* Company Image */}
                  <img
                    src={company.image}
                    alt={`${company.name} Image`}
                    className="w-full h-96 rounded-lg object-cover mb-6"
                  />

                  {/* View Company Button */}
                  <div className="flex justify-center mt-4">
                    {" "}
                    {/* Flex container to center the button */}
                    <button className="bg-teal-500 text-white px-6 py-3 rounded-full">
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
