import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Landseven: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // Set once to false to re-trigger on scroll out and back in

  return (
    <div ref={ref} className="flex items-center justify-center bg-gray-100 p-4 min-h-screen">
      <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl shadow-xl p-8 md:p-12 lg:p-16 w-full max-w-4xl text-center">
        <p className="text-white text-sm md:text-base font-semibold mb-4 opacity-80">
          Beta Signup
        </p>
        <h1 className="text-white text-1xl md:text-3xl lg:text-4xl font-bold leading-tight mb-8">
          Get early access to the world's <br /> first culture to design AI
        </h1>
        {/* Centralized container for the input and button wrapper */}
        <div className="flex justify-center w-full">
          {/* Wrapper for Input and Button - now relative to position the button inside */}
          <div className="relative w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 md:p-4 rounded-lg border-2 border-white bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-base md:text-lg pr-32 md:pr-40" // Added pr-32/pr-40 to make space for the button
            />
            <motion.button
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 md:px-5 md:py-2.5 rounded-md bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold text-sm md:text-base hover:bg-gray-100 transition duration-300 shadow-md whitespace-nowrap border-4 border-white"
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