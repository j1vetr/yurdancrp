import { Link } from "wouter";
import logoLight from "@assets/Çalışma_Yüzeyi_10@3x_1778942870048.png";
import medallion from "@assets/Çalışma_Yüzeyi_17@3x_1778942870049.png";

export function Footer() {
  return (
    <footer className="deco-pattern" style={{ background: "#0A0A0A", borderTop: "1px solid rgba(212,175,55,0.3)" }}>
      {/* Top ornament */}
      <div className="flex justify-center pt-16 pb-8">
        <div className="flex items-center gap-6">
          <div className="gold-rule w-24" />
          <img src={medallion} alt="Yurdan Medallion" className="h-10 w-10 opacity-70" style={{ filter: "sepia(1) saturate(2) hue-rotate(-10deg) brightness(0.9)" }} />
          <div className="gold-rule w-24" />
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase mb-4" style={{ color: "#D4AF37" }}>
            A Private Archive
          </h2>
          <p className="deco-label mb-2">of Textile Art &amp; Heritage</p>
          <div className="gold-rule w-32 my-6" />
          <p className="text-sm leading-relaxed max-w-md mb-10" style={{ color: "rgba(255,255,240,0.5)", fontFamily: "'Poiret One', serif", letterSpacing: "0.05em" }}>
            Each piece in the Yurdan collection represents thousands of hours of human devotion. Available strictly upon private inquiry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@yurdancarpet.com"
              className="px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-serif transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
              style={{ border: "1px solid #D4AF37", color: "#D4AF37" }}
              data-testid="link-footer-email"
            >
              Contact Curators
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-[10px] tracking-[0.2em] uppercase font-serif transition-all duration-300 hover:bg-[#FFFFF0]/10"
              style={{ border: "1px solid rgba(255,255,240,0.2)", color: "rgba(255,255,240,0.6)" }}
              data-testid="link-footer-whatsapp"
            >
              WhatsApp Inquiry
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8" style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <img src={logoLight} alt="Yurdan Carpet" className="h-6 object-contain opacity-40" />
            <div className="flex gap-8">
              <Link href="/collection" className="text-[10px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]" style={{ color: "rgba(255,255,240,0.4)", fontFamily: "'Cinzel', serif" }} data-testid="link-footer-collection">Collection</Link>
              <Link href="/about" className="text-[10px] tracking-[0.15em] uppercase transition-colors hover:text-[#D4AF37]" style={{ color: "rgba(255,255,240,0.4)", fontFamily: "'Cinzel', serif" }} data-testid="link-footer-about">About</Link>
            </div>
            <p className="text-[10px] tracking-[0.1em]" style={{ color: "rgba(255,255,240,0.3)", fontFamily: "'Cinzel', serif" }}>
              &copy; {new Date().getFullYear()} Yurdan Carpet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
