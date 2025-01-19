import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UserViewCompany = () => {
  const navigate = useNavigate();
  const { companyId } = useParams(); // Extract companyId from the route
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  // Fetch company details
  useEffect(() => {
    axios
      .get(`http://localhost:8080/company/getcompany/${companyId}`)
      .then((response) => {
        setCompany(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching company details");
        setLoading(false);
      });
  }, [companyId]);

  // Fetch posts related to the company
  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/getPostByCompany/${companyId}`)
      .then((response) => {
        setPosts(response.data);
      })
      .catch(() => setError("Error fetching posts data"));
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

      {/* Sidebar */}
      <div className="fixed h-full bg-white shadow-lg p-6 flex flex-col items-center w-64">
        <img
          src={`http://localhost:8080/company/${company.companyId}/image`}
          alt={company.name}
          className="w-24 h-24 rounded-full border"
        />
        <h2 className="text-lg font-semibold mt-4">{company.companyName}</h2>
        <p className="text-gray-600 text-center mt-2">{company.address}</p>
        <button
          onClick={() =>
            navigate(`/userViewCompanyDetails/${company.companyId}`)
          } // Navigate to UserViewCompanyDetails
          className="bg-teal-600 text-white py-2 px-6 rounded-lg mt-6"
        >
          View Details
        </button>
        <button
          onClick={() => navigate(`/userJobsByCompany/${company.companyId}`)}
          className="bg-teal-600 text-white py-2 px-8 rounded-lg mt-2"
        >
          View Jobs
        </button>
      </div>

      <div className="min-h-screen bg-gray-200 flex mt-16 ps-64 pr-32">
        <div className="flex w-full ps-32">
          <div className="flex-1 ps-8">
            {/* Posts Cards */}
            <div className="mt-12 space-y-6 mb-16">
              {posts.map((post) => {
                // Log for debugging
                console.log("Post Object:", post);

                return (
                  <div
                    key={post.id}
                    className="bg-white shadow-lg rounded-xl p-6 w-4/5 mx-auto pb-6"
                  >
                    <div className="flex items-start space-x-4">
                      {/* Company Image */}
                      <img
                        src={`http://localhost:8080/company/${company.companyId}/image`}
                        alt={post.companyName || "Company Image"}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-left">
                          {company.companyName}
                        </h3>
                        <p className="text-gray-500 text-sm text-left">
                          {new Date(post.date).toLocaleDateString("en-GB")}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 mt-5 px-6 mb-6">
                      {post.content}
                    </p>

                    {/* Post Image */}
                    <img
                      src={`http://localhost:8080/post/${post.postId}/image`}
                      alt={`${post.title} Image`}
                      className="w-full h-96 rounded-lg object-cover mb-6"
                    />

                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() =>
                          navigate(`/userJobsByCompany/${company.companyId}`)
                        } // Pass companyId to UserJobsByCompany
                        className="bg-teal-600 text-white py-2 px-8 rounded-lg mt-2"
                      >
                        View Jobs
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserViewCompany;
