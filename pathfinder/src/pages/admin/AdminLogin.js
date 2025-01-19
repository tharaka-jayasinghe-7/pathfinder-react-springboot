import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/landing/Navbar";
import NavbarUpdate from "../../components/landing/NavbarUpdate";
import NavbarLogin from "../../components/landing/NavbarLogin";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/adminLogin",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json", // Explicitly set content type
          },
        }
      );

      if (response.status == 200) {
        console.log("User Logged In", response.data);
        navigate("/adminDashboard");
      }
    } catch (error) {
      setError("Invaild email or password");
      console.error(error);
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <NavbarLogin />
      <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
        <div className="bg-white shadow-md rounded-lg w-[400px] py-8 px-6 mt-1">
          <h2 className="text-2xl font-semibold text-center text-teal-700 mb-6">
            Admin Login
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col space-y-3">
            <button
              onClick={(e) => handleLogin(e)}
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
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
