/**
 * Navbar Component
 *
 * A navigation bar component for the MoviesApp. This component is responsible for
 * displaying the main navigation links as well as a theme toggle button. The navigation
 * links include 'Home' and 'About' and the theme toggle allows the user to switch between
 * light and dark modes.
 *
 * Example Usage:
 * <Navbar handleThemeOnClick={toggleTheme} isDark={isDark} />
 *
 */

import React from "react";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  handleThemeOnClick: () => void; // A function to toggle the theme mode
  isDark: boolean; // Boolean flag indicating whether dark mode is active
}

const Navbar: React.FC<NavbarProps> = ({ handleThemeOnClick, isDark }) => {
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-sky-500 to-indigo-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold font-serif">
          MovieScoreComparer
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-gray-700 hover:text-gray-700"
                  : "text-slate-200 hover:text-slate-100"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === "/about"
                  ? "text-gray-700 hover:text-gray-700"
                  : "text-slate-200 hover:text-slate-100"
              }`}
            >
              About
            </Link>
          </li>
          {/* Button for toggling between light and dark modes */}
          <li>
            <button
              onClick={handleThemeOnClick}
              className="text-white hover:text-gray-200"
            >
              {/* The button text changes based on the isDark prop */}
              {`${isDark ? "Light" : "Dark"} Mode`}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
