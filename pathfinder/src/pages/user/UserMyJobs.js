import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar"; // Importing the UserNavbar
import axios from "axios";

const UserMyJobs = () => {
  const [jobs, setJobs] = useState([]); // State to hold the fetched jobs
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = localStorage.getItem("user_id");
  console.log("User ID:", userId); // Log user ID

  // Fetch applies by user ID
  useEffect(() => {
    const fetchUserJobs = async () => {
      try {
        setLoading(true);

        // Step 1: Fetch applies for the user
        const applyResponse = await axios.get(
          `http://localhost:8080/apply/getAppliesByUser/${userId}`
        );
        const applies = applyResponse.data;
        console.log("Applies:", applies); // Log applies response

        if (applies.length === 0) {
          setError("No applications found for this user.");
          setLoading(false);
          return;
        }

        // Step 2: Fetch job and company details for each apply
        const jobDetails = await Promise.all(
          applies.map(async (apply) => {
            const jobId = apply.jobId; // Get the jobId from the apply object
            console.log("Job ID:", jobId); // Log job ID

            // Fetch job details using jobId
            const jobResponse = await axios.get(
              `http://localhost:8080/job/getJob/${jobId}`
            );
            const job = jobResponse.data;
            console.log("Job Details:", job); // Log job details

            const companyId = job.companyId; // Assign companyId to a variable
            console.log("Company ID:", companyId); // Log company ID

            // Fetch company details using companyId
            const companyResponse = await axios.get(
              `http://localhost:8080/company/getcompany/${companyId}`
            );
            const company = companyResponse.data;
            console.log("Company Details:", company); // Log company details

            return {
              id: job.jobId,
              companyName: company.companyName,
              jobTitle: job.jobTitle,
              jobDate: job.jobDate,
              description: job.jobDescription,
            };
          })
        );

        // Filter out null values (if any apply had no job)
        setJobs(jobDetails.filter((job) => job !== null));
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch jobs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserJobs();
    } else {
      setError("User ID is not found.");
      setLoading(false);
    }
  }, [userId]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Adjust for timezone offset (in hours)
    date.setHours(date.getHours() - date.getTimezoneOffset() / 60);

    return date.toLocaleDateString(); // Formats the date into "MM/DD/YYYY"
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4">
        {loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && jobs.length === 0 && (
          <p className="text-gray-500">No jobs found for this user.</p>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div className="space-y-4 mt-32 mb-16">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{job.companyName}</h3>
                  <h4 className="text-lg text-emerald-600 font-semibold">
                    {job.jobTitle}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Job date: <strong>{formatDate(job.jobDate)}</strong>
                  </p>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                </div>
                <button
                  className="mt-4 md:mt-0 bg-teal-600 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => alert("Cleared job: " + job.jobTitle)}
                >
                  Clear
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMyJobs;
