import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";
import axios from "axios";

const CompanyAddJob = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobDescription: "",
    location: "",
    reqOlPassCount: "",
    workingHours: "",
    Qualification: "",
    jobImage: null, // For storing the uploaded image
  });
  const [error, setError] = useState("");
  const companyId = localStorage.getItem("company_id");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "jobImage") {
      setJobData((prevData) => ({ ...prevData, jobImage: files[0] }));
    } else {
      setJobData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handlePostJob = async (e) => {
    e.preventDefault();
    setError("");

    if (!companyId) {
      setError("Company ID not found. Please log in again.");
      return;
    }

    const formData = new FormData();
    for (const key in jobData) {
      formData.append(key, jobData[key]);
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/job/company/${companyId}/addJob`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Job posted successfully:", response.data);
      navigate("/companyJob"); // Navigate back to the company home page
    } catch (err) {
      console.error("Error posting job:", err);
      setError("Failed to post job. Please try again.");
    }
  };

  const handleGoBack = () => {
    navigate("/companyHome");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <CompanyNavbar />
      <div className="flex justify-center items-center mt-16">
        <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-teal-700 text-3xl font-bold text-center mb-4">
            Post Job
          </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <form onSubmit={handlePostJob}>
            {[
              { name: "jobTitle", label: "Job Title", type: "text" },
              {
                name: "jobDescription",
                label: "Job Description",
                type: "textarea",
              },
              { name: "location", label: "Location", type: "text" },
              {
                name: "reqOlPassCount",
                label: "O/L Subjects Pass Count",
                type: "number",
              },
              { name: "workingHours", label: "Working Hours", type: "number" },
              { name: "Qualification", label: "Qualifications", type: "text" },
            ].map(({ name, label, type }) => (
              <div key={name} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    name={name}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                    rows="4"
                    placeholder={label}
                    value={jobData[name]}
                    onChange={handleChange}
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    name={name}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                    placeholder={label}
                    value={jobData[name]}
                    onChange={handleChange}
                  />
                )}
              </div>
            ))}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Job Image
              </label>
              <input
                type="file"
                name="jobImage"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-teal-500"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
              >
                Post Now
              </button>
              <button
                type="button"
                onClick={handleGoBack}
                className="bg-teal-700 text-white px-6 py-2 rounded-md hover:bg-teal-800"
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddJob;
