"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ConsultationTerminal() {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission
  };

  return (
    <section className="relative w-full py-12 px-6 flex items-center justify-center z-20">
      <div className="w-full max-w-4xl relative">

        {/* Terminal Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-mono text-cyan mb-4 uppercase tracking-widest text-glow-cyan">
            Request Consultation
          </h2>
          <p className="text-gray-500 font-mono text-sm md:text-base">
            All communications are strictly confidential and protected by attorney-client privilege.
          </p>
        </div>

        {/* The Form */}
        <form
          onSubmit={handleSubmit}
          className="glass p-8 md:p-12 border-t-2 border-t-cyan/30 rounded-none relative overflow-hidden"
        >
          {/* Subtle background scanline effect */}
          <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
            {/* Input 1 */}
            <div className="relative group">
              <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-widest">
                Full Name
              </label>
              <input
                type="text"
                onFocus={() => setFocusedField("entity")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-black/50 border border-gray-800 text-white font-mono p-4 outline-none transition-all duration-300 focus:border-cyan focus:bg-cyan/5 focus:glow-cyan interactive"
                placeholder="John Doe"
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyan"
                initial={{ width: "0%" }}
                animate={{ width: focusedField === "entity" ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Input 2 */}
            <div className="relative group">
              <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full bg-black/50 border border-gray-800 text-white font-mono p-4 outline-none transition-all duration-300 focus:border-cyan focus:bg-cyan/5 focus:glow-cyan interactive"
                placeholder="john@example.com"
              />
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-cyan"
                initial={{ width: "0%" }}
                animate={{ width: focusedField === "email" ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Textarea */}
          <div className="relative group mb-12 z-10">
            <label className="block font-mono text-xs text-gray-400 mb-2 uppercase tracking-widest">
              Message / Case Details
            </label>
            <textarea
              rows={4}
              onFocus={() => setFocusedField("details")}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-black/50 border border-gray-800 text-white font-mono p-4 outline-none transition-all duration-300 focus:border-cyan focus:bg-cyan/5 focus:glow-cyan interactive resize-none"
              placeholder="Briefly describe your legal issue..."
            />
            <motion.div
              className="absolute bottom-1 left-0 h-0.5 bg-cyan"
              initial={{ width: "0%" }}
              animate={{ width: focusedField === "details" ? "100%" : "0%" }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end relative z-10">
            <button
              type="submit"
              className="relative group interactive bg-transparent border-2 border-gold text-gold font-bold font-mono px-8 py-4 uppercase tracking-widest overflow-hidden transition-all duration-300 hover:text-void hover:bg-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
            >
              <span className="relative z-10">Send Message</span>
              
              {/* Glitch pseudo-element simulation */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-white/20 skew-x-12 z-0" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
