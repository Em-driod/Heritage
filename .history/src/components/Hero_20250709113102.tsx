// ...imports and interface (unchanged)
import React, { useState, useEffect } from 'react';

interface Asset {
  src: string;
  label: string;
}

const Hero: React.FC = () => {
  const [selectedCulture, setSelectedCulture] = useState<string>('Yoruba');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedAssets, setGeneratedAssets] = useState<Asset[]>([]);
  const [showAmalaSpecificLoading, setShowAmalaSpecificLoading] = useState<boolean>(false);

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
      } else if (cultureParam === 'Japanese') {
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
    <div className="flex flex-col justify-center bg-gray-50 p-4 rounded-lg border border-gray-200 text-sm text-gray-800 space-y-4">
      <p><span className="font-semibold text-red-500">Symbol:</span> Symbolic of earthiness, heritage, and resilience.</p>
      <p><span className="font-semibold text-red-500">Color:</span> Dark Brown/Charcoal</p>
      <p><span className="font-semibold text-red-500">Made From:</span> Elubo (yam flour), sometimes cassava flour or plantain.</p>
      <p><span className="font-semibold text-red-500">Regions Known For It:</span> Deeply rooted in Oyo, Osun, Ibadan.</p>
      <p><span className="font-semibold text-red-500">Enjoyed With:</span> Ewedu, gbegiri, and obe ata.</p>
      <p className="italic text-gray-600">Sometimes called the “Yoruba national combo.”</p>
    </div>
  );

  return (
    <div className="py-4 sm:py-8 md:py-12 lg:py-24">
      <div
        className="relative flex justify-center items-center min-h-screen text-center px-0 sm:px-8 md:px-0 lg:pt-24 pt-16"
        style={{
          backgroundImage: "url('/cfd.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-purple-50 opacity-80 z-0" />
        
        <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-12 max-w-7xl">
          {/* Left Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-xl px-4 sm:px-0">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-medium leading-tight text-gray-900 mb-4">
              Ancient Stories.<br />Modern Design.
            </h1>
            <p className="text-4xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 mb-8">Instantly.</p>
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

          {/* Right Section Card + Aura */}
          <div className="relative w-full max-w-md lg:max-w-lg  lg:mt-0">
            {/* Glow effects behind the card */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 opacity-50 blur-2xl rounded-full z-[-1]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-green-400 opacity-30 blur-xl rounded-full z-[-1]" />
            <div className="absolute left-0 bottom-20 w-40 h-40 bg-yellow-400 opacity-40 blur-xl rounded-full z-[-1]" />

            {/* Actual Card */}
            <div className="bg-white rounded-xl shadow-2xl p-0 ">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">Select Culture</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {/* Culture Buttons */}
                {['Yoruba', 'Igbo', 'Japanese'].map((culture) => (
                  <button
                    key={culture}
                    className={`relative flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 overflow-hidden ${selectedCulture === culture ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}
                    onClick={() => handleCultureSelect(culture)}
                  >
                    <img src={`/${culture.toLowerCase()}.png`} alt={`${culture} Culture`} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center"></div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-center mb-6">
                <svg className="w-6 h-6 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>

              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Generated Assets</h2>
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <div className="space-y-4 mb-8">
                  {generatedAssets.map((asset) => (
                    <React.Fragment key={asset.label}>
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
                  <button className="w-8 h-8 rounded-full border border-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-yellow-palette-image.png')" }} />
                  <button className="w-8 h-8 rounded-full border border-gray-300 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-dark-palette-image.png')" }} />
                </div>
                <div className="flex space-x-2 text-sm">
                  <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Export</button>
                  <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded-md hover:bg-pink-50">Share</button>
                </div>
              </div>
            </div>
          </div>
          {/* End of Right Section */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
