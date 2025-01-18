import axios from "axios";

const BASE_COURSE_URL = "http://localhost:8080/course";

export const getAllCourse = () => axios.get(BASE_COURSE_URL + "/getcourses");
