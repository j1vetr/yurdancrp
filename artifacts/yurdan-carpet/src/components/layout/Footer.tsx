import { Link } from "wouter";
import logoDark from "@assets/Çalışma_Yüzeyi_13@3x_1778942870048.png";
import medallion from "@assets/Çalışma_Yüzeyi_17@3x_1778942870049.png";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16 text-center">
          <img src={medallion} alt="Yurdan Medallion" className="h-12 w-12 mb-8 opacity-80" />
          <h2 className="text-3xl font-serif mb-6 text-foreground">A Private Archive of Textile Art</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-8 font-light">
            Each piece in the Yurdan collection represents thousands of hours of human devotion. Available strictly upon private inquiry.
          </p>
          <div className="flex gap-6">
            <a href="mailto:info@yurdancarpet.com" className="text-sm uppercase tracking-widest border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
              Contact Curators
            </a>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest border-b border-foreground/30 pb-1 hover:border-foreground transition-colors">
              WhatsApp Inquiry
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border text-sm text-muted-foreground">
          <img src={logoDark} alt="Yurdan Carpet" className="h-6 mb-4 md:mb-0 opacity-50 grayscale" />
          <div className="flex gap-6">
            <Link href="/collection" className="hover:text-foreground transition-colors">Collection</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          </div>
          <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} Yurdan Carpet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
