import { Link } from "wouter";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { carpets } from "@/data/carpets";

const HERO_CLIPS = ["/hero-clip-1.mp4", "/hero-clip-2.mp4"];

function HeroVideo() {
  const [opacity, setOpacity] = useState([1, 0]);
  const videoRefs = [useRef<HTMLVideoElement>(null), useRef<HTMLVideoElement>(null)];
  const transitioning = useRef(false);

  useEffect(() => {
    if (videoRefs[1].current) videoRefs[1].current.load();
    videoRefs[0].current?.play().catch(() => {});
  }, []);

  const handleEnded = (endedIdx: number) => {
    if (transitioning.current) return;
    transitioning.current = true;
    const next = (endedIdx + 1) % HERO_CLIPS.length;
    if (videoRefs[next].current) {
      videoRefs[next].current.currentTime = 0;
      videoRefs[next].current.play().catch(() => {});
    }
    const newOpacity = [0, 0] as [number, number];
    newOpacity[next] = 1;
    newOpacity[endedIdx] = 0;
    setOpacity(newOpacity);
    setTimeout(() => { transitioning.current = false; }, 1100);
  };

  return (
    <div className="absolute inset-0">
      <img
        src={`/carpets/${carpets[5].folderNum}/1.webp`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.6 }}
      />
      {HERO_CLIPS.map((src, i) => (
        <video
          key={i}
          ref={videoRefs[i]}
          src={src}
          muted
          playsInline
          preload={i === 0 ? "auto" : "metadata"}
          poster={i === 0 ? `/carpets/${carpets[5].folderNum}/1.webp` : undefined}
          onEnded={() => handleEnded(i)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: opacity[i],
            transition: "opacity 1.1s ease",
            willChange: "opacity",
          }}
        />
      ))}
    </div>
  );
}

function HeroMarquee() {
  const doubled = [...carpets, ...carpets];
  return (
    <div className="w-full overflow-hidden">
      <div className="hero-marquee-track gap-3" style={{ width: "max-content" }}>
        {doubled.map((carpet, i) => (
          <Link
            key={`${carpet.id}-${i}`}
            href={`/carpet/${carpet.id}`}
            className="flex-shrink-0 block"
            style={{ width: "44vw" }}
          >
            <div
              className="overflow-hidden mb-2"
              style={{
                aspectRatio: "4/3",
                outline: "1px solid rgba(245,239,230,0.12)",
              }}
            >
              <img
                src={`/carpets/${carpet.folderNum}/1.webp`}
                alt={carpet.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p
              className="truncate text-[9px] font-medium tracking-[0.12em] uppercase"
              style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif" }}
            >
              {carpet.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function HeroCardStrip() {
  return (
    <div className="relative z-10 w-full">
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 mb-4">
        <p
          className="text-[9px] font-semibold tracking-[0.22em] uppercase"
          style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
        >
          The Collection
        </p>
      </div>
      <div
        className="no-scrollbar flex gap-3 md:gap-4 overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          paddingLeft: "clamp(24px, 2.5vw, 40px)",
          paddingRight: "clamp(24px, 2.5vw, 40px)",
          paddingBottom: "4px",
        }}
      >
        {carpets.map((carpet) => (
          <Link
            key={carpet.id}
            href={`/carpet/${carpet.id}`}
            className="flex-shrink-0 group block"
            style={{ scrollSnapAlign: "start", width: "clamp(130px, 16vw, 200px)" }}
          >
            <div
              className="overflow-hidden mb-2"
              style={{
                aspectRatio: "4/3",
                background: "rgba(20,18,16,0.6)",
                outline: "1px solid rgba(245,239,230,0.1)",
              }}
            >
              <img
                src={`/carpets/${carpet.folderNum}/1.webp`}
                alt={carpet.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <p
              className="text-[8px] font-medium tracking-[0.14em] uppercase mb-0.5 truncate"
              style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
            >
              {carpet.origin}
            </p>
            <p
              className="leading-tight truncate"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.85rem", color: "rgba(245,239,230,0.85)" }}
            >
              {carpet.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CarpetCard({ carpet }: { carpet: typeof carpets[0] }) {
  return (
    <div>
      <Link href={`/carpet/${carpet.id}`} className="block group" data-testid={`link-carpet-${carpet.id}`}>
        <div className="overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
          <img
            src={`/carpets/${carpet.folderNum}/1.webp`}
            alt={carpet.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
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
    </div>
  );
}

export default function Home() {
  const featuredCarpets = carpets.slice(0, 6);

  return (
    <div className="w-full min-h-screen" style={{ background: "#FAFAF8" }}>

      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden flex flex-col min-h-[100dvh]"
        style={{ background: "#141210" }}
      >
        <HeroVideo />

        {/* Base dark tint — always-on overlay for video legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(14,12,10,0.78)" }}
        />
        {/* Strong bottom-to-top gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(14,12,10,1.0) 0%, rgba(14,12,10,0.88) 28%, rgba(14,12,10,0.0) 60%)" }}
        />
        {/* Top gradient for navbar */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(14,12,10,0.65) 0%, transparent 22%)" }}
        />

        {/* Upper content — flex-1 centers it between navbar and marquee */}
        <div className="relative z-10 flex-1 flex flex-col justify-center w-full pt-20 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.25 }}
          className="w-full max-w-[1360px] mx-auto px-6 md:px-10 md:pt-32 text-center md:text-left"
        >
          <p
            className="mb-4 text-[10px] font-semibold tracking-[0.22em] uppercase"
            style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
          >
            Private Collection
          </p>
          <h1
            className="mb-4 leading-[1.0]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 400,
              fontSize: "clamp(3.6rem, 10vw, 6rem)",
              color: "#F5EFE6",
              letterSpacing: "-0.02em",
              textShadow: "0 2px 40px rgba(14,12,10,0.6)",
            }}
          >
            Handwoven
            <br />
            Masterworks
          </h1>
          <p
            className="mb-8 md:mb-7 text-sm md:text-base leading-relaxed mx-auto md:mx-0"
            style={{
              color: "rgba(245,239,230,0.62)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              maxWidth: "360px",
              textShadow: "0 1px 12px rgba(14,12,10,0.8)",
            }}
          >
            Discover a legacy of timeless artistry and craft from the world's finest traditions.
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-3">
            <Link
              href="/collection"
              className="inline-flex items-center px-6 py-3 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-300"
              style={{ background: "#F5EFE6", color: "#141210", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.background = "#FFFFFF"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#F5EFE6"; }}
              data-testid="link-enter-gallery"
            >
              View Collection
            </Link>
            <a
              href="https://wa.me/905336781644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
              style={{ border: "1px solid rgba(245,239,230,0.45)", color: "rgba(245,239,230,0.85)", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,239,230,0.9)"; e.currentTarget.style.color = "#F5EFE6"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,239,230,0.45)"; e.currentTarget.style.color = "rgba(245,239,230,0.85)"; }}
              data-testid="link-contact-hero"
            >
              Private Inquiry
            </a>
          </div>
        </motion.div>
        </div>

        {/* Mobile marquee strip */}
        <div className="relative z-10 w-full pb-10 block md:hidden">
          <HeroMarquee />
        </div>

        {/* Bottom card strip — desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.7 }}
          className="relative z-10 w-full pb-8 md:pb-10 hidden md:block"
        >
          <HeroCardStrip />
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-2 z-10 pointer-events-none">
          <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, transparent, rgba(245,239,230,0.25))" }} />
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.5rem", fontWeight: 500, letterSpacing: "0.22em", color: "rgba(245,239,230,0.25)", writingMode: "vertical-rl" }}>SCROLL</p>
        </div>
      </section>


      {/* ── SELECTED WORKS ── */}
      <section className="py-10 md:py-28 px-6 md:px-10" style={{ background: "#FAFAF8" }}>
        <div className="max-w-[1360px] mx-auto">
          <div className="flex justify-between items-end mb-6 md:mb-12">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
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

      {/* ── SHOWROOM ── */}
      <section style={{ background: "#141210" }}>

        {/* Image strip — 3 cols desktop, single image mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {([
            { src: "/brand/showroom-1.webp", cls: "block" },
            { src: "/brand/showroom-2.webp", cls: "hidden md:block" },
            { src: "/brand/showroom-3.webp", cls: "hidden md:block" },
          ] as { src: string; cls: string }[]).map(({ src, cls }, i) => (
            <div
              key={i}
              className={`overflow-hidden ${cls}`}
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={src}
                alt="Yurdan Carpet Showroom"
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
