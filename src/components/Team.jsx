

import { useState, useEffect } from 'react';
import defaultImage from '../assets/0.png';
import anas from '../assets/4.png';
import ayush from '../assets/5.png';
import hateem from '../assets/6.png';
import shubhi from '../assets/7.png';
import harsh from '../assets/8.png';
import rudra from '../assets/9.png';
import digjot from '../assets/10.png';
import vaibhav from '../assets/11.png';
import { FaInstagram } from "react-icons/fa";

function Team() {
  const [hoveredCard, setHoveredCard] = useState(null); // For hover animations

  const teamMembers = [
    {
      name: "Anas Faisal",
      role: "All Rounder",
      instagram: "@anas_faisal",
      link: "https://www.instagram.com/p/DEP71MxPZ0v/?utm_source=ig_web_copy_link&igsh=M",
      message: "Music is the universal language of the soul.",
      experience: "10",
      image: anas,
    },
    {
      name: "Ayush Shrivastava",
      role: "Drummer",
      instagram: "@AyushShrivastava",
      link: "https://www.instagram.com/alexmusic",
      message: "Let your voice echo through my cosmos.",
      experience: "7",
      image: ayush,
    },
    {
      name: "Mohd. Hateem",
      role: "Keyboardist",
      instagram: "@hateem_ansari",
      link: "https://www.instagram.com/p/DEP71MxPZ0v/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      message: "Music is the universal language of the soul.",
      experience: "8",
      image: hateem,
    },
    { name: "Shubhi", role: "Vocalist", instagram: "shubhi._.thapa", link: "https://www.instagram.com/p/CzJSK1PS95T/?hl=en", message: " Music replays the Past Memories, Awaken our Forgotten World and make our Mind Travel", experience: "4", image: shubhi, },
    {
      name: "Harsh Bharti ",
      role: "Drummer",
      instagram: "@haarrsshh",
      link: "https://www.instagram.com/p/DEHgcUBI2S8/?igsh=MWkzODNpMGY1d2x2aA==",
      message: "Playing drums is how I communicate. It's how I speak to people. That's my God-given gift.",
      experience: "7",
      image: harsh,
    },
    {
      name: "Vaibhav Panday",
      role: " vocalist",
      instagram: "@vaibhhaaavvvv",
      link: " https://www.instagram.com/vaibhhaaavvvvmusic?igsh=YnU2MzB0cGJ1dWU2",
      message: "The voice is the only instrument that can span the entire range of human emotion.",
      experience: "3",
      image: vaibhav,
    },
    { name: "rudra tiwari", role: "guitar/vocals", Instagram: "@rudratiwari_7", link: "https://www.instagram.com/rudratiwari_7?igsh=MTR6bDl1ODFvMWMyZg==", message: " music heals everything  ", experience: "2", image: rudra, },
    {
      name: "Digjot Singh",
      role: " Tablist",
      instagram: "@Digjottt",
      link: " https://www.instagram.com/vaibvvvvmusic?igsh=YnU2MzB0cGJ1dWU2",
      message: "The beat is the heart of the music.",
      experience: "3",
      image: digjot,
    },
  ];

  useEffect(() => {
    teamMembers.forEach((member, i) => {
      console.log(`Member ${i + 1} Image:`, member.image);
    });
  }, []);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 sm:mb-16 glow-pulse tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
        The Soundwave Crew
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="relative h-[32rem] sm:h-[36rem] overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_#00FFFF]"
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute w-full h-full bg-gray-900 p-6 sm:p-8 flex flex-col items-center justify-between outline outline-2 outline-cyan-400 outline-offset-[-4px] hover:outline-offset-[-6px] transition-all duration-500">
              <div className="relative w-36 h-48 sm:w-48 sm:h-64 mb-4 sm:mb-6">
                <img
                  src={member.image || defaultImage}
                  alt={member.name}
                  className="absolute w-full h-full object-cover rounded-none"
                  onError={(e) => {
                    e.target.src = defaultImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-purple-500/30 animate-pulse-slow rounded-none"></div>
              </div>

              {/* Username */}
              <h3
                className={`text-2xl sm:text-4xl font-extrabold text-white glow-pulse tracking-wider text-center transition-transform duration-500 ${hoveredCard === i ? 'scale-110' : ''
                  }`}
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                  WebkitTextStroke: '1px #00FFFF',
                  textShadow: '0 0 20px #FFFFFF, 0 0 30px #FFFFFF, 0 0 40px #00FFFF',
                }}
              >
                {member.name}
              </h3>

              <div className="text-center flex flex-col items-center space-y-4">
                <p
                  className={`text-base sm:text-lg text-cyan-400 transition-opacity duration-500 ${hoveredCard === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  Role: {member.role}
                </p>
                <p
                  className={`text-base sm:text-lg text-cyan-400 transition-opacity duration-500 ${hoveredCard === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  Experience: {member.experience} years
                </p>
                <p
                  className={`text-purple-400 glow-pulse text-base sm:text-xl italic text-center transition-opacity duration-500 ${hoveredCard === i ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  "{member.message}"
                </p>
                <a
  href={member.link}
  target="_blank"
  rel="noopener noreferrer"
  className={`text-cyan-400 cursor-pointer hover:text-purple-400 glow-pulse text-base sm:text-xl flex items-center transition-opacity duration-500 ${
    hoveredCard === i ? 'opacity-100' : 'opacity-0'
  }`}
  style={{ fontFamily: "'Audiowide', sans-serif" }}
  onClick={(e) => {
    e.preventDefault(); 
    e.stopPropagation(); 
    if (member.link) {
      window.open(member.link, '_blank');
    }
  }}
>
  <FaInstagram className="w-6 h-6 mr-2" />
  {member.instagram}
</a>
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

export default Team;