import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Poses from "./pages/Poses";
import TryMe from "./pages/TryMe";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800">
      <Navbar />
      <div className="p-6 animate-fadeIn">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/poses" element={<Poses />} />
          <Route path="/tryme" element={<TryMe />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
