import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateCourse = () => {
  const { courseId } = useParams(); // Get the courseId from URL
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    courseName: "",
    institute: "",
    webUrl: "",
    industry: "",
    minAgeLimit: "",
    maxAgeLimit: "",
    reqOlPassCount: "",
    duration: "",
    nvqLevel: "",
    type: "",
    profilePic: "", // Added profilePic to the state
  });
  const [file, setFile] = useState(null); // State to store the uploaded file
  const [loading, setLoading] = useState(true);

  // Fetch the course details when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8080/course/getCourse/${courseId}`)
      .then((response) => {
        setCourse({
          ...response.data,
          profilePic: response.data.profilePic || "", // Ensure profilePic is set correctly
        });
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
        setLoading(false);
      });
  }, [courseId]);

  // Handle form change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevCourse) => ({
      ...prevCourse,
      [name]: value,
    }));
  };

  // Handle file change
  const handleFileChange = (e) => {
    const { files } = e.target;
    setFile(files[0]);
  };

  // Handle form submission to update the course
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle the form data, including file
    const formData = new FormData();
    formData.append("courseName", course.courseName);
    formData.append("institute", course.institute);
    formData.append("webUrl", course.webUrl);
    formData.append("industry", course.industry);
    formData.append("minAgeLimit", course.minAgeLimit);
    formData.append("maxAgeLimit", course.maxAgeLimit);
    formData.append("reqOlPassCount", course.reqOlPassCount);
    formData.append("duration", course.duration);
    formData.append("nvqLevel", course.nvqLevel);
    formData.append("type", course.type);

    // If a file is selected, append it to the FormData with the key 'profilePic'
    if (file) {
      formData.append("profilePic", file); // Changed 'file' to 'profilePic'
    }

    axios
      .put(`http://localhost:8080/course/updatecourse/${courseId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Ensure the correct content type
        },
      })
      .then((response) => {
        console.log("Course updated:", response.data);
        navigate("/getCourse"); // Navigate back to the course list after successful update
      })
      .catch((error) => {
        console.error("Error updating course:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Update Course</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          {course.profilePic && (
            <img
              src={`http://localhost:8080/course/${courseId}/image`} // Correct image URL for the course profile picture
              alt="Course Profile"
              className="w-24 h-24 rounded-full border mb-4"
            />
          )}
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Course Name</label>
          <input
            type="text"
            name="courseName"
            value={course.courseName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Institute</label>
          <input
            type="text"
            name="institute"
            value={course.institute}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Web URL</label>
          <input
            type="text"
            name="webUrl"
            value={course.webUrl}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Industry</label>
          <input
            type="text"
            name="industry"
            value={course.industry}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Min Age Limit</label>
          <input
            type="number"
            name="minAgeLimit"
            value={course.minAgeLimit}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Max Age Limit</label>
          <input
            type="number"
            name="maxAgeLimit"
            value={course.maxAgeLimit}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">O/L Pass Count</label>
          <input
            type="number"
            name="reqOlPassCount"
            value={course.reqOlPassCount}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Duration</label>
          <input
            type="text"
            name="duration"
            value={course.duration}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">NVQ Level</label>
          <input
            type="text"
            name="nvqLevel"
            value={course.nvqLevel}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Type</label>
          <input
            type="text"
            name="type"
            value={course.type}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Update Profile Pic</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded"
          >
            Update Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCourse;
