import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";

const UserViewJob = () => {
  const { jobId } = useParams(); // Getting jobId from URL
  const navigate = useNavigate();
  const [job, setJob] = useState(null); // State to hold job details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job details from the backend when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8080/job/getJob/${jobId}`)
      .then((response) => {
        setJob(response.data); // Set job data in state
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching job data");
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Render job details if available
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <UserNavbar />
      <div className="bg-white my-3 w-full max-w-2xl rounded-lg shadow-md mt-32 mb-16 overflow-hidden">
        {/* Job Image */}
        <div className="w-full h-64">
          <img
            src={`http://localhost:8080/job/${job.jobId}/image`} // Displaying the job image
            alt={job.jobTitle}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Job Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold">{job.jobTitle}</h1>
          <h1 className="text-xl font-semibold text-teal-700">
            {job.companyId}
          </h1>
          <p className="text-gray-600 mb-4">{job.jobDescription}</p>
          <h2 className="text-xl font-semibold">About Job</h2>
          <p className="text-gray-700 mt-2 mb-4">{job.jobDescription}</p>

          {/* Job Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-gray-700">{job.location}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Qualifications</h3>
              <p className="text-gray-700">{job.qualification}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Working Hours</h3>
              <p className="text-gray-700">{job.workingHours} hours</p>
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
            <button
              onClick={() => navigate("/userJobs")}
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewJob;
