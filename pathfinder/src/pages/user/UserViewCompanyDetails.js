import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../../components/user/UserNavbar";
import { useParams, useNavigate } from "react-router-dom";

const UserViewCompanyDetails = () => {
  const { companyId } = useParams(); // Extract companyId from the route
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/company/getcompany/${companyId}`)
      .then((response) => {
        setCompany(response.data); // Set company data in state
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching company data");
        setLoading(false);
      });
  }, [companyId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl my-3 mt-32 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">
            Company Details
          </h2>

          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={`http://localhost:8080/company/${company.companyId}/image`}
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
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Email</label>
              <input
                type="email"
                value={company.email || ""}
                readOnly
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={company.mobile || ""}
                readOnly
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Website</label>
              <input
                type="text"
                value={company.url || ""}
                readOnly
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Description</label>
              <textarea
                value={company.description || ""}
                readOnly
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100 resize-none"
                rows="4"
              />
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() =>
                  navigate(`/userViewCompany/${company.companyId}`)
                }
                className="bg-teal-600 text-white py-2 px-6 rounded-lg"
              >
                Ok
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserViewCompanyDetails;
