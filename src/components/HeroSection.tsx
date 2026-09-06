"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { motion } from "framer-motion";
import * as THREE from "three";
import { Environment, Float } from "@react-three/drei";
import Link from "next/link";

// 3D Gavel Object
function Gavel() {
  const groupRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Gentle rotation based on mouse
      const targetRotationX = (mouse.y * viewport.height) / 8;
      const targetRotationY = (mouse.x * viewport.width) / 8;

      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotationY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef} rotation={[0.5, -0.5, 0]}>
        {/* Gavel Head */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.6, 0.6, 2.5, 32]} />
          <meshStandardMaterial color="#0B0B0C" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Gavel Head Gold Bands */}
        <mesh position={[1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.65, 0.65, 0.2, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
        <mesh position={[-1, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.65, 0.65, 0.2, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>

        {/* Gavel Handle */}
        <mesh position={[0, -2, 0]}>
          <cylinderGeometry args={[0.15, 0.2, 4, 32]} />
          <meshStandardMaterial color="#0B0B0C" metalness={0.8} roughness={0.3} />
        </mesh>
        
        {/* Handle Gold Base */}
        <mesh position={[0, -4, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-void pt-20 px-6">
      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full max-w-2xl mx-auto md:ml-12 lg:ml-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Justice, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
              Personalized.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
            I am Advocate Aryan. I provide elite, uncompromising legal representation tailored specifically to your case. When your freedom or assets are on the line, you need a fighter, not a factory.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/contact"
              className="bg-gold text-void font-bold px-8 py-3 rounded-sm uppercase tracking-wider hover:bg-yellow-500 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.4)] interactive"
            >
              Consult Now
            </Link>
            <Link 
              href="/practice-areas"
              className="border border-white/20 text-white font-bold px-8 py-3 rounded-sm uppercase tracking-wider hover:bg-white/5 transition-colors interactive"
            >
              My Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#D4AF37" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#00F3FF" />
          <Gavel />
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
