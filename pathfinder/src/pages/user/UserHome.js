import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserHome = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("user_id");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]); // State to hold posts data

  // Fetch user data
  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getUser/${userId}`)
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching user data");
        setLoading(false);
      });
  }, [userId]);

  // Fetch posts data (including company details) using the new endpoint
  useEffect(() => {
    axios
      .get("http://localhost:8080/post/getPostsForUser")
      .then((response) => {
        setPosts(response.data); // Directly set posts as the companyName is already included
      })
      .catch(() => setError("Error fetching posts data"));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleViewCompany = (companyId) => {
    // Navigate to the UserViewCompany page with the companyId as a URL parameter
    navigate(`/userViewCompany/${companyId}`);
  };

  return (
    <div>
      <UserNavbar />

      {/* Sidebar */}
      <div className="fixed h-full bg-white shadow-lg p-6 flex flex-col items-center w-64">
        <img
          src={`http://localhost:8080/user/${user.userId}/image`}
          alt={user.firstName}
          className="w-24 h-24 rounded-full border"
        />
        <h2 className="text-lg font-semibold">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-gray-600 mb-6">{user.certification}</p>
        <button
          className="bg-teal-600 text-white py-2 px-6 rounded-lg mb-2"
          onClick={() => navigate(`/userProfile/${user.userId}`)}
        >
          View Profile
        </button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
          Log Out
        </button>
      </div>

      <div className="min-h-screen bg-gray-200 flex mt-16 ps-64 pr-32">
        <div className="flex w-full ps-32">
          <div className="flex-1 ps-8">
            {/* Posts Cards */}
            <div className="mt-12 space-y-6 mb-16">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white shadow-lg rounded-xl p-6 w-4/5 mx-auto pb-6"
                >
                  <div className="flex items-start space-x-4">
                    {/* Updated Company Image URL */}
                    <img
                      src={`http://localhost:8080/company/${post.companyId}/image`} // Company image URL
                      alt={post.companyName}
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-left">
                        {post.companyName}
                      </h3>
                      <p className="text-gray-500 text-sm text-left">
                        {new Date(post.date).toLocaleDateString("en-GB")}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-5 px-6 mb-6">{post.content}</p>

                  {/* Post Image */}
                  <img
                    src={`http://localhost:8080/post/${post.id}/image`} // Post image URL
                    alt={`${post.title} Image`}
                    className="w-full h-96 rounded-lg object-cover mb-6"
                  />

                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-teal-500 text-white px-6 py-3 rounded-full"
                      onClick={() => handleViewCompany(post.companyId)} // Navigate to the company page
                    >
                      View Company
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
