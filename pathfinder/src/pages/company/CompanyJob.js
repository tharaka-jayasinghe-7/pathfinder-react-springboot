// pages/company/CompanyJob.js

import React from "react";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";

const CompanyJob = ({ jobs = [], onViewJob, onUpdateJob, onDeleteJob }) => {
  const navigate = useNavigate();

  const handleAddJob = () => {
    navigate("/add-job"); // Ensure this route is defined in your router
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <CompanyNavbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-5">Job Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.length === 0 ? (
            <p>No jobs available.</p>
          ) : (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={job.imageUrl}
                  alt={job.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{job.hotelName}</h3>
                  <p className="text-gray-600 mt-1">{job.title}</p>
                  <p className="text-sm text-gray-500">{job.date}</p>
                  <p className="text-gray-700 mt-4">{job.description}</p>
                  <div className="flex justify-between mt-5">
                    <button
                      onClick={() => onViewJob(job.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      View Job
                    </button>
                    <button
                      onClick={() => onUpdateJob(job.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
                    >
                      Update Job
                    </button>
                    <button
                      onClick={() => onDeleteJob(job.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete Job
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <button
          onClick={handleAddJob}
          className="mt-5 p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Add Job
        </button>
      </div>
    </div>
  );
};

export default CompanyJob;
