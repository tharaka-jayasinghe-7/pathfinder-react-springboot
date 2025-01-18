import React, { useEffect, useState } from "react";
import { deleteJob, getAllJob } from "../../services/jobService";
import NavbarUpdate from "../../components/landing/NavbarUpdate";
import AdminNavbar from "../../components/admin/AdminNavbar";

const GetJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    jobList();
  }, []);

  function jobList() {
    getAllJob()
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function removeJob(jobId) {
    deleteJob(jobId)
      .then((response) => {
        jobList();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex">
      <NavbarUpdate />
      {/* Sidebar/Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="p-8 bg-gray-100 min-h-screen ml-64 w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Users List</h2>

        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          <div className="p-4 flex justify-between items-center"></div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Job Id</th>
                  <th className="py-2 px-4">Job Title</th>
                  <th className="py-2 px-4">Job Description</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Request O/L Pass Count</th>
                  <th className="py-2 px-4">Working Hours</th>
                  <th className="py-2 px-4">Qulification</th>

                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr
                    key={job.jobId}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-100`}
                  >
                    <td className="py-2 px-4">{job.jobId}</td>
                    <td className="py-2 px-4">{job.jobTitle}</td>
                    <td className="py-2 px-4">{job.jobDescription}</td>
                    <td className="py-2 px-4">{job.location}</td>
                    <td className="py-2 px-4">{job.reqOlPassCount}</td>
                    <td className="py-2 px-4">{job.workingHours}</td>
                    <td className="py-2 px-4">{job.qualification}</td>

                    <button
                      onClick={() => removeJob(job.jobId)}
                      className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetJobs;
