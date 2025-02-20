import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-black bg-opacity-20 backdrop-blur-md py-4 px-4 sm:px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 
            className="text-2xl sm:text-3xl font-extrabold tracking-wider glow-pulse"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              WebkitTextStroke: '1px #00FFFF',
              textShadow: '0 0 15px #FF00FF, 0 0 25px #00FFFF',
            }}
          >
            SYMPHONY
          </h1>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="sm:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-cyan-400 hover:text-purple-400 focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} absolute sm:static top-16 left-0 w-full sm:w-auto bg-black bg-opacity-80 sm:bg-transparent sm:flex-row flex-col items-center sm:space-x-8 space-y-4 sm:space-y-0 p-4 sm:p-0`}>
          <a href="#hero" className="text-lg sm:text-xl text-cyan-400 hover:text-purple-400 glow-pulse transition-colors">
            Home
          </a>
          <div className="relative group">
            <button className="text-lg sm:text-xl text-cyan-400 hover:text-purple-400 glow-pulse flex items-center">
              Club
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-48 bg-gray-900 bg-opacity-90 rounded-lg shadow-lg neon-border hidden group-hover:block">
              <a href="#about" className="block px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-cyan-400 glow-pulse transition-colors">
                About
              </a>
              <a href="#mentors" className="block px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-cyan-400 glow-pulse transition-colors">
                Mentors
              </a>
              <a href="#team" className="block px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-cyan-400 glow-pulse transition-colors">
                Team
              </a>
              <a href="#photos" className="block px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-cyan-400 glow-pulse transition-colors">
                Photos
              </a>
              <a href="#performances" className="block px-4 py-2 text-sm sm:text-base text-gray-300 hover:text-cyan-400 glow-pulse transition-colors">
                Performances
              </a>
            </div>
          </div>
          <a href="#footer" className="text-lg sm:text-xl text-cyan-400 hover:text-purple-400 glow-pulse transition-colors">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;