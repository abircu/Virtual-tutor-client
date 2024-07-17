import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./Context/AuthProvider";
import { CourseProvider } from "./Context/CourseContex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <CourseProvider>
          <RouterProvider router={router} />
        </CourseProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
