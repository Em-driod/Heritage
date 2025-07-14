import React from 'react';
import { motion } from 'framer-motion';

const Landsecont: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-40 sm:mb-12 max-w-3xl mx-auto px-2"
      >
        <h1 className="text-3xl font-normal text-gray-900 sm:text-4xl lg:text-5xl leading-tight sm:leading-tighter">
          Design shouldn't feel
          <br className="hidden sm:block" />
          like <span className='italic'>guesswork.</span> 
        </h1>
        <p className="mt-4 text-sm text-gray-400 sm:text-base sm:mt-6 sm:text-gray-400 max-w-md sm:max-w-xl mx-auto leading-relaxed">
          Let's be honest, typing "tribal pattern" into Google <br /> isn't design research.{" "}
          
            HeritengineAI helps you skip the <br />confusion and design with real meaning.
          
        </p>
      </motion.div>

      {/* Cards Section */}
      <div className="w-full max-w-5xl mt-28">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 sm:gap-8">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex-1 transform transition-all hover:shadow-md"
          >
            {/* Animated Emoji */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-top-8"
            >
              <span className="text-5xl sm:text-4xl" role="img" aria-label="sleepy face"> <img src="/sleep.png" alt="" /></span>
            </motion.div>
            
            <div className="overflow-hidden mt-4 ">
              <motion.img
                src="/afre.png"
                alt="Google Search Screenshot"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex-1   transform transition-all hover:shadow-md mt-12 sm:mt-0"
          >
            {/* Animated Emoji */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2    sm:-top-8"
            >
              <span className="text-3xl sm:text-4xl" role="img" aria-label="party popper"> <img src="/victory.png" alt="" /></span>
            </motion.div>
          
            <div className="overflow-hidden mt-4">
              <motion.img
                src="/reaf.png"
                alt="HeritageAI Screenshot"
                className="w-full h-auto object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landsecont;
