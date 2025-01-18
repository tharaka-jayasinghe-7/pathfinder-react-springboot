import React, { useState } from "react";
import axios from "axios";

const CourseCompnents = () => {
  const [courseName, setCourseName] = useState("");
  const [institute, setInstitute] = useState("");
  const [webUrl, setWebUrl] = useState("");
  const [industry, setIndustry] = useState("");
  const [minAgeLimit, setMinAgeLimit] = useState("");
  const [maxAgeLimit, setMaxAgeLimit] = useState("");
  const [reqOlPassCount, setReqOlPassCount] = useState("");
  const [duration, setDuration] = useState("");
  const [nvqLevel, setNvqLevel] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);

  const saveCourse = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("courseName", courseName);
    formData.append("institute", institute);
    formData.append("webUrl", webUrl);
    formData.append("industry", industry);
    formData.append("minAgeLimit", minAgeLimit);
    formData.append("maxAgeLimit", maxAgeLimit);
    formData.append("reqOlPassCount", reqOlPassCount);
    formData.append("duration", duration);
    formData.append("nvqLevel", nvqLevel);
    formData.append("type", type);
    formData.append("profilePic", image);

    try {
      const response = await axios.post(
        "http://localhost:8080/course/addcourse",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log("Course added successfully:", response.data);
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-full max-w-2xl p-8">
          <h2 className="text-center text-2xl font-semibold text-teal-700 mb-6">
            Course Details
          </h2>
          <form className="space-y-6" onSubmit={saveCourse}>
            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="courseName"
              >
                Course Name
              </label>
              <input
                type="text"
                name="courseName"
                value={courseName}
                placeholder="Enter course name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="institute"
              >
                Institute
              </label>
              <input
                type="text"
                name="institute"
                value={institute}
                placeholder="Enter institute name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setInstitute(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="webUrl"
              >
                Website URL
              </label>
              <input
                type="url"
                name="webUrl"
                value={webUrl}
                placeholder="Enter website URL"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setWebUrl(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="industry"
              >
                Industry
              </label>
              <input
                type="text"
                name="industry"
                value={industry}
                placeholder="Enter industry"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="minAgeLimit"
              >
                Min Age Limit
              </label>
              <input
                type="number"
                name="minAgeLimit"
                value={minAgeLimit}
                placeholder="Enter minimum age limit"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setMinAgeLimit(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="maxAgeLimit"
              >
                Max Age Limit
              </label>
              <input
                type="number"
                name="maxAgeLimit"
                value={maxAgeLimit}
                placeholder="Enter maximum age limit"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setMaxAgeLimit(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="reqOlPassCount"
              >
                Required O/L Pass Count
              </label>
              <input
                type="number"
                name="reqOlPassCount"
                value={reqOlPassCount}
                placeholder="Enter required O/L pass count"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setReqOlPassCount(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="duration"
              >
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={duration}
                placeholder="Enter course duration"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setDuration(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="nvqLevel"
              >
                NVQ Level
              </label>
              <input
                type="text"
                name="nvqLevel"
                value={nvqLevel}
                placeholder="Enter NVQ level"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setNvqLevel(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="type"
              >
                Type
              </label>
              <input
                type="text"
                name="type"
                value={type}
                placeholder="Enter course type"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={(e) => setType(e.target.value)}
              />
            </div>

            <div>
              <label
                className="block text-gray-600 font-medium mb-2"
                htmlFor="image"
              >
                Course Image
              </label>
              <input
                type="file"
                name="image"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                onChange={handleImageChange}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-teal-700"
              >
                Save
              </button>
              <button
                type="button"
                className="bg-gray-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseCompnents;
