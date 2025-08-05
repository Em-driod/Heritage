<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap" rel="stylesheet"></link>
const Landthird = () => {
  return (
    <div className="flex justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-6xl">

        {/* Card 1: 2 minutes search */}
        <div className="flex-1 bg-white border border-red-500 rounded-xl shadow-lg p-6 text-center min-h-[60px] flex flex-col justify-center transition-transform duration-300 hover:scale-105">
          <p className="text-xl sm:text-2xl lg:text-3xl italic text-red-500 mb-2 font-instrument">
            <span className="whitespace-nowrap">2 minutes search</span>
            <br />
            with <span className="px-1 rounded-md whitespace-nowrap">HeritengineAI</span>
          </p>
          <p className="sm:text-2xl lg:text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
            Vs. Traditional research today
          </p>
        </div>

        {/* Card 2: 85% Success */}
        <div className="flex-1 bg-white border border-orange-300 rounded-xl shadow-lg p-6 text-center min-h-[160px] flex flex-col justify-center transition-transform duration-300 hover:scale-105">
          <p className="text-xl sm:text-2xl lg:text-3xl italic text-orange-500 mb-2 font-instrument">
            <span className="whitespace-nowrap">85%</span>
            <br />
            <span className="whitespace-nowrap">Success</span>
          </p>
          <p className="sm:text-2xl lg:text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
            vs Generic search
          </p>
        </div>

        {/* Card 3: 10x faster discoveries */}
        <div className="flex-1 bg-white border border-blue-500 rounded-xl shadow-lg p-6 text-center min-h-[160px] flex flex-col justify-center transition-transform duration-300 hover:scale-105">
          <p className="text-xl sm:text-2xl lg:text-3xl italic text-blue-500 mb-2 font-instrument">
            <span className="whitespace-nowrap">10x faster</span>
            <br />
            <span className="whitespace-nowrap">discoveries</span>
          </p>
          <p className="sm:text-2xl lg:text-sm text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis">
            with <span className="text-orange-400 px-1 rounded-md whitespace-nowrap">HeritengineAI</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landthird;