import React, { useState } from "react";
import Navbar from "../../components/landing/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/user/userLogin",
        null,
        {
          params: { email, password },
        }
      );

      if (response.status === 200) {
        const userData = response.data;

        localStorage.setItem("user_id", userData.userId);
        localStorage.setItem("user_email", userData.email);
        console.log("User Logged In", response.data);
        navigate("/userHome");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center">
        {/* Login Form */}
        <div className="bg-white shadow-md rounded-lg w-[400px] py-8 px-6 mt-1">
          <h2 className="text-2xl font-semibold text-center text-teal-700 mb-6">
            Login
          </h2>

          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Error Message */}
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          {/* Buttons */}
          <div className="flex flex-col space-y-3">
            <button
              onClick={handleLogin}
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

export default UserLogin;
