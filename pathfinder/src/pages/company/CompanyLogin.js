// src/pages/company/CompanyLogin.js
import React, { useState } from "react";
import Navbar from "../../components/landing/Navbar"; // Ensure you have this Navbar component
import { useNavigate } from "react-router-dom";

const CompanyLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    // After successful login, navigate to CompanyHome or wherever appropriate
    navigate("/companyHome");
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
        {/* Login Form */}
        <div className="bg-white shadow-md rounded-lg w-[400px] py-8 px-6 mt-1">
          <h2 className="text-2xl font-semibold text-center text-teal-700 mb-6">
            Company Login
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col space-y-3">
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/")}
                className="bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition"
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

export default CompanyLogin;
