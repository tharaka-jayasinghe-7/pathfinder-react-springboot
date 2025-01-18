import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserLogin from "./pages/user/UserLogin";
import CompanyLogin from "./pages/company/CompanyLogin";
import CompanyRegister from "./pages/company/CompanyRegister"; // Import CompanyRegister
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHome from "./pages/user/UserHome";
import UserJobs from "./pages/user/UserJobs";
import UserViewJob from "./pages/user/UserViewJob";
import CompanyHome from "./pages/company/CompanyHome";
import UserRegister from "./pages/user/UserRegister";
import UserGuideMe from "./pages/user/UserGuideMe";
import UserFindCourse from "./pages/user/UserFindCourse";
import UserViewCourses from "./pages/user/UserViewCourses";
import UserMyJobs from "./pages/user/UserMyJobs";
import UserNotifications from "./pages/user/UserNotifications";
import UserApplyJob from "./pages/user/UserApplyJob";
import UserProfile from "./pages/user/UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "userLogin",
    element: <UserLogin />,
  },
  {
    path: "userRegister",
    element: <UserRegister />,
  },
  {
    path: "userProfile/:userId",
    element: <UserProfile />,
  },
  {
    path: "companyLogin",
    element: <CompanyLogin />,
  },
  {
    path: "userHome",
    element: <UserHome />,
  },
  {
    path: "userGuideMe",
    element: <UserGuideMe />,
  },
  {
    path: "userFindCourse",
    element: <UserFindCourse />,
  },
  {
    path: "userViewCourses",
    element: <UserViewCourses />,
  },
  {
    path: "userJobs",
    element: <UserJobs />,
  },
  {
    path: "userViewJob/:jobId",
    element: <UserViewJob />,
  },
  {
    path: "userMyJobs",
    element: <UserMyJobs />,
  },
  {
    path: "userNotifications",
    element: <UserNotifications />,
  },
  {
    path: "userApplyJob/:jobId",
    element: <UserApplyJob />,
  },
  {
    path: "companyHome",
    element: <CompanyHome />,
  },
  {
    path: "companyRegister", // Add this route for company registration
    element: <CompanyRegister />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
