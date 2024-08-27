/**
 * AppRoutes Component
 *
 * This functional component sets up the routing for the React application using `react-router-dom`.
 * It defines different routes and maps them to the corresponding pages. This is where you define
 * the paths and associate them with the components to be rendered when a specific path is accessed.
 *
 * Routes Defined:
 * 1. `/` : HomePage
 * 2. `/about` : AboutPage
 *
 * Example Usage:
 * <AppRoutes />
 */

import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRoutes;
