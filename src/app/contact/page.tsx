import { Metadata } from "next";
import ConsultationTerminal from "@/components/ConsultationTerminal";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Vanguard Law",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-void text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 uppercase tracking-widest text-gold">
            Get In Touch
          </h1>
          <p className="text-gray-400 leading-relaxed mb-12 max-w-md">
            Whether you are facing complex litigation or require strategic counsel, I am ready to review your case. Contact my office directly or fill out the confidential form.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-cyan mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-1">Office Location</h3>
                <p className="text-gray-400 font-mono text-sm">
                  Chamber 404, Supreme Court<br />
                  Lucknow, UP
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-cyan" />
              <div>
                <h3 className="font-bold text-lg mb-1">Direct Line</h3>
                <p className="text-gray-400 font-mono text-sm">+91 8303877102</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-cyan" />
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-gray-400 font-mono text-sm">fariq@advocate.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Form */}
        <div className="bg-obsidian border border-white/10 relative overflow-hidden -mx-6 md:mx-0">
           <ConsultationTerminal />
        </div>

      </div>
    </main>
  );
}
