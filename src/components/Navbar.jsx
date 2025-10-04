import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition">
          ZenPose
        </Link>
        <div className="space-x-6 font-semibold">
          <Link to="/" className="hover:text-blue-700 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-700 transition">About</Link>
          <Link to="/poses" className="hover:text-blue-700 transition">Poses</Link>
          <Link to="/tryme" className="hover:text-blue-700 transition">Try Me</Link>
          <Link to="/feedback" className="hover:text-blue-700 transition">Feedback</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
