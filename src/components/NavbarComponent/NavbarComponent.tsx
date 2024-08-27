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
import { Link } from "react-router-dom";

interface NavbarProps {
  handleThemeOnClick: () => void; // A function to toggle the theme mode
  isDark: boolean; // Boolean flag indicating whether dark mode is active
}

const Navbar: React.FC<NavbarProps> = ({ handleThemeOnClick, isDark }) => {
  return (
    <nav className="bg-[#378CE7] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">MoviesApp</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-200">
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
