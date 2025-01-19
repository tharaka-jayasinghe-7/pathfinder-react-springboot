import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoading(true);

        const response = await axios.get("http://localhost:8080/company");
        const companyData = response.data;

        if (companyData.length === 0) {
          setError("No companies found.");
          setLoading(false);
          return;
        }

        setCompanies(companyData);
        setFilteredCompanies(companyData);
      } catch (err) {
        console.error("Error fetching companies:", err);
        setError("Failed to fetch companies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  // Filter companies based on search query
  const handleSearch = async () => {
    const query = searchQuery.trim();
    console.log("Search query:", query);

    if (query === "") {
      setFilteredCompanies(companies);
      setError(null);
    } else {
      try {
        setLoading(true);

        // Make an API call to search companies by name
        const response = await axios.get(
          `http://localhost:8080/company/getCompanyByName/${query}`
        );

        let searchResults = response.data;
        console.log("Search results:", searchResults);

        // Handle single object case by wrapping it in an array
        if (!Array.isArray(searchResults)) {
          searchResults = [searchResults]; // Wrap the single company object in an array
        }

        if (searchResults.length === 0) {
          setError("No companies found with that name.");
        } else {
          setError(null);
        }

        setFilteredCompanies(searchResults);
      } catch (err) {
        console.error("Error fetching filtered companies:", err);

        if (err.response && err.response.status === 404) {
          setError("No companies found with that name.");
        } else {
          setError("Failed to fetch companies. Please try again later.");
        }

        setFilteredCompanies([]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4">
        {loading && <p>Loading companies...</p>}

        {/* Search Bar */}
        <div className="mt-32 flex justify-center items-center space-x-2">
          <input
            type="text"
            placeholder="Search for a company..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded-md w-[300px]"
          />
          <button
            onClick={handleSearch}
            className="bg-teal-600 text-white px-4 py-2 rounded-md"
          >
            Search
          </button>
        </div>

        {/* Error message */}
        {error && <p className="text-gray-500 text-center mt-4">{error}</p>}

        {/* No companies found message */}
        {!loading && !error && filteredCompanies.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No companies found.</p>
        )}

        {/* Display companies */}
        {!loading &&
          !error &&
          Array.isArray(filteredCompanies) &&
          filteredCompanies.length > 0 && (
            <div className="space-y-4 mt-16 mb-16">
              {filteredCompanies.map((company) => (
                <div
                  key={company.companyId}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    {/* Company Image */}
                    <img
                      src={`http://localhost:8080/company/${company.companyId}/image`} // Company image URL
                      alt={company.companyName}
                      className="w-24 h-24 mr-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">
                        {company.companyName}
                      </h3>
                      <p className="text-gray-600">{company.address}</p>
                      <p className="text-gray-600">{company.industry}</p>
                      <p className="text-gray-600">{company.mobile}</p>
                      <p className="text-gray-600">{company.email}</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4 md:mt-0">
                    <button
                      onClick={() =>
                        navigate(`/userViewCompany/${company.companyId}`)
                      } // Assuming you have a company details page
                      className="bg-teal-600 text-white px-4 py-2 rounded-md"
                    >
                      View Company
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default UserCompanies;
