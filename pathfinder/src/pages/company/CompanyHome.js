import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";
import companyLogo from "../../images/landing/galadari_logo.jpg";
import axios from "axios";

const CompanyHome = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem("company_id");

  // Declare all hooks at the top level of the component
  const [company, setCompany] = useState(null);
  const [posts, setPosts] = useState([]); // Store posts from backend
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);

  // Fetch company details and posts
  useEffect(() => {
    // Fetch company details
    axios
      .get(`http://localhost:8080/company/getCompany/${companyId}`)
      .then((response) => {
        setCompany(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching company details");
        setLoading(false);
      });

    // Fetch posts by company
    axios
      .get(`http://localhost:8080/post/getPostByCompany/${companyId}`)
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching posts");
        setLoading(false);
      });
  }, [companyId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handlePostSubmit = (e) => {
    e.preventDefault();
    console.log("Post submitted:", { postText, postImage });
    setPostText("");
    setPostImage(null);
    setIsModalOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <CompanyNavbar />

      {/* Sidebar */}
      <div className="fixed h-full bg-white shadow-lg p-6 flex flex-col items-center w-64">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-28 h-28 rounded-full mb-4"
        />
        <h2 className="text-lg font-semibold">{company?.comapanyName}</h2>
        <p className="text-gray-600 mb-6">Excellence in Hospitality</p>
        <button
          className="bg-yellow-500 text-white py-2 px-6 rounded-lg mb-4"
          onClick={() => navigate("/companyPackage")}
        >
          Try Premium
        </button>
        <button
          className="bg-teal-600 text-white py-2 px-6 rounded-lg mb-2"
          onClick={() => navigate(`/viewProfile/${company.companyId}`)}
        >
          View Profile
        </button>
        <button className="bg-red-500 text-white py-2 px-6 rounded-lg">
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-200 flex mt-16 ps-64 pr-32">
        <div className="flex w-full ps-32">
          <div className="flex-1 ml-56 p-6">
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 flex items-center space-x-4">
              <img
                src={companyLogo}
                alt="Company Logo"
                className="w-8 h-8 rounded-full"
              />
              <button
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none text-left"
                onClick={() => setIsModalOpen(true)}
              >
                Start a post
              </button>
            </div>

            <div className="mt-12 space-y-6 mb-16">
              {posts.map((post) => (
                <div
                  key={post.postId}
                  className="bg-white shadow-lg rounded-xl p-6 w-4/5 mx-auto pb-6"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={companyLogo} // Use the company's logo if `post` doesn't have its own
                      alt="Company Logo"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-left">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm text-left">
                        {new Date(post.date).toLocaleDateString()}{" "}
                        {/* Format the date */}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-5 px-6 mb-6">{post.content}</p>

                  {post.image && (
                    <img
                      src={`data:image/jpeg;base64,${post.image}`} // Assuming the image is in base64 format
                      alt={`${post.title} Image`}
                      className="w-full h-96 rounded-lg object-cover mb-6"
                    />
                  )}

                  <div className="flex justify-center mt-4">
                    <button
                      className="bg-teal-600 text-white py-2 px-6 rounded-lg mb-2"
                      onClick={() => navigate(`/viewProfile/${companyId}`)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-1/2 max-w-3xl">
            <h2 className="text-lg font-semibold mb-4">Create a Post</h2>
            <form onSubmit={handlePostSubmit}>
              <textarea
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                rows="4"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="mb-4"
              />
              {postImage && (
                <img
                  src={postImage}
                  alt="Post Preview"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 text-gray-600"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-4 py-2 rounded-md"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyHome;
