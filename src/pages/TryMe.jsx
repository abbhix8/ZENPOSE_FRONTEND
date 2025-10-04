import React from "react";

function TryMe() {
  return (
    <div className="text-center mt-10 animate-fadeIn">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">Try Me</h1>
      <p className="text-gray-700 mb-4">This section will have live AI-assisted yoga detection using your webcam.</p>
      <button className="bg-blue-600 text-white py-2 px-6 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg">
        Start Detection
      </button>
    </div>
  );
}

export default TryMe;
