import React from "react";

function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen py-16 px-6 md:px-12 animate-fadeIn">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12 animate-fadeIn">
        Welcome to ZenPose
      </h1>

      {/* History of Yoga */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">🌿 The Origins of Yoga</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Yoga, a profound spiritual and physical discipline, traces its roots to ancient India over 5,000 years ago. 
          The term "yoga" is derived from the Sanskrit word "yuj," meaning "to unite" or "to join," symbolizing the 
          union of body, mind, and spirit.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Vedic Period (1500–500 BCE):</strong> Yoga's earliest mentions appear in the Rigveda, focusing on rituals and hymns.</li>
          <li><strong>Upanishadic Period (500–200 BCE):</strong> Philosophical texts like the Upanishads introduced concepts of meditation and self-realization.</li>
          <li><strong>Classical Period (200 BCE–500 CE):</strong> Patanjali's Yoga Sutras systematized yoga practices, emphasizing ethical disciplines and meditation.</li>
          <li><strong>Post-Classical Period (500 CE–present):</strong> Yoga evolved into various schools, including Hatha Yoga, focusing on physical postures and breath control.</li>
        </ul>
      </section>

      {/* Government Initiatives */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">🇮🇳 Government Initiatives</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Ministry of AYUSH:</strong> Established to promote traditional systems of medicine and holistic health practices, including yoga.</li>
          <li><strong>International Day of Yoga (IDY):</strong> Initiated in 2015, IDY is celebrated annually on June 21, with widespread participation across the globe.</li>
          <li><strong>Yoga in Education:</strong> Incorporation of yoga into school curricula to promote physical and mental well-being among students.</li>
          <li><strong>Research and Development:</strong> Funding for research projects to explore the benefits and applications of yoga in various fields.</li>
        </ul>
      </section>

      {/* Global Reception */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">🌍 Global Reception of Yoga</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>United Nations:</strong> Recognized the importance of yoga in promoting health and well-being, leading to the establishment of IDY.</li>
          <li><strong>Worldwide Participation:</strong> Millions of people from diverse cultures and backgrounds participate in yoga sessions on IDY, fostering global unity and peace.</li>
        </ul>
      </section>

      {/* Benefits of Yoga */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">🌱 Benefits of Yoga</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Physical Health:</strong> Improves flexibility, strength, and posture.</li>
          <li><strong>Mental Well-being:</strong> Reduces stress, anxiety, and promotes emotional balance.</li>
          <li><strong>Spiritual Growth:</strong> Enhances self-awareness and fosters a sense of inner peace.</li>
          <li><strong>Holistic Health:</strong> Aids in the prevention and management of various lifestyle-related diseases.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
