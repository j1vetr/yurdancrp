import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import logoDark from "@assets/Çalışma_Yüzeyi_13@3x_1778942870048.png";
import logoLight from "@assets/Çalışma_Yüzeyi_10@3x_1778942870048.png";

export function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location === "/";
  const useDarkText = !isHome || scrolled;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="w-1/3">
          <Link href="/collection" className={`text-sm uppercase tracking-widest font-medium transition-colors ${useDarkText ? "text-foreground hover:text-foreground/70" : "text-white hover:text-white/70"}`}>
            Collection
          </Link>
        </div>
        
        <div className="w-1/3 flex justify-center">
          <Link href="/">
            <img 
              src={useDarkText ? logoDark : logoLight} 
              alt="Yurdan Carpet" 
              className="h-8 md:h-10 object-contain transition-all duration-300" 
            />
          </Link>
        </div>
        
        <div className="w-1/3 flex justify-end">
          <Link href="/about" className={`text-sm uppercase tracking-widest font-medium transition-colors ${useDarkText ? "text-foreground hover:text-foreground/70" : "text-white hover:text-white/70"}`}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
