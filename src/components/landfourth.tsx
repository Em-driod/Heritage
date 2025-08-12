import { FaBookOpen } from "react-icons/fa";
import { PiFlowerTulipBold } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const Landfourth = () => {
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
      extra: <img src="/det.png" alt="Figma icon" className="w-[60px] h-[26px] sm:w-[80px] sm:h-[35px] rounded-[6px] sm:rounded-[8px] object-contain" />,
    },
    {
      img: '/B.png',
      title: 'Cultural Context',
      desc: 'Every visual comes with a short\nshort or symbol meaning',
      extra: (
        <div className="inline-flex items-center rounded-full py-[4px] px-[8px] sm:py-[6px] sm:px-[12px] text-gray-700 font-medium text-[12px] sm:text-xl lg:text-sm">
          <FaBookOpen className="text-[12px] sm:text-xs lg:text-sm" />
          <span className="ml-1 text-gray-500 text-[15px]  whitespace-nowrap overflow-hidden text-ellipsis">Rich storytelling</span>
        </div>
      ),
    },
    {
      img: '/C.png',
      title: 'Export Ready',
      desc: 'Use in Figma, Canva, Webflow,\nor even download',
      extra: (
        <div className="flex gap-1.5 sm:gap-2.5">
          <img src="relap 3.png" alt="" className="w-auto h-auto max-w-[35px] max-h-[18px] sm:max-w-[50px] sm:max-h-[25px]" />
          <img src="relap 2.png" alt="" className="w-auto h-auto max-w-[35px] max-h-[18px] sm:max-w-[50px] sm:max-h-[25px]" />
          <img src="relap 1.png" alt="" className="w-auto h-auto max-w-[35px] max-h-[18px] sm:max-w-[50px] sm:max-h-[25px]" />
        </div>
      ),
    },
    {
      img: '/D.png',
      title: 'More Than Visuals',
      desc: 'Build brand identity rooted in\nsomething real.',
      extra: (
        <div className="inline-flex items-center rounded-full py-[4px] px-[8px] sm:py-[6px] sm:px-[12px] text-gray-700 font-medium text-[12px] sm:text-xs lg:text-sm">
          <PiFlowerTulipBold className="text-[15px] sm:text-xs lg:text-sm" />
          <span className="ml-0 text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis  text-[14px] ">Authentic foundations</span>
        </div>
      ),
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="bg-[#FFEBE0] pt-12 pb-4 lg:py-12 sm:py-4 px-3 sm:px-4 flex flex-col items-center font-sans overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={headingControls}
      >
        <div className="inline-flex items-center border-[#EF4444] border bg-white rounded-full py-2 px-4 shadow-sm mb-6">
          <img src="/Box.png" alt="Icon" className="w-6 h-6 mr-2" />
          <span className="text-xs sm:text-sm font-semibold text-[#EF4444] whitespace-nowrap overflow-hidden text-ellipsis">
            What HeritengineAI Gives You
          </span>
        </div>
        <h5 className="text-[20px] sm:text-[28px] lg:text-[36px] xl:text-[50px] font-semibold text-[#333] leading-tight tracking-tight">
          <span className="whitespace-nowrap">One click.</span><br />
          <span className="italic font-light">
            <span className="font-normal whitespace-nowrap">Infinite heritage.</span>
          </span>
        </h5>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5 max-w-[1200px] w-full px-1 sm:px-0">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="bg-white rounded-lg sm:rounded-xl shadow-md p-3 sm:p-4 lg:p-6 flex flex-col justify-between min-h-[180px] sm:min-h-[20px] sm:h-[50px] lg:min-h-[260px]"
            initial={{ opacity: 0, y: 40 }}
            animate={cardsControls}
            custom={i}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          >
            <motion.img
              src={card.img}
              alt={`${card.title} icon`}
              className="w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] mb-2 sm:mb-3"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
            />
            <div className="flex flex-col items-stretch flex-1">
              <h3 className="text-[11px] sm:text-[13px] lg:text-[16px] xl:text-[18px] font-semibold text-[#333] mb-1.5 sm:mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis">{card.title}</h3>
              <p className="text-[12px] sm:text-[14px] lg:text-[12px] xl:text-[13px] text-[#666] leading-relaxed flex-1 mb-1 sm:mb-3 overflow-hidden">{card.desc}</p>
              <div className="h-[0.5px] sm:h-[1px] bg-[#eee] w-full mb-1 sm:mb-3" />
              {/* Extra Content */}
              <div className="mt-auto text-gray-400 ">{card.extra}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Landfourth;