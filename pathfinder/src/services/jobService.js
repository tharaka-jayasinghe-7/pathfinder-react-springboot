import axios from "axios";

const BASE_COURSE_URL = "http://localhost:8080/job";

export const getAllJob = () => axios.get(BASE_COURSE_URL + "/getJobs");

export const deleteJob = (jobId) =>
  axios.delete(BASE_COURSE_URL + "/deleteJob" + "/" + jobId);
