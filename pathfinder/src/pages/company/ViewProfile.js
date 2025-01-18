import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/user/UserNavbar";
import CompanyNavbar from "../../components/company/CompanyNavbar";

const ViewProfile = () => {
  const companyId = localStorage.getItem("company_id");
  const navigate = useNavigate();
  const [company, setCompany] = useState(null); // State to hold company details
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch company details from the backend when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8080/company/getcompany/${companyId}`)
      .then((response) => {
        setCompany(response.data); // Set company data in state
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching company details");
        setLoading(false);
      });
  }, [companyId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Render company details if available
  return (
    <div>
      <CompanyNavbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl my-3 mt-32 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">
            Company Profile
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={`http://localhost:8080/company/${companyId}/image`}
                alt="Company Logo"
                className="w-24 h-24 rounded-full border"
              />
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block mb-3 text-gray-700">Company Name</label>
              <input
                type="text"
                value={company.companyName || ""}
                readOnly
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Address</label>
              <input
                type="text"
                value={company.address || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Website URL</label>
              <input
                type="url"
                value={company.url || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Industry</label>
              <input
                type="text"
                value={company.industry || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Email</label>
              <input
                type="email"
                value={company.email || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Mobile Number</label>
              <input
                type="tel"
                value={company.mobile || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">
                Established Date
              </label>
              <input
                type="date"
                value={company.date || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Description</label>
              <textarea
                value={company.description || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
                rows="4"
              ></textarea>
            </div>
            <div className="text-center mt-10">
              <button
                onClick={() => navigate("/companyHome")}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded"
              >
                Go Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
