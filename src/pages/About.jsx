import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-5xl font-bold text-center text-pink-600 mb-8">
        About ZenPose
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">🧘‍♂️ Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          ZenPose is an AI-powered yoga pose detection and correction system. It helps users learn Surya Namaskar poses accurately using computer vision (Mediapipe) and machine learning (RandomForest). The system provides both visual and audio feedback to guide users through yoga poses safely and effectively.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">💻 System Environment</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Python 3.x for backend processing</li>
          <li>Mediapipe for real-time human pose detection</li>
          <li>OpenCV for capturing video frames from webcam</li>
          <li>RandomForest Classifier (Scikit-learn) for pose recognition</li>
          <li>pyttsx3 for audio feedback</li>
          <li>Webcam (minimum 720p) for capturing user poses</li>
          <li>Cross-platform support: Windows, Linux, MacOS</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">🎯 Functional Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>User Use Case – Search Pose:</strong> Users can search for specific yoga poses and view instructions before performing them.</li>
          <li><strong>Trainer Use Case – Add/Update Pose:</strong> Trainers can add new poses by capturing landmark data, updating datasets, and retraining the model.</li>
          <li><strong>System Use Case – Provide Feedback:</strong> ZenPose continuously monitors user poses via webcam. It compares detected keypoints to reference poses and gives corrective feedback visually and via speech (e.g., "Straighten your back").</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">⚙️ Non-Functional Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Performance:</strong> Real-time pose detection with minimal lag (&lt;200ms).</li>
          <li><strong>Accuracy:</strong> Pose classification accuracy above &gt;85%.</li>
          <li><strong>Usability:</strong> Simple and intuitive UI for all users.</li>
          <li><strong>Reliability:</strong> Handles errors gracefully (e.g., camera not detected).</li>
          <li><strong>Portability:</strong> Works on Windows, Linux, and MacOS.</li>
          <li><strong>Scalability:</strong> Supports adding more yoga poses in future.</li>
          <li><strong>Security:</strong> Pose data and ML models are stored locally without external sharing.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">🌟 Benefits of ZenPose</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Ensures correct posture during yoga practice</li>
          <li>Provides real-time corrective feedback</li>
          <li>Safe learning environment without physical instructor</li>
          <li>Improves flexibility, strength, and mindfulness</li>
          <li>Easy for beginners and advanced practitioners</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
