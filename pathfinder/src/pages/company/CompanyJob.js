import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import CompanyNavbar
import job1 from "../../images/landing/job1.png"; // First image
import job2 from "../../images/landing/job2.png"; // Second image

function CompanyJob() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const jobs = [
    {
      id: 1,
      title: "Pastry Chef needed",
      date: "18.06.2024",
      description:
        "We are looking for a creative Pastry Chef to craft exquisite desserts and baked goods. If you have a passion for pastry arts and can design mouth-watering treats that delight our guests, this is the perfect role for you. Join our kitchen and showcase your sweet creations!",
      hotel: "Galadari Hotel",
      image: job1, // Use job1 image
    },
    {
      id: 2,
      title: "Grill Chef needed",
      date: "08.07.2024",
      description:
        "We are looking for a skilled Grill Chef to specialize in grilling meats, seafood, and vegetables to perfection. If you have a talent for working with open flames and love crafting char-grilled dishes, this is the perfect role for you. Join our team and showcase your grilling expertise!",
      hotel: "Galadari Hotel",
      image: job2, // Use job2 image
    },
  ];

  // Function to handle the "View Job" button click
  const handleViewJob = (jobId) => {
    navigate(`/jobs/${jobId}`); // Navigate to the job details page
  };

  // Function to handle the "Add Job" button click
  const handleAddJob = () => {
    navigate("/companyAddJob"); // Navigate to the CompanyAddJob page
  };

  // Function to handle the "Update Job" button click
  const handleUpdateJob = (jobId) => {
    navigate(`/companyUpdateJob/${jobId}`); // Navigate to the CompanyUpdateJob page with jobId
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Company Navbar */}
      <CompanyNavbar />

      {/* Adjusted Add Job Button */}
      <div className="fixed top-20 right-8">
        <button
          className="bg-orange-500 text-white rounded-lg px-6 py-3 hover:bg-orange-600"
          onClick={handleAddJob} // Add onClick handler to navigate to Add Job page
        >
          Add Job
        </button>
      </div>

      {/* Job Cards Section */}
      <div className="flex flex-wrap justify-center mt-8">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/3 m-4"
          >
            <img
              src={job.image}
              alt={job.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-teal-800 font-bold text-lg mb-2">
                {job.hotel}
              </h2>
              <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{job.date}</p>
              <p className="text-sm text-gray-700 mb-6">{job.description}</p>
              <div className="flex justify-center">
                <div className="flex space-x-2">
                  <button
                    className="bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600"
                    onClick={() => handleViewJob(job.id)} // Add navigation to View Job button
                  >
                    View Job
                  </button>
                  <button
                    className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700"
                    onClick={() => handleUpdateJob(job.id)} // Add navigation to Update Job button
                  >
                    Update Job
                  </button>
                  <button className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700">
                    Delete Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyJob;
