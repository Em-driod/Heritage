const Landfourth = () => {
  return (
    <div className="min-h-screen bg-[#fcf8f6] py-[80px] px-4 flex flex-col items-center font-sans overflow-hidden">
      {/* Top Section: What HeritageAI Gives You */}
      <div className="text-center mb-[70px]">
        <div className="inline-flex items-center bg-[#f7e6df] rounded-full py-[8px] px-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] mb-[45px]">
          <img
            src="/Box.png"
            alt="HeritageAI Icon"
            className="w-6 h-6 mr-2"
          />
          <span className="text-sm font-semibold text-[#6a4f41]">What HeritageAI Gives You</span>
        </div>
        <h1 className="text-[60px] font-bold text-[#333333] leading-[1.1] tracking-tight m-0">
          One click.
          <br />
          Infinite heritage.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-[1200px] w-full">

        {/* Card 1: Design kits */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/A.png"
            alt="Design kits icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">Design kits</h3>
          <p className="text-[14px] text-[#666666] leading-[1.5] mb-[20px]">
            Ready to use palettes, icons
            <br />
            textures
          </p>
          {/* Horizontal line */}
          <div className="bg-[#eeeeee] h-[1px] w-[150px] my-[15px]"></div> {/* Horizontal line added here */}
          {/* Content below the line */}
          <div className="mt-auto">
            <img src="/det.png" alt="Figma icon" className="w-[80px] h-[35px] rounded-[8px] object-contain" />
          </div>
        </div>

        {/* Card 2: Cultural Context */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/B.png"
            alt="Cultural Context icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">Cultural Context</h3>
          <p className="text-[14px] text-[#666666] leading-[1.5] mb-[20px]">
            Every visual comes with a short
            <br />
            short or symbol meaning
          </p>
          {/* Horizontal line */}
          <div className="bg-[#eeeeee] h-[1px] w-[150px] my-[15px]"></div> {/* Horizontal line added here */}
          {/* Content below the line */}
          <div className="inline-flex items-center bg-[#f0f0f0] rounded-full py-[6px] px-[12px] text-gray-700 font-medium text-sm mt-auto">
            <img src="/B1.png" alt="Storytelling Icon" className="w-[18px] h-[18px] mr-[6px]" />
            <span>Rich storytelling</span>
          </div>
        </div>

        {/* Card 3: Export Ready */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/C.png"
            alt="Export Ready icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">Export Ready</h3>
          <p className="text-[14px] text-[#666666] leading-[1.5] mb-[20px]">
            Use in Figma, Canva, Webflow,
            <br />
            or even download
          </p>
          {/* Horizontal line */}
          <div className="bg-[#eeeeee] h-[1px] w-[150px] my-[15px]"></div> {/* Horizontal line added here */}
          {/* Content below the line */}
          <div className="flex mt-auto">
            <img src="/C2.png" alt="Figma icon" className="w-[165px] h-[30px]" />
          </div>
        </div>

        {/* Card 4: More Than Visuals */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/D.png"
            alt="More Than Visuals icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">More Than Visuals</h3>
          <p className="text-[14px] text-[#666666] leading-[1.5] mb-[20px]">
            Build brand identity rooted in
            <br />
            something real.
          </p>
          {/* Horizontal line */}
          <div className="bg-[#eeeeee] h-[1px] w-[150px] my-[15px]"></div> {/* Horizontal line added here */}
          {/* Content below the line */}
          <div className="inline-flex items-center bg-[#f0f0f0] rounded-full py-[6px] px-[12px] text-gray-700 font-medium text-sm mt-auto">
            <img src="/D1.png" alt="Foundations Icon" className="w-[18px] h-[18px] mr-[6px]" />
            <span>Authentic foundations</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landfourth;