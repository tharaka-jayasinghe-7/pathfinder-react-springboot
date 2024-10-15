import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import CompanyNavbar

const CompanyNot = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewClick = () => {
    // Example logic to handle "View" button click
    navigate("/some-route"); // Replace "/some-route" with the actual route you want to navigate to
  };

  return (
    <div>
      <CompanyNavbar /> {/* Render the navbar */}
      <div className="container mx-auto mt-10 p-5">
        <h2 className="text-teal-700 text-3xl font-bold mb-5">Notifications</h2>
        {/* Sample notifications */}
        <div className="bg-white shadow-md rounded-lg p-5 mb-5">
          <h3 className="text-xl font-bold">Grill Chef Needed</h3>
          <p>Tharaka Jayasinghe</p>
          <p>Apply date: 18.06.2024</p>
          <p>Status - Pending</p>
          <p className="mt-2">
            I have submitted my application for the Grill Chef position at
            Galadari Hotel. Attached is my resume for your consideration. I look
            forward to the opportunity to contribute my culinary skills to your
            team.
          </p>
          <button
            onClick={handleViewClick} // Navigate to the specified route when clicked
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            View
          </button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5">
          <h3 className="text-xl font-bold">Pasty Chef Needed</h3>
          <p>Ravindu Dilshan</p>
          <p>Apply date: 18.06.2024</p>
          <p>Status - Pending</p>
          <p className="mt-2">
            I have submitted my application for the Pasty Chef position at
            Galadari Hotel. Attached is my resume for your consideration. I look
            forward to the opportunity to contribute my culinary skills to your
            team.
          </p>
          <button
            onClick={handleViewClick} // Navigate to the specified route when clicked
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyNot;
