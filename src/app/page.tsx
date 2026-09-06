import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import Link from "next/link";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-void min-h-screen">
      <HeroSection />
      
      {/* Quick About Snippet */}
      <section className="py-24 px-6 bg-obsidian text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-widest">
            Fierce, Independent <span className="text-gold">Counsel</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            As a solo practitioner, I don't hand your case off to junior associates. When you hire me, you get my direct attention, my aggressive courtroom strategies, and my relentless pursuit of your victory. Whether it's high-stakes corporate litigation or defending against complex cyber charges, I fight to win.
          </p>
          <Link href="/about" className="text-gold font-bold uppercase tracking-widest border-b border-gold hover:text-cyan hover:border-cyan transition-colors">
            Read My Full Profile →
          </Link>
        </div>
      </section>

      <PracticeAreas />

      {/* Highlights / Recent Wins */}
      <section className="py-24 px-6 bg-void relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white uppercase tracking-widest text-center border-b border-white/10 pb-6">
            Recent <span className="text-gold">Victories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 border-l-4 border-l-cyan">
              <h3 className="text-xl font-bold text-white mb-2">OmniCorp Monopolization Defense</h3>
              <p className="text-cyan text-sm font-mono mb-4 uppercase">Result: Dismissed</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Successfully defended a tech CEO against federal anti-trust allegations, resulting in a full dismissal of charges before trial.
              </p>
            </div>
            <div className="glass p-8 border-l-4 border-l-gold">
              <h3 className="text-xl font-bold text-white mb-2">Operation Dark Ledger</h3>
              <p className="text-gold text-sm font-mono mb-4 uppercase">Result: Complete Exoneration</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Represented a crypto-exchange founder in a multi-billion dollar laundering case. Proved forensic inaccuracies leading to complete exoneration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-obsidian border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 text-gold mx-auto mb-8 opacity-50" />
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-snug">
            "Fariq didn't just defend my company; he completely dismantled the opposition's case. He is a shark in the courtroom."
          </h2>
          <p className="text-cyan font-mono uppercase tracking-widest">— CEO, Global Tech Firm</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-void text-center border-t border-cyan/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan/5 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-widest">Ready to Fight?</h2>
          <p className="text-gray-400 mb-8">Secure your assets and your freedom. Reach out today for a confidential consultation.</p>
          <Link href="/contact" className="bg-gold text-void font-bold px-10 py-4 uppercase tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(212,175,55,0.5)]">
            Initialize Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
