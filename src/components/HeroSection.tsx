"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPos = event.clientX - rect.left - rect.width / 2;
    const yPos = event.clientY - rect.top - rect.height / 2;
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-void pt-28 pb-20 px-6">
      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full max-w-2xl mx-auto md:ml-12 lg:ml-24 mb-12 md:mb-0">
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
            I am Advocate Fariq. I provide elite, uncompromising legal representation tailored specifically to your case. When your freedom or assets are on the line, you need a fighter, not a factory.
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

      {/* 3D Image Hover Effect */}
      <div className="w-full md:w-1/2 flex justify-center items-center perspective-[1000px] z-10">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-lg cursor-crosshair group"
        >
          {/* Glowing background behind image */}
          <div className="absolute inset-0 bg-cyan blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" style={{ transform: "translateZ(-50px)" }} />
          
          {/* Main Image Container */}
          <div className="absolute inset-0 border-2 border-white/20 rounded-lg overflow-hidden bg-obsidian shadow-2xl" style={{ transform: "translateZ(0px)" }}>
            <div className="relative w-full h-full">
              {/* NOTE: User must place their image at public/fariq.jpg */}
              <Image 
                src="/fariq.jpg" 
                alt="Advocate Fariq" 
                fill 
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
              />
              
              {/* Scanline overlay for cyber effect */}
              <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,1)_50%)] bg-[length:100%_4px]" />
            </div>
          </div>
          
          {/* Floating border element for extra 3D depth */}
          <div className="absolute -inset-4 border border-gold/30 rounded-lg pointer-events-none transition-all duration-500 group-hover:border-gold/60" style={{ transform: "translateZ(50px)" }} />
        </motion.div>
      </div>
    </section>
  );
}
