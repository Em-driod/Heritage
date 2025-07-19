
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif&display=swap" rel="stylesheet"></link>
const Landthird = () => {
  return (
    <div className="flex justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-6xl">

        {/* Card 1: 2 minutes search */}
        <div className="flex-1 bg-white border border-orange-300 rounded-xl shadow-lg px-6 py-1 text-center h-28 flex flex-col justify-center transition-transform duration-300 hover:scale-105 font-instrument">
  <p className="text-3xl italic text-red-500 mb-2">
    2 minutes search
    <br />
    with <span className="px-1 rounded-md">HeritageAI</span>
  </p>
  <p className="text-sm text-gray-600">
    Vs. Traditional research today
  </p>
</div>

        {/* Card 2: 85% Success */}
        <div className="flex-1 bg-white border border-orange-300 rounded-xl shadow-lg py-1 px-6 text-center h-28 flex flex-col justify-center transition-transform duration-300 hover:scale-105 font-instrument">
          <p className="text-3xl italic text-orange-500 mb-2">
            85%
            <br />
            Success
          </p>
          <p className="text-sm text-gray-600">
            vs Generic search
          </p>
        </div>

        {/* Card 3: 10x faster discoveries */}
        <div className="flex-1 bg-white border border-orange-300 rounded-xl shadow-lg p-6 text-center h-28 flex flex-col justify-center transition-transform duration-300 hover:scale-105 font-instrument">
          <p className="text-3xl italic text-blue-500 mb-2">
            10x faster
            <br />
            discoveries
          </p>
          <p className="text-sm text-gray-600">
            with <span className="text-orange-400 px-1 rounded-md"> <span className="bg-amber-400 p-1 rounded-sm text-black">Heri</span>tengineAI</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Landthird;