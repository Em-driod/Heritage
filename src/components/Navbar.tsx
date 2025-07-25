import React, { useState } from 'react';
import { CiMenuBurger, CiMenuKebab, CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <nav className=" bg-white shadow-sm border-t-4 border-black fixed top-0 z-50 w-screen ">
      <div className="container mx-auto pl-4 sm:px-6 lg:pl-8 h-16 flex items-center justify-between"> {/* Added justify-between here */}
        {/* Left Section: Logo & Desktop Links */}

        <div className="flex items-center "> 
          <Link to='/'>
          {/* Logo */}
          <div className="flex items-center text-gray-800 font-bold text-2xl mr-8 ml-6 relative">
            {/* The purple/yellow icon simulated with Tailwind */}
            <img src="/heritlogo.png" alt="" className='w-8 h-8 mr-3' />
            Heritengine
          </div>
          </Link>

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
        </div>

        {/* Desktop Search Bar (moved to its own flex item for better control) */}
        <div className="hidden md:flex flex-grow justify-center mr-8"> {/* Use flex-grow and justify-center */}
          <div className="flex items-center border border-gray-300 rounded-sm w-full max-w-2xl py-2 px-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
            <CiSearch className='text-xl text-gray-500 mr-2' /> {/* Added text-xl and text-gray-500 for icon size/color */}
            <input
              type="text"
              placeholder="Yoruba culture"
              className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full text-lg"
            />
          </div>
        </div>

        {/* Right Section: Mobile Menu Button */}
        <div className="flex items-center md:hidden"> {/* Hide on medium screens and up */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <CiMenuKebab size={24} /> // Increased icon size for better visibility
            ) : (
              <CiMenuBurger size={24} /> // Increased icon size for better visibility
            )}
          </button>
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
              <div className="flex items-center border border-gray-300 rounded-sm w-full py-2 px-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
                <CiSearch className='text-xl text-gray-500 mr-2' />
                <input
                  type="text"
                  placeholder="Yoruba culture"
                  className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full text-lg"
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