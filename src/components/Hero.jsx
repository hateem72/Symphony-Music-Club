import { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import MusicalSphere from './MusicalSphere'; 
import music from '../assets/anthem.mp3'; 

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const textRef = useRef();
  const audioRef = useRef(new Audio(music));

  useEffect(() => {
    audioRef.current.loop = true; 
    if (isPlaying) {
      audioRef.current.play().catch(error => console.error("Playback error:", error));
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlaying]);


  useEffect(() => {
    const animateText = () => {
      if (textRef.current) {
        textRef.current.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 10}px)`;
      }
      requestAnimationFrame(animateText);
    };
    animateText();
  }, []);

  return (
    <section className="h-screen bg-gradient relative flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            minPolarAngle={Math.PI / 2.5} 
            maxPolarAngle={Math.PI / 2.5} 
            autoRotate 
            autoRotateSpeed={isPlaying ? 2 : 0.5}
          />
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
          <MusicalSphere isPlaying={isPlaying} />
        </Canvas>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1 
          ref={textRef}
          className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-widest glow-pulse mb-4 sm:mb-6"
          style={{ 
            fontFamily: "'Audiowide', cursive", 
            WebkitTextStroke: '1px #00FFFF',
            textShadow: '0 0 20px #FF00FF, 0 0 40px #00FFFF',
          }}
        >
          SYMPHONY
        </h1>
        <p 
  className="text-lg sm:text-2xl md:text-3xl mb-6 sm:mb-8 floating font-bold relative"
  style={{ 
    fontFamily: "'Orbitron', sans-serif",
    background: 'linear-gradient(45deg, #FF00FF, #00FFFF)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    WebkitTextStroke: '1px rgba(0, 255, 255, 0.5)',
    textShadow: `
      0 0 20px rgba(0, 255, 255, 0.5),
      0 0 40px rgba(255, 0, 255, 0.5),
      0 0 60px rgba(0, 255, 255, 0.3)
    `,
    transform: 'perspective(500px) rotateX(10deg)',
    animation: 'floating 3s ease-in-out infinite, glowPulse 2s infinite'
  }}
>
  The Music Club
</p>
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent neon-border rounded-full text-lg sm:text-xl glow-pulse hover:scale-110 transition-transform"
        >
          {isPlaying ? 'Pause the Anthem' : 'Play Club Anthem'}
        </button>
        <p className="text-sm sm:text-base text-cyan-400 mt-11 animate-pulse opacity-75">
          ✨ Drag or move your cursor to interact with the animation ✨
        </p>
      </div>
    </section>
  );
}

export default Hero;
