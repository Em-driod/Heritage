import React, { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
// Import menu and close icons
 // Import a search icon (e.g., from ionicons)

// No specific props for Navbar, so we can use React.FC<object> or just React.FC
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Explicitly type useState with <boolean>

  return (
    <nav className="relative bg-white shadow-sm border-t-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Section: Logo & Desktop Links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center text-gray-800 font-bold text-2xl mr-8 relative">
            {/* The purple/yellow icon simulated with Tailwind */}
            <span className="w-6 h-6 bg-gradient-to-r from-purple-700 to-yellow-500 rounded mr-2 flex-shrink-0"></span>
            HeritageAI
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-8">
            <li className="relative group">
              <a href="#culture" className="text-gray-600 hover:text-gray-900 text-lg flex items-center">
                Culture
                {/* SVG for dropdown arrow - ensure accessibility if interactive */}
                <svg className="ml-1 w-4 h-4 text-gray-600 group-hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
              {/* Dropdown content would go here if needed */}
            </li>
            <li>
              <a href="#gallery" className="text-gray-600 hover:text-gray-900 text-lg">
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-gray-900 text-lg">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Search Bar & Mobile Menu Button */}
        <div className="flex items-center">
          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 bg-gray-50 max-w-sm w-80 focus-within:ring-2 focus-within:ring-blue-300">
            <IoSearch />
            <input
              type="text"
              placeholder="Yoruba culture"
              className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full"
            />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"} // Add aria-label for accessibility
            >
              {isMenuOpen ? (
                <CiMenuKebab />// Close icon
              ) : (
                <CiMenuBurger />
// Menu icon
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#culture" className="text-gray-700 hover:text-gray-900 text-lg" onClick={() => setIsMenuOpen(false)}>
                Culture
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-gray-700 hover:text-gray-900 text-lg" onClick={() => setIsMenuOpen(false)}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-gray-900 text-lg" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            {/* Mobile Search Bar */}
            <li className="w-full px-4">
              <div className="flex items-center border border-gray-300 rounded-full py-2 px-4 bg-gray-50 w-full">
                <IoSearch />
                <input
                  type="text"
                  placeholder="Yoruba culture"
                  className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full"
                />
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;