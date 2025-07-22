import React from "react";
import { FaShare } from "react-icons/fa";
// Corrected import: Use 'type' keyword for type-only import
import { motion, type Variants } from "framer-motion";
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Instrument+Serif&family=Montserrat&family=Lato&family=Open+Sans&family=Fira+Sans&family=Ubuntu&family=Noto+Sans&family=Source+Sans+Pro&family=Roboto&family=Droid+Sans&family=Georgia&display=swap" rel="stylesheet"></link>

const Waitlist: React.FC = () => {
  // Define animation variants with TypeScript type 'Variants'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between children animations
      },
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

  return (
    <div className="min-h-screen mt-12 bg-white flex flex-col md:flex-row items-center md:justify-center px-6 md:px-12 py-12 text-gray-900">
      {/* Left Section */}
      <motion.div
        className="max-w-xl space-y-6 mr-8 mt-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-4xl flex md:text-5xl font-extrabold leading-tight mt-12" style={{
            fontFamily: 'manrope',
            fontWeight: 600,
            fontStyle: 'bold',
            lineHeight: '100%',
            letterSpacing: '-3%',
          
          }} variants={itemVariants}>
          <span role="img" aria-label="party">
            <img src="/victory.png" alt="" className="w-12 h-12" />
          </span>
          <p className="mr-2">Try</p>  
             <span className="bg-yellow-300 py-0.5  rounded "> Her</span>
          itengine
        </motion.h1>
        <motion.h2 className="text-3xl font-bold text-black mb-7" variants={itemVariants}>
          Free in Beta!
        </motion.h2>
        
        <motion.p className="text-[#7C787F] text-sm" variants={itemVariants}>
          Get early access to culturally intelligent design <br /> tools powered by AI.
          One click. Infinite tools.
        </motion.p>
        <br />

        <motion.ul className="space-y-3 mb-7 text-gray-700 rounded-lg text-smoin" variants={containerVariants}>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-red-500 text-xl mr-2">
              <img src="markdown.png" alt="" />
            </span>{" "}
            Generate assets inspired by real{" "}
            <span className=" px-1 rounded">heritengine</span>
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-red-500 text-xl mr-2">
              <img src="markdown.png" alt="" />
            </span>{" "}
            Download color palettes, patterns and UI kits
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-red-500 text-xl mr-2">
              <img src="markdown.png" alt="" />
            </span>{" "}
            Help shape the future of creative tech
          </motion.li>
          <motion.li className="flex items-start" variants={itemVariants}>
            <span className="text-red-500 text-xl mr-2">
              <img src="markdown.png" alt="" />
            </span>{" "}
            100% free during beta (no credit card needed)
          </motion.li>
        </motion.ul>

        <motion.div className="flex w-full max-w-md mt-4" variants={itemVariants}>
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-gray-300 rounded-l-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-gradient-to-r from-orange-600 to-orange-400 hover:bg-orange-400 text-white font-semibold px-6 ml-4 py-3 rounded-lg">
            Join the Beta
          </button>
        </motion.div>

        <motion.p className="text-sm text-gray-500" variants={itemVariants}>
          We’ll never spam. You’ll only hear when it matters.
        </motion.p>

        <motion.div className="flex items-center gap-4 text-sm text-gray-700 mt-4" variants={containerVariants}>
          <motion.div className="flex items-center gap-1" variants={itemVariants}>
            <span role="img" aria-label="lock">
              <img src="/relay.png" alt="" />
            </span>{" "}
            No spam ever
          </motion.div>
          <motion.div className="flex items-center gap-1" variants={itemVariants}>
            <span role="img" aria-label="invite">
              <img src="/answer.png" alt="" />
            </span>{" "}
            Invite only feedback
          </motion.div>
          <motion.div className="flex items-center gap-1" variants={itemVariants}>
            <span role="img" aria-label="global">
              <img src="/world.png" alt="" />
            </span>{" "}
            Built for global creators
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="mt-12 md:mt-0 w-full md:w-[550px] bg-[#CBD5E1] rounded-xl p-6 shadow-md space-y-6"
        variants={rightSectionVariants} // Apply specific variants for right section
        initial="hidden"
        animate="visible"
      >
        <motion.div className="bg-white rounded-lg shadow-sm" variants={itemVariants}>
          <h3 className="font-semibold text-gray-400 mb-2 ml-3">
            Generated Assets
          </h3>
          <motion.ul className="space-y-4 rounded-b-lg" variants={containerVariants}>
            {[
              { name: "Dragon Festival Pattern", image: "/seamless.png" },
              { name: "Clothing Palette", image: "/bird.png" },
              { name: "Festival Palette", image: "/hongkong.png" },
            ].map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-center justify-between bg-white rounded-lg p-3 cursor-pointer overflow-hidden relative group"
                whileHover={{ scale: 1.02, boxShadow: "0px 5px 10px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                variants={itemVariants} // Apply item variants to each list item
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md mr-3"
                  />
                  <span className="font-medium text-gray-800">
                    {item.name}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs font-medium border border-pink-200">
                    <span className="mr-1">
                      <img src="/Vector.png" alt="" />
                    </span>
                    Export
                  </button>
                  <button className="flex items-center px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-xs font-medium border border-blue-200">
                    <FaShare />
                    <span className="ml-1">Share</span>
                  </button>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-white rounded shadow-sm p-3 flex flex-col items-start gap-3">
            <h3 className="font-semibold text-gray-400">Color Palette</h3>
            <div className="flex items-center w-full justify-around"> {/* Changed to justify-around for spacing */}
              {[
                {
                  id: 1,
                  image: "/brownshit.png", // Replace with your image paths
                  details: (
                    <>
                      <p>
                        <strong>Dark Red</strong> (Background):{" "}
                        <code>#9C1E00</code>
                      </p>
                      <p>
                        <strong>Golden Yellow</strong> (Dragon and details):{" "}
                        <code>#F1B24A</code>
                      </p>
                      <p>
                        <strong>Brick Red</strong> (Inner circle patterns):{" "}
                        <code>#C2461A</code>
                      </p>
                      <p className="mt-2">
                        <strong className="text-pink-600">Symbol:</strong>{" "}
                        Elegance & Grace, Cultural Identity, Social Status, Seasonal Awareness, Ritual & Respect
                      </p>
                      <p>
                        <strong className="text-blue-600">Color:</strong> Made
                        with different colors like Red, Gold etc.
                      </p>
                    </>
                  ),
                },
                {
                  id: 2,
                  image: "/multi.png", // Replace with your image paths
                  details: (
                    <>
                      <p>
                        <strong>Sky Blue</strong> (Main): <code>#87CEEB</code>
                      </p>
                      <p>
                        <strong>Ocean Green</strong> (Accent):{" "}
                        <code>#4682B4</code>
                      </p>
                      <p>
                        <strong>Sandy Brown</strong> (Details):{" "}
                        <code>#F4A460</code>
                      </p>
                      <p className="mt-2">
                        <strong className="text-pink-600">Symbol:</strong>{" "}
                        Tranquility, Growth, Earthiness, Freedom, Hope
                      </p>
                      <p>
                        <strong className="text-blue-600">Color:</strong> Blues, Greens, Browns
                      </p>
                    </>
                  ),
                },
                {
                  id: 3,
                  image: "/multi.png", // Replace with your image paths
                  details: (
                    <>
                      <p>
                        <strong>Deep Purple</strong> (Dominant):{" "}
                        <code>#6A0DAD</code>
                      </p>
                      <p>
                        <strong>Soft Pink</strong> (Contrast):{" "}
                        <code>#FFC0CB</code>
                      </p>
                      <p>
                        <strong>Silver Gray</strong> (Subtle):{" "}
                        <code>#C0C0C0</code>
                      </p>
                      <p className="mt-2">
                        <strong className="text-pink-600">Symbol:</strong>{" "}
                        Royalty, Mystery, Romance, Elegance, Modernity
                      </p>
                      <p>
                        <strong className="text-blue-600">Color:</strong> Purples, Pinks, Grays
                      </p>
                    </>
                  ),
                },
              ].map((palette, i) => (
                <div key={palette.id} className="relative group gap-2 w-8 h-8"> {/* Adjusted size and added group */}
                  <img
                    src={palette.image}
                    alt={`Palette ${i + 1}`}
                    className="w-full h-full object-cover rounded-full border border-gray-200 cursor-pointer" // Make image a circle
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-64 bg-gray-50 p-3 rounded-lg shadow-lg text-xs z-10 overflow-hidden hidden group-hover:block" // Hidden by default, shown on group hover
                  >
                    {palette.details}
                  </motion.div>
                </div>
              ))}
              <button className="ml-auto flex items-center px-2 py-1 bg-pink-100 text-pink-800 rounded-md text-xs font-medium border border-pink-200">
                <span className="mr-1">
                  <img src="/Vector.png" alt="" />
                </span>
                Export
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Waitlist;