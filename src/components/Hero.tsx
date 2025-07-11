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
  const [hoveredAsset, setHoveredAsset] = useState<string | null>(null);

  const fetchGeneratedAssets = (cultureParam: string) => {
    setIsLoading(true);

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
    }, 1500);
  };

  useEffect(() => {
    fetchGeneratedAssets(selectedCulture);
  }, [selectedCulture]);

  const handleCultureSelect = (cultureName: string) => {
    setSelectedCulture(cultureName);
    setHoveredAsset(null);
  };

  const AssetDropdown = ({ assetLabel }: { assetLabel: string }) => {
    switch (assetLabel) {
      case 'Obatala':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-2 bg-white w-74 p-2 rounded-lg border border-gray-200 shadow-sm text-sm text-gray-800 overflow-hidden"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-1 text-start min-w-0">
                <p className="mb-4"><span className='text-pink-400'>Symbol</span> obatala, tke Orisha of purity,   <br />wisdom, and peace.</p>
                <p className="mb-4"><span className='text-pink-400'>Color:</span>   Pure white </p>
                <p className="mb-4"> <span className='text-pink-400'>Why:</span> Whte symbolizes purity, clarity,and <br />divine intelligence.Obatala devotees wear <br />white head to toe</p>
                <p className="mb-4"> <span className='text-pink-400'>Seen:</span>Robes,beads,shrine cloth, and   <br />ceremonial food offerings (always white )</p>
              </div>
            </div>
          </motion.div>
        );
      case 'Amala':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-2 bg-white w-74 p-4 rounded-lg border border-gray-200 shadow-sm text-sm text-gray-800 overflow-hidden"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-1 text-start min-w-0">
                <p className="mb-4"><span className='text-pink-400'>Symbol</span>   Symbolic of earthiness heritage, <br />and resiliance</p>
                <p className="mb-4"><span className='text-pink-400'>Color:</span>   Dark brown/Charcoal. </p>
                <p className="mb-4"> <span className='text-pink-400'>Made From:</span> Elubo(yam flour)sometimes <br />chocolate flour or plaintain flour.</p>
                <p className="mb-4"> <span className='text-pink-400'>Regions Known For it:</span>Deeply rooted in <br />Oyo, osun, Ibadan Especially beloved in <br /> Ibadan, where people</p>
                <p className='mb-4'><span className='text-pink-400'>Enjoyed With </span> Typically served with ewedu,<br />gbegiri, and obe ata</p>
                <p>sometimes called the "yoruba national combo."</p>
              </div>
            </div>
          </motion.div>
        );
      case 'Oshun':
        return (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="mt-2 bg-white w-76 py-4 px-4 rounded-lg border border-gray-200 shadow-sm text-sm text-gray-800 overflow-hidden"
          >
            <div className="flex items-start space-x-3">
              <div className="flex-1 text-start min-w-0">
                <p className="mb-4"><span className='text-pink-400'>Symbol</span> Oshun, Orisha of beauty, fertility   <br />rivers and femininity.</p>
                <p className="mb-4"><span className='text-pink-400'>Color:</span>   Gold </p>
                <p className="mb-4"> <span className='text-pink-400'>Why:</span>Gold symbolizes wealth, feminity,<br />radiance, and sacred rivers</p>
                <p className="mb-4"> <span className='text-pink-400'>Seen:</span>Beads,gele(headwrap),festival   <br />gaments,river offerings.</p>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const SkeletonLoader = () => (
    <div className="space-y-4">
      {[1, 2, 3].map((_, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="h-3 sm:h-4 bg-gray-200 rounded w-16 sm:w-24 animate-pulse"></div>
          </div>
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16 animate-pulse"></div>
            <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16 animate-pulse"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  // New Skeleton for Color Palette
  const ColorPaletteSkeletonLoader = () => (
    <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
      <div className="flex space-x-1 sm:space-x-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 animate-pulse"></div>
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-200 animate-pulse"></div> {/* Third color */}
      </div>
      <div className="flex space-x-1 sm:space-x-2">
        <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16 animate-pulse"></div>
        <div className="h-6 sm:h-8 bg-gray-200 rounded w-12 sm:w-16 animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <motion.div
      className="py-4 sm:py-8 gap-7 md:py-12 lg:py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative flex justify-center items-center min-h-screen text-center sm:px-0"
        style={{
          backgroundImage: "url('/cfd.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-80 z-0" />

        {/* Updated Container Div */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-start gap-6 sm:gap-8 lg:gap-24 max-w-7xl lg:pl-10 lg:pr-10"> {/* Adjusted gap and added right padding */}
          {/* Left Section */}
          <motion.div
            className="flex flex-col items-center mt-4 sm:mt-6 lg:items-start text-center lg:text-left max-w-full lg:max-w-xl px-4 sm:px-0"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-manrope font-bold text-[70px] leading-[1] tracking-[-0.03em] text-gray-900 mb-6 sm:mb-8">
              Ancient Stories.<br />Modern Design.
            </h1>
            <motion.p
              className="text-3xl sm:text-4xl md:text-4xl italic           font-poppins font-normal text-[70px] leading-[1] tracking-[-0.03em]           text-gray-900 mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Instantly.
            </motion.p>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-10 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
            </motion.p>
            <motion.button
              className="flex items-center px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Try Beta Free
            </motion.button>
          </motion.div>

          {/* Right Section Card */}
          <motion.div
            className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl lg:mt-0 flex-grow" // Reduced max-w-2xl to max-w-xl
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Colored shadow effects */}
            <div className="absolute -inset-2 sm:-inset-3 z-0 opacity-70 pointer-events-none">
              {/* Purple shadow (right) - most prominent */}
              <motion.div
                className="absolute inset-y-0 right-0 w-full bg-purple-400 rounded-xl blur-xl shadow-lg"
                style={{ width: '100px', marginLeft:'500px', right: '-45px' }}
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Light green shadow (top) */}
              <motion.div
                className="absolute inset-x-0 top-0 h-full bg-green-100 rounded-xl blur-xl"
                style={{ height: '30px', top: '-10px' }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />

              {/* Light yellow shadow (left) */}
              <motion.div
                className="absolute inset-y-0 left-0 w-full bg-yellow-200 rounded-xl blur-xl"
                style={{ width: '30px', left: '-10px' }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>

            <motion.div
              className="relative bg-white rounded-xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 z-10 h-full" // Added h-full
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Select Culture</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8">
                {['Yoruba', 'Igbo', 'Japan'].map((culture) => (
                  <motion.button
                    key={culture}
                    className={`relative flex items-center justify-center p-2 sm:p-3 rounded-md text-xs sm:text-sm font-medium text-white h-16 sm:h-20 overflow-hidden transition-all duration-200
                      ${selectedCulture === culture ? 'ring-2 ring-purple-500 ring-offset-1 sm:ring-offset-2 scale-[1.02]' : 'hover:scale-[1.02]'}
                      ${culture === 'Japan' ? 'col-span-2 mx-auto w-32 sm:col-span-1 sm:mx-0' : ''} ` /* Added class for Japan centering */}
                    onClick={() => handleCultureSelect(culture)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={`/${culture.toLowerCase()}.png`} alt={`${culture} Culture`} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center"></div>
                    <span className="relative z-10 text-shadow"></span>
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

              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Generated Assets</h2>
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {generatedAssets.map((asset) => (
                    <div key={asset.label} className="group">
                      <motion.div
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                        onMouseEnter={() => setHoveredAsset(asset.label)}
                        onMouseLeave={() => setHoveredAsset(null)}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <motion.div
                            className="relative"
                            // Removed whileHover={{ scale: 1.05 }} from here
                          >
                            <img
                              src={asset.src}
                              alt={asset.label}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-gray-200"
                            />
                            <div className={`absolute inset-0 rounded-lg border-2 ${asset.label === 'Obatala' ? 'border-purple-300' : asset.label === 'Amala' ? 'border-red-300' : 'border-yellow-300'} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                          </motion.div>
                          <span className="text-sm sm:text-base text-gray-800 font-medium">{asset.label}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm">
                          <motion.button
                            className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
                            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Export
                          </motion.button>
                          <motion.button
                            className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
                            whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Share
                          </motion.button>
                        </div>
                      </motion.div>
                      <AnimatePresence>
                        {hoveredAsset === asset.label && <AssetDropdown assetLabel={asset.label} />}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              )}

              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Color Palette</h2>
              {isLoading ? ( // Apply skeleton loader here
                <ColorPaletteSkeletonLoader />
              ) : (
                <motion.div
                  className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex space-x-1 sm:space-x-2">
                    <motion.div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border border-gray-300 bg-cover bg-center"
                      style={{ backgroundImage: "url('/path-to-yellow-palette-image.png')" }}
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border bg-[#4B3621] bg-cover bg-center"
                      style={{ backgroundImage: "url('/path-to-dark-palette-image.png')" }}
                      whileHover={{ scale: 1.2 }}
                    />
                    {/* Added third color palette */}
                    <motion.div
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full   bg-[#FFD700] bg-cover bg-center"
                      style={{ backgroundImage: "url('/path-to-third-palette-image.png')" }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="flex space-x-1 sm:space-x-2 text-xs sm:text-sm">
                    <motion.button
                      className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
                      whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Export
                    </motion.button>
                    <motion.button
                      className="px-2 py-1 sm:px-3 sm:py-1 border border-gray-200 text-gray-600 rounded-md hover:bg-gray-100 transition-colors duration-150"
                      whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Share
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;