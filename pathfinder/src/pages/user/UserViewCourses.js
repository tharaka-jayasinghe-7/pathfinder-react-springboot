import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

const UserViewCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Receiving search parameters passed from the previous page
  const location = useLocation();
  const { industry, timeType, age } = location.state ?? {};

  // Fetch courses data from API
  useEffect(() => {
    axios
      .get("http://localhost:8080/course/getcourses")
      .then((response) => {
        console.log(response.data);
        setCourses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching courses data");
        setLoading(false);
      });
  }, []);

  // Convert age to a number for comparison
  const ageNum = parseInt(age, 10);

  // Filter courses based on user inputs
  console.log("Filter conditions:", {
    industry,
    timeType,
    ageNum,
  });
  const filteredCourses = courses.filter((course) => {
    const isIndustryMatch = industry ? course.industry === industry : true;
    const isTimeTypeMatch = timeType ? course.type === timeType : true;
    const isAgeMatch = ageNum
      ? course.minAgeLimit <= ageNum && course.maxAgeLimit >= ageNum
      : true;
    console.log("Course:", course.courseName, {
      isIndustryMatch,
      isTimeTypeMatch,
      isAgeMatch,
    });

    return isIndustryMatch && isTimeTypeMatch && isAgeMatch;
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-32 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {/* Assuming course.image is a URL */}
                <img
                  src={`http://localhost:8080/course/${course.courseId}/image`}
                  alt={course.courseName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{course.institute}</h3>
                  <p>
                    <strong>Course Name:</strong> {course.courseName}
                  </p>
                  <p>
                    <strong>Industry:</strong> {course.industry}
                  </p>
                  <p>
                    <strong>Requirements:</strong> Age between{" "}
                    {course.minAgeLimit} - {course.maxAgeLimit}, Passed in GCE
                    O/L ({course.reqOlPassCount} subjects)
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
                  <p>
                    <strong>Website:</strong>
                    <a
                      href={course.webUrl}
                      className="text-blue-500"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {course.webUrl}
                    </a>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div>No courses found matching your criteria.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserViewCourses;
