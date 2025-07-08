

const Landsecont = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Section: Main Heading and Subheading */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Design shouldn't feel
          <br />
          like guesswork.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
          Let's be honest, typing "tribal pattern" into Google
          isn't design research.
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"> Hard </span>
          again? HeritageAI helps you skip the
          confusion and help you design with real meaning.
        </p>
      </div>

      {/* Middle Section: Emojis */}
      <div className="flex justify-between w-full max-w-5xl px-8 mb-12">
        <span role="img" aria-label="sad face" className="text-6xl -translate-x-12">
          😔
        </span>
        <span role="img" aria-label="party popper" className="text-6xl translate-x-12">
          🎉
        </span>
      </div>

      {/* Bottom Section: Before & After Cards */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 w-full max-w-5xl">
        {/* Left Column: Before Google Search */}
        <div className="bg-white rounded-2xl shadow-xl flex-1 border-4 border-red-200 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
            Before: Google Search
          </h2>

          {/* Google Search Bar */}
          <div className="border border-gray-300 rounded-lg py-3 px-4 flex items-center mb-6">
            <span className="text-gray-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="google.com/search?q=japanese+weaves"
              className="flex-grow outline-none text-sm text-gray-700 placeholder-gray-500"
              disabled
            />
            <span className="text-blue-500 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 9V8a1 1 112 0v3a1 1 0 11-2 0zm1 4a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </span>
          </div>

          {/* Search Results */}
          <div className="space-y-4 mb-8">
            {/* Result 1 */}
            <div className="flex items-start">
              <img src="https://via.placeholder.com/20" alt="G" className="w-5 h-5 mr-3 mt-1" /> {/* Placeholder for Google icon */}
              <div>
                <p className="text-xs text-gray-600">japanese weaves - Wikipedia</p>
                <h3 className="text-blue-700 text-lg font-medium leading-tight">Japanese Weaves? - Wikipedia</h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  Japanese textile refers to cloth made in Japan, or to Japanese-style cloth. The earliest textiles in Japan date...
                </p>
              </div>
            </div>
            {/* Result 2 */}
            <div className="flex items-start">
              <img src="https://via.placeholder.com/20" alt="G" className="w-5 h-5 mr-3 mt-1" />
              <div>
                <p className="text-xs text-gray-600">japaneseweaver.com/diff-weaves</p>
                <h3 className="text-blue-700 text-lg font-medium leading-tight">Japanese have different wears</h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  Kimono and hakama are originated by the Japanese to the main culture...
                </p>
              </div>
            </div>
            {/* Result 3 */}
            <div className="flex items-start">
              <img src="https://via.placeholder.com/20" alt="G" className="w-5 h-5 mr-3 mt-1" />
              <div>
                <p className="text-xs text-gray-600">culturetrip.com/japan/familytree</p>
                <h3 className="text-blue-700 text-lg font-medium leading-tight">Japanese Family Tree</h3>
                <p className="text-sm text-gray-700 line-clamp-2">
                  Discover the cultural tree of Japanese for free, and learn about their festive...
                </p>
              </div>
            </div>
          </div>

          {/* Disadvantages List */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center text-red-600 font-medium">
              <span className="text-xl mr-2">❌</span>
              <p>Generic results for common search</p>
            </div>
            <div className="flex items-center text-red-600 font-medium">
              <span className="text-xl mr-2">❌</span>
              <p>No content or real time connections</p>
            </div>
            <div className="flex items-center text-red-600 font-medium">
              <span className="text-xl mr-2">❌</span>
              <p>Hours of manual search required</p>
            </div>
            <div className="flex items-center text-red-600 font-medium">
              <span className="text-xl mr-2">❌</span>
              <p>Scattered across multiple websites</p>
            </div>
          </div>
        </div>

        {/* Right Column: After HeritageAI */}
        <div className="bg-white rounded-2xl shadow-xl flex-1 border-4 border-green-200 p-6 flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
            After: HeritageAI
          </h2>

          {/* HeritageAI Search Bar / Loading */}
          <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg py-3 px-4 flex items-center mb-6">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-1 9V8a1 1 112 0v3a1 1 0 11-2 0zm1 4a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
            </span>
            <span className="text-sm font-medium">Searching for Japanese weaves</span>
            <span className="ml-auto text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          {/* Processing Text */}
          <div className="text-center mb-8">
            <span className="text-purple-600 text-3xl mb-2 inline-block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
            <p className="text-lg text-gray-700 font-semibold">
              <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"> HeritageAI </span>
              Processing...
            </p>
          </div>

          {/* Generated Assets */}
          <div className="space-y-6 mb-8">
            {/* Asset 1: Kimono */}
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <img src="https://via.placeholder.com/64x64/f0f0f0?text=Kimono" alt="Kimono" className="w-16 h-16 rounded-lg object-cover" />
                <span className="text-gray-800 font-medium text-lg">Kimono</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-red-400 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-blue-400 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-green-400 border border-white"></div>
                </div>
                <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Export</button>
                <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Share</button>
              </div>
            </div>
            {/* Asset 2: Yukata */}
            <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm">
              <div className="flex items-center space-x-3">
                <img src="https://via.placeholder.com/64x64/f0f0f0?text=Yukata" alt="Yukata" className="w-16 h-16 rounded-lg object-cover" />
                <span className="text-gray-800 font-medium text-lg">Yukata</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-purple-400 border border-white"></div>
                  <div className="w-5 h-5 rounded-full bg-pink-400 border border-white"></div>
                </div>
                <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Export</button>
                <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Share</button>
              </div>
            </div>
          </div>

          {/* Advantages List */}
          <div className="mt-auto space-y-3">
            <div className="flex items-center text-green-600 font-medium">
              <span className="text-xl mr-2">✅</span>
              <p>AI-powered contextual matching</p>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="text-xl mr-2">✅</span>
              <p>Instant family connections</p>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="text-xl mr-2">✅</span>
              <p>Comprehensive results in seconds</p>
            </div>
            <div className="flex items-center text-green-600 font-medium">
              <span className="text-xl mr-2">✅</span>
              <p>All sources verified and organized</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landsecont;