import { FaGlobe, FaPalette, FaMobileAlt, FaUniversity } from "react-icons/fa";

const cards = [
  {
    icon: <FaGlobe className="text-2xl text-white" />,
    title: "Web & UI/UX Designers",
    description: "Create stunning digital experiences with our comprehensive design toolkit and collaboration features.",
    points: ["Design Systems", "Prototyping Tools", "Client Collaboration"],
    bg: "bg-gradient-to-r from-blue-100 to-blue-200",
    iconBg: "bg-blue-500",
    img: "/6b.png",
    size: "large",
  },
  {
    icon: <FaPalette className="text-2xl text-white" />,
    title: "Branding Agencies",
    description: "Build powerful brand identities with our suite of branding and visual identity tools.",
    points: ["Brand Guidelines", "Logo Creation", "Asset Management"],
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
    iconBg: "bg-yellow-500",
    img: "/6a.png",
    size: "large",
  },
  {
    icon: <FaPalette className="text-2xl text-white" />,
    title: "Fashion & Textile Creators",
    description: "Design and showcase fashion collections with specialized tools for textile and apparel creators.",
    points: ["Pattern Design", "Color Matching", "Collection Planning"],
    bg: "bg-gradient-to-r from-pink-100 to-pink-200",
    iconBg: "bg-pink-500",
    size: "small",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-white" />,
    title: "App & Game Designers",
    description: "Develop engaging mobile and gaming experiences with our interactive design platform.",
    points: ["Interactive Prototypes", "User Testing", "Asset Libraries"],
    bg: "bg-gradient-to-r from-purple-100 to-purple-200",
    iconBg: "bg-purple-500",
    size: "small",
  },
  {
    icon: <FaUniversity className="text-2xl text-white" />,
    title: "Museums & Cultural orgs",
    description: "Preserve and present cultural heritage through digital storytelling and interactive exhibitions.",
    points: ["Digital Archives", "Virtual Tours", "Educational Content"],
    bg: "bg-gradient-to-r from-green-100 to-green-200",
    iconBg: "bg-green-500",
    size: "small",
  },
];

const Landsix = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white min-h-screen">
      <div className="flex items-center justify-center p-4 bg-white">
        <div className="lg:flex lg:flex-row sm:flex sm:flex- items-center justify-center sm:items-start sm:justify-start gap-[1.5vw] px-[4vw] sm:px-[3vw] lg:px-0 py-[2vw]">
          {/* Pill Box - Always Top Left */}
          <div className="flex w-42 border items-center pl-1 border-red-300 rounded-full text-red-500  ">
            <img
              className="w-[16px] h-[16px] mr-[6px] sm:w-[1.2vw] sm:h-[1.2vw] sm:mr-[0.5vw] lg:w-[30px] lg:h-[30px] lg:mr-[12px]"
              src="/Group.png"
              alt="badge icon"
            />
            <span className="text-[12px] font-medium lg:text-[14px]">
              Use it your way
            </span>
          </div>

          {/* Main Heading */}
          <div
            className="text-[clamp(2rem,4.5vw,3.5rem)] leading-tight text-center sm:text-left sm:text-[clamp(0.5rem,2vw,1.5rem)]"
            style={{
              fontFamily: 'manrope, sans-serif',
              fontWeight: 800,
              fontStyle: 'normal',
              lineHeight: '110%',
            }}
          >
            Built for
            <span
              className="text-blue-700 italic"
              style={{
                fontFamily: 'instrument-serif',
                fontWeight: 100,
                letterSpacing: '-0.03em',
                fontStyle: 'italic',
              }}
            >
              Creators,
            </span>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span
              className="text-yellow-600 italic"
              style={{
                fontFamily: 'instrument-serif',
                fontWeight: 100,
                letterSpacing: '-0.05em',
                fontStyle: 'italic',
              }}
            >
              Makers,
            </span>
            and
            <span
              className="text-green-600 italic"
              style={{
                fontFamily: 'instrument-serif',
                fontWeight: 100,
                letterSpacing: '-0.05em',
                fontStyle: 'italic',
              }}
            >
              Curators
            </span>
          </div>
        </div>
      </div>

      {/* First row: 2 big cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-4 sm:mb-5 lg:mb-6">
        {cards
          .filter((card) => card.size === "large")
          .map((card, idx) => (
            <div
              key={idx}
              className={`rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 ${card.bg} shadow-lg h-full flex flex-col`}
            >
              {/* Main flex container for the card's top section */}
              <div className="flex items-start justify-between flex-grow">
                {/* Div for icon, title, description, and points */}
                <div className="w-3/5 pr-2 sm:pr-3 lg:pr-4 flex flex-col">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center rounded-full ${card.iconBg}`}>
                    <span className="text-sm sm:text-base lg:text-lg text-white">
                      {card.icon}
                    </span>
                  </div>
                  <h3 className="mt-3 sm:mt-4 lg:mt-5 text-base sm:text-lg lg:text-xl font-semibold text-gray-800 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mt-2 sm:mt-2.5 lg:mt-3 leading-relaxed">
                    {card.description}
                  </p>
                  {/* Points list */}
                  <ul className="mt-3 sm:mt-3.5 lg:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-700">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <span className={`${card.iconBg.replace('bg-', 'text-')} font-bold mr-1.5 sm:mr-2 text-xs sm:text-sm`}>
                          ✓
                        </span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Separate Div for the image */}
                {card.img && (
                  <div className="ml-4 sm:ml-6 lg:ml-10 mt-4 sm:mt-6 lg:mt-8 flex-shrink-0">
                    <img
                      src={card.img}
                      alt="icon"
                      className="w-24 h-20 sm:w-32 sm:h-28 lg:w-45 lg:h-40 object-contain rounded-md"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>

      {/* Second row: 3 small cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards
          .filter((card) => card.size === "small")
          .map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 ${card.bg} shadow-md h-full flex flex-col`}
            >
              <div className="flex items-start justify-between flex-grow">
                <div className="w-4/4 pr-4">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-full ${card.iconBg}`}>
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">{card.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">{card.description}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    {/* Dynamic checkmark color */}
                    <span className={`${card.iconBg.replace('bg-', 'text-')} font-bold mr-2`}>✓</span> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Landsix;