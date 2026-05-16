import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import logoLight from "@assets/Çalışma_Yüzeyi_10@3x_1778942870048.png";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 border-b border-[#D4AF37]/30"
          : "py-6 border-b border-transparent"
      }`}
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.96)"
          : isHome
          ? "transparent"
          : "rgba(10,10,10,0.96)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      data-testid="navbar"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="w-1/3 flex items-center gap-8">
          <Link
            href="/collection"
            className="text-[10px] tracking-[0.2em] font-serif text-[#D4AF37] hover:text-[#F5E27A] transition-colors duration-300 uppercase hidden md:block"
            data-testid="link-collection-nav"
          >
            Collection
          </Link>
          <Link
            href="/about"
            className="text-[10px] tracking-[0.2em] font-serif text-[#D4AF37] hover:text-[#F5E27A] transition-colors duration-300 uppercase hidden md:block"
            data-testid="link-about-nav"
          >
            About
          </Link>
        </div>

        <div className="w-1/3 flex justify-center">
          <Link href="/" data-testid="link-home-logo">
            <img
              src={logoLight}
              alt="Yurdan Carpet"
              className="h-8 md:h-10 object-contain"
            />
          </Link>
        </div>

        <div className="w-1/3 flex justify-end items-center gap-6">
          <a
            href="mailto:info@yurdancarpet.com"
            className="hidden md:block text-[10px] tracking-[0.2em] font-serif text-[#FFFFF0]/60 hover:text-[#D4AF37] transition-colors duration-300 uppercase"
            data-testid="link-contact-nav"
          >
            Contact
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}></span>
            <span className={`block w-6 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-px bg-[#D4AF37] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#D4AF37]/20 mt-3 py-6 px-6 flex flex-col gap-6" style={{ background: "rgba(10,10,10,0.98)" }}>
          <Link href="/collection" onClick={() => setMenuOpen(false)} className="text-[11px] tracking-[0.2em] font-serif text-[#D4AF37] uppercase" data-testid="link-collection-mobile">Collection</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[11px] tracking-[0.2em] font-serif text-[#D4AF37] uppercase" data-testid="link-about-mobile">About</Link>
          <a href="mailto:info@yurdancarpet.com" className="text-[11px] tracking-[0.2em] font-serif text-[#FFFFF0]/60 uppercase" data-testid="link-contact-mobile">Contact</a>
        </div>
      )}
    </nav>
  );
}
