import React from "react";
import hotelImage from "../../images/landing/hotel1.jpg";
import UserNavbar from "../../components/user/UserNavbar";
import { useNavigate } from "react-router-dom";

const UserViewJob = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <UserNavbar />
      <div className="bg-white my-3 w-full max-w-3xl rounded-lg shadow-md mt-32 mb-16 overflow-hidden">
        {/* Job Image */}
        <div className="w-full h-64">
          <img
            src={hotelImage}
            alt="Welder Job"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Job Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold ">Welder needed</h1>
          <p className="text-gray-600 mb-4">18.06.2024</p>
          <h2 className="text-xl font-semibold">About Job</h2>
          <p className="text-gray-700 mt-2 mb-4">
            We’re seeking a skilled Welder to join our team! If you have
            experience in welding and metal fabrication, this is the perfect
            opportunity to showcase your craftsmanship. Work with a dynamic team
            on exciting projects and help build the future with your expertise.
          </p>

          {/* Job Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-700">Xtr Enterprises, Colombo 05</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Qualifications</h3>
              <p className="text-gray-700">Welding certification - NVQ 4</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Age</h3>
              <p className="text-gray-700">20-25</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <p className="text-gray-700">8.00 am - 5.00 pm</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center space-x-2">
            <button
              onClick={() => navigate("/userApplyJob")}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Apply Job
            </button>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewJob;
