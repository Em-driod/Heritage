import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShare } from 'react-icons/fa';

const Landfifth = () => {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="bg-white py-[80px] px-4 sm:px-6 lg:px-8 font-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Instrument+Serif&family=Montserrat&family=Lato&family=Open+Sans&family=Fira+Sans&family=Ubuntu&family=Noto+Sans&family=Source+Sans+Pro&family=Roboto&family=Droid+Sans&family=Georgia&display=swap"
        rel="stylesheet"
      ></link>
      {/* Header Section */}
      <motion.div
        className="text-center mb-[80px] max-w-2xl mx-auto"
        variants={itemVariants}
      >
        <div className="flex flex-col items-center justify-center mb-0">
          <motion.img
            src="/culture.png"
            alt="What HeritageAI Gives You Icon"
            className="h-24 w-24"
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>
        <motion.h1
          className="text-[36px] sm:text-[48px] lg:text-[56px] text-[#333333] leading-tight mb-0"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 600 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="whitespace-nowrap">From culture</span>
          <br />
          <span className="whitespace-nowrap">To</span>{' '}
          <span
            className="font-thin italic whitespace-nowrap"
            style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 100 }}
          >
            {' '}
            creation
          </span>
          <div className="-mt-5">
            <span className="text-gray-500 text-xs sm:text-sm font-light whitespace-nowrap overflow-hidden text-ellipsis">
              in Seconds
            </span>
          </div>
        </motion.h1>
      </motion.div>

      {/* Main Content Sections */}
      <motion.div
        className="max-w-[1100px] lg:mx-auto sm:20px mb-[80px]"
        variants={containerVariants}
      >
        {/* Section 1: Pick a Culture */}
        <motion.div
          className="sm:p-[20px] lg:p-[60px] flex flex-col lg:flex-row items-center relative"
          variants={sectionVariants}
          whileHover={{ y: -5 }}
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left lg:pr-[80px] flex flex-col items-center lg:items-start">
            <div className="flex">
              <span className="text-[32px] font-bold text-[#333333] mr-2 leading-none">
                1
              </span>
              <motion.div
                className="flex items-center mb-[20px]"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[32px] leading-none">
                  <img src="mask.png" alt="" />
                </span>
              </motion.div>
            </div>
            <motion.h2
              className="text-[40px] font-semibold text-[#333333] mb-[20px]"
              whileHover={{ x: 5 }}
            >
              Pick a Culture
            </motion.h2>
            <motion.p
              className="text-[14px] text-[#666666] leading-tight mb-[28px]"
              whileHover={{ x: 5 }}
            >
              Choose from hundreds of rich cultural traditions like Yoruba, Maori, Edo,and many more.Each culture brings its <br /> unique
              <span className="text-orange-600 px-1 rounded-sm">
                heritengine
              </span>{' '}
              and visual identity.
            </motion.p>
            <div className="flex overflow-x-auto gap-x-[10px] py-2 no-scrollbar">
              {['Yoruba', 'Maori', 'Edo', '+500 more'].map((item, index) => {
                let bg = '';
                let text = '';
                let hover = '';
                if (item === 'Yoruba') {
                  bg = 'bg-[#e0f0ff]';
                  text = 'text-[#4169E1]';
                  hover = 'hover:bg-[#ffe7b3]';
                } else if (item === 'Maori') {
                  bg = 'bg-[#fff6e0]';
                  text = 'text-[#b77a75]';
                  hover = 'hover:bg-[#b3ffd1]';
                } else if (item === 'Edo') {
                  bg = 'bg-[#e0f0ff]';
                  text = 'text-[#00b87f]';
                  hover = 'hover:bg-[#b3e0ff]';
                } else {
                  bg = 'bg-[#f0e0ff]';
                  text = 'text-[#9333ea]';
                  hover = 'hover:bg-[#e0d0ef]';
                }
                return (
                  <motion.button
                    key={index}
                    className={`shrink-0 px-[14px] py-[6px] rounded-full text-sm font-medium transition-colors duration-200 ${bg} ${text} ${hover}`}
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Separator Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-pink-300 transform -translate-x-1/2 z-10"></div>
          <div className="lg:hidden w-full h-px bg-pink-300 my-2"></div>

          {/* Image section */}
          <motion.div
            className="lg:w-1/2 flex items-center justify-center lg:pl-[80px] mt-4 lg:mt-0"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src="/teli.png"
              alt="Cultural Masks Illustration"
              className="w-full rounded-[15px] max-w-full sm:max-w-none md:max-w-none lg:max-w-full"
            />
          </motion.div>
        </motion.div>

        {/* Section 2: AI Analyzes Patterns */}
        <motion.div
          className="sm:p-[20px] lg:p-[60px] flex flex-col lg:flex-row items-center relative"
          variants={sectionVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="lg:w-1/2 flex items-center justify-center order-1 lg:order-1 lg:pr-[80px] mt-10 lg:mt-0"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src="/two.png"
              alt="Analyzed Patterns UI"
              className="w-full h-auto rounded-[15px] max-w-[500px] sm:max-w-[450px] md:max-w-full"
            />
          </motion.div>

          {/* Separator Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-pink-300 transform -translate-x-1/2 z-10"></div>
          <div className="lg:hidden w-full h-px bg-pink-300 my-1"></div>

          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left lg:pl-[80px] order-2 lg:order-2 flex flex-col items-center lg:items-start">
            <div className="flex">
              <span className="text-[32px] font-bold text-[#333333] mr-2 leading-none">
                2
              </span>
              <motion.div
                className="flex items-center mb-[20px]"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-[32px] leading-none">🧠</span>
              </motion.div>
            </div>
            <motion.h2
              className="text-[40px] font-semibold text-[#333333] mb-[20px]"
              whileHover={{ x: 5 }}
            >
              AI Analyzes Patterns
            </motion.h2>
            <motion.p
              className="text-[14px] text-[#666666] leading-relax mb-[28px]"
              whileHover={{ x: 5 }}
            >
              Our advanced AI studies traditional patterns, sacred symbols, color
              meanings, and cultural stories to understand the deep significance
              behind each element.
            </motion.p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-[#666666] text-[16px] w-full max-w-[400px] mx-auto lg:mx-0 lg:text-left">
              {[
                { icon: '/1.png', text: 'Color Psychology' },
                { icon: '/2.png', text: 'Sacred Geometry' },
                { icon: '/3.png', text: 'Cultural Stories' },
                { icon: '/4.png', text: 'Symbol Meanings' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <img
                    src={item.icon}
                    alt={item.text + ' Icon'}
                    className="w-[20px] h-[20px] mr-2"
                  />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 3: Generate Design Kits */}
        <motion.div
          className="sm:p-[20px] lg:p-[60px] flex flex-col lg:flex-row items-center relative"
          variants={sectionVariants}
          whileHover={{ y: -5 }}
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left lg:pr-[80px] flex flex-col items-center lg:items-start">
            {/* Vertical line for mobile view above number 3 */}
            <div className="lg:hidden w-86 h-px bg-pink-300 mx-auto mb-4"></div>
            <motion.div
              className="flex items-center mb-[20px]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[32px] font-bold text-[#333333] mr-2 leading-none">
                3
              </span>
              <motion.img
                src="/rain.png"
                alt="Paint Palette Emoji"
                className="w-8 h-8"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <motion.h2
              className="text-[40px] font-semibold text-[#333333] mb-[20px]"
              whileHover={{ x: 5 }}
            >
              Generate Design Kits
            </motion.h2>
            <motion.p
              className="text-[14px] text-[#666666] leading-relax mb-[28px]"
              whileHover={{ x: 5 }}
            >
              Instantly receive complete design systems including UI themes,
              pattern libraries, and carefully curated color palettes that honor
              cultural authenticity.
            </motion.p>
            <div className="grid grid-cols-1 gap-y-3 text-[#666666] text-[16px] w-full max-w-[400px] mx-auto lg:mx-0 lg:text-left">
              {[
                { icon: '/three 1.png', text: 'UI Themes & Components' },
                { icon: '/three 2.png', text: 'Pattern Libraries' },
                { icon: '/three 3.png', text: 'Color Palettes' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center lg:justify-start"
                  whileHover={{ x: 5 }}
                >
                  <img
                    src={item.icon}
                    alt={item.text + ' Icon'}
                    className="w-[20px] h-[20px] mr-2"
                  />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Separator Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-pink-300 transform -translate-x-1/2 z-10"></div>
          <div className="lg:hidden w-full h-px bg-pink-300 my-8"></div>

          <motion.div
            className="lg:w-1/2 flex items-center justify-center lg:pl-[80px] sm:mt-1 lg:mt-0"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src="/three.png"
              alt="Design Kit UI"
              className="w-full h-auto rounded-[15px] max-w-[500px] sm:max-w-[450px] md:max-w-full"
            />
          </motion.div>
        </motion.div>

        {/* Section 4: Learn the Meaning */}
        <motion.div
          className="sm:p-[10px] lg:p-[60px] flex flex-col lg:flex-row items-center relative"
          variants={sectionVariants}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="lg:w-1/2 flex items-center justify-center order-1 lg:order-1 lg:pr-[80px] sm:mt-1 lg:mt-0"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src="/four.png"
              alt="Open Book with Cultural Info"
              className="w-full h-auto rounded-[15px] max-w-[500px] sm:max-w-[450px] md:max-w-full"
            />
          </motion.div>

          {/* Separator Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-pink-300 transform -translate-x-1/2 z-10"></div>
          <div className="lg:hidden w-full h-px bg-pink-300 my-8"></div>

          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left lg:pl-[80px] order-2 lg:order-2 flex flex-col items-center lg:items-start">
            <motion.div
              className="flex items-center mb-[20px]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[32px] font-bold text-[#333333] mr-2 leading-none">
                4
              </span>
              <motion.span
                className="text-[32px] leading-none"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                📘
              </motion.span>
            </motion.div>
            <motion.h2
              className="text-[40px] font-semibold text-[#333333] mb-[20px]"
              whileHover={{ x: 5 }}
            >
              Learn the Meaning
            </motion.h2>
            <motion.p
              className="text-[14px] text-[#666666] leading-relax mb-[28px]"
              whileHover={{ x: 5 }}
            >
              Discover the rich stories and cultural significance behind every
              element. Understand the{' '}
              heritage and
              respect the traditions that inspire your designs.
            </motion.p>
            <motion.div
              className="bg-[#f0e0ff] text-[#9333ea] pr-[120px] pl-4 rounded-[10px] font-semibold transition-colors duration-200 hover:bg-[#e0d0ef] w-full text-left"
              whileHover={{ y: -3 }}
            >
              <div className="flex items-center mb-2">
                <div className="flex">
                  <div className="mt-4">
                    <img
                      src="/globe.png"
                      alt="Cultural Context Icon"
                      className="w-[10px] h-[15px] mr-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text- #581C87">Cultural Context</span>
                    <p className="text-[10px] text-[ #7E22CE] leading-relaxed ">
                      Every symbol tells a story, every color has meaning
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 5: Apply to Real-World Products */}
        <motion.div
          className="sm:p-[20px] lg:p-[60px] flex flex-col lg:flex-row items-center relative"
          variants={sectionVariants}
          whileHover={{ y: -5 }}
        >
          <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left lg:pr-[80px] flex flex-col items-center lg:items-start">
            {/* Vertical line for mobile view above number 5 */}
            <div className="lg:hidden w-86 h-px bg-pink-300 mx-auto mb-4"></div>
            <motion.div
              className="flex items-center mb-[20px]"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-[32px] font-bold text-[#333333] mr-2 leading-none">
                5
              </span>
              <motion.span
                className="text-[32px] leading-none"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🚀
              </motion.span>
            </motion.div>
            <motion.h2
              className="text-[40px] font-semibold text-[#333333] mb-[20px]"
              whileHover={{ x: 5 }}
            >
              Export & Customize
            </motion.h2>
            <motion.p
              className="text-[14px] text-[#666666] leading-relax mb-[28px]"
              whileHover={{ x: 5 }}
            >
              Export your designs, share with your team, and customize to your
              heart's content. The creative possibilities are endless!
            </motion.p>
            <div className="flex gap-x-1 text-[#666666] text-[16px] w-full max-w-[400px] mx-auto justify-center lg:justify-start lg:mx-0 lg:text-left">
              <motion.button
                className="px-2 py-1 sm:px-3 sm:py-1 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="flex items-center justify-center px-2 py-1 lg:ml-0 bg-pink-100 text-pink-800 rounded-md text-xs font-medium border border-pink-200">
                  <span className="mr-1">
                    <img src="/Vector.png" alt="" />
                  </span>
                  Export
                </button>
              </motion.button>
              <motion.button
                className="px-2 py-1 sm:px-3 sm:py-1 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
                whileHover={{ scale: 1.05, backgroundColor: '#f3f4f6' }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="flex items-center justify-center px-2 py-1 bg-blue-100 text-blue-500 rounded-md text-xs font-medium border border-blue-200">
                  <FaShare />
                  <span className="ml-1">Share</span>
                </button>
              </motion.button>
              <button className="ml-1">
                <img src="/custom.png" alt="" />
              </button>
            </div>
          </div>

          {/* Separator Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-pink-300 transform -translate-x-1/2 z-10"></div>
          <div className="lg:hidden w-full h-px bg-pink-300 my-8"></div>

          <motion.div
            className="lg:w-1/2 flex items-center justify-center lg:pl-[80px] mt-10 lg:mt-0"
            variants={imageVariants}
            whileHover="hover"
          >
            <img
              src="/five.png" // Placeholder image, replace with an actual image for step 5
              alt="Product Application Showcase"
              className="w-full h-auto rounded-[15px] max-w-[500px] sm:max-w-[450px] md:max-w-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Call to Action Button at the Bottom */}
      <motion.div
        className="text-center mt-[50px] sm:mt-[60px] lg:mt-[80px] px-3 sm:px-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#FF7A50] to-[#FF4E4E] text-white rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden group transition duration-300 shadow-lg mx-auto py-[16px] sm:py-[40px] lg:py-[40px] px-4 sm:px-6 lg:px-10 max-w-[900px]"
          whileHover={{ scale: 1.02 }}
        >
          <motion.span
            className="text-[24px] sm:text-[32px] lg:text-[42px] font-extrabold mb-[16px] sm:mb-[20px] lg:mb-[24px] text-white leading-tight text-center px-2"
            whileHover={{ scale: 1.01 }}
          >
            Ready to Create with Culture?
          </motion.span>
          <Link to="/Waitlist">
            <motion.button
              className="px-[20px] sm:px-[28px] lg:px-[32px] py-[8px] sm:py-[10px] lg:py-[12px] bg-white text-[#ff7a50] font-semibold rounded-full shadow-md hover:shadow-lg transition duration-200 text-sm sm:text-lg lg:text-xl"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore a Demo Culture Kit
            </motion.button>
          </Link>
          <motion.p
            className="mt-3 sm:mt-4 lg:mt-6 text-white text-[12px] sm:text-[14px] lg:text-[15px] opacity-90 text-center"
            whileHover={{ scale: 1.01 }}
          >
            Start your cultural design journey today
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Landfifth;