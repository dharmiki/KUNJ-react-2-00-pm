import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-cyan-300 transition"
          >
            🎥 MyMovie
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-100 text-lg font-medium hover:text-cyan-300 transition"
            >
              Home
            </Link>
            <Link
              to="/Movie"
              className="text-gray-100 text-lg font-medium hover:text-cyan-300 transition"
            >
              Movie
            </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 px-6 py-4 space-y-3 animate-slideDown">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-white text-lg hover:text-cyan-300 transition"
          >
            Home
          </Link>
          <Link
            to="/Movie"
            onClick={() => setIsOpen(false)}
            className="block text-white text-lg hover:text-cyan-300 transition"
          >
            Movie
          </Link>
         
        </div>
      )}
    </nav>
  );
};

export default NavBar;






