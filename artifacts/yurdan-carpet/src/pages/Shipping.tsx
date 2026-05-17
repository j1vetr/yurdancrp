import { useState, useEffect, useMemo } from "react";
import { geoEqualEarth, geoPath, geoGraticule, GeoPermissibleObjects } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type { Topology } from "topojson-specification";

const SERIF = "'Cormorant Garamond', serif";
const SANS  = "'Inter', sans-serif";
const BRONZE  = "#9B7B56";
const DARK    = "#141210";
const CREAM   = "#F5EFE6";
const MUTED   = "#7A726A";
const BG      = "#FAFAF8";
const CARD_BG = "#F5F0EB";
const BORDER  = "#E4DDD4";

const W = 960;
const H = 500;

const ISTANBUL: [number, number] = [29, 41];

const DESTINATIONS: Array<{ coords: [number, number]; label: string; delay: number }> = [
  { coords: [12,  50],  label: "EUROPE",        delay: 0   },
  { coords: [-95, 38],  label: "UNITED STATES",  delay: 0.7 },
  { coords: [-55, -15], label: "S. AMERICA",     delay: 1.4 },
  { coords: [22,   2],  label: "AFRICA",         delay: 2.1 },
  { coords: [105, 35],  label: "ASIA",           delay: 2.8 },
  { coords: [134, -25], label: "AUSTRALIA",      delay: 3.5 },
  { coords: [-80, 55],  label: "CANADA",         delay: 4.2 },
];

/* ─── WORLD MAP ─────────────────────────────────────────── */
function WorldMap() {
  const [countryPaths, setCountryPaths] = useState<string[]>([]);
  const [borderPath,   setBorderPath]   = useState<string>("");
  const [arcPaths,     setArcPaths]     = useState<string[]>([]);

  const projection = useMemo(() =>
    geoEqualEarth()
      .scale(155)
      .translate([W / 2, H / 2 + 30]),
    []
  );

  const path = useMemo(() => geoPath(projection).digits(2), [projection]);

  const graticule = useMemo(() => geoGraticule()(), []);
  const graticulePath = useMemo(() => path(graticule) ?? "", [path, graticule]);

  /* istanbul & destination screen positions */
  const istPos  = useMemo(() => projection(ISTANBUL),                  [projection]);
  const destPos = useMemo(() => DESTINATIONS.map(d => projection(d.coords)), [projection]);

  useEffect(() => {
    fetch("/world-110m.json")
      .then(r => r.json())
      .then((topo: Topology) => {
        const countries = feature(topo, (topo.objects as any).countries);
        const cPaths = (countries as any).features.map(
          (f: GeoPermissibleObjects) => path(f) ?? ""
        );
        setCountryPaths(cPaths);

        const borders = mesh(topo, (topo.objects as any).countries, (a: any, b: any) => a !== b);
        setBorderPath(path(borders as any) ?? "");

        /* great-circle arcs */
        const arcs = DESTINATIONS.map(({ coords }) => {
          const line: GeoPermissibleObjects = {
            type: "Feature",
            properties: {},
            geometry: { type: "LineString", coordinates: [ISTANBUL, coords] },
          } as any;
          return path(line) ?? "";
        });
        setArcPaths(arcs);
      });
  }, [path]);

  return (
    <div className="relative w-full h-full">
      <style>{`
        @keyframes arcDraw {
          0%   { stroke-dashoffset: 2000; opacity: 0; }
          6%   { opacity: 0.9; }
          80%  { opacity: 0.9; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes originPulse {
          0%, 100% { opacity: 0.15; }
          50%       { opacity: 0.4;  }
        }
        .arc-line {
          stroke-dasharray: 2000;
          animation: arcDraw 4.5s ease-in-out infinite;
        }
        .origin-pulse { animation: originPulse 2.4s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        {/* Ocean */}
        <rect width={W} height={H} fill={BG} />

        {/* Graticule (lat/lon grid) */}
        <path d={graticulePath} fill="none" stroke={BORDER} strokeWidth={0.3} opacity={0.5} />

        {/* Country fills */}
        {countryPaths.map((d, i) => (
          <path key={i} d={d} fill={CARD_BG} />
        ))}

        {/* Country borders */}
        <path d={borderPath} fill="none" stroke={BORDER} strokeWidth={0.5} />

        {/* Animated great-circle arcs */}
        {arcPaths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={BRONZE}
            strokeWidth={1.3}
            strokeLinecap="round"
            className="arc-line"
            style={{ animationDelay: `${DESTINATIONS[i].delay}s` }}
          />
        ))}

        {/* Destination dots + labels */}
        {destPos.map((pos, i) => pos ? (
          <g key={i}>
            <circle cx={pos[0]} cy={pos[1]} r={3.5} fill={BRONZE} opacity={0.75} />
            <text
              x={pos[0]}
              y={pos[1] - 8}
              textAnchor="middle"
              fontSize={5.5}
              fontFamily={SANS}
              fontWeight="700"
              fill={BRONZE}
              opacity={0.7}
              letterSpacing="0.06em"
            >
              {DESTINATIONS[i].label}
            </text>
          </g>
        ) : null)}

        {/* Istanbul origin */}
        {istPos && (
          <g>
            <circle
              cx={istPos[0]} cy={istPos[1]}
              r={14}
              fill={BRONZE}
              className="origin-pulse"
            />
            <circle cx={istPos[0]} cy={istPos[1]} r={5} fill={BRONZE} />
            <rect
              x={istPos[0] + 9} y={istPos[1] - 10}
              width={68} height={18} rx={3}
              fill={DARK}
            />
            <text
              x={istPos[0] + 43} y={istPos[1] + 3}
              textAnchor="middle"
              fontSize={7}
              fontFamily={SANS}
              fontWeight="700"
              fill={CREAM}
              letterSpacing="0.1em"
            >
              TÜRKİYE
            </text>
          </g>
        )}

        {/* Compass rose */}
        <g transform="translate(920, 460)">
          <circle cx={0} cy={0} r={14} fill="none" stroke={BORDER} strokeWidth={1} />
          <path d="M 0,-10 L 2,-2 L 0,0 L -2,-2 Z" fill={BRONZE} opacity={0.6} />
          <path d="M 0,10 L 2,2 L 0,0 L -2,2 Z"   fill={MUTED}  opacity={0.3} />
          <path d="M -10,0 L -2,2 L 0,0 L -2,-2 Z" fill={MUTED}  opacity={0.3} />
          <path d="M 10,0 L 2,2 L 0,0 L 2,-2 Z"    fill={MUTED}  opacity={0.3} />
          <text x={0} y={-17} textAnchor="middle" fontSize={6} fontFamily={SANS} fill={BRONZE} opacity={0.7}>N</text>
        </g>
      </svg>
    </div>
  );
}

/* ─── FAQ ITEM ───────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span style={{ fontFamily: SANS, fontSize: "0.85rem", color: DARK, fontWeight: 400 }}>{q}</span>
        <span
          style={{
            flexShrink: 0, width: "22px", height: "22px",
            border: `1px solid ${BORDER}`, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: BRONZE, fontSize: "14px",
            transition: "transform 0.2s",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >+</span>
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed" style={{ color: MUTED, fontFamily: SANS, maxWidth: "520px" }}>
          {a}
        </p>
      )}
    </div>
  );
}

/* ─── FLAG CIRCLE ────────────────────────────────────────── */
function FlagCircle({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{
      width: "44px", height: "44px", borderRadius: "50%",
      overflow: "hidden", border: `1px solid ${BORDER}`,
      flexShrink: 0, background: CARD_BG,
    }}>
      <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

function FlagDouble({ srcA, altA, srcB, altB }: { srcA: string; altA: string; srcB: string; altB: string }) {
  return (
    <div style={{
      width: "44px", height: "44px", borderRadius: "50%",
      overflow: "hidden", border: `1px solid ${BORDER}`,
      flexShrink: 0, background: CARD_BG, display: "flex",
    }}>
      <img src={srcA} alt={altA} style={{ width: "50%", height: "100%", objectFit: "cover" }} />
      <img src={srcB} alt={altB} style={{ width: "50%", height: "100%", objectFit: "cover" }} />
    </div>
  );
}

function GlobeCircle() {
  return (
    <div style={{
      width: "44px", height: "44px", borderRadius: "50%",
      border: `1px solid ${BORDER}`, flexShrink: 0, background: CARD_BG,
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={BRONZE} strokeWidth="1.4">
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    </div>
  );
}

/* ─── PAGE ───────────────────────────────────────────────── */
export default function Shipping() {
  const features = [
    { icon: "/shipping-icon-worldwide-t.png",  title: "Worldwide Shipping",  desc: "We deliver to over 120 countries with trusted international partners." },
    { icon: "/shipping-icon-packaging-t.png",  title: "Secure Packaging",    desc: "Every rug is carefully wrapped and protected for a safe journey." },
    { icon: "/shipping-icon-tracking-t.png",   title: "Tracked Delivery",    desc: "Real-time tracking updates from dispatch to your doorstep." },
    { icon: "/shipping-icon-assistance-t.png", title: "Personal Assistance", desc: "Our team is here to help you every step of the way." },
  ];

  const steps = [
    { num: "1", icon: "/shipping-step-1-t.png", title: "Rug Selection",          desc: "Choose your perfect rug from our collection or create a custom piece." },
    { num: "2", icon: "/shipping-step-2-t.png", title: "Final Inspection",       desc: "Each rug is inspected meticulously to ensure quality and perfection." },
    { num: "3", icon: "/shipping-step-3-t.png", title: "Professional Packaging", desc: "Hand-wrapped with premium materials for maximum protection." },
    { num: "4", icon: "/shipping-step-4-t.png", title: "Courier Dispatch",       desc: "Dispatched with trusted carriers for secure and timely delivery." },
    { num: "5", icon: "/shipping-step-5-t.png", title: "Tracking & Delivery",    desc: "Track your shipment in real time until it arrives safely to you." },
  ];

  const regions = [
    {
      flagEl: <FlagCircle src="/flag-eu.svg" alt="European Union" />,
      name: "Europe",
      time: "4 – 7 Business Days",
      desc: "Fast and reliable delivery across all European countries.",
    },
    {
      flagEl: <FlagDouble srcA="/flag-us.svg" altA="USA" srcB="/flag-ca.svg" altB="Canada" />,
      name: "United States & Canada",
      time: "6 – 10 Business Days",
      desc: "Carefully managed shipping to North America.",
    },
    {
      flagEl: <FlagCircle src="/flag-ae.svg" alt="UAE" />,
      name: "Middle East",
      time: "3 – 6 Business Days",
      desc: "Quick delivery to GCC countries and beyond.",
    },
    {
      flagEl: <GlobeCircle />,
      name: "Other Destinations",
      time: "7 – 14 Business Days",
      desc: "Delivery times may vary depending on location.",
    },
  ];

  const faqs = [
    { q: "Do you ship internationally?",  a: "Yes, we ship to over 120 countries worldwide. Our logistics team handles all international freight with full insurance and real-time tracking." },
    { q: "What if my rug is delayed?",    a: "In the rare event of a delay, your dedicated logistics coordinator will contact you immediately and provide updated tracking information." },
    { q: "How can I track my order?",     a: "Once your rug is dispatched, you will receive a tracking number and direct contact details for your logistics coordinator who will assist you throughout." },
    { q: "Are there any shipping fees?",  a: "Yurdan Carpet offers complimentary shipping on all orders. There are no hidden shipping charges — your purchase price covers delivery to your door." },
  ];

  return (
    <div className="w-full min-h-screen" style={{ background: BG }}>

      {/* ── HERO ── */}
      <section className="pt-24 md:pt-28 pb-0" style={{ background: BG }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            <div className="pb-8 md:pb-16">
              <p className="text-[10px] font-semibold tracking-[0.26em] uppercase mb-5 flex items-center gap-2" style={{ color: BRONZE, fontFamily: SANS }}>
                <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0L6.12 3.88H10L6.94 6.28L8.06 10L5 7.6L1.94 10L3.06 6.28L0 3.88H3.88Z" fill={BRONZE} /></svg>
                From Türkiye to the World
              </p>
              <h1 className="mb-6 leading-[1.0]" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(2.8rem, 6vw, 5rem)", color: DARK, letterSpacing: "-0.02em" }}>
                Shipping &amp;<br />Delivery
              </h1>
              <p className="mb-8 text-sm leading-relaxed" style={{ color: MUTED, fontFamily: SANS, fontWeight: 300, maxWidth: "400px" }}>
                From our atelier in Türkiye to your home, every Yurdan Carpet is delivered with care, precision, and the highest standards of service.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#delivery-times"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                  style={{ background: DARK, color: CREAM, fontFamily: SANS }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#2a2520"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = DARK; }}
                >
                  See Shipping Times
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
                <a
                  href="https://wa.me/905336781644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                  style={{ border: `1px solid ${DARK}`, color: DARK, fontFamily: SANS }}
                  onMouseEnter={e => { e.currentTarget.style.background = DARK; e.currentTarget.style.color = CREAM; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = DARK; }}
                >
                  Contact Our Team
                  <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>

            <div
              className="relative rounded-sm overflow-hidden"
              style={{ aspectRatio: "16/10", border: `1px solid ${BORDER}` }}
            >
              <WorldMap />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE BAR ── */}
      <section style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: BG }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {features.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 py-7 px-5 text-center sm:text-left"
                style={{ borderLeft: i > 0 ? `1px solid ${BORDER}` : undefined }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: "54px", height: "54px", borderRadius: "50%", background: CARD_BG, border: `1px solid ${BORDER}` }}
                >
                  <img src={icon} alt={title} style={{ width: "30px", height: "30px", objectFit: "contain" }} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-1" style={{ color: DARK, fontFamily: SANS }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED, fontFamily: SANS }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE DELIVER ── */}
      <section className="py-16 md:py-24" style={{ background: BG }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[10px] font-semibold tracking-[0.26em] uppercase mb-4 flex items-center justify-center gap-2" style={{ color: BRONZE, fontFamily: SANS }}>
              <svg width="8" height="8" viewBox="0 0 10 10"><path d="M5 0L6.12 3.88H10L6.94 6.28L8.06 10L5 7.6L1.94 10L3.06 6.28L0 3.88H3.88Z" fill={BRONZE} /></svg>
              How We Deliver Your Rug
            </p>
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute top-[38px] left-0 right-0"
              style={{ height: "1px", background: BORDER, zIndex: 0, margin: "0 10%" }}
            />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {steps.map(({ num, icon, title, desc }) => (
                <div key={num} className="flex flex-col items-center text-center">
                  <div
                    className="flex items-center justify-center mb-5 relative"
                    style={{ width: "38px", height: "38px", borderRadius: "50%", border: `1px solid ${BORDER}`, background: BG, flexShrink: 0 }}
                  >
                    <span style={{ fontFamily: SERIF, fontSize: "1rem", color: BRONZE, fontWeight: 400 }}>{num}</span>
                  </div>
                  <div
                    className="mb-4 flex items-center justify-center"
                    style={{ width: "80px", height: "80px", background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: "4px" }}
                  >
                    <img src={icon} alt={title} style={{ width: "52px", height: "52px", objectFit: "contain" }} />
                  </div>
                  <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-2" style={{ color: DARK, fontFamily: SANS }}>{title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: MUTED, fontFamily: SANS, maxWidth: "160px" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY TIMES ── */}
      <section id="delivery-times" className="py-16 md:py-20" style={{ background: CARD_BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-[10px] font-semibold tracking-[0.26em] uppercase mb-4 flex items-center justify-center gap-2" style={{ color: BRONZE, fontFamily: SANS }}>
              <svg width="8" height="8" viewBox="0 0 10 10"><path d="M5 0L6.12 3.88H10L6.94 6.28L8.06 10L5 7.6L1.94 10L3.06 6.28L0 3.88H3.88Z" fill={BRONZE} /></svg>
              Estimated Delivery Times
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map(({ flagEl, name, time, desc }) => (
              <div key={name} className="flex flex-col gap-4 p-6" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                <div className="flex items-center gap-3">
                  {flagEl}
                  <div>
                    <p className="text-[11px] font-semibold leading-tight" style={{ color: DARK, fontFamily: SANS }}>{name}</p>
                    <p className="text-[11px] font-medium" style={{ color: BRONZE, fontFamily: SANS }}>{time}</p>
                  </div>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: MUTED, fontFamily: SANS }}>{desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-xs" style={{ color: MUTED, fontFamily: SANS, opacity: 0.7 }}>
            Delivery times are estimated and may vary due to customs clearance or local conditions.
          </p>
        </div>
      </section>

      {/* ── CUSTOMS & PACKAGING ── */}
      <section className="py-16 md:py-24" style={{ background: BG }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <div style={{ border: `1px solid ${BORDER}`, padding: "36px 40px" }}>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: BRONZE, fontFamily: SANS }}>Customs & Duties</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: MUTED, fontFamily: SANS }}>
                International orders may be subject to customs duties, taxes, or import fees imposed by the destination country. These charges are the responsibility of the recipient.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: MUTED, fontFamily: SANS }}>
                Yurdan Carpet is not liable for delays caused by customs procedures. Our team provides all necessary documentation to facilitate smooth clearance.
              </p>
            </div>

            <div className="relative overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
              <div className="grid grid-cols-2 h-full">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: BRONZE, fontFamily: SANS }}>Packaged with Care</p>
                    <p className="text-sm leading-relaxed mb-5" style={{ color: MUTED, fontFamily: SANS }}>
                      Your rug is more than a purchase — it is a piece of artistry. We use premium protective materials and time-honoured techniques to ensure it arrives in pristine condition.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/905336781644"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-semibold tracking-[0.14em] uppercase flex items-center gap-2 transition-opacity duration-200 hover:opacity-70"
                    style={{ color: BRONZE, fontFamily: SANS }}
                  >
                    Learn More About Our Packaging
                    <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </a>
                </div>
                <div className="relative overflow-hidden" style={{ background: CARD_BG }}>
                  <img
                    src="/shipping-carpet-rolled.png"
                    alt="Packaged carpet"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ mixBlendMode: "multiply" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20" style={{ background: CARD_BG, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="text-[10px] font-semibold tracking-[0.26em] uppercase mb-3 flex items-center justify-center gap-2" style={{ color: BRONZE, fontFamily: SANS }}>
              <svg width="8" height="8" viewBox="0 0 10 10"><path d="M5 0L6.12 3.88H10L6.94 6.28L8.06 10L5 7.6L1.94 10L3.06 6.28L0 3.88H3.88Z" fill={BRONZE} /></svg>
              Frequently Asked Questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
            <div>{faqs.slice(0, 2).map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
            <div>{faqs.slice(2).map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}</div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ background: "#2A2520" }}>
        <div
          className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage: `url('/shipping-step-1-t.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-sm mb-3" style={{ color: "rgba(245,239,230,0.55)", fontFamily: SANS }}>Have questions about shipping?</p>
              <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: CREAM, lineHeight: 1.15 }}>
                Our team is here to help<br />with personalised support.
              </h2>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <a
                href="https://wa.me/905336781644"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                style={{ background: CREAM, color: DARK, fontFamily: SANS }}
                onMouseEnter={e => { e.currentTarget.style.background = "#fff"; }}
                onMouseLeave={e => { e.currentTarget.style.background = CREAM; }}
              >
                WhatsApp Us
                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a
                href="mailto:info@yurdancarpet.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                style={{ border: "1px solid rgba(245,239,230,0.3)", color: CREAM, fontFamily: SANS }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = CREAM; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,239,230,0.3)"; }}
              >
                Send an Email
                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
