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
                  History & Civilization
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Ancient Rome (753 BCE–476 CE) was one of the greatest civilizations in human history, influencing law, governance, architecture, and language.</li>

  <li className="text-gray-700 text-sm"  >The Renaissance (1300s–1600s), born in cities like Florence, Rome, and Venice, saw revolutionary achievements in art, architecture, science, and philosophy. </li>
<li className="text-gray-700 text-sm">Italy was unified as a nation-state in 1861, bringing together culturally rich regions with diverse dialects and traditions. </li>
<li className="text-gray-700 text-sm">Today, Italy balances ancient heritage with modern creativity, remaining a global cultural and fashion capital.</li>
                
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Religion
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">The majority of Italians identify as Roman Catholic, with Vatican City, the heart of global Catholicism, located in Rome. </li>
 <li className="text-gray-700 text-sm"> Deep traditions of Catholic rituals, festivals, and saints' days still shape daily life in many regions. </li>
<li className="text-gray-700 text-sm"> Italy also has growing communities of other Christian denominations, Muslims, and non-religious individuals. </li>
<li className="text-gray-700 text-sm">The official language is Italian, a Romance language descended from Latin. </li>
< li className="text-gray-700 text-sm">Many regions have strong dialects or regional languages (e.g., Neapolitan, Sicilian, Venetian, Sardinian).</li>
<li className="text-gray-700 text-sm">Italian is renowned for its musicality, and is often associated with opera, poetry, and fine arts.</li>
               
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Clothings & Symbols
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Traditional attire varies by region—often elaborate, embroidered garments used during festivals and weddings. </li>
<li  className="text-gray-700 text-sm">Italy is a modern fashion powerhouse—home to Milan Fashion Week and luxury brands like Gucci, Prada, Armani, Versace. </li>
<li  className="text-gray-700 text-sm">National symbols: Olive branches, grapes, the Colosseum, Leaning Tower of Pisa, and the Tricolor flag (green, white, red).</li>
             
              </ul>
   <span className="font-semibold h-[68px] flex items-center text-[#1E1B20]" style={{fontFamily: 'Manrope, sans-serif',fontWeight: 600,fontStyle: 'normal',fontSize: '30px',lineHeight: '60%',letterSpacing: '-3%',}}>
                <img src="/face.png" alt="" />
                Culture & Arts
              </span>
              <ul className="list-disc pl-5">
                <li className="text-gray-700 text-sm mt-1">Italy is the birthplace of Leonardo da Vinci, Michelangelo, Dante, Raphael, Botticelli, and Vivaldi. </li>
<li className="text-gray-700 text-sm mt-1">It’s a global center of fine arts, literature, architecture, and design.</li>
 <li className="text-gray-700 text-sm mt-1">   Famous for Baroque cathedrals, Roman ruins, and Renaissance masterpieces. </li>
 <li className="text-gray-700 text-sm mt-1">  Italian culture values beauty, expression, and craftsmanship—la bella figura (making a good impression) is a cultural ideal.</li>
               
              </ul>






   <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Cuisine
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Italian cuisine is among the most beloved in the world. </li>
 <li className="text-gray-700 text-sm"> Pasta (spaghetti, penne, lasagna) </li>
<li className="text-gray-700 text-sm"> Pizza (originating from Naples) </li>
<li className="text-gray-700 text-sm">Cheese (Parmesan, mozzarella) </li>
< li className="text-gray-700 text-sm">Wines (Chianti, Barolo, Prosecco).</li>
<li className="text-gray-700 text-sm">Each region has distinct and recipe, shaped by geography and nature.</li>
               
              </ul>










               <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Craftmanship & Heritage
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Italy has centuries-old traditions of leatherwork, glassblowing (Murano), ceramics, tailoring, and silk weaving. </li>
 <li className="text-gray-700 text-sm"> Italian artisanship is globally admired for its precision, elegance, and durability. </li>
<li className="text-gray-700 text-sm"> Pizza (originating from Naples) </li>
<li className="text-gray-700 text-sm">Venetian masks, Sicilian carts, and Florentine goldwork are heritage icons. </li>

               
              </ul>








              
               <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Festivals & Traditions
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Rich calendar of cultural events: </li>
 <li className="text-gray-700 text-sm"> Carnevale di Venezia (Venice Carnival) </li>
<li className="text-gray-700 text-sm"> Palio di Siena (horse race)</li>
<li className="text-gray-700 text-sm">Festa della Repubblica (Republic Day) </li>
<li className="text-gray-700 text-sm">Deep regional pride and storytelling through folklore, music, and dance. </li>

               
              </ul>








   <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Lagacy & Global Impact
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Italian culture laid foundations for Western art, music, law, architecture, and science. </li>
 <li className="text-gray-700 text-sm"> Global diaspora of Italian immigrants helped spread Italian food, language, Catholicism, and values </li>
<li className="text-gray-700 text-sm"> Continues to lead in design, automotive (Ferrari, Lamborghini), gastronomy, and cultural diplomacy.</li>

               
              </ul>








            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/italian1.png" alt="Italian culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/italian2.png" alt="Italian cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/italian3.png" alt="Italian landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/italian4.png" alt="Italian fashion" className="w-full h-auto object-cover rounded-lg" />
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
                <li className="text-gray-700 text-sm">Maya (2000 BCE–1500 CE): Known for astronomy, pyramids, and hieroglyphic writing.</li>
<li className="text-gray-700 text-sm"> Aztecs (1325–1521 CE): Built the great city of Tenochtitlan (now Mexico City), practiced calendar astronomy and engineering.</li>
<li className="text-gray-700 text-sm">   Olmec, Zapotec, Toltec, and Mixtec cultures contributed to spiritual, artistic, and architectural legacies.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Mestizo (mixed indigenous and European ancestry), strong regional pride, family-centric values.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Colonial Period & Mestizaje
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">In 1521, Hernán Cortés conquered the Aztec Empire.</li>
<li  className="text-gray-700 text-sm"> Colonization introduced Catholicism, Spanish language, and European institutions.</li>
<li  className="text-gray-700 text-sm">The Mestizo identity (mixed Indigenous and European ancestry) became the foundation of modern Mexican identity.</li>
<li  className="text-gray-700 text-sm">Independence from Spain was achieved in 1810–1821.</li>
              
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Ethnic Composition
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Official language: Spanish </li>
<li className="text-gray-700 text-sm">Over 7 million speak Indigenous languages like Nahuatl, Maya, Mixtec, Zapotec, and Otomi.</li>
<li className="text-gray-700 text-sm">Ethnic groups: Mestizo (majority), Indigenous, Afro-Mexican, and smaller communities of Europeans, Asians, and Middle Eastern desce</li>
               
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                   Culture & Creative Legacy
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Art: Diego Rivera, Frida Kahlo, Rufino Tamayo.</li>
                <li className="text-gray-700 text-sm">Architecture: Mesoamerican pyramids, colonial cathedrals, colorful Barrios</li>
                <li className="text-gray-700 text-sm">Literature: Octavio Paz (Nobel Prize), Juan Rulfo.</li>
                <li className="text-gray-700 text-sm">Music: Mariachi, Banda, Ranchera, Son Jarocho, Huapango.</li>
                <li className="text-gray-700 text-sm">Dance: Jarabe Tapatío (Mexican Hat Dance), Danza de los Voladores.</li>
              </ul>




              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                   Symbolism & Color
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">National colors: Green (hope), White (unity), Red (blood of heroes).</li>
                <li className="text-gray-700 text-sm">Traditional Mexican culture uses vivid colors in everything from clothes to houses:</li>
                <li className="text-gray-700 text-sm">Bright pink (rosa mexicano)</li>
                <li className="text-gray-700 text-sm">Turquoise, marigold yellow, chili red, indigo, and cactus green</li>
                <li className="text-gray-700 text-sm">Symbolic motifs: sugar skulls, serpents, eagles, corn, maguey, hearts, and sun patterns.</li>
              </ul>

            





            
              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                   Traditional Clothing
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Men: Guayabera shirts, Charro suits, Sarape.</li>
                <li className="text-gray-700 text-sm">Women: Rebozos, Huipiles (embroidered blouses), Tehuana dresses (Oaxaca), colorful skirts</li>
                <li className="text-gray-700 text-sm">Many designs represent specific regions, Indigenous identities, and festivals</li>
              
              </ul>
              
             





              
              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Religion & Spirituality
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Predominantly Roman Catholic (over 80%)</li>
                <li className="text-gray-700 text-sm">Strong traditions of syncretism — Indigenous beliefs blended with Catholic saints and holidays.</li>
                <li className="text-gray-700 text-sm">Popular figures: Virgen de Guadalupe, Santa Muerte, Día de los Muertos (Day of the Dead)</li>
                  <li className="text-gray-700 text-sm">Rituals often include candles, marigolds, skulls, altars, incense</li>          
              </ul>










              
              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Cuisine
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Declared an Intangible Cultural Heritage of Humanity by UNESCO</li>
                <li className="text-gray-700 text-sm">Core ingredients: corn (maize), beans, chili peppers, avocados, squash, tomatoes, cacao</li>
                <li className="text-gray-700 text-sm">Famous dishes: Tacos, Tamales, Mole, Pozole, Enchiladas, Chiles en Nogada.</li>
                  <li className="text-gray-700 text-sm">Regional diversity from Yucatán (cochinita pibil) to Oaxaca (moles) to Puebla and Michoacán</li>          
              </ul>
              


 



               
              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Festivals & Traditions
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Día de los Muertos (Nov 1–2): Honoring ancestors with altars, marigolds, food, and skulls.</li>
                <li className="text-gray-700 text-sm">Cinco de Mayo (Puebla): Victory over France, more popular in the U.S.</li>
                <li className="text-gray-700 text-sm">Fiestas Patrias (September 16): Independence Day.</li>
                  <li className="text-gray-700 text-sm">Other celebrations: Guelaguetza (Oaxaca), La Candelaria, Las Posadas, and Quinceañera traditions.</li>          
              </ul>
            









              
              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Craftsmanship & Design
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Known for ceramics, embroideries, woven textiles, silverwork, masks, wood carvings, papel picado, alebrijes (fantastical animals).</li>
                <li className="text-gray-700 text-sm">Artisanal styles vary by region and reflect deep symbolism, spirituality, and oral traditions.</li>
                        
              </ul>
             




                <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                   Global Influence
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Mexico’s cultural footprint extends through music, cuisine, festivals, and migration.</li>
                <li className="text-gray-700 text-sm">Mexican-American communities have expanded cultural visibility through Chicano culture, Lowrider art, muralism, and political activism.</li>
                <li className="text-gray-700 text-sm">Mexican creativity continues to shape fashion, cinema, art, and design worldwide.</li>        
              </ul>









            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/mex1.png" alt="Mexican culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/mex2.png" alt="Mexican cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/mex3.png" alt="Mexican traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/mex4.png" alt="Mexican festivals" className="w-full h-auto object-cover rounded-lg" />
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
            <img src="/bri1.png" alt="British culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/bri2.png" alt="British landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/bri3.png" alt="British traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/bri4.png" alt="British cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* India Section */}
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
              India
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            India, the world's largest democracy, is a land of ancient civilizations, diverse cultures, and rich traditions. With a history spanning over 5,000 years, 
            India is known for its spiritual heritage, architectural marvels, and as the birthplace of major world religions including Hinduism, Buddhism, Jainism, and Sikhism.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">South Asia</span>
            <button
              onClick={() => toggleDropdown('india')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'india' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'india' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Identity
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Languages:</span> Hindi, English (official), and 21 other recognized regional languages including Bengali, Telugu, Marathi, Tamil, and Urdu.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Scripts:</span> Devanagari, Bengali, Gurmukhi, Tamil, Telugu, and more.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Unity in diversity, strong family values, respect for elders, and deep-rooted traditions.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Religion & Spirituality
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Major religions:</span> Hinduism (79.8%), Islam (14.2%), Christianity (2.3%), Sikhism (1.7%), Buddhism (0.7%), Jainism (0.4%), and others.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Key practices:</span> Yoga, meditation, temple worship, festivals, and pilgrimage.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Sacred sites:</span> Varanasi, Golden Temple, Bodh Gaya, Ajanta-Ellora, and Tirupati.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Symbols
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Attire:</span> Sari, salwar kameez, dhoti, kurta, and sherwani.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Art & symbols:</span> Lotus (national flower), peacock (national bird), Taj Mahal, classical dance forms, and Bollywood.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cuisine:</span> Diverse regional cuisines featuring spices, rice, wheat, lentils, and vegetables. Popular dishes include biryani, butter chicken, dosa, and samosas.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Values:</span> Respect for all religions, hospitality, family bonds, and education.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Traditions & Festivals
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Diwali - Festival of Lights</li>
                <li className="text-gray-700 text-sm">Holi - Festival of Colors</li>
                <li className="text-gray-700 text-sm">Eid, Christmas, and Guru Nanak Jayanti</li>
                <li className="text-gray-700 text-sm">Pongal, Onam, Bihu, and other regional harvest festivals</li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/ind1.png" alt="Indian culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ind2.png" alt="Indian landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ind3.png" alt="Indian traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ind4.png" alt="Indian cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* China Section */}
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
              China
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            China, one of the world's oldest continuous civilizations, has a recorded history spanning over 4,000 years. 
            As the most populous country, it's known for its ancient philosophy, technological innovations, and rich cultural heritage. 
            China's influence has shaped East Asian culture through its writing system, philosophy, and traditions.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">East Asia</span>
            <button
              onClick={() => toggleDropdown('china')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'china' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'china' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Identity
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Language:</span> Mandarin Chinese (official), along with several major dialects including Cantonese, Shanghainese, and Hokkien.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Writing system:</span> Chinese characters (Hanzi), used for over 3,000 years.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Identity:</span> Strong sense of cultural continuity, family values, and respect for education and authority.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Philosophy & Religion
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Major philosophies:</span> Confucianism, Taoism, and Buddhism.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Religious practices:</span> Ancestor veneration, folk religion, Buddhism, Taoism, Islam, and Christianity.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Key concepts:</span> Harmony (和 hé), face (面子 miànzi), guanxi (relationships), and filial piety (孝 xiào).</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Arts
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Traditional arts:</span> Calligraphy, ink wash painting, porcelain, jade carving, and silk embroidery.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Performing arts:</span> Peking opera, Chinese dance, and traditional music with instruments like guzheng and pipa.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Martial arts:</span> Kung Fu, Tai Chi, and Wushu.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Literature:</span> Classic works like "The Art of War," "Dream of the Red Chamber," and ancient poetry.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Traditions & Festivals
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm">Chinese New Year (Spring Festival) - Most important traditional holiday</li>
                <li className="text-gray-700 text-sm">Mid-Autumn Festival - Mooncakes and family reunions</li>
                <li className="text-gray-700 text-sm">Dragon Boat Festival - Zongzi and dragon boat races</li>
                <li className="text-gray-700 text-sm">Qingming Festival - Tomb-sweeping day to honor ancestors</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Cuisine & Tea Culture
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Regional cuisines:</span> Eight major culinary traditions including Sichuan, Cantonese, Shandong, and Huaiyang.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Staple foods:</span> Rice, wheat (noodles, dumplings), tofu, and a variety of vegetables and meats.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Tea culture:</span> Ceremonial tea preparation, with varieties like green tea, oolong, pu'er, and jasmine tea.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Dining customs:</span> Family-style meals, chopstick etiquette, and the importance of sharing food.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/chi1.png" alt="Chinese culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/chi2.png" alt="Chinese landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/chi3.png" alt="Chinese traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/chi4.png" alt="Chinese cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Pakistan Section */}
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
              Pakistan
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <img src="/Family Tree.png" alt="" className="h-5 w-5 sm:h-auto sm:w-auto" />
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">Origin & Ancestry</h2>
          </div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia with a rich history that dates back to the ancient Indus Valley Civilization. 
            Formed in 1947, it's a diverse nation with multiple ethnic groups, languages, and cultural traditions, 
            united by the Islamic faith and a shared historical heritage.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">South Asia</span>
            <button
              onClick={() => toggleDropdown('pakistan')}
              className="text-red-500 hover:underline ml-2 text-sm sm:text-base"
            >
              {openSection === 'pakistan' ? 'Read less...' : 'Read more...'}
            </button>
          </div>
          {openSection === 'pakistan' && (
            <div className="mt-4 p-4 bg-white rounded-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center py-2">
                <img src="/Translator.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Language & Identity
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Official languages:</span> Urdu (national) and English.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Major regional languages:</span> Punjabi, Sindhi, Pashto, Balochi, and Saraiki.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Script:</span> Modified Perso-Arabic script (Nastaliq) for Urdu and other regional languages.</li>
                <li className="text-gray-700 text-sm"><span className="font-semi-bold">Identity:</span> Strong Islamic identity with regional cultural influences, emphasizing family values and hospitality.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/Church.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Religion & Spirituality
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Religion:</span> Islam (96.4% Muslim, with Sunni majority and Shia minority), along with small Hindu, Christian, and Sikh communities.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Religious practices:</span> Daily prayers, Ramadan fasting, Zakat (charity), and Hajj pilgrimage.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Sufi influence:</span> Strong Sufi tradition with shrines and devotional music (Qawwali).</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Religious sites:</span> Faisal Mosque (Islam), Katas Raj Temples (Hinduism), and various Sufi shrines.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/face.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Culture & Arts
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Traditional attire:</span> Shalwar kameez (national dress), sherwani, and dupatta for women.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Music and dance:</span> Qawwali, Ghazal, folk music, and traditional dances like Bhangra and Kathak.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Handicrafts:</span> Pottery, carpets, woodwork, and truck art.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Literature:</span> Rich tradition of Urdu and regional language poetry and prose.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cinema:</span> Lollywood (Punjabi/Urdu cinema) and Pashto film industry.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Cuisine
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Staples:</span> Wheat (roti, naan), rice (biryani, pulao), lentils (daal), and meat (chicken, beef, mutton).</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Popular dishes:</span> Biryani, nihari, haleem, karahi, seekh kebabs, and various types of curries.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Breads:</span> Naan, roti, paratha, and kulcha.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Beverages:</span> Chai (tea), lassi, and sugarcane juice.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Sweets:</span> Gulab jamun, jalebi, barfi, and kheer.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Traditions & Festivals
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Islamic holidays:</span> Eid-ul-Fitr, Eid-ul-Adha, and Ramadan.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">National days:</span> Pakistan Day (March 23), Independence Day (August 14), and Defense Day (September 6).</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cultural festivals:</span> Basant (spring festival), Shandur Polo Festival, and Lok Mela.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Sufi festivals:</span> Urs celebrations at various shrines across the country.</li>
              </ul>

              <div className="flex items-center py-2 mt-4">
                <img src="/confa.png" alt="" className="w-8 h-8 mr-2" />
                <h2 className="text-xl md:text-2xl font-semibold text-[#1E1B20] font-manrope">
                  Sports & Recreation
                </h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 py-2">
                <li className="text-gray-700 text-sm"><span className="font-semibold">Cricket:</span> The most popular sport, with a passionate fan base and successful national team.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Hockey:</span> National sport, with a strong historical record in international competitions.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Polo:</span> Played in northern regions like Gilgit-Baltistan and Chitral.</li>
                <li className="text-gray-700 text-sm"><span className="font-semibold">Traditional sports:</span> Kabaddi, wrestling (kushti), and tent pegging.</li>
              </ul>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/pak1.png" alt="Pakistani culture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/pak2.png" alt="Pakistani landmarks" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/pak3.png" alt="Pakistani traditions" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/pak4.png" alt="Pakistani cuisine" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galary;