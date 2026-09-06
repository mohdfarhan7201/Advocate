import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Advocate Fariq",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-void text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 uppercase tracking-widest text-gold">Advocate Fariq</h1>
        <div className="glass p-8 md:p-12 mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-3xl" />
          <h2 className="text-2xl font-bold mb-4 text-cyan uppercase tracking-wider">Independent Counsel & Legal Strategist</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            For over a decade, I have operated at the intersection of high-stakes corporate law and state-level cyber defense. My practice is built on a singular philosophy: superior preparation yields absolute victory.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I do not run a legal factory. I take on a highly selective caseload, ensuring that every client receives my undivided attention, aggressive courtroom presence, and meticulous strategic planning. When you retain me, you are not hiring a firm—you are securing a dedicated legal weapon.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest border-b border-white/10 pb-4">Credentials & Background</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-obsidian border border-white/10 p-6 interactive hover:border-gold transition-colors">
            <h3 className="text-xl font-bold mb-2">Education</h3>
            <p className="text-gold text-sm font-mono mb-4">Foundation of Excellence</p>
            <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>Juris Doctor (J.D.), Harvard Law School</li>
              <li>B.S. in Computer Science, MIT</li>
              <li>Specialization in International Cyber Law</li>
            </ul>
          </div>
          <div className="bg-obsidian border border-white/10 p-6 interactive hover:border-gold transition-colors">
            <h3 className="text-xl font-bold mb-2">Bar Admissions</h3>
            <p className="text-gold text-sm font-mono mb-4">Jurisdictional Reach</p>
            <ul className="text-gray-400 text-sm leading-relaxed space-y-2 list-disc list-inside">
              <li>Supreme Court of India</li>
              <li>New York State Bar</li>
              <li>International Court of Arbitration</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
