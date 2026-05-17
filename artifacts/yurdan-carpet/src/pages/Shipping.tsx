import { Link } from "wouter";

const SERIF = "'Cormorant Garamond', serif";
const SANS = "'Inter', sans-serif";
const BRONZE = "#9B7B56";
const DARK = "#141210";
const CREAM = "#F5EFE6";
const MUTED = "#7A726A";
const BG = "#FAFAF8";
const CARD_BG = "#F5F0EB";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-4"
      style={{ color: BRONZE, fontFamily: SANS }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: "#E4DDD4" }} className="w-full" />;
}

const STEPS = [
  {
    num: "01",
    title: "Inquiry Confirmed",
    body: "Once your private inquiry is received, our team reaches out within 24 hours to confirm availability and begin the reservation process.",
  },
  {
    num: "02",
    title: "Expert Inspection",
    body: "Each carpet undergoes a thorough quality inspection by our specialists before packaging. Condition, dimensions, and authenticity are verified.",
  },
  {
    num: "03",
    title: "Museum-Grade Packaging",
    body: "Your piece is rolled on an acid-free tube, wrapped in breathable archival tissue, and encased in a custom protective crate built to international shipping standards.",
  },
  {
    num: "04",
    title: "Insured Dispatch",
    body: "Shipments leave our Istanbul atelier fully insured at declared value. You receive a tracking number and direct contact details for your logistics coordinator.",
  },
  {
    num: "05",
    title: "White-Glove Delivery",
    body: "Our courier partners offer room-of-choice placement and unpacking assistance upon request. Your carpet arrives ready to be laid.",
  },
];

const REGIONS = [
  { region: "Turkey & Europe", time: "3 – 7 business days" },
  { region: "United States & Canada", time: "5 – 10 business days" },
  { region: "Middle East & Gulf", time: "4 – 8 business days" },
  { region: "Asia Pacific", time: "7 – 14 business days" },
  { region: "Rest of World", time: "10 – 18 business days" },
];

const GUARANTEES = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={BRONZE} strokeWidth="1.4" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Ships to 50+ Countries",
    body: "From our Istanbul atelier to residences and collections worldwide.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={BRONZE} strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Fully Insured at Full Value",
    body: "Every shipment is insured at the declared piece value. Zero risk, complete peace of mind.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={BRONZE} strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
        <path d="M16.5 9.4 7.55 4.24M3.29 7 12 12l8.71-5" />
        <path d="M12 22V12" />
        <path d="M18.42 15.61a2.1 2.1 0 1 1 2.97 2.97L16 23l-4 1 1-4 5.42-4.39z" />
      </svg>
    ),
    title: "Real-Time Tracking",
    body: "Live shipment tracking shared directly with you throughout the journey.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={BRONZE} strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Room-of-Choice Delivery",
    body: "White-glove couriers carry your piece to the exact room of your choosing.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={BRONZE} strokeWidth="1.4" viewBox="0 0 24 24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    title: "No Import Surprise",
    body: "Our team advises on duties and customs documentation before dispatch — no unexpected fees.",
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke={BRONZE} strokeWidth="1.4" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Dedicated Coordinator",
    body: "A personal logistics contact is assigned to every order. One number, always available.",
  },
];

export default function Shipping() {
  return (
    <div className="w-full min-h-screen" style={{ background: BG }}>

      {/* ── HERO ── */}
      <section
        className="relative w-full flex flex-col justify-end overflow-hidden"
        style={{ background: DARK, minHeight: "52vh" }}
      >
        {/* subtle texture overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(160deg, rgba(155,123,86,0.08) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(20,18,16,0.9) 0%, transparent 60%)" }}
        />

        {/* Decorative line accent */}
        <div
          className="absolute top-0 left-0 right-0"
          style={{ height: "1px", background: `linear-gradient(to right, transparent, ${BRONZE}, transparent)`, opacity: 0.35 }}
        />

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-10 pb-16 md:pb-20 pt-28 md:pt-32 w-full">
          <p
            className="text-[10px] font-semibold tracking-[0.26em] uppercase mb-5"
            style={{ color: BRONZE, fontFamily: SANS }}
          >
            Logistics & Delivery
          </p>
          <h1
            className="leading-[1.0] mb-6"
            style={{
              fontFamily: SERIF,
              fontWeight: 400,
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: CREAM,
              letterSpacing: "-0.02em",
              maxWidth: "720px",
            }}
          >
            Shipped from Istanbul.<br />Delivered to the World.
          </h1>
          <p
            className="text-sm md:text-base leading-relaxed"
            style={{ color: "rgba(245,239,230,0.5)", fontFamily: SANS, fontWeight: 300, maxWidth: "480px" }}
          >
            Every carpet travels from our atelier in the heart of Istanbul, packaged with the same care given to museum acquisitions: insured, tracked, and handled by specialists.
          </p>
        </div>
      </section>

      {/* ── GUARANTEES GRID ── */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: BG }}>
        <div className="max-w-[1360px] mx-auto">
          <SectionLabel>Our Commitments</SectionLabel>
          <h2
            className="mb-12 md:mb-16"
            style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: DARK }}
          >
            What Every Shipment Includes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px" style={{ background: "#E4DDD4" }}>
            {GUARANTEES.map(({ icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-5 p-8 md:p-10"
                style={{ background: BG }}
              >
                <div>{icon}</div>
                <div>
                  <p
                    className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-2"
                    style={{ color: DARK, fontFamily: SANS }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: MUTED, fontFamily: SANS }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── HOW IT WORKS ── */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: CARD_BG }}>
        <div className="max-w-[1360px] mx-auto">
          <SectionLabel>The Process</SectionLabel>
          <h2
            className="mb-12 md:mb-16"
            style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: DARK }}
          >
            From Atelier to Your Door
          </h2>

          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div key={step.num}>
                <div className="flex gap-8 md:gap-16 items-start py-8 md:py-10">
                  {/* Number */}
                  <div className="flex-shrink-0 w-12 md:w-20 text-right">
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 300,
                        color: "rgba(20,18,16,0.12)",
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Connector line */}
                  <div className="flex flex-col items-center flex-shrink-0 pt-2" style={{ width: "1px" }}>
                    <div style={{ width: "1px", flex: 1, background: "#E4DDD4" }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex-shrink-0 rounded-full"
                        style={{ width: "8px", height: "8px", background: BRONZE }}
                      />
                      <h3
                        style={{
                          fontFamily: SERIF,
                          fontWeight: 500,
                          fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                          color: DARK,
                        }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: MUTED, fontFamily: SANS, maxWidth: "560px" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
                {i < STEPS.length - 1 && <Divider />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── DELIVERY TIMES ── */}
      <section className="py-16 md:py-24 px-6 md:px-10" style={{ background: BG }}>
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <SectionLabel>Estimated Timelines</SectionLabel>
              <h2
                className="mb-6"
                style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: DARK }}
              >
                Delivery Windows by Region
              </h2>
              <p
                className="text-sm leading-relaxed mb-10"
                style={{ color: MUTED, fontFamily: SANS, maxWidth: "420px" }}
              >
                Timelines begin from the date of shipment confirmation. For time-sensitive requests, expedited options are available — please mention this in your inquiry.
              </p>

              <div className="flex flex-col gap-0" style={{ border: "1px solid #E4DDD4" }}>
                {REGIONS.map(({ region, time }, i) => (
                  <div
                    key={region}
                    className="flex items-center justify-between px-6 py-5"
                    style={{
                      borderTop: i > 0 ? "1px solid #E4DDD4" : undefined,
                      background: i % 2 === 0 ? BG : CARD_BG,
                    }}
                  >
                    <p
                      className="text-sm font-medium"
                      style={{ color: DARK, fontFamily: SANS }}
                    >
                      {region}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: BRONZE, fontFamily: SANS, fontWeight: 500 }}
                    >
                      {time}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Packaging note */}
            <div>
              <SectionLabel>Packaging Standards</SectionLabel>
              <h2
                className="mb-6"
                style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: DARK }}
              >
                Packed for a Century
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: MUTED, fontFamily: SANS }}
              >
                Handwoven rugs are among the most delicate of textile arts. Our packaging process was developed with conservators and logistics specialists to ensure your piece arrives in precisely the condition it left our atelier.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  "Rolled on acid-free archival tubes to prevent crease damage",
                  "Wrapped in breathable cotton conservation tissue",
                  "Sealed in moisture-resistant poly barrier layer",
                  "Housed in custom timber crates for long-haul freight",
                  "Shock-absorbent foam corners on all crated pieces",
                  "Photographic condition report included with every shipment",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <div
                      className="flex-shrink-0 mt-1.5 rounded-full"
                      style={{ width: "5px", height: "5px", background: BRONZE }}
                    />
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: MUTED, fontFamily: SANS }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── RETURNS ── */}
      <section className="py-16 md:py-20 px-6 md:px-10" style={{ background: CARD_BG }}>
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <SectionLabel>Returns Policy</SectionLabel>
              <h2
                className="mb-5"
                style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", color: DARK }}
              >
                30-Day Worry-Free Returns
              </h2>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: MUTED, fontFamily: SANS }}
              >
                If a piece does not meet your expectations within 30 days of delivery, we arrange a full collection at no cost to you. Return shipping is covered by Yurdan Carpet, and your payment is refunded in full.
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: MUTED, fontFamily: SANS }}
              >
                Pieces must be returned in their original condition, uninstalled. Our team coordinates collection at a time that suits you, with the same white-glove standards as the original delivery.
              </p>
            </div>
            <div
              className="p-8 md:p-10"
              style={{ background: DARK }}
            >
              <div
                className="w-8 h-px mb-8"
                style={{ background: BRONZE }}
              />
              <p
                style={{
                  fontFamily: SERIF,
                  fontWeight: 400,
                  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                  color: CREAM,
                  lineHeight: 1.5,
                }}
              >
                "Every carpet we ship carries our name. We stand behind each piece unconditionally — before the sale, during transit, and after delivery."
              </p>
              <p
                className="mt-8 text-[10px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: BRONZE, fontFamily: SANS }}
              >
                Yurdan Carpet, Istanbul
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-16 md:py-24 px-6 md:px-10 text-center"
        style={{ background: BG, borderTop: "1px solid #E4DDD4" }}
      >
        <div className="max-w-[640px] mx-auto">
          <SectionLabel>Begin Your Inquiry</SectionLabel>
          <h2
            className="mb-5"
            style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: DARK }}
          >
            Ready to Acquire a Piece?
          </h2>
          <p
            className="text-sm leading-relaxed mb-10 mx-auto"
            style={{ color: MUTED, fontFamily: SANS, maxWidth: "380px" }}
          >
            Reach out via WhatsApp or email and our team will handle every detail of your shipment personally.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/905336781644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
              style={{ background: DARK, color: CREAM, fontFamily: SANS }}
              onMouseEnter={e => { e.currentTarget.style.background = "#2a2520"; }}
              onMouseLeave={e => { e.currentTarget.style.background = DARK; }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Inquiry
            </a>
            <a
              href="mailto:info@yurdancarpet.com"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
              style={{ border: `1px solid ${DARK}`, color: DARK, fontFamily: SANS }}
              onMouseEnter={e => { e.currentTarget.style.background = DARK; e.currentTarget.style.color = CREAM; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = DARK; }}
            >
              Email Us
            </a>
            <Link
              href="/collection"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
              style={{ border: "1px solid #E4DDD4", color: MUTED, fontFamily: SANS }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#C9BFB5"; e.currentTarget.style.color = DARK; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E4DDD4"; e.currentTarget.style.color = MUTED; }}
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
