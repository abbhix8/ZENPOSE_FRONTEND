import React from "react";

function About() {
  return (
    <div className="py-20 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 min-h-screen animate-fadeIn">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">About ZenPose</h1>
        <p className="text-gray-700 text-lg mb-4">
          ZenPose is an AI/ML-based yoga detection and correction project. It
          helps users perform yoga poses correctly using advanced computer
          vision techniques.
        </p>
        <p className="text-gray-700 text-lg">
          <strong>Tools & Stack:</strong> MediaPipe, COCO model for pose
          database, Random Forest algorithm for corrections, and a modern
          React/Tailwind frontend.
        </p>
      </div>
    </div>
  );
}

export default About;
