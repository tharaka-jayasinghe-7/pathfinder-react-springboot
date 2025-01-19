import React, { useEffect, useState } from "react";
import { deleteUser, getAllUsers } from "../../services/UserService";
import AdminNavbar from "../../components/admin/AdminNavbar";
import NavbarUpdate from "../../components/landing/NavbarUpdate";

const GetUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    listUsers();
  }, []);

  function listUsers() {
    getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function removeUser(userId) {
    // Confirm the action before proceeding
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      deleteUser(userId)
        .then((response) => {
          listUsers(); // Refresh the user list
        })
        .catch((error) => {
          console.log(error); // Log any error
        });
    }
  }

  return (
    <div className="flex">
      <NavbarUpdate />
      {/* Sidebar/Navbar */}
      <AdminNavbar />

      {/* Main Content */}
      <div className="p-8 bg-gray-100 min-h-screen ml-64 w-full">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Users List</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full">
          <div className="p-4 flex justify-between items-center"></div>
          <div className="overflow-x-auto">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">User Id</th>
                  <th className="py-2 px-4">First Name</th>
                  <th className="py-2 px-4">Last Name</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Date Of Birth</th>
                  <th className="py-2 px-4">O/L Pass COunt</th>
                  <th className="py-2 px-4">Mobile Number</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr
                    key={user.userId}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-teal-100`}
                  >
                    <td className="py-2 px-4">{user.userId}</td>
                    <td className="py-2 px-4">{user.firstName}</td>
                    <td className="py-2 px-4">{user.lastName}</td>
                    <td className="py-2 px-4">{user.address}</td>
                    <td className="py-2 px-4">{user.dob}</td>
                    <td className="py-2 px-4">{user.olPassCount}</td>
                    <td className="py-2 px-4">{user.mobile}</td>
                    <td className="py-2 px-4">{user.email}</td>
                    <button
                      onClick={() => removeUser(user.userId)}
                      className="bg-red-500 text-white px-2 py-1 text-sm rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
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

export default GetUser;
