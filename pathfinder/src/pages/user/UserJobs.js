import React from "react";
import UserNavbar from "../../components/user/UserNavbar";
import hotelImage from "../../images/landing/hotel1.jpg";
import vImage from "../../images/landing/v_img.jpg";

const UserJobs = () => {
  // Job Data Variable with Images
  const jobs = [
    {
      id: 1,
      title: "Welder needed",
      company: "XYZ Enterprises",
      date: "12/10/2024",
      description:
        "We're seeking a skilled welder to join our team. If you have the perfect expertise in welding, apply now!",
      image: hotelImage,
    },
    {
      id: 2,
      title: "Trainee mechanic needed",
      company: "Z Motors",
      date: "13/10/2024",
      description:
        "We're looking for a skilled and reliable Trainee Mechanic to join our dynamic team. If you have a passion for cars, we want to hear from you!",
      image: vImage,
    },
    {
      id: 3,
      title: "Junior chef needed",
      company: "ABC Hotel",
      date: "11/10/2024",
      description:
        "We are looking for a talented and passionate Junior Chef to join our team. Showcase your creativity in our state-of-the-art kitchen.",
      image: vImage,
    },
    {
      id: 4,
      title: "We are looking for Power Electrician",
      company: "Flash Electrics",
      date: "14/10/2024",
      description:
        "Looking for a qualified Power Electrician for high precision tasks in a dynamic environment. Apply now if you have the right skill set!",
      image: hotelImage,
    },
  ];

  // Job Card Component
  const JobCard = ({ job }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 m-4">
        {/* Display the Job Image */}
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-48 object-cover rounded-t-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-teal-700">{job.title}</h3>
        <p className="text-sm text-gray-500">{job.date}</p>
        <p className="mt- font-bold text-green-500 ">{job.company}</p>
        <p className="mt-2 text-gray-700">{job.description}</p>
        <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
          View Job
        </button>
      </div>
    );
  };

  // Job List Component
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <UserNavbar />
      <div className="max-w-5xl mx-auto mt-16">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8 ml-4 mr-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4 items-center">
              {/* Select Job Type */}
              <label className="text-gray-700 font-bold" htmlFor="jobType">
                Select Job Type:
              </label>
              <select
                id="jobType"
                className="border rounded p-2 bg-white focus:ring-2 focus:ring-orange-500"
              >
                <option>All Jobs</option>
                <option>Engineering</option>
                <option>Mechanics</option>
                <option>Hospitality</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="bg-orange-500 text-white py-2 px-6 rounded hover:bg-orange-600">
              Search
            </button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserJobs;
