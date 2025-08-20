import React, { useState } from "react";
import { FaShare } from "react-icons/fa";
import { motion, type Variants, AnimatePresence } from "framer-motion";

const Waitlist: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const rightSectionVariants: Variants = {
    hidden: { opacity: 0, x: 50, scale: 0.98 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 16 },
    },
  };

  const [hoveredPaletteId, setHoveredPaletteId] = useState<number | null>(null);
  const [hoveredAssetId, setHoveredAssetId] = useState<number | null>(null);

  const generatedAssets = [
    {
      id: 1,
      name: "Dragon Festival Pattern",
      image: "/seamless.png",
      details: (
        <div className="text-gray-700">
          <p>This pattern features intricate dragon motifs, symbolizing power and good fortune in East Asian cultures.</p>
          <p className="mt-2 text-xs text-gray-500">Origin: East Asia</p>
        </div>
      ),
    },
    {
      id: 2,
      name: "Clothing Palette",
      image: "/bird.png",
      details: (
        <div className="text-gray-700">
          <p>A vibrant palette inspired by traditional African textiles, incorporating rich earth tones and bold accents.</p>
          <p className="mt-2 text-xs text-gray-500">Origin: Africa</p>
        </div>
      ),
    },
    {
      id: 3,
      name: "Festival Palette",
      image: "/hongkong.png",
      details: (
        <div className="text-gray-700">
          <p>Bright and festive colors reminiscent of Indian celebrations, perfect for joyful and energetic designs.</p>
          <p className="mt-2 text-xs text-gray-500">Origin: India</p>
        </div>
      ),
    },
  ];

  const colorPalettes = [
    {
      id: 1,
      image: "/brownshit.png",
      details: (
        <div className="text-gray-700">
          <p> <strong>Dark Red (Background):</strong> #9C1E00</p>
        </div>
      ),
    },
    {
      id: 2,
      image: "/multi.png",
      details: (
        <div className="text-gray-700">
          <p><strong>Golden Yellow (Dragon and details) </strong>: #F1B24A</p>
        </div>
      ),
    },
    {
      id: 3,
      image: "/multi.png",
      details: (
        <div className="text-gray-700">
          <p> <strong>Brick Red (Inner circle patterns) </strong>: #C2461A</p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen mt-6 bg-white flex flex-col md:flex-row items-center md:justify-center px-4 sm:px-6 md:px-12 py-8 sm:py-12 text-gray-900">
      {/* Left Section */}
      <motion.div className="w-full max-w-xl space-y-2 sm:space-y-2 md:mr-8 mt-8 sm:mt-14" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-8 sm:mt-12 flex items-center" style={{ fontFamily: 'manrope', fontWeight: 600 }} variants={itemVariants}>
          <img src="/victory.png" alt="" className="w-8 h-8 sm:w-12 sm:h-12 mr-2" />
          <span className="flex items-center">
            <span className="mr-2">Try</span>
            Heritengine
          </span>
        </motion.h1>

        <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mt-0 sm:mt-0 flex items-center"  style={{ fontFamily: 'manrope', fontWeight: 600 }}  variants={itemVariants}>Free in Beta!</motion.h2>

        <motion.p className="text-[#7C787F] text-sm sm:text-base" variants={itemVariants}>
          Get early access to culturally intelligent design tools powered <br /> by AI. One click. Infinite tools.
        </motion.p>

        <motion.ul className="space-y-2 sm:space-y-6 mb-4 sm:mb-7 mt-4 sm:mt-7 text-gray-700 text-sm sm:text-base" variants={containerVariants}>
          {["Generate assets inspired by real heritengine", "Download color palettes, patterns and UI kits", "Help shape the future of creative tech", "100% free during beta (no credit card needed)"].map((text, i) => (
            <motion.li className="flex items-start" key={i} variants={itemVariants}>
              <img src="markdown.png" alt="" className="w-3 h-3 sm:w-4 sm:h-4 mr-2 mt-0.5" />
              {text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="flex w-full max-w-md mt-6 sm:mt-8 gap-2.5" variants={itemVariants}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-sm lg:px-2 sm:px-2 py-4 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 h-14"
          />
          <button
            className="flex-shrink-0 bg-gradient-to-r from-red-500 to-orange-600 hover:bg-orange-400 text-xs text-white font-thin px-4 py-4 rounded-sm w-[130px] whitespace-nowrap h-14 flex items-center justify-center "
          >
            Join Beta Squad
          </button>
        </motion.div>

        <motion.p className="text-xs sm:text-sm text-gray-500" variants={itemVariants}>We'll never spam. You'll only hear when it matters.</motion.p>

        <motion.div className="flex items-center gap-3 sm:gap-0.5 text-[10px] sm:text-sm text-gray-700 mt-4">
          {["No spam ever", "Invite only feedback", "Built for global creators"].map((text, i) => (
            <motion.div className="flex items-center gap-1" key={i} variants={itemVariants}>
              <img src={["/relay.png", "/answer.png", "/world.png"][i]} alt="" className="w-3 h-3 sm:w-4 sm:h-4" />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="mt-24 sm:mt-16  w-full md:w-[580px] bg-[#CBD5E1] rounded-xl p-4 sm:p-6 shadow-lg space-y-2 sm:space-y-3"
        variants={rightSectionVariants}
        initial="hidden"
        animate="visible"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.995 }}
        transition={{ layout: { duration: 0.25 } }}
      >
        {/* Generated Assets */}
        <motion.div className="bg-white rounded-lg shadow-sm p-3" variants={itemVariants} whileHover={{ y: -2 }}>
          <h3 className="font-semibold text-gray-400 mb-2 text-sm sm:text-base">Generated Assets</h3>
          <motion.ul className="space-y-3 sm:space-y-4" variants={containerVariants}>
            {generatedAssets.map((item) => (
              <motion.li
                key={item.id}
                className="flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 relative group transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -2, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center relative flex-1 min-w-0">
                  <div
                    onMouseEnter={() => setHoveredAssetId(item.id)}
                    onMouseLeave={() => setHoveredAssetId(null)}
                    className="relative"
                  >
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md mr-3 sm:mr-3 cursor-pointer" />
                    <AnimatePresence>
                      {hoveredAssetId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 sm:w-64 bg-gray-50 p-3 rounded-lg shadow-lg text-xs z-10"
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className="font-medium text-gray-800 text-sm sm:text-sm leading-snug truncate">{item.name}</span>
                </div>
                <div className="flex gap-1 sm:gap-3 ml-2 shrink-0 whitespace-nowrap">
                  <button className="flex items-center px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs font-medium border border-pink-200">
                    <img src="/Vector.png" alt="" className="w-3 h-3 mr-1" /> Export
                  </button>
                  <button className="flex items-center px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-xs font-medium border border-blue-200">
                    <FaShare className="mr-1" /> Share
                  </button>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Color Palettes */}
        <motion.div variants={itemVariants}>
          <motion.div className="bg-white rounded shadow-sm p-3 flex flex-col items-start gap-3" whileHover={{ y: -2 }}>
            <h3 className="font-semibold text-gray-400 text-sm sm:text-base">Color Palette</h3>
            <div className="flex items-center w-full">
              <div className="flex gap-2 sm:gap-1 flex-shrink-0">
                {colorPalettes.map((palette) => (
                  <div key={palette.id} className="relative w-6 h-6 sm:w-8 sm:h-8">
                    <div
                      onMouseEnter={() => setHoveredPaletteId(palette.id)}
                      onMouseLeave={() => setHoveredPaletteId(null)}
                    >
                      <img src={palette.image} alt={`Palette ${palette.id}`} className="w-full h-full object-cover rounded-full border border-gray-200 cursor-pointer" />
                      <AnimatePresence>
                        {hoveredPaletteId === palette.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 sm:w-64 bg-gray-50 p-3 rounded-lg shadow-lg text-xs z-10"
                          >
                            {palette.details}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 sm:gap-3 flex-grow justify-end">
                <button className="flex items-center px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs font-medium border border-pink-200">
                  <img src="/Vector.png" alt="" className="w-3 h-3 mr-1" /> Export
                </button>
                <button className="flex items-center px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-xs font-medium border border-blue-200">
                  <FaShare className="mr-1" /> Share
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Waitlist;