import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Instrument+Serif&family=Montserrat&family=Lato&family=Open+Sans&family=Fira+Sans&family=Ubuntu&family=Noto+Sans&family=Source+Sans+Pro&family=Roboto&family=Droid+Sans&family=Georgia&display=swap" rel="stylesheet"></link> 

const Landseven: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set once to false to re-trigger on scroll out and back in

  return (
    <div ref={ref} className="flex items-center justify-center bg-white pt-8 pb-4 lg:pt-16 lg:pb-16 px-4 sm:px-8 lg:px-20 lg:mb-6 sm:mb-6 xl:mb-24">
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#FF7A50] to-[#FF4E4E] text-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden group transition duration-300 shadow-lg mx-auto py-[16px] sm:py-[40px] lg:py-[40px] px-4 sm:px-6 lg:px-10 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-[600px] lg:w-[1200px] xl:w-[1200px] 2xl:w-[1000px]">
        <p className="text-white text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 opacity-80 whitespace-nowrap overflow-hidden text-ellipsis">
          Beta Signup
        </p>
        
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight mb-8 text-center max-w-4xl">
          <span className="whitespace-nowrap">Get early access to the world's</span> <br /> 
          <span className="whitespace-nowrap">first culture to design AI</span>
        </h1>
        
        {/* Centralized container for the input and button wrapper */}
        <div className="flex justify-center w-full">
          {/* Wrapper for Input and Button - now relative to position the button inside */}
          <div className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 md:p-4 rounded-lg border-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base md:text-lg pr-32 md:pr-40" // Added pr-32/pr-40 to make space for the button
            />
            <motion.button
              className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-2 md:px-4 lg:px-5 md:py-2.5 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-xs sm:text-sm md:text-base hover:bg-gray-100 transition duration-300 shadow-md whitespace-nowrap border-4 border-white"
              initial={{ x: -150, opacity: 0 }} // Starts further left and invisible
              animate={isInView ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }} // Animates based on isInView
              transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 10 }}
            >
              Join the Beta Club
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landseven;