import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To access companyId and jobId from the URL

const CompanyInterview = () => {
  const { companyId, jobId } = useParams(); // Get companyId and jobId from URL parameters
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [interviewDate, setInterviewDate] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCvImage, setSelectedCvImage] = useState(null);
  const [selectedApplicant, setSelectedApplicant] = useState(null); // Store selected applicant
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  // Fetch the applications when the component is mounted
  useEffect(() => {
    axios
      .get(`http://localhost:8080/apply/getApplyByJob/${jobId}`)
      .then((response) => {
        setApplications(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
        setError("Error fetching applications");
        setLoading(false);
      });
  }, [jobId]);

  const handleInterviewSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("interviewDate", interviewDate);
    formData.append("description", description);

    // Append the selected CV image
    if (selectedCvImage) {
      formData.append("cvImage", selectedCvImage);
    }

    axios
      .post(
        `http://localhost:8080/interview/company/${companyId}/job/${jobId}/addInterview`,
        formData
      )
      .then((response) => {
        console.log("Interview added successfully", response.data);
        // Handle successful interview creation
      })
      .catch((error) => {
        console.error("Error adding interview:", error);
        setError("Error adding interview");
      });
  };

  const handleCvSelection = (applyId, cvImage) => {
    console.log(
      `handleCvSelection called with applyId: ${applyId}, cvImage: ${cvImage}`
    );
    // Ensure the selectedApplicant is set correctly before accessing the cvImage
    if (applyId && cvImage) {
      setSelectedApplicant(applyId);
      setSelectedCvImage(cvImage);
    } else {
      console.error("Invalid applyId or cvImage");
    }
  };

  // Function to handle opening the modal with the selected image
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  if (loading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-200 p-6 pt-20">
      <h1 className="text-2xl font-semibold mb-6">
        Applications for Job ID: {jobId} by Company ID: {companyId}
      </h1>

      <form
        onSubmit={handleInterviewSubmit}
        className="bg-white p-4 rounded-lg shadow-lg mb-6"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Interview Date</label>
          <input
            type="date"
            value={interviewDate}
            onChange={(e) => setInterviewDate(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Select CV</label>
          <select
            onChange={(e) => {
              const selectedApplication = applications.find(
                (app) => app.applyId === parseInt(e.target.value) // Use applyId instead of id
              );

              // Log for debugging
              console.log(`Selected application applyId: ${e.target.value}`);
              console.log(`Found application:`, selectedApplication);

              if (selectedApplication) {
                handleCvSelection(
                  selectedApplication.applyId, // Use applyId
                  selectedApplication.cvImage
                );
              } else {
                console.error("Selected application not found");
              }
            }}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Applicant's CV</option>
            {applications.map((application) => (
              <option key={application.applyId} value={application.applyId}>
                {application.applicantName}
              </option>
            ))}
          </select>
        </div>

        {selectedCvImage && (
          <div className="mb-4">
            <h3 className="text-gray-700">Selected CV Image</h3>
            <img
              src={`data:image/jpeg;base64,${selectedCvImage}`}
              alt="Selected CV"
              className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
              onClick={() => handleImageClick(selectedCvImage)} // Add click handler
            />
          </div>
        )}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Interview
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.length > 0 ? (
          applications.map((application) => (
            <div
              key={application.applyId} // Use applyId
              className="bg-white shadow-lg rounded-lg p-4 flex flex-col"
            >
              {application.cvImage ? (
                <img
                  src={`data:image/jpeg;base64,${application.cvImage}`}
                  alt="CV Image"
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                  onClick={() => handleImageClick(application.cvImage)} // Add click handler
                />
              ) : (
                <div className="w-full h-48 bg-gray-300 rounded-md mb-4 flex items-center justify-center text-gray-500">
                  No CV Image
                </div>
              )}
              <h2 className="text-lg font-semibold">
                {application.applicantName}
              </h2>
              <p className="text-gray-600 mt-2">{application.jobTitle}</p>
              <p className="text-sm text-gray-500 mt-2">
                Location: {application.location}
              </p>
              <p className="text-sm text-gray-500">
                Applied on:{" "}
                {new Date(application.applicationDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No applications for this job.</p>
        )}
      </div>

      {/* Modal for displaying the CV image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg relative">
            <button
              className="absolute top-0 right-0 p-2 text-gray-700"
              onClick={closeModal}
            >
              X
            </button>
            <img
              src={`data:image/jpeg;base64,${selectedImage}`}
              alt="Full-size CV"
              className="w-full h-auto max-w-4xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyInterview;
