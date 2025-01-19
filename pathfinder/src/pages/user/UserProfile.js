import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../../components/user/UserNavbar";

const UserProfile = () => {
  const userId = localStorage.getItem("user_id");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getUser/${userId}`)
      .then((response) => {
        setUser(response.data); // Set user data in state
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching user data");
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <UserNavbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl my-3 mt-32 mb-16">
          <h2 className="text-2xl font-bold text-center mb-6">User Profile</h2>

          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={`http://localhost:8080/user/${userId}/image`}
                alt="Profile"
                className="w-24 h-24 rounded-full border"
              />
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block mb-3 text-gray-700">First Name</label>
              <input
                type="text"
                value={user.firstName || ""}
                readOnly
                className="w-full px-4 py-2 mb-4 border rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Last Name</label>
              <input
                type="text"
                value={user.lastName || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Address</label>
              <input
                type="text"
                value={user.address || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Date of Birth</label>
              <input
                type="date"
                value={user.dob || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">
                O/L Subjects Pass Count
              </label>
              <input
                type="text"
                value={user.olPassCount || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Mobile Number</label>
              <input
                type="tel"
                value={user.mobile || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Email</label>
              <input
                type="email"
                value={user.email || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>

            <div>
              <label className="block mb-3 text-gray-700">Certification</label>
              <input
                type="text"
                value={user.certification || ""}
                readOnly
                className="w-full px-4 py-2 border mb-4 rounded bg-gray-100"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
