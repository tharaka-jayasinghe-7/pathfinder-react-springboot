import React, { useEffect, useState } from "react";
import { getAllCourse } from "../../services/CourseService";
import NavbarUpdate from "../../components/landing/NavbarUpdate";
import AdminNavbar from "../../components/admin/AdminNavbar";

const GetCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    listCourses();
  }, []);

  function listCourses() {
    getAllCourse()
      .then((response) => {
        setCourses(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex">
      <NavbarUpdate />
      {/* Sidebar/Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="p-8 bg-gray-100 min-h-screen ml-64 w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Users List</h2>
        {/* <button
          onClick={addCourse}
          className="bg-teal-600 text-white px-6 py-2 rounded shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Add Course
        </button> */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          <div className="p-4 flex justify-between items-center"></div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Course Id</th>
                  <th className="py-2 px-4">Course Name</th>
                  <th className="py-2 px-4">Insititue</th>
                  <th className="py-2 px-4">Web URL</th>
                  <th className="py-2 px-4">Industry</th>
                  <th className="py-2 px-4">In Age Limit</th>
                  <th className="py-2 px-4">Max Age Limit</th>
                  <th className="py-2 px-4">O/L Pass Count</th>
                  <th className="py-2 px-4">Duration</th>
                  <th className="py-2 px-4">NVQ Level</th>
                  <th className="py-2 px-4">Type</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={course.courseId}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-100`}
                  >
                    <td className="py-2 px-4">{course.courseId}</td>
                    <td className="py-2 px-4">{course.courseName}</td>
                    <td className="py-2 px-4">{course.institute}</td>
                    <td className="py-2 px-4">{course.webUrl}</td>
                    <td className="py-2 px-4">{course.industry}</td>
                    <td className="py-2 px-4">{course.minAgeLimit}</td>
                    <td className="py-2 px-4">{course.maxAgeLimit}</td>
                    <td className="py-2 px-4">{course.reqOlPassCount}</td>
                    <td className="py-2 px-4">{course.duration}</td>
                    <td className="py-2 px-4">{course.nvqLevel}</td>
                    <td className="py-2 px-4">{course.type}</td>

                    <button
                      onClick={() => removeCourse(course.courseId)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCourse;
