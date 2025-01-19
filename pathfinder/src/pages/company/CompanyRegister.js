import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    address: "",
    url: "",
    industry: "",
    email: "",
    mobile: "",
    date: "",
    description: "",
    password: "",
    profilePic: null,
  });

  const nagivate = useNavigate();

  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (key !== "image") {
          formDataToSend.append(key, formData[key]);
        }
      }

      if (formData.profilePic) {
        formDataToSend.append("companyImage", formData.profilePic);
      }

      const response = await axios.post(
        "http://localhost:8080/company/addCompany",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Company registered successfully:", response.data);
      nagivate("/companyLogin");
    } catch (error) {
      console.error("Error during company registration:", error);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl my-3 mt-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">
          Company Register
        </h2>

        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={
                formData.image
                  ? URL.createObjectURL(formData.image)
                  : "https://via.placeholder.com/150"
              }
              alt="Company Logo"
              className="w-24 h-24 rounded-full border"
            />
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <button
            type="button"
            onClick={triggerFileInput}
            className="mt-4 px-4 py-1 bg-green-500 text-white rounded"
          >
            Upload Image
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-3 text-gray-700">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mb-4 border rounded"
              placeholder="Company Name"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Address"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Website URL</label>
            <input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Website URL"
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Industry"
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Mobile Number"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Established Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Description"
              rows="3"
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-6 rounded"
              placeholder="Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
          >
            Register
          </button>

          <button
            type="button"
            className="w-full mt-2 bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegister;
