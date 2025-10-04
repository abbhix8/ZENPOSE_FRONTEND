import React from "react";

const poses = [
  { name: "Adho Mukha Svanasana", img: "/images/Adho_Mukha_Svanasana.jpg", benefit: "Stretches the spine and hamstrings" },
  { name: "Ashtanga Namaskara", img: "/images/Ashtanga_Namaskara.jpg", benefit: "Strengthens arms and chest" },
  { name: "Ashwa Sanchalanasana", img: "/images/Ashwa_Sanchalanasana.jpg", benefit: "Improves balance and hip flexibility" },
  { name: "Bhujangasana", img: "/images/Bhujangasana.jpg", benefit: "Strengthens spine and relieves stress" },
  { name: "Dandasana", img: "/images/Dandasana.jpg", benefit: "Strengthens core and back" },
  { name: "Hastapadasana", img: "/images/Hastapadasana.jpg", benefit: "Stretches hamstrings and calves" },
  { name: "Hastauttanasana", img: "/images/Hastauttanasana.jpg", benefit: "Improves posture and stretches body" },
  { name: "Pranamasana", img: "/images/Pranamasana.jpg", benefit: "Centers mind and body" },
  { name: "Tadasana", img: "/images/Tadasana.jpg", benefit: "Improves posture and balance" },
];

function Poses() {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100 min-h-screen animate-fadeIn">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12 animate-fadeIn">
        Suryanamaskar Poses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {poses.map((pose, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg bg-white/80 backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col items-center"
          >
            {/* Square image container */}
            <div className="w-full aspect-square flex items-center justify-center bg-gray-100">
              <img
                src={pose.img}
                alt={pose.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg mb-1">{pose.name}</h3>
              <p className="text-gray-600">{pose.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Poses;
