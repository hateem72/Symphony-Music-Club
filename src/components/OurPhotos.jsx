import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

const images = [
  "/photos/1.png",
  "/photos/2.png",
  "/photos/3.png",
  "/photos/4.png",
  "/photos/5.png",
  "/photos/6.png",
];

function Photo({ url, rotation }) {
  const texture = useTexture(url);
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.x = Math.cos(clock.elapsedTime / 2 + rotation) * 5;
    ref.current.position.z = Math.sin(clock.elapsedTime / 2 + rotation) * 5;
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[3, 2]} />
      <meshStandardMaterial
        map={texture}
        side={THREE.DoubleSide}
        emissive="#404040"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}


function Stars({ count = 300 }) {
  const starRef = useRef();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 50; 
  }

  useFrame(({ clock }) => {
    if (starRef.current) {
      starRef.current.rotation.y = clock.elapsedTime * 0.02; 
    }
  });

  return (
    <points ref={starRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="white" transparent opacity={0.8} />
    </points>
  );
}

function Gallery3D() {
  return (
    <div className="top-0 left-0 w-screen h-screen m-0 p-0 overflow-hidden bg-[radial-gradient(circle,#222,#000)]">
      
      <h2
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-12 sm:mb-16 glow-pulse tracking-wider"
        style={{ fontFamily: "'Audiowide', sans-serif" }}
      >
        Our Moments
      </h2>

      <p className="text-sm sm:text-base text-cyan-400 mt-7 animate-pulse opacity-75 text-center absolute left-1/2 transform -translate-x-1/2 z-10">
  ✨ Drag or move your cursor to interact with the animation ✨
</p>
      <Canvas camera={{ position: [0, 2, 10], fov: 50 }}>
        <ambientLight intensity={2.0} />
        <directionalLight position={[5, 5, 5]} />
        
        <Stars count={1000} />

        {images.map((img, index) => {
          const angle = (index / images.length) * Math.PI * 2;
          return <Photo key={index} url={img} rotation={angle} />;
        })}

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Gallery3D;
