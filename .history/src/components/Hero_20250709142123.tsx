import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Asset {
  src: string;
  label: string;
}

const Hero: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('Yoruba');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedAssets, setGeneratedAssets] = useState<Asset[]>([]);
  const [showAmalaSpecificLoading, setShowAmalaSpecificLoading] = useState<boolean>(false);
  const [isHoveringTryButton, setIsHoveringTryButton] = useState<boolean>(false);

  const fetchGeneratedAssets = (cultureParam: string) => {
    setIsLoading(true);
    setShowAmalaSpecificLoading(false);

    setTimeout(() => {
      let assetsData: Asset[] = [];
      if (cultureParam === 'Yoruba') {
        assetsData = [
          { src: "/obatala.png", label: "Obatala" },
          { src: "/amala.png", label: "Amala" },
          { src: "/osun.png", label: "Oshun" },
        ];
      } else if (cultureParam === 'Igbo') {
        assetsData = [
          { src: "/path-to-igbo-asset1.jpg", label: "Odinani" },
          { src: "/path-to-igbo-asset2.jpg", label: "Agbogho Mmuo" },
          { src: "/path-to-igbo-asset3.jpg", label: "Igbo Ukwu" },
        ];
      } else if (cultureParam === 'Japan') {
        assetsData = [
          { src: "/path-to-japanese-asset1.jpg", label: "Geisha" },
          { src: "/path-to-japanese-asset2.jpg", label: "Samurai" },
          { src: "/path-to-japanese-asset3.jpg", label: "Sakura" },
        ];
      }
      setGeneratedAssets(assetsData);
      setIsLoading(false);

      if (cultureParam === 'Yoruba') {
        setShowAmalaSpecificLoading(true);
        setTimeout(() => setShowAmalaSpecificLoading(false), 5000);
      }
    }, 1500);
  };

  useEffect(() => {
    fetchGeneratedAssets(selectedCulture);
  }, [selectedCulture]);

  const handleCultureSelect = (cultureName: string) => {
    setSelectedCulture(cultureName);
  };

  const SkeletonLoader: React.FC = () => (
    <div className="space-y-4">
      {[1, 2, 3].map((_, index) => (
        <motion.div 
          key={index}
          className="flex items-center justify-between"
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: index * 0.15 }
          }}
        >
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-12 h-12 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="h-4 rounded w-24 bg-gradient-to-r from-gray-100 to-gray-200"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.3
              }}
            />
          </div>
          <div className="flex space-x-2">
            <motion.div 
              className="h-8 rounded w-16 bg-gradient-to-r from-gray-100 to-gray-200"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.6
              }}
            />
            <motion.div 
              className="h-8 rounded w-16 bg-gradient-to-r from-gray-100 to-gray-200"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.9
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );

  const AmalaSpecificLoader: React.FC = () => (
    <motion.div 
      className="flex flex-col justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200 text-sm text-gray-800 space-y-4 shadow-inner"
      initial={{ opacity: 0, height: 0 }}
      animate={{ 
        opacity: 1, 
        height: 'auto',
        transition: { 
          type: 'spring',
          damping: 15,
          stiffness: 100
        }
      }}
      exit={{ 
        opacity: 0, 
        height: 0,
        transition: { 
          duration: 0.3 
        }
      }}
    >
      {[
        { label: "Symbol", value: "Symbolic of earthiness, heritage, and resilience" },
        { label: "Color", value: "Dark Brown/Charcoal" },
        { label: "Made From", value: "Elubo (yam flour), sometimes cassava flour or plantain" },
        { label: "Regions Known For It", value: "Deeply rooted in Oyo, Osun, Ibadan" },
        { label: "Enjoyed With", value: "Ewedu, gbegiri, and obe ata" }
      ].map((item, index) => (
        <motion.p 
          key={item.label}
          initial={{ opacity: 0, x: -10 }}
          animate={{ 
            opacity: 1, 
            x: 0,
            transition: { delay: 0.1 + (index * 0.1) }
          }}
        >
          <span className="font-semibold text-red-500">{item.label}:</span> {item.value}
        </motion.p>
      ))}
      <motion.p 
        className="italic text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 0.6 }
        }}
      >
        Sometimes called the "Yoruba national combo."
      </motion.p>
    </motion.div>
  );

  const cultureVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }),
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const assetVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 100
      }
    },
    exit: { opacity: 0, x: 20 }
  };

  const glowVariants = {
    initial: { opacity: 0.1 },
    animate: (i: number) => ({
      opacity: [0.1, 0.2, 0.1],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.5
      }
    })
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const tryButtonVariants = {
    initial: { 
      background: 'linear-gradient(to right, #ef4444, #f97316)',
      boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.3), 0 2px 4px -1px rgba(239, 68, 68, 0.1)'
    },
    hover: {
      background: 'linear-gradient(to right, #dc2626, #ea580c)',
      boxShadow: '0 10px 15px -3px rgba(220, 38, 38, 0.4), 0 4px 6px -2px rgba(220, 38, 38, 0.2)',
      scale: 1.05
    },
    tap: {
      scale: 0.98,
      boxShadow: '0 2px 3px -1px rgba(239, 68, 68, 0.3), 0 1px 2px -1px rgba(239, 68, 68, 0.1)'
    }
  };

  const arrowVariants = {
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="py-4 sm:py-8 md:py-12 lg:py-24 overflow-hidden">
      <div
        className="relative flex justify-center items-center min-h-screen text-center"
        style={{
          backgroundImage: "url('/cfd.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-80 z-0" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-100"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [0.5, 0.8, 0.5],
              transition: {
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: Math.random() * 5
              }
            }}
          />
        ))}
        
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 max-w-7xl px-4 sm:px-6">
          {/* Left Section */}
          <motion.div 
            className="flex flex-col items-center mt-6 lg:items-start text-center lg:text-left max-w-full lg:max-w-xl"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900 mb-8"
              variants={titleVariants}
              custom={0}
            >
              Ancient Stories.<br />Modern Design.
            </motion.h1>
            <motion.p 
              className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 mb-8"
              variants={titleVariants}
              custom={1}
            >
              Instantly.
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl text-gray-700 mb-10 max-w-md"
              variants={titleVariants}
              custom={2}
            >
              Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
            </motion.p>
            <motion.button 
              className="flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg"
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              variants={tryButtonVariants}
              onHoverStart={() => setIsHoveringTryButton(true)}
              onHoverEnd={() => setIsHoveringTryButton(false)}
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Try Beta Free
              <AnimatePresence>
                {isHoveringTryButton && (
                  <motion.span 
                    className="ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

          {/* Right Section Card + Aura */}
          <motion.div 
            className="relative w-full max-w-md lg:max-w-lg lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.4,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
          >
            {/* Glow effects behind the card */}
            <motion.div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-purple-800 rounded-full z-[-1] blur-2xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              custom={0}
            />
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-400 rounded-full z-[-1] blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              custom={1}
            />
            <motion.div 
              className="absolute left-0 bottom-20 w-40 h-40 bg-yellow-400 rounded-full z-[-1] blur-xl"
              variants={glowVariants}
              initial="initial"
              animate="animate"
              custom={2}
            />

            {/* Actual Card */}
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 backdrop-blur-sm bg-opacity-90"
              whileHover={{ 
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300,
                damping: 15
              }}
            >
              <motion.h2 
                className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.6 }
                }}
              >
                Select Culture
              </motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {/* Culture Buttons */}
                {['Yoruba', 'Igbo', 'Japan'].map((culture, i) => (
                  <motion.button
                    key={culture}
                    className={`relative flex items-center justify-center p-3 rounded-xl text-sm font-medium text-white h-20 overflow-hidden ${selectedCulture === culture ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                    onClick={() => handleCultureSelect(culture)}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileTap="tap"
                    variants={cultureVariants}
                  >
                    <img 
                      src={`/${culture.toLowerCase()}.png`} 
                      alt={`${culture} Culture`} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-10 transition duration-300 flex items-center justify-center">
                      <motion.span 
                        className="text-white font-medium text-sm drop-shadow-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                      >
                        {culture}
                      </motion.span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <motion.div 
                className="flex flex-col items-center mb-6"
                variants={arrowVariants}
                animate="bounce"
              >
                <svg className="w-6 h-6 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>

              <motion.h2 
                className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.7 }
                }}
              >
                Generated Assets
              </motion.h2>
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <div className="space-y-4 mb-8">
                  <AnimatePresence mode="wait">
                    {generatedAssets.map((asset) => (
                      <motion.div
                        key={asset.label}
                        variants={assetVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        layout
                        className="bg-gray-50 rounded-lg p-3"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <motion.img 
                              src={asset.src} 
                              alt={asset.label} 
                              className="w-12 h-12 rounded-lg object-cover border border-gray-200"
                              whileHover={{ scale: 1.1 }}
                              transition={{ type: 'spring', stiffness: 400 }}
                            />
                            <span className="text-gray-800 font-medium">{asset.label}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 text-sm">
                            <motion.button 
                              className="px-4 py-1.5 bg-white border border-pink-200 text-pink-600 rounded-lg hover:bg-pink-50 flex items-center"
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: 'rgba(251, 207, 232, 0.5)'
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                              Export
                            </motion.button>
                            <motion.button 
                              className="px-4 py-1.5 bg-white border border-pink-200 text-pink-600 rounded-lg hover:bg-pink-50 flex items-center"
                              whileHover={{ 
                                scale: 1.05,
                                backgroundColor: 'rgba(251, 207, 232, 0.5)'
                              }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                              </svg>
                              Share
                            </motion.button>
                          </div>
                        </div>
                        <AnimatePresence>
                          {asset.label === 'Amala' && selectedCulture === 'Yoruba' && showAmalaSpecificLoading && (
                            <AmalaSpecificLoader />
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}

              <motion.h2 
                className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.8 }
                }}
              >
                Color Palette
              </motion.h2>
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 bg-gray-50 rounded-lg p-4"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.9 }
                }}
              >
                <div className="flex space-x-3">
                  {['#F59E0B', '#1F2937', '#7C3AED', '#10B981'].map((color, i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white shadow-md cursor-pointer"
                      style={{ backgroundColor: color }}
                      initial={{ scale: 0 }}
                      animate={{ 
                        scale: 1,
                        transition: { 
                          delay: 0.9 + (i * 0.1),
                          type: 'spring',
                          stiffness: 500,
                          damping: 15
                        }
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        y: -5,
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2)'
                      }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
                <div className="flex space-x-2 text-sm">
                  <motion.button 
                    className="px-4 py-1.5 bg-white border border-pink-200 text-pink-600 rounded-lg hover:bg-pink-50 flex items-center"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(251, 207, 232, 0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Export
                  </motion.button>
                  <motion.button 
                    className="px-4 py-1.5 bg-white border border-pink-200 text-pink-600 rounded-lg hover:bg-pink-50 flex items-center"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(251, 207, 232, 0.5)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;