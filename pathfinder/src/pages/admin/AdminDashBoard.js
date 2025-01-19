import React, { useEffect, useState } from "react";
import { getAllJob } from "../../services/jobService"; // Import the service to get jobs
import { getAllCourse } from "../../services/CourseService"; // Import the service to get courses
import { getAllCompanies } from "../../services/CompanyService"; // Import the service to get companies
import { getAllUsers } from "../../services/UserService"; // Import the service to get users
import NavbarUpdate from "../../components/landing/NavbarUpdate";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AdminDashBoard = () => {
  const [jobCount, setJobCount] = useState(0); // State to store job count
  const [courseCount, setCourseCount] = useState(0); // State to store course count
  const [companyCount, setCompanyCount] = useState(0); // State to store company count
  const [userCount, setUserCount] = useState(0); // State to store user count

  // Fetch job, course, company, and user count on component mount
  useEffect(() => {
    jobList();
    courseList();
    companyList();
    userList();
  }, []);

  // Function to get job list and set count
  function jobList() {
    getAllJob()
      .then((response) => {
        setJobCount(response.data.length); // Set job count
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Function to get course list and set count
  function courseList() {
    getAllCourse()
      .then((response) => {
        setCourseCount(response.data.length); // Set course count
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Function to get company list and set count
  function companyList() {
    getAllCompanies()
      .then((response) => {
        setCompanyCount(response.data.length); // Set company count
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Function to get user list and set count
  function userList() {
    getAllUsers()
      .then((response) => {
        setUserCount(response.data.length); // Set user count
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="flex">
      <NavbarUpdate />
      <AdminNavbar />

      {/* Main Content */}
      <div className="p-8 bg-gray-100 min-h-screen ml-64 w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">
          Admin Dashboard
        </h2>

        {/* Display Counts in Flex Box */}
        <div className="flex space-x-6 mb-6">
          <div className="bg-teal-600 text-white p-4 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold">Total Jobs</h3>
            <p className="text-4xl font-bold">{jobCount}</p>
          </div>

          <div className="bg-teal-600 text-white p-4 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold">Total Courses</h3>
            <p className="text-4xl font-bold">{courseCount}</p>
          </div>

          <div className="bg-teal-600 text-white p-4 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold">Total Companies</h3>
            <p className="text-4xl font-bold">{companyCount}</p>
          </div>

          {/* User Count Section */}
          <div className="bg-teal-600 text-white p-4 rounded-lg w-1/4">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="text-4xl font-bold">{userCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
