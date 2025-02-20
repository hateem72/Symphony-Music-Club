import { useState, useEffect } from 'react';
import rubby from '../assets/1.png'; 
import saurabh from '../assets/2.png'; 
import varun from '../assets/3.png';
import purvi from '../assets/12.png';
import defaultImage from '../assets/0.png';

function Mentors() {
  const [hoveredCard, setHoveredCard] = useState(null); 

  const mentors = [
    {
      name: "Mrs. Rubby Ma'am",
      role: "Director-AGOI",
      image: rubby,
    },
    {
      name: "Mrs. Purvi Ma'am",
      role: "Faculty Coordinator",
      image: purvi,
    },
    {
      name: "Mr. Saurabh Sir",
      role: "Music Coordinator",
      image: saurabh,
    },
    {
      name: "Mr. Prashant Sir",
      role: "Faculty Coordinator",
      image: defaultImage,
    },
    {
      name: "Mr. Varun Sir",
      role: "Aluminus Mentor",
      image: varun,
    },
  ];

  useEffect(() => {
    mentors.forEach((mentor, i) => {
      console.log(`Mentor ${i + 1} Image:`, mentor.image);
    });
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 glow-pulse tracking-wider" style={{ fontFamily: "'Georgia', serif" }}>
        Our Mentors
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
        {mentors.map((mentor, i) => (
          <div
            key={i}
            className="relative h-[32rem] sm:h-[36rem] overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_#00FFFF]"
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute w-full h-full bg-gray-900 p-6 sm:p-8 flex flex-col items-center justify-between outline outline-2 outline-cyan-400 outline-offset-[-4px] hover:outline-offset-[-6px] transition-all duration-500">
              <div className="relative w-36 h-64 sm:w-48 sm:h-80 mb-4 sm:mb-6">
                <img
                  src={mentor.image || defaultImage}
                  alt={mentor.name}
                  className="absolute w-full h-full object-cover rounded-none"
                  onError={(e) => {
                    console.error(`Failed to load image for ${mentor.name}:`, mentor.image);
                    e.target.src = defaultImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-purple-500/30 animate-pulse-slow rounded-none"></div>
              </div>

              <h3
                className={`text-3xl sm:text-5xl font-bold text-white glow-pulse tracking-wide text-center transition-transform duration-500 ${
                  hoveredCard === i ? 'scale-110' : ''
                }`}
                style={{
                  fontFamily: "'Georgia', serif",
                  WebkitTextStroke: '1px #00FFFF',
                  textShadow: '0 0 20px #FFFFFF, 0 0 30px #00FFFF, 0 0 40px #FFFFFF',
                }}
              >
                {mentor.name}
              </h3>

              {/* Details */}
              <div className="text-center flex flex-col items-center space-y-4">
                <p
                  className={`text-xl sm:text-2xl text-cyan-400 transition-opacity duration-500 ${
                    hoveredCard === i ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {mentor.role}
                </p>
              </div>

              {hoveredCard === i && (
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 animate-pulse-slow rounded-none"></div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Mentors;