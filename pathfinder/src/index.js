// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserLogin from "./pages/user/UserLogin";
import CompanyLogin from "./pages/company/CompanyLogin";
import CompanyRegister from "./pages/company/CompanyRegister"; // Import CompanyRegister
import ViewProfile from "./pages/company/ViewProfile"; // Import ViewProfile
import AboutUs from "./pages/company/Aboutus"; // Import AboutUs
import CompanyJob from "./pages/company/CompanyJob"; // Import CompanyJob
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHome from "./pages/user/UserHome";
import UserJobs from "./pages/user/UserJobs";
import CompanyHome from "./pages/company/CompanyHome"; // Import CompanyHome

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
    path: "companyHome", // Make sure this path matches exactly with the navigate function
    element: <CompanyHome />,
  },
  {
    path: "companyRegister", // Route for company registration
    element: <CompanyRegister />,
  },
  {
    path: "viewProfile", // Route for viewing profiles
    element: <ViewProfile />,
  },
  {
    path: "about-us", // Route for About Us
    element: <AboutUs />,
  },
  {
    path: "companyJob", // Add route for the company jobs page
    element: <CompanyJob />, // Reference the CompanyJob component
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
