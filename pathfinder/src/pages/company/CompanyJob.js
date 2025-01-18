import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";
import axios from "axios";
import { deleteJob } from "../../services/jobService";

function CompanyJob() {
  const navigate = useNavigate();
  const companyId = localStorage.getItem("company_id"); // Fetch the company ID from localStorage

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch jobs from the backend
  useEffect(() => {
    axios
      .get(`http://localhost:8080/job/getJobsByCompany/${companyId}`)
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setError("Error fetching jobs");
        setLoading(false);
      });
  }, [companyId]);

  if (loading) {
    return (
      <div>
        <CompanyNavbar />
        <div className="min-h-screen bg-gray-200 p-6">
          <div>Loading jobs...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <CompanyNavbar />
        <div className="min-h-screen bg-gray-200 p-6">
          <div className="text-red-500">{error}</div>
        </div>
      </div>
    );
  }

  // Function to handle the "View Job" button click

  // Function to handle the "Add Job" button click
  const handleAddJob = () => {
    navigate("/companyAddJob");
  };

  const handleInvite = (jobId) => {
    navigate(`/companyInterview/${jobId}`);
  };

  // Function to handle the "Update Job" button click
  const handleDeleteJob = async (jobId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:8080/job/deleteJob/${jobId}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          alert("Job deleted successfully!");
          // Optionally, refresh the job list
          window.location.reload();
        } else {
          alert("Failed to delete the job. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("An error occurred while deleting the job.");
      }
    }
  };

  return (
    <div>
      <CompanyNavbar />
      <div className="min-h-screen bg-gray-200 p-6 pt-20">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Available Jobs</h1>
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600"
            onClick={handleAddJob}
          >
            Add Job
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.jobId}
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
            >
              {job.jobImage ? (
                <img
                  src={`data:image/jpeg;base64,${job.jobImage}`}
                  alt={job.jobTitle}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <h2 className="text-lg font-semibold">{job.jobTitle}</h2>
              <p className="text-gray-600 mt-2">{job.jobDescription}</p>
              <p className="text-sm text-gray-500 mt-2">
                Location: {job.location}
              </p>
              <p className="text-sm text-gray-500">
                Date: {new Date(job.jobDate).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 mt-2"
                  onClick={() => handleDeleteJob(job.jobId)}
                >
                  Delete Job
                </button>
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 mt-2"
                  onClick={() => handleInvite(job.jobId)}
                >
                  Create Invite
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CompanyJob;
