import React, { useState, useRef, useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FcGallery } from "react-icons/fc";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showAboutCard, setShowAboutCard] = useState<boolean>(false);
  const aboutButtonRef = useRef<HTMLButtonElement | null>(null);

  // Close the about card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the card is open and the click is outside the button and the card
      if (
        showAboutCard &&
        aboutButtonRef.current &&
        !aboutButtonRef.current.contains(event.target as Node) &&
        !(event.target as Element)?.closest('#about-card')
      ) {
        setShowAboutCard(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAboutCard]);

  return (
    <>
      <nav className="bg-white shadow-sm fixed top-0 z-50 w-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">
          {/* Left Section: Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to='/'>
              <div className="flex items-center text-gray-800 lg:font-bold sm:font relative">
                <img src="/heritlogo.png" alt="" className='w-8 h-8 mr-3' />
                <span className='inline text-base sm:text-lg lg:text-xl xl:text-2xl whitespace-nowrap overflow-hidden text-ellipsis'>Heritengine</span>
              </div>
            </Link>
          </div>

          {/* Search Bar (Mobile) */}
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
              <Link to="/gallery">
                <p className="text-gray-400 hover:text-gray-900 text-base sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis">Gallery</p>
              </Link>
            </li>
            <li>
              <button
                ref={aboutButtonRef}
                onClick={() => setShowAboutCard(!showAboutCard)}
                className="text-gray-400 hover:text-gray-900 text-base sm:text-lg whitespace-nowrap overflow-hidden text-ellipsis"
              >
                About
              </button>
            </li>
          </ul>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-grow justify-center mr-2 ml-4">
            <div className="flex items-center border border-gray-300 rounded-sm w-full max-w-[900px] py-2 px-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-300">
              <CiSearch className='text-xl text-gray-500 mr-2' />
              <input
                type="text"
                placeholder="Yoruba culture"
                className="outline-none bg-transparent text-gray-700 placeholder-gray-400 w-full text-lg"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
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
          <div className="md:hidden absolute right-4 mt-2 w-54 rounded-lg shadow-lg bg-white focus:outline-none">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {/* Gallery Link (Mobile) */}
              <Link
                to="/gallery"
                className="flex items-start px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex-shrink-0 mt-1">
                  <FcGallery className="text-orange-500" size={20} />
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">Gallery</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 whitespace-nowrap overflow-hidden text-ellipsis">Informative collections of cultures</p>
                </div>
              </Link>
              <div className="border-t border-gray-100"></div>

              {/* About Link (Mobile) */}
              <button
                onClick={() => {
                  setShowAboutCard(!showAboutCard);
                  setIsMenuOpen(false);
                }}
                className="flex items-start w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors duration-150"
              >
                <div className="flex-shrink-0 items-center">
                  <img src="/kunle.png" alt="" className='w-5' />
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">About</p>
                </div>
              </button>
            </div>
          </div>
        )}

        {/* About Card */}
        {showAboutCard && (
          <div
            id="about-card"
            className="absolute top-full right-1/2 translate-x-1/2 md:right-auto md:translate-x-0 md:left-40 mt-2 bg-white rounded-lg shadow-lg p-6 w-[calc(100vw-2rem)] max-w-[500px] z-40"
          >
            <h2 className="text-xl font-bold mb-2">Core Vision:</h2>
            <p className="text-gray-700 text-sm">
             "To make cultural knowledge a living, accessible resource for the global creatives."
            </p>
              <div className=" w-112 h-px bg-gray-300 mt-2  mb-2"></div>
            <p className="text-gray-700 text-sm mt-6" > Heritengine is a cultural technology platform designed to preserve, interpret, and 
integrate global heritage knowledge into modern creative industries such as design, 
branding, fashion, and museums. The platform addresses cultural illiteracy, a growing 
problem where designers and brands unintentionally misrepresent, oversimplify, or 
misuse cultural symbols and stories by providing authentic, research based 
resources from trusted sources.
            </p>
                  <div className=" w-112 h-px bg-gray-300 mt-3  mb-4"></div>
            <p className="text-gray-700 text-sm mt-6">
              The goal is to bridge tradition and innovation, empowering creatives, brands, and 
institutions to work with cultures in ways that are accurate, respectful, and visually 
impactful, while also giving cultural communities ownership over their narratives.
            </p>
              <div className=" w-112 h-px bg-gray-300 mt-2  mb-3"></div>
             <h2 className="text-xl font-bold mb-4 mt-6">Target Users:</h2>
             <ul className="list-disc pl-5">
              <li className='text-gray-700 text-sm mt-1'> Designers and creative agencies</li>
              <li className='text-gray-700 text-sm mt-1'> Fashion brands</li>
              <li className='text-gray-700 text-sm mt-1'> Museums</li>
              <li className='text-gray-700 text-sm mt-1'> Educational Institutions</li>
             </ul>
            <button
              onClick={() => setShowAboutCard(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-900 focus:outline-none"
              aria-label="Close about card"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;