import React from "react";

function Home() {
  return (
    <div className="text-center py-20 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 min-h-screen animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-6 animate-bounce">
        Welcome to ZenPose
      </h1>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Discover AI-assisted Yoga detection and correction for a healthier and
        more mindful life. Improve your posture, flexibility, and overall
        well-being.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
        {[
          "Enhances Flexibility",
          "Improves Posture",
          "Reduces Stress",
          "Strengthens Core",
          "Boosts Mindfulness",
          "Increases Energy",
        ].map((benefit, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg hover:-translate-y-2 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
            <p className="text-gray-600">
              Regular practice of yoga can help you {benefit.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
