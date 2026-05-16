import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { carpets } from "@/data/carpets";

const HERO_CLIPS = ["/hero-clip-1.mp4", "/hero-clip-2.mp4"];

function HeroVideo() {
  const [active, setActive] = useState(0);
  const [opacity, setOpacity] = useState([1, 0]);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const transitioning = useRef(false);

  useEffect(() => {
    // Start preloading second clip immediately
    if (videoRefs[1].current) {
      videoRefs[1].current.load();
    }
    // Attempt autoplay
    videoRefs[0].current?.play().catch(() => {});
  }, []);

  const handleEnded = (endedIdx: number) => {
    if (transitioning.current) return;
    transitioning.current = true;
    const next = (endedIdx + 1) % HERO_CLIPS.length;

    // Start the next video
    if (videoRefs[next].current) {
      videoRefs[next].current.currentTime = 0;
      videoRefs[next].current.play().catch(() => {});
    }

    // Crossfade: fade next in, fade current out
    const newOpacity = [0, 0] as [number, number];
    newOpacity[next] = 1;
    newOpacity[endedIdx] = 0;
    setOpacity(newOpacity);
    setActive(next);

    setTimeout(() => { transitioning.current = false; }, 1000);
  };

  return (
    <div className="absolute inset-0">
      {/* Fallback — visible while video loads */}
      <img
        src={`/carpets/${carpets[5].folderNum}/1.png`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.5 }}
      />
      {HERO_CLIPS.map((src, i) => (
        <video
          key={i}
          ref={videoRefs[i]}
          src={src}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          poster={i === 0 ? `/carpets/${carpets[5].folderNum}/1.png` : undefined}
          onEnded={() => handleEnded(i)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: opacity[i],
            transition: "opacity 1s ease",
            willChange: "opacity",
          }}
        />
      ))}
    </div>
  );
}

function CarpetCard({ carpet }: { carpet: typeof carpets[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Link href={`/carpet/${carpet.id}`} className="block group" data-testid={`link-carpet-${carpet.id}`}>
        <div className="overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
          <img
            src={`/carpets/${carpet.folderNum}/1.png`}
            alt={carpet.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
          />
        </div>
        <p className="text-[10px] font-medium tracking-[0.12em] uppercase mb-1.5" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>{carpet.origin}</p>
        <h3
          className="mb-1 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 400, color: "#1C1916" }}
        >
          {carpet.name}
        </h3>
        <p className="text-xs" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }}>{carpet.material} · {carpet.dimensions}</p>
      </Link>
    </motion.div>
  );
}

export default function Home() {
  const featuredCarpets = carpets.slice(0, 3);

  return (
    <div className="w-full min-h-screen" style={{ background: "#FAFAF8" }}>

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden flex items-end"
        style={{ minHeight: "100dvh", background: "#141210" }}
      >
        <HeroVideo />

        {/* Gradient overlays */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(20,18,16,0.93) 0%, rgba(20,18,16,0.25) 45%, rgba(20,18,16,0.1) 100%)" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(20,18,16,0.5) 0%, transparent 20%)" }}
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="relative z-10 w-full max-w-[1360px] mx-auto px-6 md:px-10 pb-16 md:pb-24"
        >
          <p
            className="mb-5 text-[10px] font-medium tracking-[0.18em] uppercase"
            style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
          >
            Private Collection
          </p>
          <h1
            className="mb-6 leading-[1.05]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 300,
              fontSize: "clamp(3rem, 7vw, 6rem)",
              color: "#F5EFE6",
              letterSpacing: "-0.01em",
            }}
          >
            Handwoven masterworks
            <br />
            <span style={{ fontStyle: "italic", color: "rgba(245,239,230,0.6)" }}>from the finest traditions</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            <Link
              href="/collection"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300"
              style={{ background: "#F5EFE6", color: "#141210", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFFFFF"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#F5EFE6"; }}
              data-testid="link-enter-gallery"
            >
              View Collection
            </Link>
            <a
              href="mailto:info@yurdancarpet.com"
              className="text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid rgba(245,239,230,0.2)", paddingBottom: "2px" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(245,239,230,0.85)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,239,230,0.5)")}
              data-testid="link-contact-hero"
            >
              Private Inquiry
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, transparent, rgba(245,239,230,0.3))" }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.55rem", fontWeight: 500, letterSpacing: "0.2em", color: "rgba(245,239,230,0.3)", writingMode: "vertical-rl" }}>SCROLL</p>
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ background: "#FAFAF8" }}>
        <div className="max-w-[1360px] mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-6" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                The Archive
              </p>
              <h2
                className="mb-6 leading-[1.2]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#1C1916" }}
              >
                Not a store. A private archive of textile masterworks.
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", maxWidth: "520px" }}>
                Each piece represents thousands of hours of human craft. Silk, wool, and antique — curated for architects, collectors, and discerning homes. No prices are displayed publicly.
              </p>
              <Link
                href="/about"
                className="inline-block text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
                style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid #1C1916", paddingBottom: "2px" }}
                data-testid="link-about-statement"
              >
                Our Philosophy
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        <div style={{ height: "1px", background: "#E4DDD4" }} />
      </div>

      {/* ── SELECTED WORKS ── */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ background: "#FAFAF8" }}>
        <div className="max-w-[1360px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>Selected Works</p>
              <h2
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", color: "#1C1916" }}
              >
                From the Collection
              </h2>
            </div>
            <Link
              href="/collection"
              className="hidden sm:block text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid #E4DDD4", paddingBottom: "2px" }}
              data-testid="link-view-all"
            >
              View All 12
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            {featuredCarpets.map(carpet => (
              <CarpetCard key={carpet.id} carpet={carpet} />
            ))}
          </div>

          <div className="mt-12 sm:hidden">
            <Link
              href="/collection"
              className="inline-block text-[11px] font-medium tracking-[0.1em] uppercase"
              style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid #E4DDD4", paddingBottom: "2px" }}
            >
              View All 12
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA DARK BAND ── */}
      <section className="py-24 md:py-32 px-6 md:px-10" style={{ background: "#141210" }}>
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-5" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>Private Acquisition</p>
            <h2
              className="leading-[1.15]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 4vw, 3.4rem)", color: "#F5EFE6" }}
            >
              Every piece finds its
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(245,239,230,0.5)" }}>right context.</span>
            </h2>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@yurdancarpet.com"
              className="px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300"
              style={{ background: "#F5EFE6", color: "#141210", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.background = "#F5EFE6")}
              data-testid="link-contact-curators-cta"
            >
              Contact Curators
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
              style={{ border: "1px solid rgba(245,239,230,0.2)", color: "rgba(245,239,230,0.6)", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5EFE6")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,239,230,0.6)")}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
