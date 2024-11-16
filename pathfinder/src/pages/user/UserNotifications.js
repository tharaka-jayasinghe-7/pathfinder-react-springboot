import React from "react";
import UserNavbar from "../../components/user/UserNavbar"; // Importing the UserNavbar

const UserNotifications = () => {
  // Sample data for the notifications
  const notifications = [
    {
      companyName: "XTR Enterprises",
      jobTitle: "Welder needed",
      jobDate: "18.06.2024",
      message:
        "We have selected you for the interview at XTR Enterprises. To ensure a smooth start, here's what you need to do to get ready. Bring your identification, certificates, and any other required documents on interview day.",
      interviewDate: "21.07.2024",
    },
    {
      companyName: "ABC Company",
      jobTitle: "Vacancy for welder",
      jobDate: "18.06.2024",
      message:
        "We have selected you for the interview at ABC Company. To ensure a smooth start, here's what you need to do to get ready. Bring your identification, certificates, and any other required documents on interview day.",
      interviewDate: "22.07.2024",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="bg-gray-100 min-h-screen">
        {" "}
        {/* Ensure full height */}
        <div className="max-w-7xl mx-auto p-4 ">
          <div className="space-y-4">
            {notifications.map((notification, index) => (
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
                    Job date: <strong>{notification.jobDate}</strong>
                  </p>
                  <p className="text-gray-700 mb-4">{notification.message}</p>
                  <p className="text-gray-600">
                    Interview date:{" "}
                    <strong>{notification.interviewDate}</strong>
                  </p>
                </div>
                <button
                  className="mt-4 md:mt-0 bg-teal-600 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() =>
                    alert("Cleared notification for: " + notification.jobTitle)
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
