import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../../components/user/UserNavbar";
import { useParams, useNavigate } from "react-router-dom";

const UserJobsByCompany = () => {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQualification, setSelectedQualification] =
    useState("All Jobs");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/job/company/${companyId}/jobs`)
      .then((response) => {
        setJobs(response.data);
        setFilteredJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching jobs data");
        setLoading(false);
      });
  }, [companyId]);

  // Handle filtering based on dropdown selection
  const handleSearch = () => {
    if (selectedQualification === "All Jobs") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) => job.qualification === selectedQualification
      );
      setFilteredJobs(filtered);
    }
  };

  // Job Card Component
  const JobCard = ({ job }) => {
    const dateString = job.jobDate;
    const formattedDate = new Date(dateString).toLocaleDateString("en-GB");

    return (
      <div className="bg-white rounded-lg shadow-md p-6 m-4">
        <img
          src={`http://localhost:8080/job/${job.jobId}/image`}
          alt={job.jobTitle}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-teal-700">{job.jobTitle}</h3>
        <p className="text-sm text-gray-700">{job.qualification}</p>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <p className="mt-2 text-gray-700">{job.jobDescription}</p>
        <button
          onClick={() => navigate(`/userViewJob/${job.jobId}`)}
          className="mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          View Job
        </button>
      </div>
    );
  };

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
                value={selectedQualification}
                onChange={(e) => setSelectedQualification(e.target.value)}
                className="border rounded p-2 bg-white focus:ring-2 focus:ring-orange-500"
              >
                <option>All Jobs</option>
                <option>Welding NVQ 1</option>
                <option>Welding NVQ 2</option>
                <option>Welding NVQ 3</option>
                <option>Mechanic NVQ 1</option>
                <option>Mechanic NVQ 2</option>
                <option>Mechanic NVQ 3</option>
                <option>Chef NVQ 1</option>
                <option>Chef NVQ 2</option>
                <option>Chef NVQ 3</option>
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch} // Trigger filtering on click
              className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600"
            >
              Search
            </button>
          </div>
        </div>

        {/* Loading or Error Handling */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-8">
            No jobs available for the selected criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.jobId} job={job} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserJobsByCompany;
