"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShieldAlert, Landmark, Orbit } from "lucide-react";
import { cn } from "@/lib/utils";

const areas = [
  {
    title: "Cyber Crimes",
    description:
      "Defending digital sovereignty. Elite representation for state-sponsored hacking allegations, crypto-laundering, and AI-driven fraud.",
    icon: ShieldAlert,
    color: "group-hover:text-cyan",
    border: "group-hover:border-cyan",
  },
  {
    title: "Corporate Mergers",
    description:
      "Ruthless acquisition strategies. Navigating hostile takeovers, monopoly fracturing, and trillion-dollar asset consolidations.",
    icon: Landmark,
    color: "group-hover:text-gold",
    border: "group-hover:border-gold",
  },
  {
    title: "Spatial Asset Management",
    description:
      "Securing the metaverse. Legal frameworks for virtual real estate, NFT disputes, and interplanetary commerce regulations.",
    icon: Orbit,
    color: "group-hover:text-cyan",
    border: "group-hover:border-cyan",
  },
];

export default function PracticeAreas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-32 px-6 bg-obsidian flex flex-col items-center z-10"
    >
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="w-full max-w-7xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600">
            THE INTERACTIVE MONOLITHS
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    duration: 0.8,
                    delay: index * 0.2,
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={cn(
                  "group relative interactive h-96 p-8 glass flex flex-col justify-between overflow-hidden transition-colors duration-500",
                  area.border
                )}
              >
                {/* Particle background effect (simplified CSS approach for performance) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent mix-blend-overlay pointer-events-none" />

                <div className="relative z-10">
                  <Icon
                    className={cn(
                      "w-12 h-12 mb-6 text-gray-500 transition-colors duration-300",
                      area.color
                    )}
                  />
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-400 font-mono text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="relative z-10 mt-auto">
                  <button className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all duration-300 text-gray-300 group-hover:text-white">
                    Initialize <span className="text-gold">→</span>
                  </button>
                </div>

                {/* Hover distortion overlay */}
                <div className="absolute -inset-full group-hover:inset-0 bg-gradient-to-br from-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 blur-2xl -z-10" />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
