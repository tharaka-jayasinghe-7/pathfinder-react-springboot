import axios from "axios";
import { use } from "react";

const BASE_USER_URL = "http://localhost:8080/user";

export const getAllUsers = () => axios.get(BASE_USER_URL + "/getUsers");

export const deleteUser = (userId) =>
  axios.delete(BASE_USER_URL + "/deleteUser" + "/" + userId);
