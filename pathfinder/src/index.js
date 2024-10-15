import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserLogin from "./pages/user/UserLogin";
import CompanyLogin from "./pages/company/CompanyLogin";
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
import CompanyAddJob from "./pages/company/CompanyAddJob";
import CompanyUpdateJob from "./pages/company/CompanyUpdateJob";

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
    path: "viewProfile",
    element: <ViewProfile />,
  },
  {
    path: "about-us",
    element: <AboutUs />,
  },
  {
    path: "companyJob",
    element: <CompanyJob />,
  },
  {
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
