// Footer.jsx

import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Instrument+Serif&family=Montserrat&family=Lato&family=Open+Sans&family=Fira+Sans&family=Ubuntu&family=Noto+Sans&family=Source+Sans+Pro&family=Roboto&family=Droid+Sans&family=Georgia&display=swap" rel="stylesheet"></link>

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center min-h-screen py-10 font-inter bg-gray-50 overflow-hidden">
      {/* New background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[90%]  bottom-0 rounded-full z-0"> <img src="/move.png" alt="" /></div>

      <div className="relative flex flex-col md:flex-row justify-between gap-3 max-w-6xl w-[60%] mx-auto z-10">
        {/* Left Section */}
        <div className="bg-white rounded-2xl p-4 shadow-lg mt-[200px] flex flex-col justify-between w-[400px]">
          <h2 className="text-4xl font-semibold leading-tight text-gray-800 mb-8">
            Powered by <br />curiosity <br /> Built with <br />care.
          </h2>
          <div className="flex items-center mt-auto mb-2">
            {/* Replace with your actual image component or img tag */}
               <img src="/heritlogo.png" alt="" className='w-8 h-8 mr-3' />
            <span className="text-xl font-semibold text-gray-800"> HeritengineAI</span>
          </div>
          <p className="text-sm text-gray-600">© 2025 All Rights Reserved. HeritengineAI.</p>
        </div>

        {/* Middle Section (Support) */}
        <div className="flex flex-col">
          <div className="relative bg-white rounded-2xl p-10 shadow-lg flex flex-col items-start flex-1 min-w-[350px] overflow-hidden">
            {/* Gradient overlay - Tailwind doesn't have a direct class for ::before gradients,
                so you'd typically handle this with a custom utility or a pseudo-element in your CSS */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-orange-100/50 to-transparent z-0"></div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Support</h3>
            <p className="text-base text-gray-400 mb-2">Have questions? Get in touch.</p>
            <p className="text-base text-gray-600 mb-2">You can email us at</p>
            <a href="mailto:Heritengine@gmail.com" className="font-semibold no-underline mb-8 hover:underline">
             <span className='bg-amber-300 py-0.5 rounded-sm'>Her</span>itengine@gmail.com
            </a>
            <div className=" rounded-full bg-orange-50 ml-18  flex justify-center items-center mt-20 shadow-md relative ">
              <img src="mailer.png" alt="" className=' w-24 h-24  ' />
            </div>
          </div>

          {/* Bottom of support */}
          <div className="bg-white border border-amber-500 w-full rounded-2xl mt-3 h-26">
            <div className="flex gap-5 ml-20 mt-7 pt-5 relative z-10">
              <a href="/terms-of-use" className="text-sm text-gray-600 no-underline hover:underline">Terms of use</a>
              <a href="/privacy-policy" className="text-sm text-gray-600 no-underline hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Right Section (Social) */}
        <div className="bg-white rounded-2xl p-10 shadow-lg flex flex-col items-start flex-0.5 min-w-[150px]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-16">Social</h3>
          <div className="flex flex-col gap-20 justify-between mt-10">
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