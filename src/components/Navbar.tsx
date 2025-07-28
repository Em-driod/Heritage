import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FcGallery } from "react-icons/fc";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-sm border-t-4 border-black fixed top-0 z-50 w-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Section: Logo - flex-shrink-0 ensures it doesn't shrink on mobile */}
        <div className="flex items-center flex-shrink-0">
          <Link to='/'>
            <div className="flex items-center text-gray-800 lg:font-bold sm:font-light relative">
              <img src="/heritlogo.png" alt="" className='w-8 h-8 mr-3' />
              <span className='inline text-lg md:text-2xl'>Heritengine</span>
            </div>
          </Link>
        </div>

        {/* Search Bar - Visible on Mobile, Hidden on Small and up. flex-grow to take available space. */}
        <div className="flex-grow flex justify-center md:hidden mx-4">
          <div className="flex items-center border border-gray-300 rounded-sm w-full py-2 px-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
            <CiSearch className='text-xl text-gray-500 mr-2' />
            <input
              type="text"
              placeholder="Yoruba culture"
              className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full text-sm"
            />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8 ml-4">
          <li>
            <a href="#gallery" className="text-gray-400 hover:text-gray-900 text-lg">
              Gallery
          </a>
          </li>
          <li>
            <a href="#about" className="text-gray-400 hover:text-gray-900 text-lg">
              About
            </a>
          </li>
        </ul>

        {/* Desktop Search Bar (moved to its own flex item for better control) */}
        <div className="hidden md:flex flex-grow justify-center mr-8">
          <div className="flex items-center border border-gray-300 rounded-sm w-full max-w-2xl py-2 px-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
            <CiSearch className='text-xl text-gray-500 mr-2' />
            <input
              type="text"
              placeholder="Yoruba culture"
              className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full text-lg"
            />
          </div>
        </div>

        {/* Right Section: Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <BsThreeDots size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute right-4 mt-2 w-54 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Gallery Link */}
            <a
              href="#gallery"
              className="flex items-start px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex-shrink-0 mt-1">
                <FcGallery className="text-orange-500" size={20} />
            </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">Gallery</p>
                <p className="text-xs text-gray-500 mt-1">Informative collections <br /> of cultures</p>
              </div>
            </a>
            <div className="border-t border-gray-100"></div>

            {/* About Link */}
            <a
              href="#about"
              className="flex items-start px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex-shrink-0 mt-1">
                <FaGlobe className="text-blue-500" size={20} />
            </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">About</p>
              </div>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;