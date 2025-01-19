import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserLogin from "./pages/user/UserLogin";
import CompanyLogin from "./pages/company/CompanyLogin";
import CompanyRegister from "./pages/company/CompanyRegister";
import CompanyRegister from "./pages/company/CompanyRegister";
import ViewProfile from "./pages/company/ViewProfile";
import AboutUs from "./pages/company/Aboutus";
import CompanyJob from "./pages/company/CompanyJob";
import CompanyHome from "./pages/company/CompanyHome";
import CompanyNot from "./pages/company/CompanyNot"; // Import the CompanyNot component
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
import UserCompanies from "./pages/user/UserCompanies";
import UserViewCompany from "./pages/user/UserViewCompany";
import UserViewCompanyDetails from "./pages/user/UserViewCompanyDetails";
import UserJobsByCompany from "./pages/user/UserJobsByCompany";
import CompanyAddJob from "./pages/company/CompanyAddJob";
import CompanyUpdateJob from "./pages/company/CompanyUpdateJob";
import CompanyPackage from "./pages/company/CompanyPackage";
import CompanyPayment from "./pages/company/CompanyPayment";
import AdminLogin from "./pages/admin/AdminLogin";
import GetCompanies from "./pages/admin/GetCompanies";
import GetUser from "./pages/admin/GetUser";
import GetSubscription from "./pages/admin/GetSubscription";
import GetPayment from "./pages/admin/GetPayment";
import SubscriptionCompnents from "./pages/admin/SubscriptionCompnents";
import GetCourse from "./pages/admin/GetCourse";
import CourseCompnents from "./pages/admin/CourseCompnents";
import GetJobs from "./pages/admin/GetJobs";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import CompanyInterview from "./pages/company/CompanyInterview";
import UpdateCourse from "./pages/admin/UpdateCourse";

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
    path: "userJobs",
    element: <UserJobs />,
  },
  {
    path: "companyHome",
    element: <CompanyHome />,
  },
  {
    path: "companyRegister",
    element: <CompanyRegister />,
  },
  {
    path: "/viewProfile/:companyId",
    element: <ViewProfile />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/companyJob",
    element: <CompanyJob />,
  },
  {
    path: "userViewJob/:jobId",
    element: <UserViewJob />,
    path: "companyNot", // Route for Company Notifications
    element: <CompanyNot />, // Reference the CompanyNot component
  },
  {
    path: "companyAddJob", // New route for adding a job
    element: <CompanyAddJob />, // Reference the CompanyAddJob component
  },
  {
    path: "companyUpdateJob/:jobId", // Updated route with dynamic jobId
    element: <CompanyUpdateJob />, // Reference the CompanyUpdateJob component
  },
  {
    path: "companyPackage", // Route for Company Packages
    element: <CompanyPackage />, // Reference the CompanyPackage component
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/getCompanies",
    element: <GetCompanies />,
  },
  {
    path: "userCompanies",
    element: <UserCompanies />,
  },
  {
    path: "userApplyJob/:jobId",
    element: <UserApplyJob />,
  },
  {
    path: "userViewCompany/:companyId",
    element: <UserViewCompany />,
  },
  {
    path: "userJobsByCompany/:companyId",
    element: <UserJobsByCompany />,
  },
  {
    path: "userViewCompanyDetails/:companyId",
    element: <UserViewCompanyDetails />,
  },
  {
    path: "userViewCompany/:companyId",
    element: <UserViewCompany />,
  },
  {
    path: "userJobsByCompany/:companyId",
    element: <UserJobsByCompany />,
  },
  {
    path: "userViewCompanyDetails/:companyId",
    element: <UserViewCompanyDetails />,
  },
  {
    path: "/addNewSubscription",
    element: <SubscriptionCompnents />,
  },
  {
    path: "/addPayment",
    element: <CompanyPayment />,
  },
  {
    path: "/getCourse",
    element: <GetCourse />,
  },
  {
    path: "/addNewCourse",
    element: <CourseCompnents />,
  },
  {
    path: "/getJobs",
    element: <GetJobs />,
  },
  {
    path: "/adminDashboard",
    element: <AdminDashBoard />,
  },
  {
    path: "/companyInterview/:companyId/job/:jobId",
    element: <CompanyInterview />,
  },
  {
    path: "/updateCourse/:courseId",
    element: <UpdateCourse />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
