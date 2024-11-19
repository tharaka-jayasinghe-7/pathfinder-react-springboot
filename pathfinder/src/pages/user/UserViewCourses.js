import React from "react";
import UserNavbar from "../../components/user/UserNavbar"; // Import the UserNavbar
import hotelImage from "../../images/landing/hotel1.jpg";

const UserViewCourses = () => {
  // Sample data to load the courses
  const courses = [
    {
      institution: "Vocational Training Authority - Sri Lanka",
      courseName: "Automobile mechanic",
      requirements: "Age between 16-25, Passed in GCE O/L",
      duration: "4 years",
      nvqLevel: "NVQ Level 05",
      type: "Full time",
      website: "https://example.com",
      image: hotelImage,
    },
    {
      institution: "German Tech - Sri Lanka",
      courseName: "Automobile mechanic",
      requirements: "Age between 16-25, Passed in GCE O/L",
      duration: "4 years",
      nvqLevel: "NVQ Level 05",
      type: "Full time",
      website: "https://example.com",
      image: hotelImage,
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-32 gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.institution}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{course.institution}</h3>
                <p>
                  <strong>Course Name:</strong> {course.courseName}
                </p>
                <p>
                  <strong>Requirements:</strong> {course.requirements}
                </p>
                <p>
                  <strong>Duration:</strong> {course.duration}
                </p>
                <p>
                  <strong>NVQ Level:</strong> {course.nvqLevel}
                </p>
                <p>
                  <strong>Type:</strong> {course.type}
                </p>
                <a
                  href={course.website}
                  className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Visit website
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Back button */}
        <div className="mt-6 text-center">
          <button
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
            onClick={() => window.history.back()}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserViewCourses;
