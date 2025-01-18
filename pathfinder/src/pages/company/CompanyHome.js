import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyNavbar from "../../components/company/CompanyNavbar";
import companyLogo from "../../images/landing/galadari_logo.jpg";
import axios from "axios";

const CompanyHome = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem("company_id");

  const [company, setCompany] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [postType, setPostType] = useState("");
  const [postDate, setPostDate] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/company/getCompany/${companyId}`)
      .then((response) => {
        setCompany(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching company details");
        setLoading(false);
      });

    axios
      .get(`http://localhost:8080/post/getPostByCompany/${companyId}`)
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(() => {
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

    const formData = new FormData();
    formData.append("title", postTitle);
    formData.append("content", postContent);
    formData.append("type", postType);
    formData.append("date", postDate);
    formData.append("image", postImage);

    axios
      .post(
        `http://localhost:8080/post/company/${companyId}/addPost`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
      .then((response) => {
        setPosts((prevPosts) => [response.data, ...prevPosts]);
        setIsModalOpen(false);
        setPostTitle("");
        setPostContent("");
        setPostType("");
        setPostDate("");
        setPostImage(null);
        setImagePreview(null);
      })
      .catch(() => {
        setError("Error adding post");
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPostImage(file);
      setImagePreview(URL.createObjectURL(file));
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
                      src={companyLogo}
                      alt="Company Logo"
                      className="w-16 h-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-left">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm text-left">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mt-5 px-6 mb-6">{post.content}</p>

                  {post.image && (
                    <img
                      src={`data:image/jpeg;base64,${post.image}`}
                      alt={`${post.title} Image`}
                      className="w-full h-96 rounded-lg object-cover mb-6"
                    />
                  )}
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
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Post Title"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              />
              <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                rows="4"
              />
              <input
                type="text"
                value={postType}
                onChange={(e) => setPostType(e.target.value)}
                placeholder="Post Type"
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              />
              <input
                type="date"
                value={postDate}
                onChange={(e) => setPostDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
              />
              <input
                type="file"
                onChange={handleImageChange}
                className="mb-4"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
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
