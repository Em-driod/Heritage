

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 px-28 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        {/* Using standard <img> tag */}
        <div className="relative w-24 h-8"> {/* You might need to adjust these dimensions or add more specific CSS for proper sizing */}
          <img
            src="/HeritageAI_logo.png" // Path to your image in the public folder
            alt="HeritageAI Logo"
            className="w-full h-full object-contain" // Tailwind classes for object-fit and full width/height
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          {/* Using standard <a> tags */}
          <a href="/culture" className="text-gray-700 hover:text-gray-900">Culture</a>
          <a href="/gallery" className="text-gray-700 hover:text-gray-900">Gallery</a>
          <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
        </nav>
      </div>
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Yoruba culture"
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;