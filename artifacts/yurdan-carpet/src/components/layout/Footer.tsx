import { Link } from "wouter";
import logoLight from "@assets/Çalışma_Yüzeyi_10@3x_1778942870048.png";

export function Footer() {
  return (
    <footer style={{ background: "#141210", color: "#F5EFE6" }}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          <div className="max-w-xs">
            <img
              src={logoLight}
              alt="Yurdan Carpet"
              className="h-9 object-contain mb-8"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
            />
            <p className="text-sm leading-relaxed" style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}>
              A private archive of the world's finest handmade carpets. Each piece available by private inquiry only.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-16">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>Navigate</p>
              <div className="flex flex-col gap-3">
                <Link href="/collection" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif" }} data-testid="link-footer-collection">Collection</Link>
                <Link href="/about" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif" }} data-testid="link-footer-about">About</Link>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-5" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>Inquiries</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:info@yurdancarpet.com" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif" }} data-testid="link-footer-email">info@yurdancarpet.com</a>
                <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif" }} data-testid="link-footer-whatsapp">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3" style={{ borderTop: "1px solid rgba(245,239,230,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(245,239,230,0.3)", fontFamily: "'Inter', sans-serif" }}>
            &copy; {new Date().getFullYear()} Yurdan Carpet. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,239,230,0.2)", fontFamily: "'Inter', sans-serif" }}>
            No prices are displayed publicly. Acquisition by private inquiry only.
          </p>
        </div>
      </div>
    </footer>
  );
}
