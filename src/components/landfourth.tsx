

const Landfourth = () => {
  return (
    <div className="min-h-screen bg-[#fcf8f6] py-[80px] px-4 flex flex-col items-center font-sans overflow-hidden">
      {/* Top Section: What HeritageAI Gives You */}
      <div className="text-center mb-[70px]"> {/* Adjusted margin to match visual spacing */}
        <div className="inline-flex items-center bg-[#f7e6df] rounded-full py-[8px] px-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] mb-[45px]"> {/* Adjusted padding, shadow, and margin */}
          <img
            src="/images/heritage_ai_icon.png" // Assumes image is in public/images/heritage_ai_icon.png
            alt="HeritageAI Icon"
            className="w-6 h-6 mr-2"
          />
          <span className="text-sm font-semibold text-[#6a4f41]">What HeritageAI Gives You</span> {/* Adjusted text color */}
        </div>
        <h1 className="text-[60px] font-bold text-[#333333] leading-[1.1] tracking-tight m-0"> {/* Precise font size and line-height */}
          One click.
          <br />
          Infinite heritage.
        </h1>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-[1200px] w-full"> {/* Adjusted gap and max-width */}

        {/* Card 1: Design kits */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1"> {/* Adjusted border-radius, shadow, padding, hover effect */}
          <img
            src="/images/design_kits_icon.png" // Assumes image is in public/images/design_kits_icon.png
            alt="Design kits icon"
            className="w-[50px] h-[50px] mb-[20px]" // Adjusted size and margin
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">Design kits</h3> {/* Precise font size and margin */}
          <p className="text-[16px] text-[#666666] leading-[1.5] mb-[20px]"> {/* Precise font size, color, line-height, margin */}
            Ready to use palettes, icons
            <br />
            textures
          </p>
          <div className="flex  mt-auto">
            <div className="w-[25px] h-[25px] rounded-full bg-[#ff99aa] border border-[rgba(0,0,0,0.1)] mr-2"></div> {/* Precise size, colors, border */}
            <div className="w-[25px] h-[25px] rounded-full bg-[#a066ff] border border-[rgba(0,0,0,0.1)] -ml-4"></div>
            <div className="w-[25px] h-[25px] rounded-full bg-[#66ccff] border border-[rgba(0,0,0,0.1)] -ml-2"></div>
          </div>
        </div>

        {/* Card 2: Cultural Context */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/images/cultural_context_icon.png" // Assumes image is in public/images/cultural_context_icon.png
            alt="Cultural Context icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">Cultural Context</h3>
          <p className="text-[16px] text-[#666666] leading-[1.5] mb-[20px]">
            Every visual comes with a short
            <br />
            short or symbol meaning
          </p>
          <div className="inline-flex items-center bg-[#f0f0f0] rounded-full py-[6px] px-[12px] text-gray-700 font-medium text-sm mt-auto"> {/* Precise padding, background, text styles */}
            <img src="/images/rich_storytelling_icon.png" alt="Storytelling Icon" className="w-[18px] h-[18px] mr-[6px]" /> {/* Precise size and margin */}
            <span>Rich storytelling</span>
          </div>
        </div>

        {/* Card 3: Export Ready */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/images/export_ready_icon.png" // Assumes image is in public/images/export_ready_icon.png
            alt="Export Ready icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">Export Ready</h3>
          <p className="text-[16px] text-[#666666] leading-[1.5] mb-[20px]">
            Use in Figma, Canva, Webflow,
            <br />
            or even download
          </p>
          <div className="flex mt-auto">
            <img src="/images/figma_icon.png" alt="Figma icon" className="w-[35px] h-[35px] mr-[12px] rounded-[8px] object-contain border border-[#eeeeee]" /> {/* Precise size, margin, border-radius, border color */}
            <img src="/images/canva_icon.png" alt="Canva icon" className="w-[35px] h-[35px] mr-[12px] rounded-[8px] object-contain border border-[#eeeeee]" />
            <img src="/images/webflow_icon.png" alt="Webflow icon" className="w-[35px] h-[35px] rounded-[8px] object-contain border border-[#eeeeee]" />
          </div>
        </div>

        {/* Card 4: More Than Visuals */}
        <div className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1">
          <img
            src="/images/more_than_visuals_icon.png" // Assumes image is in public/images/more_than_visuals_icon.png
            alt="More Than Visuals icon"
            className="w-[50px] h-[50px] mb-[20px]"
          />
          <h3 className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]">More Than Visuals</h3>
          <p className="text-[16px] text-[#666666] leading-[1.5] mb-[20px]">
            Build brand identity rooted in
            <br />
            something real.
          </p>
          <div className="inline-flex items-center bg-[#f0f0f0] rounded-full py-[6px] px-[12px] text-gray-700 font-medium text-sm mt-auto">
            <img src="/images/authentic_foundations_icon.png" alt="Foundations Icon" className="w-[18px] h-[18px] mr-[6px]" /> {/* Precise size and margin */}
            <span>Authentic foundations</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Landfourth;