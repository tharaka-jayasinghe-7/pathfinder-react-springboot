import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CompanyNavbar from "../../components/company/CompanyNavbar"; // Import CompanyNavbar

const packages = [
  {
    name: "Starter Package",
    price: "LKR 1,000 / 1 Month",
    features: [
      "Access to standard features",
      "Limited support (email only)",
      "10 GB storage",
      "5 custom reports per month",
      "Basic analytics",
    ],
  },
  {
    name: "Pro Package",
    price: "LKR 5,000 / 6 Months",
    features: [
      "Everything in Starter Package",
      "Priority customer support (email and phone)",
      "50 GB storage",
      "25 custom reports per month",
      "Advanced analytics",
      "Access to exclusive VIP content",
      "No ads",
    ],
  },
  {
    name: "Elite Package",
    price: "LKR 10,000 / Year",
    features: [
      "Everything in Pro Package",
      "Unlimited storage",
      "Unlimited custom reports",
      "Dedicated account manager",
      "24/7 priority support",
      "Access to beta features",
      "Customized dashboards",
      "Branding options",
    ],
  },
];

const CompanyPackage = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [selectedPackage, setSelectedPackage] = useState(null); // State to hold selected package

  // Function to handle package selection and navigate to payment page
  const handleSelect = (pkg) => {
    setSelectedPackage(pkg); // Set the selected package
    navigate("/companyPayment", { state: { package: pkg } }); // Correct route and pass selected package to payment page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <CompanyNavbar />

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-8">Premium Packages</h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 max-w-6xl mx-auto px-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-6 w-full md:w-1/3 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
                <p className="text-lg font-semibold text-gray-700">
                  {pkg.price}
                </p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => handleSelect(pkg)} // Pass the selected package to the handler
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={() => navigate(-1)} // Navigate back when clicked
          className="mt-8 bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CompanyPackage;
