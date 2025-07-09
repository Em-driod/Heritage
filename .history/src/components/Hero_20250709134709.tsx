import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';


interface Asset {
  src: string;
  label: string;
}

const Hero: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('Yoruba');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedAssets, setGeneratedAssets] = useState<Asset[]>([]);
  const [showAmalaSpecificLoading, setShowAmalaSpecificLoading] = useState<boolean>(false);

  // --- Typed Animation Variants ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 10, delay: 0.6 },
    },
  };

  // --- Fetching Logic ---
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
          { src: "/igbo-asset1.jpg", label: "Odinani" },
          { src: "/igbo-asset2.jpg", label: "Agbogho Mmuo" },
          { src: "/igbo-asset3.jpg", label: "Igbo Ukwu" },
        ];
      } else if (cultureParam === 'Japan') {
        assetsData = [
          { src: "/japanese-asset1.jpg", label: "Geisha" },
          { src: "/japanese-asset2.jpg", label: "Samurai" },
          { src: "/japanese-asset3.jpg", label: "Sakura" },
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
        <div key={index} className="flex items-center justify-between animate-pulse">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gray-200"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="flex space-x-2">
            <div className="h-8 bg-gray-200 rounded w-16"></div>
            <div className="h-8 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  );

  const AmalaSpecificLoader: React.FC = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-800 space-y-4"
    >
      <p><span className="font-semibold text-red-500">Symbol:</span> Symbolic of earthiness, heritage, and resilience.</p>
      <p><span className="font-semibold text-red-500">Color:</span> Dark Brown/Charcoal</p>
      <p><span className="font-semibold text-red-500">Made From:</span> Elubo (yam flour), sometimes cassava flour or plantain.</p>
      <p><span className="font-semibold text-red-500">Regions Known For It:</span> Deeply rooted in Oyo, Osun, Ibadan.</p>
      <p><span className="font-semibold text-red-500">Enjoyed With:</span> Ewedu, gbegiri, and obe ata.</p>
      <p className="italic text-gray-600">Sometimes called the “Yoruba national combo.”</p>
    </motion.div>
  );

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

        <motion.div
          className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-center mt-6 lg:items-start text-center lg:text-left max-w-full lg:max-w-xl px-4 sm:px-0"
            variants={containerVariants}
          >
            <motion.h1 className="text-5xl font-medium text-gray-900 mb-8" variants={itemVariants}>
              Ancient Stories.<br />Modern Design.
            </motion.h1>
            <motion.p className="text-5xl font-serif italic text-gray-900 mb-8" variants={itemVariants}>
              Instantly.
            </motion.p>
            <motion.p className="text-lg text-gray-700 mb-10 max-w-md" variants={itemVariants}>
              Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
            </motion.p>
            <motion.button
              className="flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Try Beta Free
            </motion.button>
          </motion.div>

          {/* Right Section */}
          <motion.div
            className="relative w-full max-w-md lg:max-w-lg"
            variants={cardVariants}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-purple-800 opacity-40 blur-2xl rounded-full z-[-1]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-400 opacity-30 blur-xl rounded-full z-[-1]" />
            <div className="absolute left-0 bottom-20 w-40 h-40 bg-yellow-400 opacity-40 blur-xl rounded-full z-[-1]" />

            <div className="bg-white rounded-xl shadow-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Select Culture</h2>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {['Yoruba', 'Igbo', 'Japan'].map((culture) => (
                  <motion.button
                    key={culture}
                    className={`relative flex items-center justify-center p-3 rounded-md text-sm font-medium h-20 overflow-hidden group
                      ${selectedCulture === culture ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                    onClick={() => handleCultureSelect(culture)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variants={itemVariants}
                  >
                    <img src={`/${culture.toLowerCase()}.png`} alt={`${culture} Culture`} className="absolute inset-0 w-full h-full object-cover rounded-md" />
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 rounded-md" />
                    <span className="relative z-10 text-white font-bold text-lg drop-shadow-md">
                      {culture}
                    </span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <SkeletonLoader />
                  </motion.div>
                ) : (
                  <motion.div
                    key="assets"
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {generatedAssets.map((asset) => (
                      <motion.div
                        key={asset.label}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 20, opacity: 0 }}
                        transition={{ duration: 0.3, type: 'spring', stiffness: 100, damping: 10 }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <img src={asset.src} alt={asset.label} className="w-12 h-12 rounded-lg object-cover" />
                            <span className="text-gray-800 font-medium">{asset.label}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Export</button>
                            <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Share</button>
                          </div>
                        </div>
                        {asset.label === 'Amala' && selectedCulture === 'Yoruba' && showAmalaSpecificLoading && (
                          <AnimatePresence>
                            <AmalaSpecificLoader />
                          </AnimatePresence>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
