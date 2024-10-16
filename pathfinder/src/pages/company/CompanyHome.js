// src/pages/company/CompanyHome.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CompanyNavbar from "../../components/company/CompanyNavbar";
import companyLogo from "../../images/landing/galadari_logo.jpg"; // Updated logo path
import companyImage1 from "../../images/landing/post1.jpeg"; // First image
import companyImage2 from "../../images/landing/post2.jpg"; // Second image

const CompanyHome = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const companies = [
    {
      id: 1,
      name: "Galadari Hotel",
      date: "03/25/2024",
      description:
        "Galadari Hotel is a premium destination for travelers seeking luxury, comfort, and exceptional service. Located in the heart of the city, the hotel offers a blend of modern amenities and traditional hospitality, ensuring guests experience a relaxing and memorable stay. With elegant rooms, fine dining restaurants, and state-of-the-art facilities, Galadari Hotel caters to both business and leisure travelers. Whether it's a corporate event, a family vacation, or a weekend getaway, Galadari Hotel promises unparalleled convenience, warm hospitality, and an unforgettable experience.",
      logo: companyLogo,
      image: companyImage1, // First image for company 1
    },
    {
      id: 2,
      name: "Galadari Hotel",
      date: "04/15/2024",
      description:
        "We are excited to unveil our brand-new infinity pool, offering a stunning view of the city skyline. Whether you’re looking to relax or enjoy an evening swim, this new addition promises an unforgettable experience for our guests. The poolside area is also perfect for lounging with your favorite drinks, sunbathing, or hosting private events and celebrations. In the evenings, enjoy a serene ambiance with soft lighting and refreshments, creating the ideal setting for relaxation and unwinding. Come and take a dip in luxury, and experience serenity like never before!",
      logo: companyLogo,
      image: companyImage2, // Second image for company 2
    },
  ];

  // State for modal and post data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle the post submission logic here (e.g., save to state or backend)
    console.log("Post submitted:", { postText, postImage });
    // Reset state
    setPostText("");
    setPostImage(null);
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file)); // Preview the image
    }
  };

  return (
    <div>
      <CompanyNavbar />

      {/* Sidebar */}
      <div className="fixed h-full bg-white shadow-lg p-6 flex flex-col items-center w-64">
        {/* Company Logo */}
        <img
          src={companyLogo}
          alt="Galadari Hotel Logo"
          className="w-28 h-28 rounded-full mb-4"
        />
        <h2 className="text-lg font-semibold">Galadari Hotel</h2>
        <p className="text-gray-600 mb-6">Excellence in Hospitality</p>
        {/* Try Premium Button */}
        <button
          className="bg-yellow-500 text-white py-2 px-6 rounded-lg mb-4"
          onClick={() => navigate("/companyPackage")} // Navigate to CompanyPackage page
        >
          Try Premium
        </button>
        <button
          className="bg-teal-600 text-white py-2 px-6 rounded-lg mb-2"
          onClick={() => navigate("/viewProfile")} // Navigate to ViewProfile
        >
          View Profile
        </button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-200 flex mt-16 ps-64 pr-32">
        <div className="flex w-full ps-32">
          {/* Main content area */}
          <div className="flex-1 ml-56 p-6">
            {/* Post Bar */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex items-center space-x-4">
              <img
                src={companyLogo}
                alt="Galadari Hotel Logo"
                className="w-8 h-8 rounded-full"
              />
              <button
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-left"
                onClick={() => setIsModalOpen(true)} // Open modal on click
              >
                Start a post
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
                    <img
                      src={company.logo}
                      alt={company.name + " Logo"}
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
                    alt={`${company.name} Post`}
                    className="w-full h-96 rounded-lg object-cover mb-6"
                  />

                  {/* Boost Post Button */}
                  <div className="flex justify-center mt-4">
                    <button className="bg-teal-500 text-white px-6 py-3 rounded-full">
                      Boost Post
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Post Creation */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/2 max-w-3xl">
            {" "}
            {/* Increased width */}
            <h2 className="text-lg font-semibold mb-4">Create a Post</h2>
            <form onSubmit={handlePostSubmit}>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                rows="4"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="mb-4"
              />
              {postImage && (
                <img
                  src={postImage}
                  alt="Post Preview"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 text-gray-600"
                  onClick={() => setIsModalOpen(false)} // Close modal
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyHome;
