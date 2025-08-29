 import  { useState } from 'react';

const Galary = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const yorubaContent = (
    <div>
      <div className="flex items-center py-2">
        <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Language & identity
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Language:</span> Yorùbá (a tonal language with deep proverbs, poetry, and praise names)
        </li>
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Writing:</span> Developed using Latin script; early literacy promoted by Christian missionaries in the 1800s
        </li>
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Identity:</span> Centered on lineage, spiritual connection, and oríkì (praise poetry)
        </li>
      </ul>
      <div className="flex items-center py-2 mt-4">
        <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Religion & Spirituality
        </h2>
      </div>
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

      <div className="flex items-center py-2 mt-4">
        <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Culture & Symbols
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Attire:</span> Agbada, Buba and Iro, Aso-Oke, Gele
        </li>
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Art & symbols:</span> Beadwork, talking drums (dundun), batik fabric, bronze sculpture (especially from ancient Ifẹ̀)
        </li>
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Cuisine:</span> Àmàlà, Ewedu, Gbegiri, Ẹ̀bà, Ẹfó-riro, Jollof rice
        </li>
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Values:</span> Respect for elders, communal life, proverbs, storytelling, and naming traditions
        </li>
      </ul>

      <div className="flex items-center py-2 mt-4">
        <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Festival & Celebration
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">Oṣun-Ọṣogbo Festival – global UNESCO-recognized event celebrating the river goddess Ọṣun</li>
        <li className="text-gray-700 text-sm">Ẹyọ Festival (Lagos) – masquerade display rooted in Lagos Island.</li>
        <li className="text-gray-700 text-sm">New Yam Festivals – held across various Yoruba towns to honor agriculture and ancestor</li>
      </ul>
    </div>
  );

  const igboContent = (
    <div>
      <div className="flex items-center py-2">
        <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Language & Religion
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">
          Speak the Igbo language with several dialects.
        </li>
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Religiously diverse:</span> Traditional spirituality, Christianity (predominantly), and a growing cultural revival of indigenous beliefs.
        </li>
      </ul>
      <div className="flex items-center py-2 mt-4">
        <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Clothing & Symbol
        </h2>
      </div>
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

      <div className="flex items-center py-2 mt-4">
        <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Culture & Innovation
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">
          Known for entrepreneurial spirit, democratic governance, and age grade system.
        </li>
        <li className="text-gray-700 text-sm">
          The Igbo have no centralized monarchy, but instead embrace republicanism, and censorship-led leadership.
        </li>
        <li className="text-gray-700 text-sm">
          Popular for their Uli art, bronze casting, cloth weaving, and vibrant masquerade festivals (Mmanwu).
        </li>
      </ul>



      <div className="flex items-center py-2 mt-4">
        <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Notable Contribution
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">Igbo scholars, scientists, and creatives are prominent globally.</li>
        <li className="text-gray-700 text-sm">The people played key roles in Nigeria's independence and post-colonial economy.</li>
        <li className="text-gray-700 text-sm">Historically resilient, especially post the Biafran War (1967–1970), where they rebuilt communities and economy rapidly.</li>
      </ul>

    </div>
  );

  const hausaContent = (
    <div>
      <div className="flex items-center py-2">
        <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Language & Religion
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">Speak the Hausa language, one of Africa's most widely spoken languages.</li>
        <li className="text-gray-700 text-sm">Written in both Ajami (Arabic script) and Boko (Latin script).</li>
        <li className="text-gray-700 text-sm">Hausa is used in radio, literature, film (Kannywood), and interethnic communication across West Africa.</li>
        <li className="text-gray-700 text-sm">Predominantly Muslim (Sunni), with Islam introduced between the 11th and 14th centuries.</li>
        <li className="text-gray-700 text-sm">Strong traditions of Quranic education, Islamic jurisprudence, and Sufi spiritual orders like the Tijaniyya and Qadiriyya.</li>
        <li className="text-gray-700 text-sm">Traditional spiritual practices still survive in rural areas.</li>
        <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Strong Islamic heritage, ancient city-states, rich oral tradition.</li>
      </ul>
      <div className="flex items-center py-2 mt-4">
        <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Culture & Arts
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">Known for leatherwork, embroidery, metalwork, dyeing (notably indigo), and calabash carving.</li>
        <li className="text-gray-700 text-sm">The ancient Kofar Mata dye pits in Kano remain a symbol of traditional textile craft.</li>
        <li className="text-gray-700 text-sm">Music: Instruments like kakaki (trumpet), goje (fiddle), and poetic praise songs called "waka."</li>
      </ul>
      <div className="flex items-center py-2 mt-4">
        <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Clothing & Symbols
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">Men wear Babban Riga (flowing robe), Kaftan, and Fula cap (Hula).</li>
        <li className="text-gray-700 text-sm">Women often wear richly colored wrappers (zani), blouses, and headscarves (gele) with henna art.</li>
        <li className="text-gray-700 text-sm">Colors: Indigo (symbol of prestige), white (purity), and green (Islamic symbolism).</li>
      </ul>
      <div className="flex items-center py-2 mt-4">
        <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          History & Civilization
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">The Hausa trace their ancestry to the Bayajidda legend, where a prince from Baghdad arrives in Daura and marries a local queen.</li>
        <li className="text-gray-700 text-sm">Historically, the Hausa formed seven powerful city-states (known as the Hausa Bakwai)—e.g., Kano, Katsina, Zaria, Gobir—each acting as a commercial and cultural hub.</li>
        <li className="text-gray-700 text-sm">Flourished between the 11th–16th centuries as Islamic emirates, famous for architecture, scholarship, and trans-Saharan trade.</li>
        <li className="text-gray-700 text-sm"><span className="font-semibold">Values:</span> Respect, discipline, innovation, and harmony.</li>
      </ul>
      <div className="flex items-center py-2 mt-4">
        <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Commerce & Legacy
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">Historically renowned as traders, farmers, and scholars.</li>
        <li className="text-gray-700 text-sm">Hausa cities like Kano and Katsina were major trans-Saharan trade centers.</li>
        <li className="text-gray-700 text-sm">Modern Hausa people remain dominant in regional trade, politics, and media (e.g., Kannywood, Hausa-language films).</li>
      </ul>

      <div className="flex items-center py-2 mt-4">
        <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
          Notable Influence
        </h2>
      </div>
      <ul className="list-disc pl-5 space-y-2 py-2">
        <li className="text-gray-700 text-sm">The Hausa have influenced Islamic education, architecture, dress, and commerce across West Africa.</li>
        <li className="text-gray-700 text-sm">Their cultural exports—language, fashion, film—are part of a growing Afro-Islamic identity in the region.</li>
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
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language 
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Speak Japanese (Nihongo), written using three scripts: Kanji (Chinese characters), Hiragana, and Katakana.</li>
                <li className="text-gray-700 text-sm">Highly nuanced language, reflecting formality, age, and relationship dynamics.</li>
              </ul>
              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                Clothing & Symbols
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Traditional attire includes:
              
                   <li  className="text-gray-700 text-sm">Kimono – formal garment for both men and women</li>
                   <li  className="text-gray-700 text-sm">Yukata – lightweight, casual kimono worn at festivals</li>
                   <li  className="text-gray-700 text-sm">Hakama – wide-legged trousers worn over kimono</li>
                   <li  className="text-gray-700 text-sm">Haori – short kimono-style jacket</li>
                 
                <li  className="text-gray-700 text-sm"> Symbols: Mount Fuji, sakura (cherry blossom), crane (longevity), rising sun (flag)</li> </li>
                
              </ul>
              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Cultural value
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Key concepts: Wa (harmony), Omotenashi (hospitality), Wabi-sabi (imperfect beauty), and Kaizen (continuous improvement).</li>
                <li className="text-gray-700 text-sm">Deep sense of group identity, politeness, and ritual.</li>
            
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Arts
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Traditional arts include Ikebana (flower arrangement), origami (paper folding), calligraphy (shodo), and woodblock printing (ukiyo-e).</li>
                <li className="text-gray-700 text-sm">Performance arts: Kabuki, Noh, and Bunraku (puppet theatre).</li>
                <li className="text-gray-700 text-sm">Architecture ranges from Zen temples and castles to modern minimalist homes.</li>
                <li className="text-gray-700 text-sm">Japan is globally known for manga, anime, cinema, and video game culture.</li>
                
              </ul>


               <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  History & Civilization
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Japan’s early culture was shaped during the Jomon period (14,000–300 BCE), followed by the Yayoi (agricultural revolution) and Kofun periods (rise of clans and tomb building).</li>
                <li className="text-gray-700 text-sm">The Heian period (794–1185) saw a flourishing of art, literature, and court culture.</li>
                <li className="text-gray-700 text-sm">From the samurai-led feudal eras (Kamakura, Muromachi, Edo) to Meiji Restoration (1868), Japan moved from isolation to modernization.</li>
                       <li className="text-gray-700 text-sm">  After World War II, Japan rapidly became a global economic and technological leader.</li>
               
              </ul>

                            
                      <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Philosophy & Religion
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Shinto, the indigenous spirituality, focuses on kami (spirits) and nature worship.</li>
                <li className="text-gray-700 text-sm">Buddhism entered in the 6th century and coexists with Shinto practices.</li>
                <li className="text-gray-700 text-sm">Japanese culture embraces harmony, balance, respect, and rituals of purification and honor.</li>
                <li className="text-gray-700 text-sm">Also influenced by Confucianism, Zen Buddhism, and Western philosophy in modern times</li>
              </ul>         



                   <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Textile & Crafts
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Renowned for:</li>
                <li className="text-gray-700 text-sm">Silk weaving</li>
                <li className="text-gray-700 text-sm">Indigo dyeing (aizome)</li>
                <li className="text-gray-700 text-sm">Katazome (stencil dyeing)</li>
                <li className="text-gray-700 text-sm">Sashiko (decorative reinforcement stitching)</li>
                <li className="text-gray-700 text-sm">Each region in Japan often has unique textile techniques and motifs.</li>
           
              </ul>  



                 <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                Global Influence
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Japan has influenced global design, fashion, architecture, technology, and pop culture</li>

           <li className="text-gray-700 text-sm">Continues to be a leader in sustainable living, minimalist design, and cultural preservation.</li>
              </ul>  

             




            </div>

               



          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/jap1.png" alt="Japanese culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/jap2.png" alt="Japanese traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/jap3.png" alt="Japanese landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/jap4.png" alt="Japanese cuisine" className="w-full h-auto object-cover rounded-lg" />
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
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Identity
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Language:</span> Italian (official), regional dialects (Sicilian, Venetian, Neapolitan, etc.).</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Strong regional pride, family-centric, Catholic heritage.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Religion & Spirituality
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Traditional beliefs:</span> Roman Catholicism, saints, festivals, and processions.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Key practices:</span> Sunday family meals, religious holidays, art and architecture.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Symbols
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Attire:</span> Fashion-forward, tailored suits, regional costumes.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Art & symbols:</span> Renaissance art, Roman ruins, opera, Ferrari, pasta.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cuisine:</span> Pizza, pasta, gelato, espresso, olive oil.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Values:</span> Creativity, hospitality, family, and tradition.</li>
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
            <img src="/1.png" alt="Italian culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/2.png" alt="Italian cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/3.png" alt="Italian landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/4.png" alt="Italian fashion" className="w-full h-auto object-cover rounded-lg" />
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
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Identity
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Language:</span> Spanish (official), Nahuatl, Maya, and other indigenous languages.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Mestizo (mixed indigenous and European ancestry), strong regional pride, family-centric values.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Religion & Spirituality
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Traditional beliefs:</span> Blend of Catholicism and indigenous rituals (e.g., Day of the Dead).</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Key practices:</span> Festivals, processions, folk saints, ancestral reverence.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Symbols
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Attire:</span> Colorful dresses, sombreros, embroidered shirts.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Art & symbols:</span> Papel picado, murals, piñatas, Frida Kahlo, mariachi music.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cuisine:</span> Tacos, tamales, mole, pozole, chiles en nogada.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Values:</span> Hospitality, respect for elders, storytelling, and community.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Traditions & Festivals
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Día de los Muertos (Day of the Dead) celebrations</li>
                <li className="text-gray-700 text-sm">Independence Day (September 16) with El Grito</li>
                <li className="text-gray-700 text-sm">Las Posadas Christmas processions</li>
                <li className="text-gray-700 text-sm">Guelaguetza festival in Oaxaca</li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/1.png" alt="Mexican culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/2.png" alt="Mexican cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/3.png" alt="Mexican traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/4.png" alt="Mexican festivals" className="w-full h-auto object-cover rounded-lg" />
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
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Identity
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Language:</span> English (official), Welsh, Scottish Gaelic, Irish.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Regional pride, monarchy, multiculturalism.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Religion & Spirituality
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Traditional beliefs:</span> Anglican Christianity, Catholicism, secularism.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Key practices:</span> Royal ceremonies, holidays, literature.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Symbols
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Attire:</span> Tweed, kilts, bowler hats, royal regalia.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Art & symbols:</span> Shakespeare, The Beatles, castles, tea, football.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cuisine:</span> Fish and chips, roast beef, scones, tea.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Values:</span> Politeness, tradition, humor, and innovation.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Traditions & Festivals
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Royal events and ceremonies (Trooping the Colour, Changing of the Guard)</li>
                <li className="text-gray-700 text-sm">Bonfire Night (November 5th) with fireworks and bonfires</li>
                <li className="text-gray-700 text-sm">Afternoon tea traditions and pub culture</li>
                <li className="text-gray-700 text-sm">Highland Games in Scotland</li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/1.png" alt="British culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/2.png" alt="British landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/3.png" alt="British traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/4.png" alt="British cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;