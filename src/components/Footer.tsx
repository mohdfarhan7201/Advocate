import Link from "next/link";
import { Scale, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-obsidian border-t border-white/10 pt-16 pb-8 px-6 text-white z-10 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 group interactive mb-6">
            <Scale className="w-8 h-8 text-gold group-hover:text-cyan transition-colors" />
            <span className="font-bold text-xl tracking-wider uppercase">
              Advocate <span className="text-gold">Fariq</span>
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
            Elite legal representation specializing in corporate law, cyber crimes, and complex litigation. Fighting aggressively for your rights and assets.
          </p>
          <div className="flex gap-4">
            <a href="/contact" className="text-gray-400 hover:text-gold transition-colors interactive">
              <Phone className="w-5 h-5" />
            </a>
            <a href="/contact" className="text-gray-400 hover:text-gold transition-colors interactive">
              <MapPin className="w-5 h-5" />
            </a>
            <a href="/contact" className="text-gray-400 hover:text-gold transition-colors interactive">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm interactive">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm interactive">About Me</Link>
            </li>
            <li>
              <Link href="/practice-areas" className="text-gray-400 hover:text-white transition-colors text-sm interactive">Practice Areas</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm interactive">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-cyan" />
              +91 83038 77102
            </li>
            <li className="flex gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-cyan" />
              fariq@advocate.in
            </li>
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-cyan" />
              Supreme Court, Lucknow
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs font-mono">
          &copy; {currentYear} Advocate Fariq. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
