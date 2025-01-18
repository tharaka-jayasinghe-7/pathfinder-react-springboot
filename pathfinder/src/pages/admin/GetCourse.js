import React, { useEffect, useState } from "react";
import { getAllCourse } from "../../services/CourseService";

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
        <button
          onClick={addCourse}
          className="bg-teal-600 text-white px-6 py-2 rounded shadow-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          Add Course
        </button>
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          <div className="p-4 flex justify-between items-center"></div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">Subscription Id</th>
                  <th className="py-2 px-4">Duration</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Features</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr
                    key={subscription.subscriptionId}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-100`}
                  >
                    <td className="py-2 px-4">{subscription.subscriptionId}</td>
                    <td className="py-2 px-4">{subscription.duration}</td>
                    <td className="py-2 px-4">{subscription.price}</td>
                    <td className="py-2 px-4">{subscription.features}</td>
                    <button
                      onClick={() =>
                        removeSubscription(subscription.subscriptionId)
                      }
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
