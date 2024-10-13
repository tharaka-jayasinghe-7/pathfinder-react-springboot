import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";

const UserApplyJob = () => {
  // Job details loaded from a variable
  const jobDetails = {
    company: "XTR Enterprises",
    title: "Welder needed",
    date: "18.06.2024",
  };

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    certification: "Certification in welding",
    nvqLevel: "NVQ level 1",
    resume: null,
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle resume upload
  const handleResumeUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Here you can handle the form data submission to a backend
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <UserNavbar />
      <div className="flex justify-center items-center py-12 mt-16 mb-16">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold  text-gray-800">
            {jobDetails.company}
          </h2>
          <h3 className="text-xl  text-gray-700">{jobDetails.title}</h3>
          <p className="text-gray-500 mb-6">{jobDetails.date}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Certification</label>
              <select
                name="certification"
                value={formData.certification}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              >
                <option>Certification in welding</option>
                <option>Other certification</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">NVQ Level</label>
              <select
                name="nvqLevel"
                value={formData.nvqLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              >
                <option>NVQ level 1</option>
                <option>NVQ level 2</option>
                <option>NVQ level 3</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleResumeUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div className="flex justify-center space-x-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Apply now
              </button>
              <button
                type="button"
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
                onClick={() => window.history.back()}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserApplyJob;
