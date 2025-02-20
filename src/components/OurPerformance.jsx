import { useState } from "react";

function OurPerformance() {
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null); 

  const performances = [
    {
      title: "Reeth 2023",
      youtubeId: "aeOyWgtsyyI",
      description: "Unleashing electrifying rhythms at our Freshers' Night!",
    },
    {
      title: "Winter Gala 2023",
      youtubeId: "23PHS_RFxUs",
      description: "Soulful melodies under the Fog.",
    },
    {
      title: "Reeth 2024",
      youtubeId: "KrEqweTDxLI",
      description: "High-energy rock vibes rocking the campus!",
    },
    {
      title: "Classical Group Singing 2024",
      youtubeId: "FSJ5amqDLvU",
      description: "Timeless classics brought to life.",
    },
  ];

  const handleVideoClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient">
      <h2
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 sm:mb-16 glow-pulse tracking-wider"
        style={{ fontFamily: "'Audiowide', sans-serif" }}
      >
        Our Epic Performances
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 max-w-7xl mx-auto">
        {performances.map((performance, i) => (
          <div
            key={i}
            className="relative h-[20rem] sm:h-[24rem] overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_#00FFFF] cursor-pointer"
            onMouseEnter={() => setHoveredVideo(i)}
            onMouseLeave={() => setHoveredVideo(null)}
            onClick={() => handleVideoClick(performance.youtubeId)} 
          >
            <div className="absolute w-full h-full bg-gray-900 p-4 sm:p-6 flex flex-col items-center justify-between outline outline-2 outline-cyan-400 outline-offset-[-4px] hover:outline-offset-[-6px] transition-all duration-500">
            
              <div className="w-full h-[12rem] sm:h-[16rem] mb-4 sm:mb-6">
                <iframe
                  src={`https://www.youtube.com/embed/${performance.youtubeId}?autoplay=0&mute=1`}
                  title={performance.title}
                  className="w-full h-full rounded-none pointer-events-none"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Title */}
              <h3
                className={`text-xl sm:text-2xl font-extrabold text-cyan-400 glow-pulse tracking-wider text-center transition-transform duration-500 ${
                  hoveredVideo === i ? "scale-110" : ""
                }`}
                style={{
                  fontFamily: "'Audiowide', sans-serif",
                  WebkitTextStroke: "1px #00FFFF",
                  textShadow: "0 0 20px #00FFFF, 0 0 30px #00FFFF, 0 0 40px #00FFFF",
                }}
              >
                {performance.title}
              </h3>

              {/* Description */}
              <p
                className={`text-base sm:text-lg text-purple-400 glow-pulse italic text-center transition-opacity duration-500 ${
                  hoveredVideo === i ? "opacity-100" : "opacity-0"
                }`}
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {performance.description}
              </p>

              {/* Animation Overlay */}
              {hoveredVideo === i && (
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-purple-500/20 animate-pulse-slow rounded-none"></div>
              )}
            </div>
          </div>
        ))}
      </div>

     
      {selectedVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-[90%] sm:w-[60%] lg:w-[50%] aspect-video bg-black p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <iframe
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="Performance Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default OurPerformance;
