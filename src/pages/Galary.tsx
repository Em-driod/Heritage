const Galary = () => {
  return (
    <div className="flex flex-col">  
    <div className="bg-white">
      <div className="p-4 sm:p-8 mt-4 sm:mt-16">
        <div className="flex items-center">
          <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
          <div 
            className="text-3xl sm:text-5xl font-normal ml-2" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #e75a7c, #f7b446)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent" 
            }}
          >
            YORUBA
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
        </div>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
          The Yorùbá people are one of the largest and most culturally influential ethnic groups in West Africa,
          <br />
          with a deep-rooted civilization that spans over a thousand years.
        </p>
        <div className="flex items-center mt-8">
          <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
          <span className="text-gray-600 text-sm sm:text-base">Southwestern Nigeria</span>
          <a href="#" className="text-red-500 hover:underline ml-2 text-sm sm:text-base">
            Read more...
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
        <div className="col-span-1">
          <img
            src="/odu.png"
            alt="Yoruba head sculpture"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/eyo.png"
            alt="Yoruba Egungun masquerade"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/ilu.png"
            alt="Yoruba Ilu"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/ofi.png"
            alt="Yoruba traditional attire"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
     








     /* igbo section */

       <div className="bg-white">
      <div className="p-4 sm:p-8 mt-4 sm:mt-16">
        <div className="flex items-center">
          <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
          <div 
            className="text-3xl sm:text-5xl font-normal ml-2" 
            style={{ 
              backgroundImage: "linear-gradient(to right, #e75a7c, #f7b446)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent" 
            }}
          >
            Igbo
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
        </div>
        <p className="mt-4 text-gray-600 text-sm sm:text-base">
         The Igbo (also spelled Ibo) people are one of the largest ethnic groups in Africa, primarily located in southeastern Nigeria,<br /> across states like Abia, Anambra, Ebonyi, Enugu, and Imo. With a population exceeding 30 million, they also have a strong <br /> diaspora presence worldwide.
        </p>
        <div className="flex items-center mt-8">
          <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
          <span className="text-gray-600 text-sm sm:text-base">The Igbo trace <span className="hidden sm:inline"> their origin to Nri,an ancient kingdom often referred to as the spiritual homeland of the Igbo
  </span></span>
          <a href="#" className="text-red-500 hover:underline ml-2 text-sm sm:text-base">
            Read more...
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
        <div className="col-span-1">
          <img
            src="/igbo1.png"
            alt="Igbo head sculpture"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/igbo2.png"
            alt="Igbo Egungun masquerade"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/igbo3.png"
            alt="Igbo Ilu"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/igbo4.png"
            alt="Igbo traditional attire"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>


     </div>
  );
};

export default Galary;