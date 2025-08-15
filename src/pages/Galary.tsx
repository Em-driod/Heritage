import React, { useState } from 'react';
import Modal from '../components/Modal'; // Assuming Modal.tsx or Modal.jsx is in the same directory

const Galary = () => {
  interface ModalContent {
    title: React.ReactNode;
    content: React.ReactNode;
  }

  const [modalContent, setModalContent] = useState<ModalContent | null>(null);

  const handleOpenModal = (content: ModalContent) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  // Content for each modal
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
      > <img src="/Translator.png" alt="" />
        <i className="fa-solid fa-language mr-3" aria-hidden="true"></i>
        Language &amp; identity
      </span>
      <ul className="list-disc pl-5">
        <li className="text-gray-700 text-sm">
          <span className="font-semibold">Language :</span> Yorùbá (a tonal language with deep proverbs, poetry, and praise names)
        </li>
        <li className="text-gray-700 text-sm mt-1">
          <span className="font-semibold">Writing :</span> Developed using Latin script; early literacy promoted by Christian missionaries in the 1800s
        </li>
        <li className="text-gray-700 text-sm mt-1">
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
    </div>
  );

  const igboContent = (
    <div>
      <p>
        The Igbo (also spelled Ibo) people are one of the largest ethnic groups in Africa, primarily located in{' '}
        <span className="font-bold">southeastern Nigeria</span>, across states like Abia, Anambra, Ebonyi, Enugu, and Imo. With a population exceeding 30 million, they also have a strong diaspora presence worldwide.
      </p>
      <p>
        The Igbo trace their origin to Nri, an ancient kingdom often referred to as the spiritual homeland of the Igbo. Historically, Igbo society was largely decentralized, consisting of autonomous communities and villages rather than a single, unified kingdom. Their cultural practices include the Mbari art tradition, a ritualistic art form dedicated to deities, and masquerade festivals like the Mmanwu.
      </p>
    </div>
  );

  const hausaContent = (
    <div>
      <p>
        The Hausa people are one of the largest ethnic groups in West Africa, with a population of over 60 million people. They are primarily concentrated in{' '}
        <span className="font-bold">Northern Nigeria</span> and southeastern Niger, with significant communities in other parts of West and Central Africa.
      </p>
      <p>
        The Hausa are known for their rich history of powerful states and empires, notably the Hausa Bakwai (Seven Hausa States) which were established as early as the 11th century. Their culture is heavily influenced by Islamic traditions, which have shaped their legal systems, education, and daily life for centuries. Key cultural elements include distinctive architecture, vibrant textile and leatherwork, and a strong oral tradition.
      </p>
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
            <button onClick={() => handleOpenModal({ title: '', content: yorubaContent })} className="text-red-500 hover:underline ml-2 text-sm sm:text-base">
              Read more...
            </button>
          </div>
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
            <button onClick={() => handleOpenModal({ title: 'Igbo', content: igboContent })} className="text-red-500 hover:underline ml-2 text-sm sm:text-base">
              Read more...
            </button>
          </div>
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
            The Hausa people are one of the largest ethnic groups in West Africa.
            <br />
            They have a rich history spanning centuries, particularly in Northern Nigeria.
          </p>
          <div className="flex items-center mt-8">
            <span className="font-bold text-gray-700 mr-1 text-sm sm:text-base">• Primary Location:</span>
            <span className="text-gray-600 text-sm sm:text-base">Northern Nigeria</span>
            <button onClick={() => handleOpenModal({ title: 'Hausa', content: hausaContent })} className="text-red-500 hover:underline ml-2 text-sm sm:text-base">
              Read more...
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-4 lg:pr-20 sm:pr-0 sm:p-8 max-w-full mx-auto">
          <div className="col-span-1">
            <img src="/odu.png" alt="Hausa traditional architecture" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/eyo.png" alt="Hausa horsemen during a festival" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ilu.png" alt="Hausa crafts" className="w-full h-auto object-cover rounded-lg" />
          </div>
          <div className="col-span-1">
            <img src="/ofi.png" alt="Hausa traditional attire" className="w-full h-auto object-cover rounded-lg" />
          </div>
        </div>
      </div>

      {/* Modal is rendered here, only when modalContent is not null */}
      <Modal show={modalContent !== null} onClose={handleCloseModal} title={modalContent?.title}>
        {modalContent?.content}
      </Modal>
    </div>
  );
};

export default Galary;