import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./routes/Routes";
import "./index.css";
import "./fonts.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
import AuthProvider from "./providers/AuthProvider";

export const api = axios.create({
  baseURL:"http://localhost:5000/"
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
