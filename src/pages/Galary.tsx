const Galary = () => {
  return (
    <div className="bg-white">
      <div className="p-8 mt-16">
        <div className="flex">
             <img src="/Doc.png" alt="" />

        <h1 className="text-4xl font-bold text-gray-800 "> YORUBA</h1>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <img src="/Family Tree.png" alt="" />
          <h2 className="text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
        </div>
        <p className="mt-4 text-gray-600">
          The Yorùbá people are one of the largest and most culturally influential ethnic groups in West Africa,
          <br />
          with a deep-rooted civilization that spans over a thousand years.
        </p>
        <div className="flex items-center mt-16">
          <span className="font-bold text-gray-700 mr-1">• Primary Location:</span>
          <span className="text-gray-600">Southwestern Nigeria</span>
          <a href="#" className="text-red-500 hover:underline ml-2">
            Read more...
          </a>
        </div>
      </div>



      <div className="grid grid-cols-2 gap-2 w-[1200px] p-8">
        <div className="col-span-1">
          <img
            src="/odu.png"
            alt="Yoruba head sculpture"
            className="w-auto h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/eyo.png"
            alt="Yoruba Egungun masquerade"
            className="w-auto h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/ilu.png"
            alt="Yoruba Ilu"
            className="w-auto h-auto object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1">
          <img
            src="/ofi.png"
            alt="Yoruba traditional attire"
            className="w-auto h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Galary;