"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappNumber = "+917408331008"; // Replace with actual number
  const message = "Hello, I need legal consultation.";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.5)] hover:shadow-[0_0_25px_rgba(37,211,102,0.8)] transition-all interactive flex items-center justify-center group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="w-8 h-8" />
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-void border border-white/10 text-white px-4 py-2 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat with an Attorney
      </div>
    </motion.a>
  );
}
