import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import logoLight from "@assets/Çalışma_Yüzeyi_10@3x_1778942870048.png";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const isDark = isHome && !scrolled;

  return (
    <nav
      className="fixed top-0 w-full z-[100] transition-all duration-400"
      style={{
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled
          ? "rgba(250,250,248,0.96)"
          : isHome
          ? "transparent"
          : "rgba(250,250,248,0.96)",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E4DDD4" : "1px solid transparent",
      }}
      data-testid="navbar"
    >
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-8 w-1/3">
          <Link
            href="/collection"
            className="hidden md:block transition-colors duration-200 text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ color: isDark ? "rgba(245,239,230,0.7)" : "#7A726A", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = isDark ? "#F5EFE6" : "#1C1916")}
            onMouseLeave={e => (e.currentTarget.style.color = isDark ? "rgba(245,239,230,0.7)" : "#7A726A")}
            data-testid="link-collection-nav"
          >
            Collection
          </Link>
          <Link
            href="/about"
            className="hidden md:block transition-colors duration-200 text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ color: isDark ? "rgba(245,239,230,0.7)" : "#7A726A", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = isDark ? "#F5EFE6" : "#1C1916")}
            onMouseLeave={e => (e.currentTarget.style.color = isDark ? "rgba(245,239,230,0.7)" : "#7A726A")}
            data-testid="link-about-nav"
          >
            About
          </Link>
        </div>

        <div className="flex justify-center w-1/3">
          <Link href="/" data-testid="link-home-logo">
            {/* Mobile logo */}
            <img
              src={logoLight}
              alt="Yurdan Carpet"
              className="md:hidden object-contain transition-all duration-300"
              style={{
                height: scrolled ? "70px" : "78px",
                filter: isDark ? "brightness(0) invert(1)" : "brightness(0)",
              }}
            />
            {/* Desktop logo */}
            <img
              src={logoLight}
              alt="Yurdan Carpet"
              className="hidden md:block object-contain transition-all duration-300"
              style={{
                height: scrolled ? "58px" : "64px",
                filter: isDark ? "brightness(0) invert(1)" : "brightness(0)",
              }}
            />
          </Link>
        </div>

        <div className="flex justify-end items-center gap-6 w-1/3">
          <a
            href="mailto:info@yurdancarpet.com"
            className="hidden md:block transition-colors duration-200 text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ color: isDark ? "rgba(245,239,230,0.7)" : "#7A726A", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.color = isDark ? "#F5EFE6" : "#1C1916")}
            onMouseLeave={e => (e.currentTarget.style.color = isDark ? "rgba(245,239,230,0.7)" : "#7A726A")}
            data-testid="link-contact-nav"
          >
            Contact
          </a>
          <button
            className="md:hidden flex flex-col gap-[5px] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-5 transition-all duration-300"
                style={{
                  height: "1px",
                  background: isDark ? "#F5EFE6" : "#1C1916",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
                    : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
                    : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden py-6 px-6 flex flex-col gap-5 mt-2"
          style={{
            background: "rgba(250,250,248,0.98)",
            borderTop: "1px solid #E4DDD4",
          }}
        >
          <Link href="/collection" onClick={() => setMenuOpen(false)} className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif" }} data-testid="link-collection-mobile">Collection</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif" }} data-testid="link-about-mobile">About</Link>
          <a href="mailto:info@yurdancarpet.com" className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }} data-testid="link-contact-mobile">Contact</a>
        </div>
      )}
    </nav>
  );
}
