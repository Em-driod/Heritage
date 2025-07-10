
import { FaGlobe, FaPalette,  FaMobileAlt, FaUniversity } from "react-icons/fa";

const cards = [
  {
    icon: <FaGlobe className="text-2xl text-white" />,
    title: "Web & UI/UX Designers",
    description: "Create stunning digital experiences with our comprehensive design toolkit and collaboration features.",
    points: ["Design Systems", "Prototyping Tools", "Client Collaboration"],
    bg: "bg-gradient-to-r from-blue-100 to-blue-200",
    iconBg: "bg-blue-500",
    img: "/globe.png", // Replace with real image path
    size: "large",
  },
  {
    icon: <FaPalette className="text-2xl text-white" />,
    title: "Branding Agencies",
    description: "Build powerful brand identities with our suite of branding and visual identity tools.",
    points: ["Brand Guidelines", "Logo Creation", "Asset Management"],
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
    iconBg: "bg-yellow-500",
    img: "/palette.png", // Replace with real image path
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
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 border rounded-full border-pink-300 text-pink-500 text-sm mb-4">
          🌐 Use it your way
        </div>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
          Built for <span className="text-purple-600">Creators</span>,{" "}
          <span className="text-orange-500">Makers</span>, and{" "}
          <span className="text-green-600">Curators</span>
        </h2>
      </div>

      {/* First row: 2 big cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {cards
          .filter((card) => card.size === "large")
          .map((card, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-8 md:p-10 ${card.bg} shadow-lg h-full`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 flex items-center justify-center rounded-full ${card.iconBg}`}>
                  {card.icon}
                </div>
                {card.img && (
                  <img src={card.img} alt="icon" className="w-20 h-20 object-contain" />
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800">{card.title}</h3>
              <p className="text-base text-gray-700 mt-3">{card.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 font-bold mr-2">✓</span> {point}
                  </li>
                ))}
              </ul>
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
              className={`rounded-xl p-6 ${card.bg} shadow-md h-full`}
            >
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${card.iconBg}`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-700 mt-2">{card.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {card.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-blue-500 font-bold mr-2">✓</span> {point}
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
