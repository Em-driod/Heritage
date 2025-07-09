const Landsecont = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Top Section: Main Heading and Subheading */}
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Design shouldn't feel
          <br />
          like guesswork.
        </h1>
        <p className="mt-6 text-sm sm:text-sm w-112 text-gray-700 leading-tight">
          Let's be honest, typing "tribal pattern" into Google
          isn't design research.
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text"> Hard </span>
          again? HeritageAI helps you skip the
          confusion and help you design with real meaning.
        </p>
      </div>

      {/* Middle Section: Emojis */}
      <div className="flex justify-between w-full max-w-5xl px-8 mb-12">
        <span role="img" aria-label="sad face" className="text-4xl  translate-x-2">
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
        
          <img
            src="/afre.png"
            alt="Google Search Screenshot"
            className="rounded-lg border border-gray-200 w-full object-cover"
          />
        </div>

        {/* Right Column: After HeritageAI */}
            <div className="bg-white rounded-2xl shadow-xl flex-1 border-4 border-red-200 p-6 flex flex-col">
                <span role="img" aria-label="party popper" className="text-2xl translate-x-12">
          🎉
        </span>
        
          <img
            src="/reaf.png"
            alt="Google Search Screenshot"
            className="rounded-lg border border-gray-200 w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Landsecont;
