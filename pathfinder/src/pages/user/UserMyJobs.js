import React from "react";
import UserNavbar from "../../components/user/UserNavbar"; // Importing the UserNavbar

const UserMyJobs = () => {
  // Sample data for the jobs
  const jobs = [
    {
      id: 1,
      companyName: "XTR Enterprises",
      jobTitle: "Welder needed",
      jobDate: "18.06.2024",
      description:
        "We're seeking a skilled Welder to join our team! If you have experience in welding and metal fabrication, this is the perfect opportunity to showcase your craftsmanship. Work with a dynamic team on exciting projects and help build the future with your expertise.",
      appliedDate: "20.06.2024",
    },
    {
      id: 2,
      companyName: "XTR Company",
      jobTitle: "We are hiring welders",
      jobDate: "18.06.2024",
      description:
        "We're seeking a skilled Welder to join our team! If you have experience in welding and metal fabrication, this is the perfect opportunity to showcase your craftsmanship. Work with a dynamic team on exciting projects and help build the future with your expertise.",
      appliedDate: "20.06.2024",
    },
    {
      id: 3,
      companyName: "MAGA",
      jobTitle: "We need welders",
      jobDate: "18.06.2024",
      description:
        "We're seeking a skilled Welder to join our team! If you have experience in welding and metal fabrication, this is the perfect opportunity to showcase your craftsmanship. Work with a dynamic team on exciting projects and help build the future with your expertise.",
      appliedDate: "20.06.2024",
    },
    {
      id: 4,
      companyName: "Minecrafts PVT LTD",
      jobTitle: "Vacancy for welders",
      jobDate: "18.06.2024",
      description:
        "We're seeking a skilled Welder to join our team! If you have experience in welding and metal fabrication, this is the perfect opportunity to showcase your craftsmanship. Work with a dynamic team on exciting projects and help build the future with your expertise.",
      appliedDate: "20.06.2024",
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <UserNavbar />

      {/* Main content */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto p-4 ">
          <div className="space-y-4 mt-32 mb-16">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{job.companyName}</h3>
                  <h4 className="text-lg text-emerald-600 font-semibold">
                    {job.jobTitle}
                  </h4>
                  <p className="text-gray-600 mb-2">
                    Job date: <strong>{job.jobDate}</strong>
                  </p>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <p className="text-gray-600">
                    Applied date: <strong>{job.appliedDate}</strong>
                  </p>
                </div>
                <button
                  className="mt-4 md:mt-0 bg-teal-600 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => alert("Cleared job: " + job.jobTitle)}
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

export default UserMyJobs;
