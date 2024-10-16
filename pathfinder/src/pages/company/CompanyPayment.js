import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import CompanyNavbar

const CompanyPayment = () => {
  const location = useLocation(); // Use useLocation to get the state
  const selectedPackage = location.state?.package; // Access the selected package
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back when clicked
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <CompanyNavbar /> {/* Add CompanyNavbar */}
      <div className="flex items-center justify-center py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6">
            Payment for {selectedPackage?.name}
          </h2>
          <p className="text-lg font-semibold text-gray-700 mb-4">
            {selectedPackage?.price}
          </p>

          {/* Payment Method */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Payment Method</h2>
            <div className="mt-2 flex justify-between items-center border p-3 rounded">
              <span className="font-semibold">Mastercard</span>
              <div className="flex space-x-2">
                <img
                  src="/path/to/mastercard-logo.png"
                  alt="Mastercard"
                  className="h-6"
                />
                <img src="/path/to/visa-logo.png" alt="Visa" className="h-6" />
                <img
                  src="/path/to/amex-logo.png"
                  alt="American Express"
                  className="h-6"
                />
                <img
                  src="/path/to/discover-logo.png"
                  alt="Discover"
                  className="h-6"
                />
              </div>
            </div>
          </div>

          {/* Credit Card Details */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Credit Card Details</h2>
            <input
              type="text"
              placeholder="Name on card"
              className="w-full p-3 mt-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Card number"
              className="w-full p-3 mt-3 border rounded-lg"
            />
            <div className="flex mt-3 space-x-3">
              <select className="w-1/2 p-3 border rounded-lg">
                <option>Month</option>
                {/* Add options for months */}
              </select>
              <select className="w-1/2 p-3 border rounded-lg">
                <option>Year</option>
                {/* Add options for years */}
              </select>
            </div>
            <input
              type="text"
              placeholder="Card Security Code"
              className="w-full p-3 mt-3 border rounded-lg"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            <button className="bg-black text-white py-3 px-6 rounded-lg">
              Pay
            </button>
            <button
              onClick={handleGoBack}
              className="bg-gray-300 text-black py-3 px-6 rounded-lg"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPayment;
