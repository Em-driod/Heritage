import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShare } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { LuMousePointer2 } from "react-icons/lu";

interface Asset {
  src: string;
  label: string;
}

interface ColorPalette {
  color?: string;
  hex?: string;
  label: string;
  img?: string; // add image URL or data
}

const Hero: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('Yoruba');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedAssets, setGeneratedAssets] = useState<Asset[]>([]);
  const [hoveredAsset, setHoveredAsset] = useState<string | null>(null);
  const [isYorubaHovered, setIsYorubaHovered] = useState<boolean>(false);
  const [isAutoHoverActive, setIsAutoHoverActive] = useState<boolean>(false);
  const userInteractedRef = useRef<boolean>(false);
  const [hoveredPalette, setHoveredPalette] = useState<number | null>(null);
  const [autoYorubaHover, setAutoYorubaHover] = useState<boolean>(false);
  const [colorPalette, setColorPalette] = useState<ColorPalette[]>([]);

  const fetchGeneratedAssets = (cultureParam: string) => {
    setIsLoading(true);

    setTimeout(() => {
      let assetsData: Asset[] = [];
      let paletteData: ColorPalette[] = [];

      if (cultureParam === 'Yoruba') {
        assetsData = [
          { src: "/obatala.png", label: "Obatala" },
          { src: "/amala.png", label: "Amala" },
          { src: "/osun.png", label: "Oshun" },
        ];
        paletteData = [
          { color: 'Pure White', hex: '#FFFFFF', label: 'Pure White' },
          { color: 'Dark Brown', hex: '#4B3621', label: 'Dark Brown' },
          { color: 'Gold', hex: '#FFD700', label: 'Gold' },
        ];
      } else if (cultureParam === 'Igbo') {
        assetsData = [
          { src: "/path-to-igbo-asset1.jpg", label: "Odinani" },
          { src: "/path-to-igbo-asset2.jpg", label: "Agbogho Mmuo" },
          { src: "/path-to-igbo-asset3.jpg", label: "Igbo Ukwu" },
        ];
        paletteData = [
          { img: '/brownshit.png', label: 'Red Ochre' },
          { color: 'Black', hex: '#000000', label: 'Black' },
          { color: 'White', hex: '#FFFFFF', label: 'White' },
        ];
      } else if (cultureParam === 'Japan') {
        assetsData = [
          { src: "/seamless.png", label: "Geisha" },
          { src: "/bird.png", label: "Samurai" },
          { src: "/hongkong.png", label: "Sakura" },
        ];
        paletteData = [
          { color: 'Cherry Blossom Pink', hex: '#FFB7C5', label: 'Cherry Blossom Pink' },
          { color: 'Indigo', hex: '#3F00FF', label: 'Indigo' },
          { color: 'Forest Green', hex: '#228B22', label: 'Forest Green' },
        ];
      }
      setGeneratedAssets(assetsData);
      setColorPalette(paletteData);
      setIsLoading(false);
      userInteractedRef.current = false;
    }, 1500);
  };

  useEffect(() => {
    fetchGeneratedAssets(selectedCulture);
  }, [selectedCulture]);

  useEffect(() => {
    if (generatedAssets.length === 3 && !userInteractedRef.current) {
      setIsAutoHoverActive(true);
      setAutoYorubaHover(true);
      // Show Yoruba hover for 1 second, then start asset popups (each for 1 second)
      const yorubaTimer = setTimeout(() => {
        setAutoYorubaHover(false);
        setHoveredAsset(generatedAssets[0].label);
        // Remove Obatala popup after 1 second
        setTimeout(() => setHoveredAsset(generatedAssets[1].label), 1000);
        // Remove Amala popup after 1 second
        setTimeout(() => setHoveredAsset(generatedAssets[2].label), 2000);
        // Remove Oshun popup after 1 second
        setTimeout(() => {
          setHoveredAsset(null);
          setIsAutoHoverActive(false);
        }, 3000);
      }, 1000);
      return () => {
        clearTimeout(yorubaTimer);
        setIsAutoHoverActive(false);
        setAutoYorubaHover(false);
      };
    }
  }, [generatedAssets, userInteractedRef.current]);

  const handleCultureSelect = (cultureName: string) => {
    setSelectedCulture(cultureName);
    setHoveredAsset(null);
    userInteractedRef.current = false;
    setIsAutoHoverActive(false);
    setAutoYorubaHover(false);
  };

  const handleMouseEnterAsset = (assetLabel: string) => {
    userInteractedRef.current = true;
    setHoveredAsset(assetLabel);
    setIsAutoHoverActive(false);
  };

  const handleMouseLeaveAsset = () => {
    setHoveredAsset(null);
  };

  const AssetDropdown = ({ assetLabel }: { assetLabel: string }) => {
    let content = null;
    switch (assetLabel) {
      case 'Obatala':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0 ">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Obatala, the Orisha of purity, <br />wisdom, and peace.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> Pure white </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> White symbolizes purity, clarity, and <br />divine intelligence. Obatala devotees wear <br />white head to toe</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Robes, beads, shrine cloth, and <br />ceremonial food offerings (always white )</p>
            </div>
          </div>
        );
        break;
      case 'Amala':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4"><span className='text-[#EF4444]'>Symbol</span> Symbolic of earthiness heritage, <br />and resilience</p>
              <p className="mb-4"><span className='text-[#EF4444]'>Color:</span> Dark brown/Charcoal. </p>
              <p className="mb-4"> <span className='text-[#EF4444]'>Made From:</span> Elubo (yam flour), sometimes <br />chocolate flour or plaintain flour.</p>
              <p className="mb-4"> <span className='text-[#EF4444]'>Regions Known For it:</span> Deeply rooted in <br />Oyo, Osun, Ibadan. Especially beloved in <br /> Ibadan, where people</p>
              <p className='mb-4'><span className='text-[#EF4444]'>Enjoyed With </span> Typically served with ewedu,<br />gbegiri, and obe ata</p>
              <p>sometimes called the "yoruba national combo."</p>
            </div>
          </div>
        );
        break;
      case 'Oshun':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4"><span className='text-[#EF4444]'>Symbol</span> Oshun, Orisha of beauty, fertility, <br />rivers and femininity.</p>
              <p className="mb-4"><span className='text-[#EF4444]'>Color:</span> Gold </p>
              <p className="mb-4"> <span className='text-[#EF4444]'>Why:</span> Gold symbolizes wealth, femininity,<br />radiance, and sacred rivers</p>
              <p className="mb-4"> <span className='text-[#EF4444]'>Seen:</span> Beads, gele (headwrap), festival <br />garments, river offerings.</p>
            </div>
          </div>
        );
        break;
      case 'Odinani':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Odinani, the traditional Igbo religion, <br />emphasizes a supreme being (Chukwu) and <br />numerous deities (Alusi) representing natural forces.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> Red Ochre </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> Represents earth, blood, and vital force. Used in rituals and body adornment.</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Traditional art, ceremonial masks, body paint, shrine decorations.</p>
            </div>
          </div>
        );
        break;
      case 'Agbogho Mmuo':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Agbogho Mmuo (Maiden Spirit) masks <br />represent ideal feminine beauty and purity <br />of deceased maidens.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> White </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> Symbolizes purity, beauty, and the spiritual realm.</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Annual dry season festivals, particularly among the Igbo of northern Igboland.</p>
            </div>
          </div>
        );
        break;
      case 'Igbo Ukwu':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Igbo Ukwu artifacts showcase <br />sophisticated bronze casting and represent <br />ancient Igbo civilization and artistry.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> Bronze/Copper </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> Reflects the material of the artifacts, signifying wealth and advanced craftsmanship.</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Discovered archaeological sites in <br />Igbo Ukwu, Nigeria, dating back to the 9th century AD.</p>
            </div>
          </div>
        );
        break;
      case 'Geisha':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Geisha embody traditional Japanese <br />arts, beauty, and entertainment, acting as <br />cultural custodians.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> Various, often vibrant </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> Their kimonos and makeup feature <br />diverse colors, often symbolizing seasons or <br />specific occasions.</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Traditional tea houses, cultural <br />performances, and festivals in Japan, <br />especially Kyoto.</p>
            </div>
          </div>
        );
        break;
      case 'Samurai':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Samurai represent loyalty, honor, <br />discipline, and martial prowess in feudal <br />Japan.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> Indigo, Black, Crimson </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> These colors were commonly used in <br />their armor and clothing, symbolizing strength, <br />dignity, and battle readiness.</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Historical artworks, traditional <br />dramas, and museums showcasing feudal <br />Japanese history.</p>
            </div>
          </div>
        );
        break;
      case 'Sakura':
        content = (
          <div className="flex items-start space-x-3">
            <div className="flex-1 text-start min-w-0">
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Symbol</span> Sakura (cherry blossoms) symbolize <br />the fleeting nature of life, beauty, and renewal <br />in Japanese culture.</p>
              <p className="mb-4 text-gray-700"><span className='text-[#EF4444]'>Color:</span> Pink and White </p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Why:</span> Represents the delicate and transient <br />beauty of the blossoms themselves.</p>
              <p className="mb-4 text-gray-700"> <span className='text-[#EF4444]'>Seen:</span> Across Japan during spring, in <br />traditional art, textiles, and everyday <br />design.</p>
            </div>
          </div>
        );
        break;
      default:
        return null;
    }
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="absolute left-1/2 z-40 -translate-x-1/2 top-[-10px] sm:top-[-20px] bg-white w-80 p-4 rounded-lg border border-red-200 shadow-xl text-sm text-gray-800"
        style={{ pointerEvents: 'auto' }}
      >
        {content}
      </motion.div>
    );
  };

  const ColorPaletteSkeletonLoader = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
      <div className="flex space-x-1 sm:space-x-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 animate-pulse"></div>
      </div>
      <div className="flex space-x-1 sm:space-x-2">
        <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16 animate-pulse"></div>
        <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16 animate-pulse"></div>
      </div>
    </div>
  );

  const SkeletonLoader = () => (
    <div className="space-y-3 sm:space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-100 animate-pulse">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200" />
            <div className="h-4 sm:h-5 bg-gray-200 rounded w-20 sm:w-32" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2">
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16" />
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div
      className="py-4 sm:py-8 gap-0 lg:py-24 overflow-hidden relative min-h-screen mt-20 px-4 sm:px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Blur overlay that appears during auto hover */}
      <AnimatePresence>
        {isAutoHoverActive && (
          <motion.div
            className="fixed inset-0 z-20 bg-black/20" // Increased opacity for better blur effect
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      <div className=" flex flex-col lg:flex-row justify-center lg:ml-0  items-center min-h-screen text-center sm:px-0">
        {/* Left Section */}
<motion.div
  className={`relative flex flex-col items-center h-auto lg:h-[678px] -translate-y-5 sm:mt-6 lg:items-start text-center -translate-x-0 lg:-translate-x-8 lg:text-left px-2 sm:px-0 rounded-xl overflow-visible z-10 w-full max-w-sm sm:max-w-none lg:w-[750px] mx-4 sm:mx-0`}
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18 } }
  }}
>
  {/* Background image for the left section */}
  <div
    className="absolute h-full w-full z-0 top-0"
    style={{
      backgroundImage: "url('/meve.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      margin: 0,
      filter: isAutoHoverActive ? 'blur(4px)' : 'none',
      transition: 'filter 0.3s ease'
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-80" />
  </div>
  {/*yellow color*/}
  <div
    className="absolute"
    style={{
      top: '50%',
      right: '0',
      left: 'auto',
      transform: 'translateY(-10%)',
      width: '180px',
      height: '180px',
      background: 'radial-gradient(circle, #ffe066 60%, transparent 100%)',
      filter: 'blur(92px)',
      zIndex: 2,
      pointerEvents: 'none',
    }}
  />

  <div className="z-10 ml-0 lg:ml-6 p-4 sm:p-6 lg:p-8 lg:pl-10">
    <motion.h1
      className="text-4xl sm:text-4xl sm:w-screen flex flex-col mt-8 lg:mt-18 md:text-6xl lg:text-7xl font-manrope leading-[1.1] tracking-[-0.03em] text-gray-900 mb-2 sm:mb-2 lg:ml-20 text-center lg:text-left" /* Adjusted margin and text alignment */
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontWeight: 700,
        filter: isAutoHoverActive ? 'blur(2px)' : 'none',
        transition: 'filter 0.3s ease'
      }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14 } }
      }}
    >
      Ancient Stories.<br /> <span className='mt-4 z-[9998]'>Modern Design.</span>
    </motion.h1>
    <motion.p
      className=" text-4xl sm:text-5xl italic md:text-6xl lg:text-7xl font-manrope leading-[1.1] tracking-[-0.03em] text-gray-900 mb-2 sm:mb-2 lg:ml-20 text-center lg:text-left" /* Adjusted margin and text alignment */
      style={{
        fontFamily: 'Instrument Serif, serif',
        fontWeight: 500,
        filter: isAutoHoverActive ? 'blur(2px)' : 'none',
        transition: 'filter 0.3s ease'
      }}
      animate={{
        opacity: 1,
        x: [0, -5, 5, -5, 5, 0],
        rotate: [0, 0, 0, 0, 0, 0],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        repeatType: 'loop',
        times: [0, 0.15, 0.3, 0.45, 0.6, 1],
        ease: 'easeInOut',
        delay: 0.8
      }}
    >
      Instantly.
    </motion.p>
  <motion.p
    className="text-sm md:text-lg lg:w-full w-full text-gray-600 mb-8 sm:mb-10 max-w-sm lg:max-w-md font-inter mx-auto text-center lg:ml-16 lg:text-left lg:mx-0"
    style={{
      filter: isAutoHoverActive ? 'blur(2px)' : 'none',
      transition: 'filter 0.3s ease'
    }}
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14, delay: 0.4 } }
    }}
  >
    Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
  </motion.p>
    <Link to="/waitlist">
      <motion.button
        className="flex items-center lg:py-4 lg:px-20 px-12 py-6 sm:px-3 sm:py-3  bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base mx-auto lg:ml-12 -mb-10 sm:-mb-12 relative z-50 transform hover:scale-105 active:scale-95" /* Centered on small screens, left aligned on large, negative margin for mobile, and higher z-index */
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          filter: isAutoHoverActive ? 'blur(2px)' : 'none',
          transition: 'filter 0.3s ease'
        }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 14, delay: 0.6 } }
        }}
      >
        <img className='w-4 h-4 mr-2' src="/flower.png" alt="" />
        Try Beta Free
      </motion.button>
    </Link>
  </div>
</motion.div>

        {/* Right Section Card */}
 <motion.div
  className="relative max-w-sm sm:max-w-lg h-auto lg:h-[678px] lg:max-w-2xl lg:mt-0 flex-grow mt-[20px] -translate-y-2 -translate-x-0 lg:-translate-x-10 z-30 w-full lg:w-[550px] mx-2 sm:mx-0"
  initial={{ x: 20, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  {/* Colored shadow effects */}
  <div className="absolute -inset-2 sm:-inset-3 z-0 opacity-70 pointer-events-none">
    <motion.div
      className="absolute inset-y-0 bg-purple-400 rounded-xl blur-xl shadow-lg w-[100px] left-[-45px] sm:left-auto sm:ml-[300px] lg:right-[-45px]"
      animate={{ opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-y-0 bg-purple-400 rounded-xl blur-xl shadow-lg w-[100px] right-[-45px] sm:hidden"
      animate={{ opacity: [0.5, 0.7, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute inset-x-0 top-0 h-full w bg-green-100 rounded-xl blur-xl"
      style={{ height: '30px', top: '-10px' }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute inset-y-8 left-0 w-full bg-yellow-200 rounded-full blur-xl"
      style={{ width: '30px', left: '-10px' }}
      animate={{ opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    />
  </div>

  <motion.div
    className="relative bg-white rounded-xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 z-30 h-full"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <h2 className="text-base sm:text-lg md:text-xl text-start font-semibold text-gray-800 mb-4 sm:mb-6">Select Culture</h2>
    <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
      {['Yoruba', 'Igbo', 'Japan'].map((culture) => (
        <motion.button
          key={culture}
          className={`
            relative flex items-center justify-center p-2 sm:p-3 rounded-md text-xs sm:text-sm font-medium text-white h-16 sm:h-20 overflow-hidden transition-all duration-200
            ${selectedCulture === culture ? 'scale-[1.02]' : 'hover:scale-[1.02]'}
          `}
          onClick={() => handleCultureSelect(culture)}
          onMouseEnter={() => culture === 'Yoruba' && setIsYorubaHovered(true)}
          onMouseLeave={() => culture === 'Yoruba' && setIsYorubaHovered(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {culture === 'Yoruba' && (isYorubaHovered || autoYorubaHover) ? (
            <img src="/Hover state.png" alt="Yoruba Culture Hover" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200" />
          ) : (
            <img src={`/${culture.toLowerCase()}.png`} alt={`${culture} Culture`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-200" />
          )}
          <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-200"></div>
        </motion.button>
      ))}
    </div>

    <motion.div
      className="flex flex-col items-center mb-4 sm:mb-6"
      animate={{ y: [0, 5, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-1 sm:mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </motion.div>

    {isLoading ? (
      <>
        <motion.h2
          className="text-base items-start sm:text-lg md:text-xl font-semibold text-gray-300 mb-3 sm:mb-4"
          animate={{ opacity: [1, 0.5, 1], scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          Heritengine processing
        </motion.h2>
        <SkeletonLoader />
      </>
    ) : (
      <div className="bg-gray-50 rounded-lg lg:px-4 sm:px-0 lg:gap-0 sm:gap-10 py-4 mb-6 sm:mb-8">
        <h2 className="text-xs font-normal text-gray-600 mb-3 sm:text-xs sm:mb-4 text-left">Generated Assets</h2>
        <div className="space-y-3 sm:space-y-4">
          {generatedAssets.map((asset) => (
            <div key={asset.label} className="group relative">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="relative"
                    onMouseEnter={() => handleMouseEnterAsset(asset.label)}
                    onMouseLeave={handleMouseLeaveAsset}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {isAutoHoverActive && hoveredAsset === asset.label && (
                      <motion.div
                        className="absolute top-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <LuMousePointer2 size={28} color="#F59E42" style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.18))' }} />
                        <span className="mt-2 px-2 py-0.5 bg-white text-xs font-semibold rounded shadow text-gray-700 border border-gray-200">Herit</span>
                      </motion.div>
                    )}
                    <img
                      src={asset.src}
                      alt={asset.label}
                      className="w-10 h-10 rounded-lg object-cover border border-gray-200 sm:w-12 sm:h-12"
                    />
                    <div className={`absolute inset-0 rounded-lg border-2 ${asset.label === 'Obatala' ? 'border-purple-300' : asset.label === 'Amala' ? 'border-red-300' : 'border-yellow-300'} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                  </motion.div>
                  <span className="text-sm font-medium text-gray-800 sm:text-base">{asset.label}</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm">
                  <motion.button
                    className="px-2 py-1 text-gray-600 rounded-md transition-colors duration-150 hover:bg-gray-100 sm:px-3 sm:py-1"
                    whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="flex items-center rounded-md border border-pink-200 bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800">
                      <span className="mr-1"><img src="/Vector.png" alt="" /></span>Export
                    </button>
                  </motion.button>
                  <motion.button
                    className="px-2 py-1 text-gray-600 rounded-md transition-colors duration-150 hover:bg-gray-100 sm:px-3 sm:py-1"
                    whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button className="flex items-center rounded-md border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-500">
                      <FaShare /><span className="mr-1"></span>Share
                    </button>
                  </motion.button>
                </div>
              </div>
              <AnimatePresence>
                {hoveredAsset === asset.label && <AssetDropdown assetLabel={asset.label} />}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    )}

    {isLoading ? (
      <ColorPaletteSkeletonLoader />
    ) : (
      <div className="bg-gray-50 rounded-lg px-4 py-4">
        <h2 className="text-xs font-normal text-gray-600 mb-3 text-left sm:mb-4 sm:text-xs">Color Palette</h2>
        <motion.div
          className="flex items-center justify-between space-x-2"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex space-x-1 sm:space-x-2">
            {colorPalette.map((palette, index) => (
              <motion.div
                key={index}
                className="relative h-6 w-6 rounded-full border border-gray-300 sm:h-6 sm:w-6"
                style={{ backgroundColor: palette.hex }}
                whileHover={{ scale: 1.2 }}
                onMouseEnter={() => setHoveredPalette(index)}
                onMouseLeave={() => setHoveredPalette(null)}
              >
                <AnimatePresence>
                  {hoveredPalette === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-8 z-50 -translate-x-1/2 whitespace-nowrap rounded border border-gray-200 bg-white px-3 py-1 text-center text-xs text-gray-700 shadow-lg"
                    >
                      {palette.label} ({palette.hex})
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <div className="flex space-x-1 text-xs sm:space-x-2 sm:text-sm">
            <motion.button
              className="rounded-md px-2 py-1 text-gray-600 transition-colors duration-150 hover:bg-gray-100 sm:px-3 sm:py-1"
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="flex items-center rounded-md border border-pink-200 bg-pink-100 px-2 py-1 text-xs font-medium text-pink-800">
                <span className="mr-1"><img src="/Vector.png" alt="" /></span>Export
              </button>
            </motion.button>
            <motion.button
              className="rounded-md px-2 py-1 text-gray-600 transition-colors duration-150 hover:bg-gray-100 sm:px-3 sm:py-1"
              whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="flex items-center rounded-md border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-500"><FaShare /><span className="mr-1"></span>Share</button>
            </motion.button>
          </div>
        </motion.div>
      </div>
    )}
  </motion.div>
</motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;