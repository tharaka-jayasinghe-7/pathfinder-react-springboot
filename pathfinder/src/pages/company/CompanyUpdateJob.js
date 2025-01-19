import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"; // Import useNavigate and useParams
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import CompanyNavbar

const CompanyUpdateJob = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const { jobId } = useParams(); // Get jobId from the URL parameters

  // State to hold job details
  const [jobDetails, setJobDetails] = useState({
    title: "Grill Chef",
    description:
      "The Grill Chef will be responsible for preparing and grilling various meats, vegetables, and seafood to perfection. This role requires knowledge of food safety, presentation, and a strong understanding of cooking techniques. The chef will also be responsible for maintaining the cleanliness and organization of the kitchen.",
    location: "Colombo, Sri Lanka",
    olPassCount: 7,
    qualifications: "Cooking certification - NVQ5",
    ageRange: "20 - 25",
    workingHours: "8.00AM - 5.00PM",
  });

  // Fetch job details based on jobId
  useEffect(() => {
    // Mock fetching job details using jobId
    const fetchJobDetails = async () => {
      // Replace with actual API call to get job details
      console.log("Fetching job details for ID:", jobId);
      // Example: setJobDetails(fetchedJobDetails);
    };

    fetchJobDetails();
  }, [jobId]);

  const handleUpdate = () => {
    // Handle the update post logic here
    alert("Post updated!");
    navigate("/companyJob"); // Redirect after update (modify as needed)
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      {/* Add CompanyNavbar */}
      <CompanyNavbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center text-teal-600 mb-4">
            Update Job
          </h2>
          <p className="text-center text-gray-500 mb-8">18.06.2024</p>

          <form className="space-y-6">
            {/* Job Title */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Title
              </label>
              <input
                type="text"
                value={jobDetails.title}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Description
              </label>
              <textarea
                value={jobDetails.description}
                className="w-full h-32 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* Job Location */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Location
              </label>
              <input
                type="text"
                value={jobDetails.location}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* O/L subjects pass count */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                O/L subjects pass count
              </label>
              <input
                type="number"
                value={jobDetails.olPassCount}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* Qualifications */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Qualifications
              </label>
              <input
                type="text"
                value={jobDetails.qualifications}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Age
              </label>
              <input
                type="text"
                value={jobDetails.ageRange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* Working Hours */}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Working Hours
              </label>
              <input
                type="text"
                value={jobDetails.workingHours}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                readOnly
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                type="button"
                onClick={handleUpdate}
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                Update Post
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyUpdateJob;
