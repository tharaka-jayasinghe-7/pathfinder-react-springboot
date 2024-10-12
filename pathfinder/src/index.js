import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserLogin from "./pages/user/UserLogin";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserHome from "./pages/user/UserHome";
import UserJobs from "./pages/user/UserJobs";

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
    path: "userHome",
    element: <UserHome />,
  },
  {
    path: "userJobs",
    element: <UserJobs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
