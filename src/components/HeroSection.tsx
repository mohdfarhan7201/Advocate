"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const x = useMotionValue(0.5); // Normalized 0 to 1
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  // Spring physics for smooth return and movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  // Glare effect
  const glareX = useTransform(x, [0, 1], [-50, 150]);
  const glareY = useTransform(y, [0, 1], [-50, 150]);
  const glareOpacity = useTransform(x, [0, 0.5, 1], [0.1, 0.4, 0.1]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPos = (event.clientX - rect.left) / rect.width;
    const yPos = (event.clientY - rect.top) / rect.height;
    x.set(xPos);
    y.set(yPos);
  }

  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col md:flex-row items-center justify-between overflow-hidden bg-void pt-28 pb-12 px-6">
      {/* Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full max-w-2xl mx-auto md:ml-12 lg:ml-24 mb-16 md:mb-0">
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
      <div className="w-full md:w-1/2 flex justify-center items-center perspective-[1200px] z-10 h-full mt-10 md:mt-0">
        <motion.div
          style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          className="relative w-80 h-[450px] md:w-[400px] md:h-[550px] cursor-crosshair group transition-transform duration-200"
        >
          {/* Glowing background shadow */}
          <div className="absolute inset-0 bg-gold/20 blur-3xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: "translateZ(-80px) scale(0.9)" }} />
          
          {/* Main Card */}
          <div 
            className="absolute inset-0 rounded-xl overflow-hidden border border-white/10 bg-obsidian shadow-2xl shadow-black/80" 
            style={{ transform: "translateZ(0px)", transformStyle: "preserve-3d" }}
          >
            <div className="relative w-full h-full transform-gpu">
              {/* Fallback color while image is missing */}
              <div className="absolute inset-0 bg-gradient-to-br from-obsidian to-gray-900 flex items-center justify-center text-gray-700 font-mono text-sm">
                [ Place fariq.jpg in public/ ]
              </div>
              
              {/* NOTE: User must place their image at public/fariq.jpg */}
              <Image 
                src="/fariq.jpg" 
                alt="Advocate Fariq" 
                fill 
                className="object-cover object-center opacity-80 group-hover:opacity-100 transition-all duration-700"
                priority
              />
              
              {/* Interactive Glare overlay */}
              <motion.div 
                className="absolute inset-0 pointer-events-none mix-blend-overlay z-20"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)',
                  x: glareX,
                  y: glareY,
                  opacity: glareOpacity
                }}
              />

              {/* Minimal overlay text (optional depth effect) */}
              <div 
                className="absolute bottom-6 left-6 right-6 border-t border-gold/40 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 z-30"
                style={{ transform: "translateZ(30px)" }}
              >
                <p className="text-gold font-mono text-xs uppercase tracking-[0.2em] mb-1">Lead Counsel</p>
                <p className="text-white font-bold text-xl uppercase tracking-widest drop-shadow-md">Fariq</p>
              </div>
            </div>
          </div>
          
          {/* Floating neon frame for extra 3D depth */}
          <div 
            className="absolute -inset-2 border border-cyan/0 rounded-xl pointer-events-none transition-all duration-700 group-hover:border-cyan/40 shadow-[0_0_20px_rgba(0,243,255,0)] group-hover:shadow-[0_0_30px_rgba(0,243,255,0.2)]" 
            style={{ transform: "translateZ(40px)" }} 
          />
        </motion.div>
      </div>
    </section>
  );
}
