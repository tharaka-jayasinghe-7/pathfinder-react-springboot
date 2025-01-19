import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    dob: "",
    olPassCount: "7",
    mobile: "",
    email: "",
    certification: "Certification in welding",
    password: "",
    profileImage: null,
  });

  const fileInputRef = useRef(null); // Create a ref for the file input
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, profileImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      for (const key in formData) {
        if (key !== "profileImage") {
          formDataToSend.append(key, formData[key]);
        }
      }

      if (formData.profileImage) {
        formDataToSend.append("userImage", formData.profileImage);
      }

      const response = await axios.post(
        "http://localhost:8080/user/addUser",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("User registered successfully!"); // Display success message
      navigate("/"); // Redirect to Landing.js
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again."); // Show error message
    }
  };

  const triggerFileInput = () => {
    // Programmatically trigger the file input click
    fileInputRef.current.click();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl my-3 mt-8 mb-16">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={
                formData.profileImage
                  ? URL.createObjectURL(formData.profileImage) // Display selected image
                  : "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="w-24 h-24 rounded-full border"
            />
            <input
              ref={fileInputRef} // Attach the ref to the file input
              type="file"
              onChange={handleImageUpload} // Trigger image selection
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
          <button
            type="button" // Ensure it's a button type
            onClick={triggerFileInput} // Trigger the file input click when button is pressed
            className="mt-4 px-4 py-1 bg-green-500 text-white rounded"
          >
            Upload Image
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-3 text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 mb-4 border rounded"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Last Name"
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
            <label className="block mb-3 text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-3 text-gray-700">
              O/L Subjects Pass Count
            </label>
            <select
              name="olPassCount" // Use updated name for backend field
              value={formData.olPassCount}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
            >
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div>
            <label className="block mb-3 text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile" // Use updated name for backend field
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
              placeholder="Mobile Number"
              required
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
            <label className="block mb-3 text-gray-700">Certification</label>
            <select
              name="certification"
              value={formData.certification}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border mb-4 rounded"
            >
              <option value="Welding NVQ 1">Welding NVQ 1</option>
              <option value="Welding NVQ 2">Welding NVQ 2</option>
              <option value="Welding NVQ 3">Welding NVQ 3</option>
              <option value="Mechanic NVQ 1">Mechanic NVQ 1</option>
              <option value="Mechanic NVQ 2">Mechanic NVQ 2</option>
              <option value="Mechanic NVQ 3">Mechanic NVQ 3</option>
              <option value="Chef NVQ 1">Chef NVQ 1</option>
              <option value="Chef NVQ 2">Chef NVQ 2</option>
              <option value="Chef NVQ 3">Chef NVQ 3</option>
            </select>
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

export default UserRegister;
