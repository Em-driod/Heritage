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
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
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
    <div className="min-h-screen mt-12 bg-white flex flex-col md:flex-row items-center md:justify-center px-6 md:px-12 py-12 text-gray-900">
      {/* Left Section */}
      <motion.div className="max-w-xl space-y-6 mr-8 mt-14" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="text-4xl flex md:text-5xl font-extrabold leading-tight mt-12" style={{ fontFamily: 'manrope', fontWeight: 600 }} variants={itemVariants}>
          <img src="/victory.png" alt="" className="w-12 h-12 mr-2" />
          <p className="mr-2">Try</p>
          <span className="bg-yellow-300 py-0.5 rounded px-2">Her</span>itengine
        </motion.h1>

        <motion.h2 className="text-3xl font-bold text-black mb-7" variants={itemVariants}>Free in Beta!</motion.h2>

        <motion.p className="text-[#7C787F] text-sm" variants={itemVariants}>
          Get early access to culturally intelligent design tools powered by AI. One click. Infinite tools.
        </motion.p>

        <motion.ul className="space-y-3 mb-7 mt-7 text-gray-700" variants={containerVariants}>
          {["Generate assets inspired by real heritengine", "Download color palettes, patterns and UI kits", "Help shape the future of creative tech", "100% free during beta (no credit card needed)"].map((text, i) => (
            <motion.li className="flex items-start" key={i} variants={itemVariants}>
              <img src="markdown.png" alt="" className="w-4 h-4 mr-2" />
              {text}
            </motion.li>
          ))}
        </motion.ul>

        <motion.div className="flex w-full max-w-md mt-8" variants={itemVariants}>
          <input type="email" placeholder="Enter your email" className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
          <button className="bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-orange-400 text-white font-semibold px-6 ml-4 py-3 rounded-lg">Join the Beta</button>
        </motion.div>

        <motion.p className="text-sm text-gray-500" variants={itemVariants}>We’ll never spam. You’ll only hear when it matters.</motion.p>

        <motion.div className="flex items-center gap-4 text-sm text-gray-700 mt-4" variants={containerVariants}>
          {["No spam ever", "Invite only feedback", "Built for global creators"].map((text, i) => (
            <motion.div className="flex items-center gap-1" key={i} variants={itemVariants}>
              <img src={["/relay.png", "/answer.png", "/world.png"][i]} alt="" className="w-4 h-4" />
              {text}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div className="mt-12 md:mt-0 w-full md:w-[550px] bg-[#CBD5E1] rounded-xl p-6 shadow-md space-y-6" variants={rightSectionVariants} initial="hidden" animate="visible">
        {/* Generated Assets */}
        <motion.div className="bg-white rounded-lg shadow-sm p-3" variants={itemVariants}>
          <h3 className="font-semibold text-gray-400 mb-2">Generated Assets</h3>
          <motion.ul className="space-y-4" variants={containerVariants}>
            {generatedAssets.map((item) => (
              <motion.li key={item.id} className="flex items-center justify-between bg-white rounded-lg p-3 relative group" variants={itemVariants}>
                <div className="flex items-center relative">
                  <div
                    onMouseEnter={() => setHoveredAssetId(item.id)}
                    onMouseLeave={() => setHoveredAssetId(null)}
                    className="relative"
                  >
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3 cursor-pointer" />
                    <AnimatePresence>
                      {hoveredAssetId === item.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 bg-gray-50 p-3 rounded-lg shadow-lg text-xs z-20"
                        >
                          {item.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className="font-medium text-gray-800">{item.name}</span>
                </div>
                <div className="flex gap-3 ">
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
          <div className="bg-white rounded shadow-sm p-3 flex flex-col items-start gap-3">
            <h3 className="font-semibold text-gray-400">Color Palette</h3>
            <div className="flex items-center w-full justify-around">
              {colorPalettes.map((palette) => (
                <div key={palette.id} className="relative w-8 h-8">
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
                          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 bg-gray-50 p-3 rounded-lg shadow-lg text-xs z-10"
                        >
                          {palette.details}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            
                
              <button className="ml-auto flex -translate-x-7 items-center px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs font-medium border border-pink-200">
                <img src="/Vector.png" alt="" className="w-3 h-3 mr-1" /> Export
              </button>
               <button className="flex items-center -translate-x-3 px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-xs font-medium border border-blue-200">
                    <FaShare className="mr-1" /> Share
                  </button>
              
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Waitlist;
