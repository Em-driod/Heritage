const Hero = () => {
  return (
    <div className="p-24">

    <div
      className="relative flex justify-center items-center min-h-screen text-center  px-64 sm:px-8 py-16"
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
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 max-w-7xl">
        {/* Left Section: Text and Button */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl">
          <h1 className="text-6xl md:text-7xl font-bold leading-tight text-gray-900 mb-4">
            Ancient Stories.<br />Modern Design.
          </h1>
          <p className="text-6xl md:text-7xl font-serif italic text-gray-900 mb-8">
            Instantly.
          </p>
          <p className="text-lg text-gray-700 mb-10 max-w-md">
            Bring ancient patterns, bold colors, and deep meaning into every pixel automatically.
          </p>
          <button className="flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Try Beta Free
          </button>
        </div>

        {/* Right Section: White Card with UI Elements */}
        <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md lg:max-w-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">Select Culture</h2>
          <div className="grid grid-cols-3 gap-3 mb-8">
            <button className="flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 bg-gray-800 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-yoruba-pattern.png')" }}>
              Yoruba
            </button>
            <button className="flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 bg-gray-700 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-igbo-pattern.png')" }}>
              Igbo
            </button>
            <button className="flex items-center justify-center p-3 rounded-md text-sm font-medium text-white h-20 bg-gray-600 bg-cover bg-center" style={{ backgroundImage: "url('/path-to-japanese-pattern.png')" }}>
              Japanese
            </button>
          </div>

          <div className="flex flex-col items-center mb-6">
            <svg className="w-6 h-6 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Her</span>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Generated Assets</h2>
          <div className="space-y-4 mb-8">
            {[
              { src: "/path-to-obatala-img.jpg", label: "Obatala" },
              { src: "/path-to-amala-img.jpg", label: "Amala" },
              { src: "/path-to-oshun-img.jpg", label: "Oshun" },
            ].map(({ src, label }) => (
              <div className="flex items-center justify-between" key={label}>
                <div className="flex items-center space-x-3">
                  <img src={src} alt={label} className="w-12 h-12 rounded-lg object-cover" />
                  <span className="text-gray-800 font-medium">{label}</span>
                </div>
                <div className="flex space-x-2 text-sm">
                  <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Export</button>
                  <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Share</button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">Color Palette</h2>
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500 border border-gray-300"></div>
              <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-300"></div>
            </div>
            <div className="flex space-x-2 text-sm">
              <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Export</button>
              <button className="px-3 py-1 border border-blue-200 text-blue-600 rounded-md hover:bg-blue-50">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
            </div>
  );
};

export default Hero;
