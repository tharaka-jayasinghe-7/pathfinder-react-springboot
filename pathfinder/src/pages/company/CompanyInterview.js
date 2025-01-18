import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To access the jobId from the URL

const CompanyInterview = () => {
  const { jobId } = useParams(); // Get jobId from URL parameters
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the applications when the component is mounted
  useEffect(() => {
    axios
      .get(`http://localhost:8080/apply/getApplyByJob/${jobId}`)
      .then((response) => {
        // Filter applications by jobId
        setApplications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
        setError("Error fetching applications");
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6 pt-20">
      <h1 className="text-2xl font-semibold mb-6">
        Applications for Job ID: {jobId}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.length > 0 ? (
          applications.map((application) => (
            <div
              key={application.id} // Ensure unique key for each application
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
            >
              {application.cvImage ? (
                <img
                  src={`data:image/jpeg;base64,${application.cvImage}`}
                  alt="CV Image"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-500">
                  No CV Image
                </div>
              )}
              <h2 className="text-lg font-semibold">
                {application.applicantName}
              </h2>
              <p className="text-gray-600 mt-2">{application.jobTitle}</p>
              <p className="text-sm text-gray-500 mt-2">
                Location: {application.location}
              </p>
              <p className="text-sm text-gray-500">
                Applied on:{" "}
                {new Date(application.applicationDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No applications for this job.</p>
        )}
      </div>
    </div>
  );
};

export default CompanyInterview;
