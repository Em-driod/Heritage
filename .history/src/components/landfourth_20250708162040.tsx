import React from 'react';

const Landfourth = () => {
  return (
    <div className="bg-[#fef8f5] min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Top Section: What HeritageAI Gives You */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-white rounded-full py-2 px-4 shadow-sm mb-6">
          <img
            src="/path-to-heritageai-icon.png" // Placeholder, replace with your actual icon path
            alt="HeritageAI Icon"
            className="w-6 h-6 mr-2"
          />
          <span className="text-sm font-semibold text-gray-800">What HeritageAI Gives You</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
          One click.
          <br />
          Infinite heritage.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">

        {/* Card 1: Design kits */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-left">
          <img
            src="/path-to-design-kits-icon.png" // Placeholder, replace with your actual icon path
            alt="Design kits icon"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Design kits</h3>
          <p className="text-gray-600 text-sm mb-4">
            Ready to use palettes, icons
            <br />
            textures
          </p>
          <div className="flex space-x-2 mt-auto">
            <div className="w-8 h-8 rounded-full bg-pink-500 border-2 border-white shadow"></div>
            <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-white shadow"></div>
            <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white shadow"></div>
          </div>
        </div>

        {/* Card 2: Cultural Context */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-left">
          <img
            src="/path-to-cultural-context-icon.png" // Placeholder, replace with your actual icon path
            alt="Cultural Context icon"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Context</h3>
          <p className="text-gray-600 text-sm mb-4">
            Every visual comes with a short
            <br />
            short or symbol meaning
          </p>
          <div className="flex items-center text-gray-700 font-medium mt-auto">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.414L14.586 5A2 2 0 0115 6.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path>
            </svg>
            Rich storytelling
          </div>
        </div>

        {/* Card 3: Export Ready */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-left">
          <img
            src="/path-to-export-ready-icon.png" // Placeholder, replace with your actual icon path
            alt="Export Ready icon"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Ready</h3>
          <p className="text-gray-600 text-sm mb-4">
            Use in Figma, Canva, Webflow,
            <br />
            or even download
          </p>
          <div className="flex space-x-2 mt-auto">
            <img src="/path-to-figma-icon.png" alt="Figma icon" className="w-8 h-8" /> {/* Placeholder */}
            <img src="/path-to-canva-icon.png" alt="Canva icon" className="w-8 h-8" /> {/* Placeholder */}
            <img src="/path-to-webflow-icon.png" alt="Webflow icon" className="w-8 h-8" /> {/* Placeholder */}
          </div>
        </div>

        {/* Card 4: More Than Visuals */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start text-left">
          <img
            src="/path-to-more-than-visuals-icon.png" // Placeholder, replace with your actual icon path
            alt="More Than Visuals icon"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">More Than Visuals</h3>
          <p className="text-gray-600 text-sm mb-4">
            Build brand identity rooted in
            <br />
            something real.
          </p>
          <div className="flex items-center text-gray-700 font-medium mt-auto">
            <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            Authentic foundations
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landfourth;