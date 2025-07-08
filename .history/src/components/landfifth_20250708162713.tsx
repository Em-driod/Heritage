import React from 'react';

const Landfifth = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
          From Culture to Creation.
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          In Seconds
        </p>
      </div>
  {/* Main Content Sections */}
  <div className="max-w-6xl mx-auto space-y-16">

    {/* Section 1: Pick a Culture */}
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-3xl p-6 sm:p-10 lg:p-12">
      <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 text-xl font-bold mb-4">
          1
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Pick a Culture
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Choose from hundreds of rich cultural and traditional designs to define your unique aesthetic. HeritageAI allows you to explore the legacy and visual identity.
        </p>
        <div className="hidden lg:block h-0.5 bg-pink-300 w-24 mt-8"></div> {/* Separator */}
      </div>
      <div className="lg:w-1/2">
        <div className="relative">
          <img
            src="[https://via.placeholder.com/400x250/F8F8F8/000000?text=Masks+Image](https://via.placeholder.com/400x250/F8F8F8/000000?text=Masks+Image)" // Placeholder for Masks image
            alt="Cultural Masks"
            className="w-full h-auto rounded-xl"
          />
          <div className="lg:hidden absolute bottom-0 left-0 w-full h-0.5 bg-pink-300"></div> {/* Separator for mobile */}
        </div>
      </div>
    </div>

    {/* Section 2: AI Analyzes Patterns */}
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-white rounded-3xl p-6 sm:p-10 lg:p-12">
      <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 text-xl font-bold mb-4">
          2
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          AI Analyzes Patterns
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our advanced AI studies traditional patterns, assorted colors, meaningful symbols, and authentic textures to generate the key elements.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            UI Themes and Components
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Pattern Libraries
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Color Palettes
          </li>
        </ul>
        <div className="hidden lg:block h-0.5 bg-pink-300 w-24 mt-8"></div> {/* Separator */}
      </div>
      <div className="lg:w-1/2">
        <div className="relative">
          <img
            src="[https://via.placeholder.com/400x250/F8F8F8/000000?text=Analyzed+Patterns+UI](https://via.placeholder.com/400x250/F8F8F8/000000?text=Analyzed+Patterns+UI)" // Placeholder for Analyzed Patterns UI
            alt="Analyzed Patterns UI"
            className="w-full h-auto rounded-xl"
          />
          <div className="lg:hidden absolute bottom-0 left-0 w-full h-0.5 bg-pink-300"></div> {/* Separator for mobile */}
        </div>
      </div>
    </div>

    {/* Section 3: Generate Design Kits */}
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-3xl p-6 sm:p-10 lg:p-12">
      <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 text-xl font-bold mb-4">
          3
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Generate Design Kits
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Build cohesive design kits automatically, including UI themes, pattern libraries, and harmoniously curated color palettes that resonate deeply with your users.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            UI Themes and Components
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Pattern Libraries
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Color Palettes
          </li>
        </ul>
        <div className="hidden lg:block h-0.5 bg-pink-300 w-24 mt-8"></div> {/* Separator */}
      </div>
      <div className="lg:w-1/2">
        <div className="relative">
          <img
            src="[https://via.placeholder.com/400x250/F8F8F8/000000?text=Design+Kit+UI](https://via.placeholder.com/400x250/F8F8F8/000000?text=Design+Kit+UI)" // Placeholder for Design Kit UI
            alt="Design Kit UI"
            className="w-full h-auto rounded-xl"
          />
          <div className="lg:hidden absolute bottom-0 left-0 w-full h-0.5 bg-pink-300"></div> {/* Separator for mobile */}
        </div>
      </div>
    </div>

    {/* Section 4: Learn the Meaning */}
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-white rounded-3xl p-6 sm:p-10 lg:p-12">
      <div className="lg:w-1/2 lg:pl-12 mb-8 lg:mb-0 text-center lg:text-left">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 text-xl font-bold mb-4">
          4
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Learn the Meaning
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Uncover the rich stories and cultural significance behind every design element, empowering you to infuse real meaning into your designs.
        </p>
        <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-semibold text-sm">
          Culturefacts!
        </div>
        <div className="hidden lg:block h-0.5 bg-pink-300 w-24 mt-8"></div> {/* Separator */}
      </div>
      <div className="lg:w-1/2">
        <div className="relative">
          <img
            src="[https://via.placeholder.com/400x250/F8F8F8/000000?text=Open+Book+Image](https://via.placeholder.com/400x250/F8F8F8/000000?text=Open+Book+Image)" // Placeholder for Open Book image
            alt="Open Book with Cultural Info"
            className="w-full h-auto rounded-xl"
          />
          <div className="lg:hidden absolute bottom-0 left-0 w-full h-0.5 bg-pink-300"></div> {/* Separator for mobile */}
        </div>
      </div>
    </div>

    {/* Section 5: Export & Customize */}
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white rounded-3xl p-6 sm:p-10 lg:p-12">
      <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0 text-center lg:text-left">
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-600 text-xl font-bold mb-4">
          5
        </span>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Export & Customize
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Export your designs, share with your team, and customize to your heart's content. HeritageAI is your playground for cultural creativity.
        </p>
        <div className="hidden lg:block h-0.5 bg-pink-300 w-24 mt-8"></div> {/* Separator */}
      </div>
      <div className="lg:w-1/2">
        <div className="relative">
          <img
            src="[https://via.placeholder.com/400x250/F8F8F8/000000?text=Computer+Workstation](https://via.placeholder.com/400x250/F8F8F8/000000?text=Computer+Workstation)" // Placeholder for Computer Workstation image
            alt="Computer Workstation"
            className="w-full h-auto rounded-xl"
          />
          <div className="lg:hidden absolute bottom-0 left-0 w-full h-0.5 bg-pink-300"></div> {/* Separator for mobile */}
        </div>
      </div>
    </div>

  </div>

  {/* Call to Action Button at the Bottom */}
  <div className="text-center mt-20">
    <button className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105 text-lg">
      Ready to Create with Culture?
    </button>
    <p className="mt-4 text-gray-600 text-sm">
      Explore a Demo Culture Kit
    </p>
  </div>
</div>
  );
};

export default Landfifth;