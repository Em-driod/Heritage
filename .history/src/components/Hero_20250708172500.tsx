import React, { useState, useEffect } from 'react';

// Define the type for an asset, which is good practice in TypeScript
interface Asset {
  src: string;
  label: string;
}

const Hero: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('Yoruba'); // Default to Yoruba
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedAssets, setGeneratedAssets] = useState<Asset[]>([]); // State to hold generated assets
  const [showAmalaSpecificLoading, setShowAmalaSpecificLoading] = useState<boolean>(false); // New state for Amala specific loading

  // Function to simulate fetching assets based on culture
  const fetchGeneratedAssets = (cultureParam: string) => {
    setIsLoading(true); // Set general loading to true when fetching starts

    // Reset Amala specific loading if we're not loading Yoruba or if it's already visible
    // This helps ensure the Amala specific loader doesn't flash if you quickly switch back and forth
    // or if it was still active from a previous load.
    setShowAmalaSpecificLoading(false);


    // Simulate an API call or data loading delay
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
      } else if (cultureParam === 'Japanese') {
        assetsData = [
          { src: "/path-to-japanese-asset1.jpg", label: "Geisha" },
          { src: "/path-to-japanese-asset2.jpg", label: "Samurai" },
          { src: "/path-to-japanese-asset3.jpg", label: "Sakura" },
        ];
      }
      setGeneratedAssets(assetsData);
      setIsLoading(false); // Set general loading to false when fetching completes

      // Trigger Amala specific loading ONLY if Yoruba was selected AND it's the first time
      // or a subsequent load where we want this specific effect.
      if (cultureParam === 'Yoruba') {
        setShowAmalaSpecificLoading(true);
        setTimeout(() => {
          setShowAmalaSpecificLoading(false); // Make it disappear after 2 seconds
        }, 2000); // 2 seconds
      }

    }, 1500); // Simulate 1.5 second general loading time
  };

  // Effect to fetch assets when the component mounts or selectedCulture changes
  useEffect(() => {
    fetchGeneratedAssets(selectedCulture);
  }, [selectedCulture]);

  const handleCultureSelect = (cultureName: string) => {
    setSelectedCulture(cultureName);
  };

  // Skeleton Loader for Generated Assets (general purpose)
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

  // Specific Amala Loading Component - now with an image!
  const AmalaSpecificLoader: React.FC = () => (
    <div className="flex flex-col items-center justify-center ">
      <img
        src="/bounce.png" // <--- REPLACE WITH YOUR AMALA LOADING GIF/IMAGE PATH
        alt="Generating Amala"
        className="w-72 h-48 animate-pulse" // You can adjust width/height and add animation
      />
      {/* You can still keep a text label if desired, or remove it */}
      <div className="text-gray-500 mt-2 text-sm">Generating Amala...</div>
    </div>
  );


  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-24">
      <div
        className="relative flex justify-center items-center min-h-screen text-center px-4 sm:px-8 md:px-16 lg:px-24 py-16"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Optional overlay to add a subtle tint over the background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-80 z-0" />

        {/* Main content wrapper */}
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 max-w-7xl">
          {/* Left Section: Text and Button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-xl px-4 sm:px-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 mb-4">
              Ancient Stories.
              <br />Modern Design.
            </h1>
            <p className="text-5xl md:text-6xl lg:text-7xl font-serif italic text-gray-900 mb-8">
              Instantly.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-md">
              Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
            </p>
            <button className="flex items-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              Try Beta Free
            </button>
          </div>

          {/* Right Section: White Card with UI Elements */}
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Select Culture</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {/* Yoruba Culture Button with Image */}
              <button
                className={`relative flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 overflow-hidden ${selectedCulture === 'Yoruba' ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                onClick={() => handleCultureSelect('Yoruba')}
              >
                <img src="/yoruba.png" alt="Yoruba Culture" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
                  {/* Yoruba */}
                </div>
              </button>

              {/* Igbo Culture Button with Image */}
              <button
                className={`relative flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 overflow-hidden ${selectedCulture === 'Igbo' ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                onClick={() => handleCultureSelect('Igbo')}
              >
                <img src="/igbo.png" alt="Igbo Culture" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {/* Igbo */}
                </div>
              </button>

              {/* Japanese Culture Button with Image */}
              <button
                className={`relative flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 overflow-hidden ${selectedCulture === 'Japanese' ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                onClick={() => handleCultureSelect('Japanese')}
              >
                <img src="/japan.png" alt="Japanese Culture" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {/* Japanese */}
                </div>
              </button>
            </div>

            <div className="flex flex-col items-center mb-6">
              <svg className="w-6 h-6 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Her</span>
            </div>

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Generated Assets</h2>
            {/* The general skeleton loader still appears first */}
            {isLoading ? (
                 <SkeletonLoader />
            ) : (
              <div className="space-y-4 mb-8">
                {generatedAssets.map((asset) => ( // Changed from { src, label } to asset for clarity
                  <React.Fragment key={asset.label}> {/* Using asset.label for key */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={asset.src} alt={asset.label} className="w-12 h-12 rounded-lg object-cover" />
                        <span className="text-gray-800 font-medium">{asset.label}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 text-sm">
                        <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Export</button>
                        <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Share</button>
                      </div>
                    </div>
                    {/* Insert Amala specific loading image here */}
                    {asset.label === 'Amala' && selectedCulture === 'Yoruba' && showAmalaSpecificLoading && (
                      <AmalaSpecificLoader />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Color Palette</h2>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex space-x-2">
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/path-to-yellow-palette-image.png')" }}
                  aria-label="Yellow Color Palette"
                ></button>
                <button
                  className="w-8 h-8 rounded-full border border-gray-300 bg-cover bg-center"
                  style={{ backgroundImage: "url('/path-to-dark-palette-image.png')" }}
                  aria-label="Dark Gray Color Palette"
                ></button>
              </div>
              <div className="flex space-x-2 text-sm">
                <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Export</button>
                <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Share</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;