import { Link } from "wouter";
import logoLight from "@assets/Çalışma_Yüzeyi_10@3x_1778942870048.png";

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "#141210", color: "#F5EFE6" }}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 mb-16">

          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src={logoLight}
              alt="Yurdan Carpet"
              className="h-14 object-contain mb-7"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
            />
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(245,239,230,0.38)", fontFamily: "'Inter', sans-serif", maxWidth: "280px" }}
            >
              A private archive of the world's finest handwoven carpets. Each piece available by private inquiry only.
            </p>
          </div>

          {/* Navigate column */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col items-center md:items-start text-center md:text-left">
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-6"
              style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-3.5 items-center md:items-start">
              <Link
                href="/collection"
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}
                data-testid="link-footer-collection"
              >
                Collection
              </Link>
              <Link
                href="/about"
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}
                data-testid="link-footer-about"
              >
                About
              </Link>
              <a
                href="mailto:info@yurdancarpet.com"
                className="text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}
                data-testid="link-footer-contact"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact column */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col items-center md:items-start text-center md:text-left">
            <p
              className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-6"
              style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-5 items-center md:items-start">

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Divan+Yolu+Cd+No:16+Fatih+Istanbul"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 transition-colors duration-200"
                style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}
              >
                <svg className="flex-shrink-0 mt-0.5" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "#9B7B56" }}>
                  <path d="M12 21s-8-7.5-8-12a8 8 0 1 1 16 0c0 4.5-8 12-8 12z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span
                  className="text-sm leading-relaxed group-hover:text-white transition-colors duration-200 text-center md:text-left"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Sultan Ahmet, Alemdar,<br />
                  Divan Yolu Cd. No:16,<br />
                  34110 Fatih / Istanbul
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@yurdancarpet.com"
                className="flex items-center gap-3 text-sm transition-colors duration-200 hover:text-white"
                style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}
                data-testid="link-footer-email"
              >
                <svg className="flex-shrink-0" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ color: "#9B7B56" }}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                </svg>
                info@yurdancarpet.com
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/905336781644"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors duration-200"
                style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = "#25D366";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = "rgba(245,239,230,0.45)";
                }}
                data-testid="link-footer-whatsapp"
              >
                <span style={{ color: "#25D366", flexShrink: 0 }}>
                  <WhatsAppIcon size={15} />
                </span>
                +90 533 678 16 44
              </a>
            </div>
          </div>
        </div>

        {/* Hairline */}
        <div style={{ height: "1px", background: "rgba(245,239,230,0.08)" }} />

        {/* Bottom bar */}
        <div className="pt-7 pb-2 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p
            className="text-xs"
            style={{ color: "rgba(245,239,230,0.25)", fontFamily: "'Inter', sans-serif" }}
          >
            &copy; {new Date().getFullYear()} Yurdan Carpet. All rights reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(245,239,230,0.18)", fontFamily: "'Inter', sans-serif" }}
          >
            No prices displayed publicly. Private inquiry only.
          </p>
        </div>

      </div>
    </footer>
  );
}
