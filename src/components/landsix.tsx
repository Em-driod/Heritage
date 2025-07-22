import { FaGlobe, FaPalette, FaMobileAlt, FaUniversity } from "react-icons/fa";
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Instrument+Serif&family=Montserrat&family=Lato&family=Open+Sans&family=Fira+Sans&family=Ubuntu&family=Noto+Sans&family=Source+Sans+Pro&family=Roboto&family=Droid+Sans&family=Georgia&display=swap" rel="stylesheet"></link>

const cards = [
  {
    icon: <FaGlobe className="text-2xl text-white" />,
    title: "Web & UI/UX Designers",
    description: "Create stunning digital experiences with our comprehensive design toolkit and collaboration features.",
    points: ["Design Systems", "Prototyping Tools", "Client Collaboration"],
    bg: "bg-gradient-to-r from-blue-100 to-blue-200",
    iconBg: "bg-blue-500", // Checkmark will be blue
    img: "/6b.png", // Replace with real image path
    size: "large",
  },
  {
    icon: <FaPalette className="text-2xl text-white" />,
    title: "Branding Agencies",
    description: "Build powerful brand identities with our suite of branding and visual identity tools.",
    points: ["Brand Guidelines", "Logo Creation", "Asset Management"],
    bg: "bg-gradient-to-r from-yellow-100 to-yellow-200",
    iconBg: "bg-yellow-500", // Checkmark will be yellow
    img: "/6a.png", // Replace with real image path
    size: "large",
  },
  {
    icon: <FaPalette className="text-2xl text-white" />,
    title: "Fashion & Textile Creators",
    description: "Design and showcase fashion collections with specialized tools for textile and apparel creators.",
    points: ["Pattern Design", "Color Matching", "Collection Planning"],
    bg: "bg-gradient-to-r from-pink-100 to-pink-200",
    iconBg: "bg-pink-500", // Checkmark will be pink
    size: "small",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-white" />,
    title: "App & Game Designers",
    description: "Develop engaging mobile and gaming experiences with our interactive design platform.",
    points: ["Interactive Prototypes", "User Testing", "Asset Libraries"],
    bg: "bg-gradient-to-r from-purple-100 to-purple-200",
    iconBg: "bg-purple-500", // Checkmark will be purple
    size: "small",
  },
  {
    icon: <FaUniversity className="text-2xl text-white" />,
    title: "Museums & Cultural orgs",
    description: "Preserve and present cultural heritage through digital storytelling and interactive exhibitions.",
    points: ["Digital Archives", "Virtual Tours", "Educational Content"],
    bg: "bg-gradient-to-r from-green-100 to-green-200",
    iconBg: "bg-green-500", // Checkmark will be green
    size: "small",
  },
];

const Landsix = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-white min-h-screen">
   <div className="flex items-center justify-center p-4 bg-white">
  <div className="flex items-center space-x-8">
    <div className="flex items-center px-4 py-2 border border-red-300 rounded-full text-red-500">
      <img className="gap-4" src="/Group.png" alt="" />
      <span>Use it your way</span>
    </div>
    <div className=" text-5xl" style={{
            fontFamily: 'manrope, sans-serif',
            fontWeight: 800,
            fontStyle: 'thin',
            lineHeight: '100%',
            letterSpacing: '-3%',
            textAlign: 'center',
          }}>
      Built for <span className="text-blue-700   italic "style={{fontFamily: 'instrument-serif',fontWeight: 100,fontSize:'50px', fontStyle: 'thin', lineHeight: '100%', letterSpacing: '-5%'}}>Creators,</span> <br/> <span className="text-yellow-600 "style={{fontFamily: 'instrument-serif',fontWeight: 100,fontSize:'50px', fontStyle: 'thin', lineHeight: '100%', letterSpacing: '-5%'}} >Makers,</span> and <span className="text-green-600" style={{fontFamily: 'instrument-serif',fontWeight: 100,fontSize:'50px', fontStyle: 'thin', lineHeight: '100%', letterSpacing: '-5%'}} >Curators</span>
    </div>
  </div>
</div>

      {/* First row: 2 big cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
   
  {cards
    .filter((card) => card.size === "large")
    .map((card, idx) => (
      <div
        key={idx}
        className={`rounded-xl p-8 md:p-10 ${card.bg} shadow-lg h-full flex flex-col`}
      >
        {/* Main flex container for the card's top section */}
        <div className="flex items-start justify-between flex-grow">
          {/* Div for icon, title, description, and points */}
          <div className="w-3/5 pr-4 flex flex-col"> {/* Added flex flex-col here for internal stacking */}
            <div className={`w-12 h-12 flex items-center justify-center rounded-full ${card.iconBg}`}>
              {card.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-800">{card.title}</h3>
            <p className="text-base text-gray-700 mt-3">{card.description}</p>

            {/* Points list is now inside this div to be grouped with text content */}
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-center">
                  <span className={`${card.iconBg.replace('bg-', 'text-')} font-bold mr-2`}>✓</span> {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Separate Div for the image */}
          {card.img && (
            <div className="ml-10 mt-25"> {/* Added ml-10 for horizontal spacing and mt-6 to bring it down */}
              <img
                src={card.img}
                alt="icon"
                className="w-45 h-40 object-contain"
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