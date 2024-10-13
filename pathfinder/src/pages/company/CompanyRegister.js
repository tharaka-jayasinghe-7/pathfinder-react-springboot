import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/landing/Navbar"; // Import Navbar component

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    websiteUrl: "",
    industry: "",
    email: "",
    mobileNumber: "",
    foundingDate: "",
    description: "",
    password: "",
    profileImage: null, // Add a state for the image
  });

  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image file change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, profileImage: file });

    // Generate a preview for the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form validation and submission logic here
    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("address", formData.address);
    formDataToSubmit.append("websiteUrl", formData.websiteUrl);
    formDataToSubmit.append("industry", formData.industry);
    formDataToSubmit.append("email", formData.email);
    formDataToSubmit.append("mobileNumber", formData.mobileNumber);
    formDataToSubmit.append("foundingDate", formData.foundingDate);
    formDataToSubmit.append("description", formData.description);
    formDataToSubmit.append("password", formData.password);

    // Append the profile image file if it exists
    if (formData.profileImage) {
      formDataToSubmit.append("profileImage", formData.profileImage);
    }

    // Submit the form data (add API or form submission logic here)
    console.log("Form Data Submitted:", formDataToSubmit);

    navigate("/"); // Navigate to the landing page after form submission
  };

  return (
    <div className="container mx-auto p-4">
      {/* Navbar Component */}
      <Navbar />

      {/* Registration Form */}
      <div className="w-full max-w-lg mx-auto bg-white shadow-lg p-8 mt-10 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span>No Image</span>
            )}
          </div>

          {/* File Input */}
          <label className="bg-green-500 text-white py-1 px-4 rounded mt-4 cursor-pointer">
            Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          {/* Website URL */}
          <div>
            <label className="block mb-2">Website URL</label>
            <input
              type="url"
              name="websiteUrl"
              value={formData.websiteUrl}
              onChange={handleChange}
              className="border rounded w-full p-2"
            />
          </div>

          {/* Industry */}
          <div>
            <label className="block mb-2">Industry</label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="border rounded w-full p-2"
            >
              <option value="" disabled>
                Select Industry
              </option>
              <option value="IT">IT</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Finance">Finance</option>
              {/* Add more industries as needed */}
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block mb-2">Mobile Number</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
              pattern="[0-9]{10}"
              title="Mobile number should be 10 digits"
            />
          </div>

          {/* Founding Date */}
          <div>
            <label className="block mb-2">Founding Date</label>
            <input
              type="date"
              name="foundingDate"
              value={formData.foundingDate}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border rounded w-full p-2"
              maxLength="500"
            ></textarea>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
              minLength="8"
              title="Password should be at least 8 characters long"
            />
          </div>

          {/* Submit and Back Buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 px-4 rounded"
            >
              Register
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="bg-teal-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompanyRegister;
