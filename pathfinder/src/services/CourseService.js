import axios from "axios";

const BASE_COURSE_URL = "http://localhost:8080/course";

export const getAllCourse = () => axios.get(BASE_COURSE_URL + "/getcourses");

export const deleteCourse = (courseId) =>
  axios.delete(BASE_COURSE_URL + "/deletecourse" + "/" + courseId);

export const addCourse = (course) =>
  axios.post(BASE_COURSE_URL + "/addcourse", course);
