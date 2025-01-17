import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import the navbar

const CompanyAddJob = () => {
  const navigate = useNavigate();

  const handlePostJob = () => {
    // Logic to handle job post submission
    console.log("Job posted");
  };

  const handleGoBack = () => {
    navigate("/companyHome"); // Navigate back to the company home page
  };

  const currentDate = new Date().toLocaleDateString("en-GB"); // Get the current date

  return (
    <div className="min-h-screen bg-gray-100">
      <CompanyNavbar /> {/* Render the Navbar */}
      <div className="flex justify-center items-center mt-16">
        {/* Adjusted width to match CompanyRegister.js */}
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-teal-700 text-3xl font-bold text-center mb-4">
            Post Job
          </h2>
          <p className="text-gray-500 text-center mb-6">{currentDate}</p>

          {/* Job Posting Form */}
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                placeholder="Job Title"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Description
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                rows="4"
                placeholder="Job Description"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Location
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                placeholder="Job Location"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                O/L Subjects Pass Count
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                placeholder="O/L Subjects Pass Count"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Qualifications
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                placeholder="Qualifications"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age
              </label>
              <input
                type="number"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                placeholder="Age"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Working Hours
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                placeholder="Working Hours"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={handlePostJob}
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
              >
                Post Now
              </button>
              <button
                type="button"
                onClick={handleGoBack}
                className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800"
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddJob;
