import  { useState } from 'react';

const Galary = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const yorubaContent = (
    <div>
      <span
        className="font-semibold h-[68px] flex items-center text-[#1E1B20] "
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '60%',
          letterSpacing: '-3%',
        }}
      >
        <img src="/Translator.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Language &amp; identity
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mb-1">
          <span className="font-semibold">Language :</span> Yorùbá (a tonal language with deep proverbs, poetry, and praise names)
        </li>
        <li className="text-gray-700 text-sm mt-1 mb-1">
          <span className="font-semibold">Writing :</span> Developed using Latin script; early literacy promoted by Christian missionaries in the 1800s
        </li>
        <li className="text-gray-700 text-sm mt-1 mb-1">
          <span className="font-semibold">Identity :</span> Centered on lineage, spiritual connection, and oríkì (praise poetry)
        </li>
      </ul>
      <span
        className="font-semibold h-[68px] flex items-center text-[#1E1B20]"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '60%',
          letterSpacing: '-3%',
        }}
      ><img src="/Church.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Religion &amp; Spirituality
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Traditional belief system :</span> Ifá (divination system), with a pantheon of deities called Òrìṣà (e.g., Ọbàtálá)
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Key practices :</span> Rituals, festivals, drumming, ancestral reverence
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Modern influences :</span> Christianity and Islam coexist with traditional beliefs
        </li>
      </ul>

      <span
        className="font-semibold h-[68px] flex items-center text-[#1E1B20]"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '60%',
          letterSpacing: '-3%',
        }}
      > <img src="/face.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Culture &amp; Symbols
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Attire :</span> Agbada, Buba and Iro, Aso-Oke, Gele
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Art &amp; symbols :</span> Beadwork, talking drums (dundun), batik fabric, bronze sculpture (especially from ancient Ifẹ̀)
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Cuisine :</span> Àmàlà, Ewedu, Gbegiri, Ẹ̀bà, Ẹfó-riro, Jollof rice
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Values :</span> Respect for elders, communal life, proverbs, storytelling, and naming traditions
        </li>
      </ul>

         <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/confa.png" alt="" />
                Festival & Celebration
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1">Oṣun-Ọṣogbo Festival – global UNESCO-recognized event celebrating the river goddess Ọṣun</li>
                <li className="text-gray-700 text-sm mt-1">Ẹyọ Festival (Lagos) – masquerade display rooted in Lagos Island..</li>
                <li className="text-gray-700 text-sm mt-1">New Yam Festivals – held across various Yoruba towns to honor agriculture and ancestor </li>
               
              </ul>
    </div>
  );

  const igboContent = (
    <div>
      <span
        className="font-semibold h-[68px] flex items-center text-[#1E1B20] "
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '60%',
          letterSpacing: '-3%',
        }}
      >
        <img src="/Church.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Language &amp; Religion
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm">
          Speak the Igbo language with several dialects.
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Religiously diverse:</span> Traditional spirituality, Christianity (predominantly), and a growing cultural revival of indigenous beliefs.
        </li>
        
      </ul>
      <span
        className="font-semibold h-[68px] flex items-center text-[#1E1B20]"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '60%',
          letterSpacing: '-3%',
        }}
      ><img src="/Translator.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Clothing &amp; Symbol
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Traditional belief system :</span> Ifá (divination system), with a pantheon of deities called Òrìṣà (e.g., Ọbàtálá)
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Key practices :</span> Rituals, festivals, drumming, ancestral reverence
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Modern influences :</span> Christianity and Islam coexist with traditional beliefs
        </li>
      </ul>

      <span
        className="font-semibold h-[68px] flex items-center text-[#1E1B20]"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontStyle: 'normal',
          fontSize: '30px',
          lineHeight: '60%',
          letterSpacing: '-3%',
        }}
      > <img src="/face.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Culture &amp; Innovation
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">
          known for entrepreneurial spirit, democratic governance, and age grade system.
        </li>
        <li className="text-gray-700 text-sm mt-1">
          The igbo has no centralized monarchy, but instead embrace republicanism, and censusorship-led leadership
        </li>
        <li className="text-gray-700 text-sm mt-1">
          popular for their Uli art, bronze casting, cloth weaving and vibrant masquarade festivals (Mmanwu)
        </li>
   
      </ul>



   <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/confa.png" alt="" />
                Notable contribution
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1">Igbo scholars, scientists, and creatives are prominent globally. </li>
                <li className="text-gray-700 text-sm mt-1">The people played key roles in Nigeria's independence and post-colonial economy</li>
                <li className="text-gray-700 text-sm mt-1">Historically resilient, especially post the Biafran War (1967–1970), where they rebuilt communities and economy rapidly.</li>
               
              </ul>

    </div>
  );

  const hausaContent = (
    <div>
      <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
        <img src="/Translator.png" alt="" />
        Language & Religion
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mb-1">Speak the Hausa language, one of Africa’s most widely spoken languages.</li>
        <li className="text-gray-700 text-sm mb-1">Written in both Ajami (Arabic script) and Boko (Latin script).</li>
        <li className="text-gray-700 text-sm mb-1">Hausa is used in radio, literature, film (Kannywood), and interethnic communication across West Africa.</li>
        <li className="text-gray-700 text-sm mb-1">Predominantly Muslim (Sunni), with Islam introduced between the 11th and 14th centuries.</li>
        <li className="text-gray-700 text-sm mb-1">Strong traditions of Quranic education, Islamic jurisprudence, and Sufi spiritual orders like the Tijaniyya and Qadiriyya.</li>
        <li className="text-gray-700 text-sm mb-1">Traditional spiritual practices still survive in rural areas.</li>
        <li className="text-gray-700 text-sm mt-1 mb-1"><span className="font-semibold">Identity :</span> Strong Islamic heritage, ancient city-states, rich oral tradition.</li>
      </ul>
      <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
        <img src="/face.png" alt="" />
        Culture & Arts
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">Known for leatherwork, embroidery, metalwork, dyeing (notably indigo), and calabash carving.</li>
        <li className="text-gray-700 text-sm mt-1">The ancient Kofar Mata dye pits in Kano remain a symbol of traditional textile craft.</li>
        <li className="text-gray-700 text-sm mt-1">Music: Instruments like kakaki (trumpet), goje (fiddle), and poetic praise songs called "waka."</li>
      </ul>
      <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
        <img src="/Church.png" alt="" />
        Clothings & Symbols
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">Men wear Babban Riga (flowing robe), Kaftan, and Fula cap (Hula).</li>
        <li className="text-gray-700 text-sm mt-1">Women often wear richly colored wrappers (zani), blouses, and headscarves (gele) with henna art.</li>
        <li className="text-gray-700 text-sm mt-1">Colors: Indigo (symbol of prestige), white (purity), and green (Islamic symbolism)..</li>
        
      </ul>
      <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
        <img src="/face.png" alt="" />
        History & Civilization
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">The Hausa trace their ancestry to the Bayajidda legend, where a prince from Baghdad arrives in Daura and marries a local queen..</li>
        <li className="text-gray-700 text-sm mt-1">Historically, the Hausa formed seven powerful city-states (known as the Hausa Bakwai)—e.g., Kano, Katsina, Zaria, Gobir—each <br /> acting as a commercial and cultural hub.</li>
        <li className="text-gray-700 text-sm mt-1">Flourished between the 11th–16th centuries as Islamic emirates, famous for architecture, scholarship, and trans-Saharan trade..</li>
        <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Respect, discipline, innovation, and harmony.
        </li>
      </ul>
      <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
        <img src="/confa.png" alt="" />
        Commerce & Legacy
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">Historically renowned as traders, farmers, and scholars.</li>
        <li className="text-gray-700 text-sm mt-1">Hausa cities like Kano and Katsina were major trans-Saharan trade centers</li>
        <li className="text-gray-700 text-sm mt-1">Modern Hausa people remain dominant in regional trade, politics, and media (e.g., Kannywood, Hausa-language films.</li>
     
      </ul>

      <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
        <img src="/confa.png" alt="" />
        Notable influence
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm mt-1">The Hausa have influenced Islamic education, architecture, dress, and commerce across West Africa.</li>
        <li className="text-gray-700 text-sm mt-1">Their cultural exports—language, fashion, film—are part of a growing Afro-Islamic identity in the region</li>
       
      </ul>
    </div>
  );

  return (
    <div className="flex flex-col">
      {/* Yoruba Section */}
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
            <button
              onClick={() => toggleDropdown('yoruba')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'yoruba' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'yoruba' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              {yorubaContent}
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/odu.png" alt="Yoruba head sculpture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/eyo.png" alt="Yoruba Egungun masquerade" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ilu.png" alt="Yoruba Ilu" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ofi.png" alt="Yoruba traditional attire" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Igbo Section */}
      <hr className="my-16 border-t-2 border-gray-200" />
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
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
            The Igbo (also spelled Ibo) people are one of the largest ethnic groups in Africa, primarily located in southeastern Nigeria, across states like Abia, Anambra, Ebonyi, Enugu, and Imo. With a population exceeding 30 million, they also have a strong diaspora presence worldwide.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">Southeastern Nigeria</span>
            <button
              onClick={() => toggleDropdown('igbo')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'igbo' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'igbo' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              {igboContent}
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/igbo1.png" alt="Igbo head sculpture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/igbo2.png" alt="Igbo Egungun masquerade" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/igbo3.png" alt="Igbo Ilu" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/igbo4.png" alt="Igbo traditional attire" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Hausa Section */}
      <hr className="my-16 border-t-2 border-gray-200" />
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Hausa
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
           The Hausa are one of the largest ethnic groups in Africa, with over 50 million speakers primarily spread across northern <br />
            Nigeria and southern Niger, and diasporas in Cameroon, Ghana, Chad, and Sudan. Their influence extends widely across <br />
            West Africa, largely due to trade and Islam.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">Northern Nigeria</span>
            <button
              onClick={() => toggleDropdown('hausa')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'hausa' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'hausa' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              {hausaContent}
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/hau1.png" alt="Hausa traditional architecture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/hau2.png" alt="Hausa horsemen during a festival" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/hau3.png" alt="Hausa crafts" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/hau4.png" alt="Hausa traditional attire" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
      {/* Japanese Section */}
      <hr className="my-16 border-t-2 border-gray-200" />
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Japanese
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
           The Japanese people (日本人 – Nihonjin) are the indigenous population of Japan, an island nation in East Asia consisting of <br />
            four main islands: Honshu, Hokkaido, Kyushu, and Shikoku, as well as over 6,000 smaller islands. Japan’s history spans <br />
             thousands of years, with deep roots in Shinto traditions, Buddhism, and imperial legacy.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">Japan</span>
            <button
              onClick={() => toggleDropdown('japanese')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'japanese' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'japanese' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Translator.png" alt="" />
                Language & Identity
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mb-1"><span className="font-semibold">Language :</span> Japanese (official), Ryukyuan languages.</li>
                <li className="text-gray-700 text-sm mt-1 mb-1"><span className="font-semibold">Identity :</span> Strong sense of national identity, respect for tradition, and group harmony.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Church.png" alt="" />
                Religion & Spirituality
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Traditional beliefs :</span> Shintoism, Buddhism, ancestor worship.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Key practices :</span> Festivals, tea ceremony, Zen gardens, calligraphy.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Kimono, yukata, school uniforms.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Origami, cherry blossoms, samurai, anime, manga.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Sushi, ramen, tempura, matcha, bento.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Respect, discipline, innovation, and harmony.
                </li>
              </ul>

   <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Kimono, yukata, school uniforms.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Origami, cherry blossoms, samurai, anime, manga.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Sushi, ramen, tempura, matcha, bento.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Respect, discipline, innovation, and harmony.
                </li>
              </ul>




            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/japan.png" alt="Japanese culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
     
     

      {/* Italian Section */}
      <hr className="my-16 border-t-2 border-gray-200" />
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Italian
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
           The Italian people (Italian: Italiani) are native to Italy, a southern European country shaped like a boot, bordered by the <br />
            Mediterranean Sea. Their roots stretch back to the Roman Empire, the Etruscans, and even earlier Italic tribes. Italy is a <br />
             nation defined by deep historical layers, from ancient civilization to modern innovation, and is known globally for its <br />
              contributions to art, science, religion, fashion, and food.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">Italy</span>
            <button
              onClick={() => toggleDropdown('italian')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'italian' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'italian' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Translator.png" alt="" />
                Language & Identity
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mb-1"><span className="font-semibold">Language :</span> Italian (official), regional dialects (Sicilian, Venetian, Neapolitan, etc.).</li>
                <li className="text-gray-700 text-sm mt-1 mb-1"><span className="font-semibold">Identity :</span> Strong regional pride, family-centric, Catholic heritage.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Church.png" alt="" />
                Religion & Spirituality
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Traditional beliefs :</span> Roman Catholicism, saints, festivals, and processions.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Key practices :</span> Sunday family meals, religious holidays, art and architecture.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Fashion-forward, tailored suits, regional costumes.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Renaissance art, Roman ruins, opera, Ferrari, pasta.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Pizza, pasta, gelato, espresso, olive oil.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Creativity, hospitality, family, and tradition.
                </li>
              </ul>
   <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Kimono, yukata, school uniforms.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Origami, cherry blossoms, samurai, anime, manga.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Sushi, ramen, tempura, matcha, bento.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Respect, discipline, innovation, and harmony.
                </li>
              </ul>

            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/italy.png" alt="Italian culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

 {/* Mexican Section */}

       <hr className="my-16 border-t-2 border-gray-200" />
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Mexican
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
          The Mexican people (Spanish: Mexicanos) trace their identity to a vibrant fusion of Indigenous Mesoamerican civilizations <br />
           (like the Aztecs, Maya, Zapotecs) and Spanish colonizers. Located in North America, Mexico’s diverse geography — from <br />
            deserts to jungles — mirrors its rich cultural landscape. It is home to over 60 recognized Indigenous groups, each with  <br />
            distinct languages and traditions.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">Mexico</span>
            <button
              onClick={() => toggleDropdown('mexican')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'mexican' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'mexican' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Translator.png" alt="" />
                Language & Identity
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mb-1"><span className="font-semibold">Language :</span> Spanish (official), Nahuatl, Maya, and other indigenous languages.</li>
                <li className="text-gray-700 text-sm mt-1 mb-1"><span className="font-semibold">Identity :</span> Mestizo (mixed indigenous and European ancestry), strong regional pride, family-centric values.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Church.png" alt="" />
                Religion & Spirituality
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Traditional beliefs :</span> Blend of Catholicism and indigenous rituals (e.g., Day of the Dead).</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Key practices :</span> Festivals, processions, folk saints, ancestral reverence.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Colorful dresses, sombreros, embroidered shirts.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Papel picado, murals, piñatas, Frida Kahlo, mariachi music.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Tacos, tamales, mole, pozole, chiles en nogada.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Hospitality, respect for elders, storytelling, and community.
                </li>
              </ul>

                 <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Kimono, yukata, school uniforms.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Origami, cherry blossoms, samurai, anime, manga.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Sushi, ramen, tempura, matcha, bento.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Respect, discipline, innovation, and harmony.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/mexico.png" alt="Mexican culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* British Section */}
      <hr className="my-16 border-t-2 border-gray-200" />
      <div className="bg-white">
        <div className="p-4 sm:p-8 mt-4 sm:mt-16">
          <div className="flex items-center">
            <img src="/Doc.png" alt="" className="h-8 w-8 sm:h-auto sm:w-auto" />
            <div
              className="text-3xl sm:text-5xl font-normal ml-2"
              style={{
                backgroundImage: 'linear-gradient(to right, #e75a7c, #f7b446)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              British
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            British culture is a blend of English, Scottish, Welsh, and Irish traditions, shaped by centuries of monarchy, literature, and global influence.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">United Kingdom</span>
            <button
              onClick={() => toggleDropdown('british')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'british' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'british' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Translator.png" alt="" />
                Language & Identity
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mb-1"><span className="font-semibold">Language :</span> English (official), Welsh, Scottish Gaelic, Irish.</li>
                <li className="text-gray-700 text-sm mt-1 mb-1"><span className="font-semibold">Identity :</span> Regional pride, monarchy, multiculturalism.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/Church.png" alt="" />
                Religion & Spirituality
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Traditional beliefs :</span> Anglican Christianity, Catholicism, secularism.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Key practices :</span> Royal ceremonies, holidays, literature.</li>
              </ul>
              <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Tweed, kilts, bowler hats, royal regalia.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Shakespeare, The Beatles, castles, tea, football.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Fish and chips, roast beef, scones, tea.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Politeness, tradition, humor, and innovation.
                </li>
              </ul>

                 <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Symbols
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Attire :</span> Kimono, yukata, school uniforms.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Art & symbols :</span> Origami, cherry blossoms, samurai, anime, manga.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Cuisine :</span> Sushi, ramen, tempura, matcha, bento.</li>
                <li className="text-gray-700 text-sm mt-1"><span className="font-semibold">Values :</span> Respect, discipline, innovation, and harmony.
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/britain.png" alt="British culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;