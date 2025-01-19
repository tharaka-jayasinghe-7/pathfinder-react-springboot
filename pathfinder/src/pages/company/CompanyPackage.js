import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";
import axios from "axios";

const CompanyPackage = () => {
  const navigate = useNavigate();
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/subscription");
        setSubscriptions(response.data);
      } catch (err) {
        setError("Failed to load subscriptions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, []);

  const handleSelect = (subscription) => {
    navigate("/addPayment", { state: { amount: subscription.price } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <CompanyNavbar />

      {/* Page Content */}
      <div className="py-8 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Premium Packages
        </h2>

        {loading ? (
          <p className="text-center text-gray-600">Loading subscriptions...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {subscriptions.map((subscription, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between border border-gray-200"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {subscription.duration}
                  </h3>
                  <p className="text-xl font-bold text-orange-600 mb-4">
                    ${subscription.price.toFixed(2)}
                  </p>
                  <ul className="space-y-2">
                    {subscription.features &&
                      subscription.features
                        .split(",")
                        .map((feature, fIndex) => (
                          <li key={fIndex} className="text-gray-600">
                            • {feature.trim()}
                          </li>
                        ))}
                  </ul>
                </div>
                <button
                  className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => handleSelect(subscription)}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Go Back Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate(-1)}
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyPackage;
