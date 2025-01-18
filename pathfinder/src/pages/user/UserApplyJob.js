import React, { useState, useEffect } from "react";
import axios from "axios";
import UserNavbar from "../../components/user/UserNavbar";
import { useParams, useNavigate } from "react-router-dom";

const UserApplyJob = () => {
  const { jobId } = useParams();
  const userId = localStorage.getItem("user_id");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [job, setJob] = useState(null); // State to hold job details
  const [company, setCompany] = useState(null);

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    certification: "",
    olPassCount: "",
    resume: null,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/user/getUser/${userId}`)
      .then((response) => {
        setUser(response.data); // Set user data in state

        // Pre-fill the form with user details
        setFormData((prevData) => ({
          ...prevData,
          firstName: response.data.firstName || "",
          lastName: response.data.lastName || "",
          mobile: response.data.mobile || "",
          email: response.data.email || "",
          certification: response.data.certification || "",
          olPassCount: response.data.olPassCount || "",
        }));
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching user data");
        setLoading(false);
      });
  }, [userId]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/job/getJob/${jobId}`)
      .then((response) => {
        setJob(response.data); // Set job data in state
      })
      .catch((error) => {
        setError("Error fetching job data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jobId]);

  // Fetch company details only after the job data is available
  useEffect(() => {
    if (job?.companyId) {
      axios
        .get(`http://localhost:8080/company/getcompany/${job.companyId}`)
        .then((response) => {
          setCompany(response.data); // Set company data in state
        })
        .catch((error) => {
          setError("Error fetching company data");
        });
    }
  }, [job]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleResumeUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume");
      return;
    }

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("cvImage", formData.resume);

    try {
      const response = await axios.post(
        `http://localhost:8080/apply/user/${userId}/job/${jobId}/addApply`,
        formDataToSubmit,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        alert("Application submitted successfully!");
        // Optionally redirect or reset the form here
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit the application. Please try again.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Job details loaded from a variable
  const jobDetails = {
    company: company ? company.companyName : "Loading company...", // Handle null case
    title: job ? job.jobTitle : "Loading job title...", // Handle null case
    date: job ? job.jobDate : "Loading job date...",
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <UserNavbar />
      <div className="flex justify-center items-center py-12 mt-16 mb-16">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold  text-gray-800">
            {jobDetails.company}
          </h2>
          <h3 className="text-xl  text-gray-700">{jobDetails.title}</h3>
          <p className="text-gray-500 mb-6">{jobDetails.date}</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Mobile Number</label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Certification</label>
              <input
                type="text"
                name="certification"
                value={formData.certification}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">O/Level pass count</label>
              <input
                type="text"
                name="olPassCount"
                value={formData.olPassCount}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Resume</label>
              <input
                type="file"
                name="resume"
                onChange={handleResumeUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                required
              />
            </div>

            <div className="flex justify-center space-x-2">
              <button
                type="submit"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                Apply now
              </button>
              <button
                type="button"
                className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition"
                onClick={() => window.history.back()}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserApplyJob;
