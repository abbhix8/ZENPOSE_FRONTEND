import React, { useState } from "react";

function Feedback() {
  const [rating, setRating] = useState(0);

  return (
    <div className="py-20 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-100 min-h-screen animate-fadeIn">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8 text-blue-700">Feedback</h1>
        <textarea
          className="w-full p-4 rounded-lg shadow-lg border border-gray-300 resize-none mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="5"
          placeholder="Share your experience..."
        />
        <div className="flex justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className={`text-4xl ${
                rating >= star ? "text-yellow-400" : "text-gray-300"
              } transition-colors duration-300`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-lg hover:bg-blue-800 transition-colors duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Feedback;
