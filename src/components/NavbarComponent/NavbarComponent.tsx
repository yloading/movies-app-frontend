import React from "react";
import { Link } from "react-router-dom";

interface NavbarProps {
  handleThemeOnClick: () => void;
  isDark: boolean;
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
          <li>
            <button
              onClick={handleThemeOnClick}
              className="text-white hover:text-gray-200"
            >
              {`${isDark ? "Light" : "Dark"} Mode`}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
