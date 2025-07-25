import { FaBookOpen } from "react-icons/fa";
import { PiFlowerTulipBold } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
<link href="https://fonts.googleapis.com/css2?family=Manrope&family=Poppins&family=Instrument+Serif&family=Montserrat&family=Lato&family=Open+Sans&family=Fira+Sans&family=Ubuntu&family=Noto+Sans&family=Source+Sans+Pro&family=Roboto&family=Droid+Sans&family=Georgia&display=swap" rel="stylesheet"></link>
const Landfourth = () => {
  // Scroll animation setup
  const sectionRef = useRef(null);
  const headingControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = (sectionRef.current as HTMLElement).getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 100) {
        headingControls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } });
        cardsControls.start(i => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.18, ease: 'easeOut' } }));
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headingControls, cardsControls]);

  const cards = [
    {
      img: '/A.png',
      title: 'Design kits',
      desc: 'Ready to use palettes, icons\ntextures',
      extra: <img src="/det.png" alt="Figma icon" className="w-[80px] h-[35px] rounded-[8px] object-contain" />,
    },
    {
      img: '/B.png',
      title: 'Cultural Context',
      desc: 'Every visual comes with a short\nshort or symbol meaning',
      extra: <div className="inline-flex items-center rounded-full py-[6px] px-[12px] text-gray-700 font-medium text-sm mt-auto"><FaBookOpen /><span className="ml-1">Rich storytelling</span></div>,
    },
    {
      img: '/C.png',
      title: 'Export Ready',
      desc: 'Use in Figma, Canva, Webflow,\nor even download',
      extra: <div className="flex gap-2.5 mt-auto"><img src="relap 3.png" alt="" /><img src="relap 2.png" alt="" /><img src="relap 1.png" alt="" /></div>,
    },
    {
      img: '/D.png',
      title: 'More Than Visuals',
      desc: 'Build brand identity rooted in\nsomething real.',
      extra: <div className="inline-flex items-center rounded-full py-[6px] px-[12px] text-gray-700 font-medium text-sm mt-auto"><PiFlowerTulipBold /><span>Authentic foundations</span></div>,
    },
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-[#FFEBE0] py-[80px] px-4 flex flex-col items-center font-sans overflow-hidden">
      {/* Top Section: What HeritageAI Gives You */}
      <motion.div
        className="text-center mb-[70px]"
        initial={{ opacity: 0, y: 40 }}
        animate={headingControls}
      >
        <div className="inline-flex items-center border-[#EF4444] border-1 bg-white rounded-full py-[8px] px-[15px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] mb-[45px]">
          <img
            src="/Box.png"
            alt="HeritageAI Icon"
            className="w-6 h-6 mr-2"
          />
          <span className="text-sm font-semibold p-2  text-[#EF4444]">What HeritengineAI Gives You</span>
        </div>
        <h5
          className="text-center text-[50px] font-medium text-[#333333] leading-[1.0] tracking-[-0.01em] m-0"
          style={{
            fontFamily: '',
            fontWeight: 600,
            fontStyle: 'black',
            lineHeight: '100%',
            letterSpacing: '-1%',
            textAlign: 'center',
          }}
        >
          One click.<br />
          <span className="italic" style={{ fontFamily: 'instrument, sans-serif', fontWeight: 300, fontStyle: 'thin', lineHeight: '100%', letterSpacing: '-1%', textAlign: 'center' }}>
            <span style={{ fontFamily: 'Manrope, sans-serif', fontStyle: 'thin', fontWeight: 400 }}>Infinite heritage.</span>
          </span>
        </h5>
      </motion.div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px] max-w-[1200px] w-full">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="bg-white rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.05)] p-[30px] flex flex-col items-start text-left transition-transform duration-200 ease-in-out hover:-translate-y-1"
            initial={{ opacity: 0, y: 40 }}
            animate={cardsControls}
            custom={i}
            whileHover={{ scale: 1.045, rotate: 1.5, boxShadow: '0 16px 32px rgba(239,68,68,0.13)' }}
            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
          >
            {/* Icon Animation */}
            <motion.img
              src={card.img}
              alt={card.title + ' icon'}
              className="w-[50px] h-[50px] mb-[20px]"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: 'easeOut' }}
            />
            {/* Content Animation */}
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.13, delayChildren: 0.18 },
                },
              }}
              className="w-full"
            >
              <motion.h3
                className="text-[22px] font-semibold text-[#333333] mt-0 mb-[10px]"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.22 + i * 0.13, ease: 'easeOut' }}
              >
                {card.title}
              </motion.h3>
              <motion.p
                className="text-[14px] text-[#666666] leading-[1.5] mb-[20px]"
                style={{ whiteSpace: 'pre-line' }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.28 + i * 0.13, ease: 'easeOut' }}
              >
                {card.desc}
              </motion.p>
              {/* Divider Animation */}
              <motion.div
                className="bg-[#eeeeee] h-[1px] w-[200px] my-[15px]"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 200, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.36 + i * 0.13, ease: 'easeOut' }}
                style={{ maxWidth: 200 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: 0.45 + i * 0.13, ease: 'easeOut' }}
              >
                {card.extra}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landfourth;