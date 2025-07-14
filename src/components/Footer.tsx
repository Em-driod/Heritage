// Footer.jsx

import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center min-h-screen py-16 font-inter bg-gray-50">      <div className="flex flex-col md:flex-row justify-between gap-3 max-w-6xl w-[60%] mx-auto">
        {/* Left Section */}
        <div className="bg-white rounded-2xl p-4 shadow-lg  mt-[200px] flex flex-col justify-between  w-[350px]">
          <h2 className="text-5xl font-semibold leading-tight text-gray-800 mb-8">
            Powered by <br />curiosity <br /> Built with <br />care.
          </h2>
          <div className="flex items-center mt-auto mb-2">
            {/* Replace with your actual image component or img tag */}
            <img src="path/to/your/heritageai_logo.png" alt="HeritageAI Logo" className="w-8 h-8 mr-2" />
            <span className="text-xl font-semibold text-gray-800"> HeritengineAI</span>
          </div>
          <p className="text-sm text-gray-600">© 2025 All Rights Reserved. HeritengineAI.</p>
        </div>

        {/* Middle Section (Support) */}
        <div className='flex flex-col'>


        <div className="relative bg-white rounded-2xl p-10 shadow-lg flex flex-col items-start flex-1 min-w-[350px] overflow-hidden">
          {/* Gradient overlay - Tailwind doesn't have a direct class for ::before gradients,
              so you'd typically handle this with a custom utility or a pseudo-element in your CSS */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-orange-100/50 to-transparent z-0"></div>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Support</h3>
          <p className="text-base text-gray-700 mb-2">Have questions? Get in touch.</p>
          <p className="text-base text-gray-700 mb-2">You can email us at</p>
          <a href="mailto:Heritage.AI247@gmail.com" className=" font-semibold no-underline mb-8 hover:underline">
           Heritage.AI247@gmail.com
          </a>
          <div className="w-24 h-24 rounded-full bg-orange-50 flex justify-center items-center mt-5 shadow-md relative z-10">
            <div className="w-16 h-10 rounded-xl bg-orange-500 flex justify-around items-center px-2 relative">
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>
          </div>
          
        </div>
 
 {/* buttom of support */}
 <div className='bg-white border border-amber-500 w-full rounded-2xl mt-3  h-26'>

  <div className="flex gap-5 ml-20 mt-auto pt-5 relative z-10">
            <a href="/terms-of-use" className="text-sm text-gray-600 no-underline hover:underline">Terms of use</a>
            <a href="/privacy-policy" className="text-sm text-gray-600 no-underline hover:underline">Privacy Policy</a>
          </div>
 </div>



              </div>
        {/* Right Section (Social) */}
        <div className="bg-white rounded-2xl p-10 shadow-lg  flex flex-col items-start flex-0.5 min-w-[150px]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-16">Social</h3>
          <div className="flex flex-col gap-16 justify-between">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
              <FaInstagram size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
              <FaFacebookF size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200">
              <RiTwitterXFill size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;