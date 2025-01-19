import React, { useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import { useNavigate } from "react-router-dom";

const UserFindCourse = () => {
  const [industry, setIndustry] = useState("Automobile");
  const [timeType, setTimeType] = useState("Full-time");
  const [age, setAge] = useState(22); // Store as number

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    // Redirect to UserViewCourses with query parameters
    navigate("/userViewCourses", {
      state: { industry, timeType, age },
    });
  };

  const handleBack = () => {
    // Add your back logic here (e.g., navigate back)
    console.log("Back button clicked");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 mt-6">
      {/* Navbar */}
      <UserNavbar />

      {/* Main Content */}
      <div className="flex-1 flex justify-center mt-16 items-center mb-16">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-3xl font-bold text-teal-600 text-center mb-6">
            Find courses
          </h2>
          <p className="text-gray-400 text-center mb-6">
            Fill below details and press the search button
          </p>

          {/* Form */}
          <form onSubmit={handleSearch}>
            {/* Industry */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-gray-200 border-gray-300 rounded-md shadow-sm h-12 text-lg"
              >
                <option value="Automobile">Automobile</option>
                <option value="Construction">Construction</option>
                <option value="Hotel">Hotel</option>
              </select>
            </div>

            {/* Full-time/Part-time */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Full-time/Part-time
              </label>
              <select
                value={timeType}
                onChange={(e) => setTimeType(e.target.value)}
                className="w-full bg-gray-200 border-gray-300 rounded-md shadow-sm h-12 text-lg"
              >
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
              </select>
            </div>

            {/* Age */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value, 10))} // Convert to number
                min="18"
                max="30"
                className="w-full bg-gray-200 border-gray-300 rounded-md shadow-sm h-12 text-lg px-4"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-2">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md"
              >
                Search
              </button>
              <button
                type="button"
                onClick={handleBack}
                className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-md"
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

export default UserFindCourse;
