import { IoCheckmarkOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { CiSearch } from "react-icons/ci";
import React, { useState } from 'react';
import { FaShare } from "react-icons/fa"; // Import useState

const Landsecont: React.FC = () => {
  const [showKimonoText, setShowKimonoText] = useState(false); // State for hover effect

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white py-8 px-4 sm:py-16 sm:px-6 lg:px-8">
      {/* Top Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-40 sm:mb-12 max-w-3xl mx-auto px-2"
      >
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl leading-tight sm:leading-tighter">
          Design shouldn't feel
          <br className="hidden sm:block" />
          like <span className='italic' style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 100 }}>guesswork.</span>
        </h1>
        <p className="mt-4 text-sm text-gray-400 sm:text-base sm:mt-6 sm:text-gray-600 max-w-md sm:max-w-xl mx-auto leading-relaxed">
          Let's be honest, typing "tribal pattern" into Google <br /> isn't design research.{' '}
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
            className="relative flex-1 transform transition-all mt-12 sm:mt-0"
          >
            {/* Animated Emoji */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-top-8"
            >
              <span className="text-3xl sm:text-4xl" role="img" aria-label="party popper">
                {' '}
                <img src="/sleep.png" alt="" />
              </span>
            </motion.div>

            <div className="overflow-hidden mt-4 w-full ">
              {/* Cloned 'Before: Google Search' Card */}
              <div className="w-[480px] max-w-full mx-auto bg-[#fff6f6] rounded-2xl shadow-lg border border-[#fbeaea] p-0 relative">
                {/* Header */}
                <div className="flex items-center px-6 pt-5 pb-2">
                  <span className="w-8 mr-2"><img src="/sleep.png" alt="" /></span>
                  <span className="text-xl font-mono text-[#e95b5b]">Before: Google Search</span>
                </div>
                {/* Browser Bar */}
                <div className="flex items-center mx-5 bg-gray-200 px-4 py-2 rounded-t-lg">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffe066] mr-1"></div>
                  <div className="w-3 h-3 rounded-full bg-[#2e8d11] mr-4"></div>
                  <div className="flex-1 bg-gray-300 rounded-full flex items-center px-2 mr-11 py-1 ">
                    <span className="text-gray-300 text-xs mr-1">
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                    </span>
                    <span className="text-xs text-gray-900">google.com/search?q=japanese+wears</span>
                  </div>
                </div>
                {/* Search Box */}
                <div className="flex items-center px-6 bg-white mx-5 pt-5 pb-2">
                  <img src="google.png" alt="" className="mr-2" />
                  <div className="flex-1 flex items-center bg-white border border-gray-300 rounded-lg top-0 px-3 py-2">
                    <input className="bg-transparent outline-none text-sm flex-1 text-gray-700" value="Japanese wears" readOnly />
                    <button className="ml-2">
                    </button>
                  </div>
                  <button className="ml-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-lg font-semibold shadow"><CiSearch style={{ height: '30px', width:'20px' }} /></button>
                </div>
                {/* Search Results */}
                <div className="px-6 pt-2 mx-[-4px] pb-4 mt-[-10px]">
                  <div className="bg-white p-3 ">
                    <div className="flex items-center mb-1">
                      <span className="text-xs text-gray-700 font-semibold">Japanese wears? - Wikipedia</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Japanese festive wears (1580-1631) is worn by the japanese…</div>
                    <div className="text-xs text-[#4caf50]">Wikipedia.com</div>
                  </div>
                   <hr className="border-t border-gray-200  mx-4" />
                  <div className="bg-white p-3 ">
                    <div className="flex items-center ">
                      <span className="text-xs text-gray-700 font-semibold">Japanese have different wears</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Kimono and haori was originated by the Japanese in the year…</div>
                    <div className="text-xs text-[#4caf50]">Culture.com</div>
                  </div>
                  <hr className="border-t border-gray-200  mx-4" />
                  <div className="bg-white p-3">
                    <div className="flex items-center mb-1">
                      <span className="text-xs text-gray-700 font-semibold">Japanese Family Tree</span>
                    </div>
                    <div className="text-xs text-gray-500 mb-1">Discover the cultural tree of Japanese for free, and learn about their festive…</div>
                    <div className="text-xs text-[#4caf50]">Culturalsymbols.org</div>
                  </div>
                </div>
                {/* X List */}
                <div className="px-6 pb-5">
                  <ul className="space-y-4 mt-2">
                    <li className="flex items-center text-sm text-[#e42a2a]"><span className="mr-2 text-lg"> <svg width="20" height="20" fill="#e57373" viewBox="0 0 20 20"><path d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636z"/></svg></span>Generic results for common search</li>
                    <li className="flex items-center text-sm text-[#e42a2a]"><span className="mr-2 text-lg"> <svg width="20" height="20" fill="#e57373" viewBox="0 0 20 20"><path d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636z"/></svg></span>No context or real time connections</li>
                    <li className="flex items-center text-sm text-[#e42a2a]"><span className="mr-2 text-lg"> <svg width="20" height="20" fill="#e57373" viewBox="0 0 20 20"><path d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636z"/></svg></span>Hours of manual search required</li>
                    <li className="flex items-center text-sm text-[#e42a2a]"><span className="mr-2 text-lg"> <svg width="20" height="20" fill="#e57373" viewBox="0 0 20 20"><path d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10l-4.95-4.95L5.05 3.636z"/></svg></span>Scattered across multiple websites</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex-1 transform transition-all mt-12 sm:mt-0"
          >
            {/* Animated Emoji */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2.2 }}
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-top-8"
            >
              <span className="text-3xl sm:text-4xl" role="img" aria-label="party popper">
                {' '}
                <img src="/victory.png" alt="" />
              </span>
            </motion.div>

            {/* Cloned UI from screenshot */}
            <div className="w-[490px] max-w-full mx-auto rounded-2xl p-4 shadow-lg mt-4 bg-blue-50"> {/* Changed to bg-white */}
              {/* Header */}
              <div className="flex items-center mb-4">
                <span className="mr-2 w-8"><img src="/victory.png" alt="" /></span>
                <span className="text-xl font-mono text-green-700">After: Heritengine</span>
              </div>
              {/* Card */}
              <div className="rounded-xl bg-white shadow-md overflow-hidden border border-gray-100 mb-6">
                {/* Top bar */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-2 flex items-center justify-between">
                  <span className="font-semibold text-white text-base flex items-center">
                    <span className=" font-light text-white px-1 rounded mr-1 ">Heritengine</span>
                    <span className="ml-1 text-yellow-100 text-xs ">❓</span>
                  </span>
                </div>
                {/* Search bar */}
                <div className=" mx-4 px-2 py-2 mt-4 border-b border-gray-100 bg-pink-100 rounded-sm flex items-center">
                  <span className="text-gray-400 mr-2">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  </span>
                  <input
                    className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder:text-[#ff8a65]"
                    value="Searching for Japanese wears"
                    readOnly
                    style={{ color: '#ff8a65' }}
                  />
                </div>
                {/* Processing */}
                <div className="flex flex-col items-center py-6">
                  <span className="text-3xl mb-2 text-purple-500">↓</span>
                  <span className=" px-2 py-1 rounded text-base font-light text-gray-600">Heritengine Processing...</span>
                </div>
                {/* Kimono Card */}
                <div className="flex items-center px-4 py-2 border-b border-gray-100">
                  <div className='flex flex-col'>
                    <div className='flex items-center relative'
                         onMouseEnter={() => setShowKimonoText(true)}
                         onMouseLeave={() => setShowKimonoText(false)}>
                      <img src="/kimono.png" alt="Kimono" className="w-14 h-14 rounded-lg object-cover mr-4 border border-gray-200" />
                      {showKimonoText && (
                        <div className="absolute bg-white bg-opacity-75 w-56 h-58 text-gray-800 text-xs px-2 py-1 rounded-md shadow-2xl  -bottom-12 left-1/2 transform -translate-x-1/8">
                          <p className="mb-4 space-x-1"><span className="text-red-400">Type:</span> Traditional long robe worn with an obi (belt)</p>
                          <p className="mb-4"><span className="text-red-400">Use:</span> Formal occasions, festivals, weddings, ceremonies</p>
                          <p className="mb-4"><span className="text-red-400">Origin:</span> Evolved during the Heian period (794–1185) as kosode (“small sleeves”) <br /> <br />

Later formalized into today's kimono during the Edo period (1603–1868)

Male kimono tends to be simpler and less decorative than female versions <br /><br /></p>
                          
                        </div>
                      )}
                      <div className="font-thin text-sm text-[#e57373]">Kimono</div>
                    </div>
                    <div className="flex items-center ">
                      <div className="text-xs text-gray-600 mt-1 flex items-center">ColorPalettes:
                        <span className="ml-2 flex items-center">
                          <span className="w-4 h-4 rounded-full bg-gray-800 inline-block mr-1"></span>
                          <span className="w-4 h-4 rounded-full bg-gray-500 inline-block mr-1"></span>
                          <span className="w-4 h-4 rounded-full bg-gray-300 inline-block"></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center mt-12 ml-44">
                    <button className="flex items-center px-2 py-1 bg-pink-100 text-pink-500 rounded-md text-xs font-medium border border-pink-200 mr-2"><span className="w-3.5"><img src="/Vector.png" alt="" /></span>Export</button>
                    <button className="flex items-center px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-xs font-medium border border-blue-200"><span className="mr-1"><FaShare /></span>Share</button>
                  </div>
                </div>
                {/* Yukata Card - show only 3/4, like a scroll-into-view effect */}
                <div className="relative h-16 overflow-hidden" style={{ height: '56px' }}>
                  <div className="flex items-center px-4 pt-2" style={{ transform: 'translateY(14px)' }}>
                    <img src="/yakuta.png" alt="Yukata" className="w-14 h-14 rounded-lg object-cover mr-4 border border-gray-200" />
                    <div className="flex-1">
                      <div className="font-thin text-sm text-[#e57373]">Yukata</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Features List */}
              <ul className="mt-4 space-y-3 font-nunito">
                <li className="flex items-center text-green-600 font-nunito text-sm"><span className="mr-2"><IoCheckmarkOutline /></span>AI-powered contextual matching</li>
                <li className="flex items-center text-green-600 font-nunito text-sm"><span className="mr-2"><IoCheckmarkOutline /></span>Instant family connections</li>
                <li className="flex items-center text-green-600 font-nunito text-sm"><span className="mr-2"><IoCheckmarkOutline /></span>Comprehensive results in seconds</li>
                <li className="flex items-center text-green-600 font-nunito text-sm"><span className="mr-2"><IoCheckmarkOutline /></span>All sources verified and organized</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Landsecont;