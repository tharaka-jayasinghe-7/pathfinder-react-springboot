import React, { useState, useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar"; // Importing the UserNavbar
import axios from "axios";

const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]); // State to store notifications (interviews)
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage error message

  const userId = localStorage.getItem("user_id"); // Get user ID from localStorage

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);

        // Fetch notifications (interviews) for the user
        const response = await axios.get(
          `http://localhost:8080/interview/getNotificationsByUser/${userId}`
        );
        const interviews = response.data; // Get the interview data

        if (interviews.length === 0) {
          setError("No interviews found for this user.");
        } else {
          setNotifications(interviews); // Set the notifications directly from the response
        }
      } catch (err) {
        console.error("Error fetching notifications:", err);
        setError("Failed to fetch notifications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchNotifications(); // Fetch notifications when user ID is available
    } else {
      setError("User ID is not found.");
      setLoading(false);
    }
  }, [userId]);

  return (
    <div>
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
          {loading && <p>Loading notifications...</p>}
          {error && <p className="text-red-600">{error}</p>}

          {/* Render notifications */}
          <div className="space-y-4">
            {!loading && !error && notifications.length === 0 && (
              <p className="text-gray-500">No notifications found.</p>
            )}

            {!loading &&
              !error &&
              notifications.length > 0 &&
              notifications.map((notification, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center mt-32"
                >
                  <div className="flex-1">
                    <p className="text-lime-600 font-semibold mb-2">
                      Congratulations! You have been selected for the interview
                    </p>
                    <h3 className="text-xl font-bold mb-2">
                      {notification.companyName}
                    </h3>
                    <h4 className="text-lg text-emerald-600 font-semibold">
                      {notification.jobTitle}
                    </h4>
                    <p className="text-gray-600 mb-2">
                      Interview date:{" "}
                      <strong>
                        {new Date(
                          notification.interviewDate
                        ).toLocaleDateString()}
                      </strong>
                    </p>
                    <p className="text-gray-700 mb-4">
                      {notification.description}
                    </p>
                  </div>
                  <button
                    className="mt-4 md:mt-0 bg-teal-600 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() =>
                      alert(
                        "Cleared notification for: " + notification.jobTitle
                      )
                    }
                  >
                    Clear
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNotifications;
