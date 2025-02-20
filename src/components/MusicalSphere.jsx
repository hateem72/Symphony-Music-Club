import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function MusicalSphere({ isPlaying }) {
  const sphereRef = useRef();
  const groupRef = useRef();
  const analyserRef = useRef(null);
  const [beatStrength, setBeatStrength] = useState(0);

  useEffect(() => {
    if (!analyserRef.current) {
      
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256; 

      analyserRef.current = analyser;
    }
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += isPlaying ? 0.04 + beatStrength * 0.05 : 0.005;
      sphereRef.current.rotation.x += isPlaying ? 0.02 + beatStrength * 0.02 : 0.003;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01;
    }

    // Get audio frequency data
    if (analyserRef.current) {
      const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
      analyserRef.current.getByteFrequencyData(dataArray);
      const avgFrequency = dataArray.reduce((sum, val) => sum + val, 0) / dataArray.length;
      setBeatStrength(avgFrequency / 255); 
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={3 + beatStrength * 2} rotationIntensity={isPlaying ? 2 + beatStrength : 0.5} floatIntensity={4 + beatStrength}>
        <mesh ref={sphereRef}>
          <icosahedronGeometry args={[3, 3]} />
          <meshPhongMaterial 
            color="#00FFFF" 
            emissive="#FF00FF" 
            shininess={200} 
            wireframe={true} 
            transparent 
            opacity={0.7} 
            side={THREE.DoubleSide}
          />
        </mesh>
      </Float>

      {/* Floating Musical Notes */}
      {Array.from({ length: 40 }).map((_, i) => {
        const note = ['♪', '♫', '♬', '♩'][i % 4]; 
        return (
          <Float 
            key={i} 
            speed={(isPlaying ? 2 + beatStrength * 3 : 1.5) + i * 0.05} 
            rotationIntensity={isPlaying ? 1.5 + beatStrength : 0.5} 
            floatIntensity={isPlaying ? 5 + beatStrength * 2 : 3}
          >
            <Html
              position={[
                Math.sin(i * 0.15 + Date.now() * 0.001) * (7 + beatStrength * 2),
                Math.cos(i * 0.15) * (7 + beatStrength * 3) + Math.sin(Date.now() * 0.001 + i) * 2,
                Math.cos(i * 0.1) * (7 + beatStrength * 2)
              ]}
              center
              style={{
                color: i % 2 === 0 ? "#00FFFF" : "#FF00FF",
                fontSize: `${24 + beatStrength * 10}px`,
                fontWeight: "bold",
                textShadow: "0 0 10px white",
                transform: `scale(${1 + beatStrength * 0.5})`,
              }}
            >
              {note}
            </Html>
          </Float>
        );
      })}

      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[20, 20, 20]} intensity={2} color="#FF00FF" distance={50} />
      <pointLight position={[-20, -20, -20]} intensity={2} color="#00FFFF" distance={50} />
    </group>
  );
}

export default MusicalSphere;
