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
        setTimeout(() => {
          setShowAmalaSpecificLoading(false);
        }, 5000);
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
      <p><span className="font-semibold text-red-500">Enjoyed With:</span> Typically served with ewedu, gbegiri, and obe ata.</p>
      <p className="italic text-gray-600">Sometimes called the “Yoruba national combo.”</p>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Background blur effects */}
      <div className="absolute w-72 h-72 bg-purple-500 opacity-30 blur-3xl rounded-full top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute w-48 h-48 bg-green-400 opacity-20 blur-2xl rounded-full top-0 left-1/2 transform -translate-x-1/2 z-0" />
      <div className="absolute w-40 h-40 bg-yellow-300 opacity-20 blur-2xl rounded-full bottom-10 left-0 transform -translate-x-1/2 z-0" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-stretch min-h-screen w-full px-4 sm:px-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-left space-y-4 py-8">
          <h1 className="text-5xl font-medium text-gray-900 leading-tight">
            Ancient Stories.<br />Modern Design.
          </h1>
          <p className="text-5xl italic font-serif text-gray-900">Instantly.</p>
          <p className="text-lg text-gray-700 max-w-md">
            Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
          </p>
          <button className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Try Beta Free
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 bg-white rounded-none shadow-xl p-6 flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Select Culture</h2>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {['Yoruba', 'Igbo', 'Japanese'].map(culture => (
                <button
                  key={culture}
                  className={`relative h-20 rounded-md overflow-hidden ring-offset-2 ${selectedCulture === culture ? 'ring-2 ring-purple-500' : ''}`}
                  onClick={() => handleCultureSelect(culture)}
                >
                  <img src={`/${culture.toLowerCase()}.png`} alt={culture} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Assets</h2>
            {isLoading ? (
              <SkeletonLoader />
            ) : (
              <div className="space-y-4">
                {generatedAssets.map(asset => (
                  <React.Fragment key={asset.label}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img src={asset.src} alt={asset.label} className="w-12 h-12 object-cover rounded-lg" />
                        <span className="text-gray-800 font-medium">{asset.label}</span>
                      </div>
                      <div className="flex space-x-2 text-sm">
                        <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded hover:bg-pink-50">Export</button>
                        <button className="px-3 py-1 border border-pink-200 text-pink-600 rounded hover:bg-pink-50">Share</button>
                      </div>
                    </div>
                    {asset.label === 'Amala' && selectedCulture === 'Yoruba' && showAmalaSpecificLoading && <AmalaSpecificLoader />}
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
