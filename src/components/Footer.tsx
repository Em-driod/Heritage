import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="relative flex justify-center items-center max-h-11/12 py-4 sm:py-0 lg:py-10 font-inter bg-white overflow-hidden">
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[87%] lg:w-[85%] h-[85%] sm:h-[88%] lg:h-[90%] bottom-0 rounded-full z-0">
        <img src="/move.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative flex flex-col md:flex-row justify-between gap-8 sm:gap-2.5 lg:gap-3 max-w-6xl w-[85%] sm:w-[70%] lg:w-[60%] mx-auto z-10">
        {/* Left Section */}
        <div className="bg-white rounded-xl sm:rounded-2xl border-1 border-amber-400 p-3 sm:p-4 shadow-lg mt-[120px] sm:mt-[160px] lg:mt-[200px] flex flex-col justify-between w-full sm:w-[320px] lg:w-[400px]">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            <span className="whitespace-nowrap">Powered by</span> <br />
            <span className="whitespace-nowrap">curiosity</span> <br /> 
            <span className="whitespace-nowrap">Built with</span> <br />
            <span className="whitespace-nowrap">care.</span>
          </h2>
          <div className="flex items-center mt-auto mb-1.5 sm:mb-2">
            <img src="/heritlogo.png" alt="" className='w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mr-2 sm:mr-2.5 lg:mr-3' />
            <span className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 whitespace-nowrap overflow-hidden text-ellipsis"> Heritengine</span>
          </div>
          <p className="text-[10px] sm:text-xs lg:text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">© 2025 All Rights Reserved. Heritengine.</p>
        </div>

        {/* Middle Section (Support) */}
        <div className="flex flex-col w-full sm:w-auto">
          <div className="relative bg-white  border-1 border-amber-400 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col items-start flex-1 min-w-[280px] sm:min-w-[320px] lg:min-w-[350px] overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute bottom-0 left-0 w-full h-16 sm:h-20 lg:h-24 bg-gradient-to-t from-orange-100/50 to-transparent z-0"></div>

            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 whitespace-nowrap overflow-hidden text-ellipsis">Support</h3>
            <p className="text-xs sm:text-[6px] lg:text-base text-gray-400 mb-1.5 sm:mb-2 whitespace-nowrap overflow-hidden text-ellipsis">Have questions? Get in touch.</p>
            <p className="text-xs sm:text-[6px] lg:text-base text-gray-600 mb-1.5 sm:mb-2 whitespace-nowrap overflow-hidden text-ellipsis">You can email us at</p>
            <a href="mailto:Heritengine@gmail.com" className="font-semibold no-underline mb-4 sm:mb-6 lg:mb-8 hover:underline text-xs sm:text-sm lg:text-base whitespace-nowrap overflow-hidden text-ellipsis">
              Heritengine@gmail.com
            </a>
            <div className="rounded-full bg-orange-50 ml-8 sm:ml-12 lg:ml-18 flex justify-center items-center mt-4 sm:mt-12 lg:mt-20 shadow-md relative">
              <img src="mailer.png" alt="" className='w-26 h-26 sm:w-20 sm:h-20 lg:w-34 lg:h-34' />
            </div>
          </div>

          {/* Bottom of support */}
          <div className="bg-white border border-amber-500 w-full rounded-xl sm:rounded-2xl lg:p-0 sm:pl-24 mt-2 sm:mt-2.5 lg:mt-3 h-20 sm:h-24 lg:h-26">
            <div className="flex gap-3 sm:gap-4 lg:gap-5 justify-center sm:justify-start lg:ml-20 mt-4 sm:mt-5 lg:mt-7 pt-3 sm:pt-4 lg:pt-5 relative z-10">
              <a href="/terms-of-use" className="text-[10px] sm:text-xs lg:text-sm text-gray-600 no-underline hover:underline whitespace-nowrap overflow-hidden text-ellipsis">Terms of use</a>
              <a href="/privacy-policy" className="text-[10px] sm:text-xs lg:text-sm text-gray-600 no-underline hover:underline whitespace-nowrap overflow-hidden text-ellipsis">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Right Section (Social) */}
        <div className="bg-white rounded-xl  border-1 border-amber-400 sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg flex flex-col items-start flex-0.5 min-w-[120px] sm:min-w-[135px] lg:min-w-[150px]">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800 mb-8 sm:mb-12 lg:mb-16 whitespace-nowrap overflow-hidden text-ellipsis">Social</h3>
          <div className="flex  lg:flex-col gap-8 sm:gap-12 lg:gap-20 justify-between mt-4 sm:mt-6 lg:mt-10">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-gray-800 hover:bg-gray-200 transition-colors">
              <FaInstagram size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full text-gray-800 hover:bg-gray-200 transition-colors">
              <FaFacebookF size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full  text-gray-800 hover:bg-gray-200 transition-colors">
              <RiTwitterXFill size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;