import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../../components/User/UserNavbar";
import { useNavigate } from "react-router-dom";

const UserJobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]); // State to hold jobs data
  const [loading, setLoading] = useState(true); // To handle loading state
  const [error, setError] = useState(null); // To handle any errors

  // Fetch jobs data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/job/getJobs")
      .then((response) => {
        setJobs(response.data); // Set the jobs data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError("Error fetching jobs data");
        setLoading(false);
      });
  }, []);

  // Job Card Component
  const JobCard = ({ job }) => {
    const dateString = job.jobDate;

    // Use toLocaleDateString to format the date based on the local timezone
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB"); // 'en-GB' is for 'dd/mm/yyyy' format, you can adjust it as needed

    console.log(formattedDate); // Output will now respect the local time zone

    return (
      <div className="bg-white rounded-lg shadow-md p-6 m-4">
        {/* Display the Job Image */}
        <img
          src={`http://localhost:8080/job/${job.jobId}/image`} // Image URL from backend
          alt={job.jobTitle}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-teal-700">{job.jobTitle}</h3>
        <p className="text-sm text-gray-700">{job.qualification}</p>
        <p className="text-sm text-gray-500 ">{formattedDate}</p>
        <p className="mt-2 text-gray-700">{job.jobDescription}</p>
        <button
          onClick={() => navigate(`/userViewJob/${job.jobId}`)} // Pass jobId to view details
          className="mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          View Job
        </button>
      </div>
    );
  };

  // Job List Component
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <UserNavbar />
      <div className="max-w-5xl mx-auto mt-16">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 ml-4 mr-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              {/* Select Job Type */}
              <label className="text-gray-700 font-bold" htmlFor="jobType">
                Select Job Type:
              </label>
              <select
                id="jobType"
                className="border rounded p-2 bg-white focus:ring-2 focus:ring-orange-500"
              >
                <option>All Jobs</option>
                <option>Engineering</option>
                <option>Mechanics</option>
                <option>Hospitality</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>

        {/* Loading or Error Handling */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.jobId} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserJobs;
