import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { carpets } from "@/data/carpets";
import { useEffect, useRef, useState, useCallback } from "react";

function Lightbox({
  images,
  folderNum,
  startIndex,
  onClose,
}: {
  images: number[];
  folderNum: number;
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrent(c => Math.min(c + 1, images.length - 1));
      if (e.key === "ArrowLeft") setCurrent(c => Math.max(c - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ background: "rgba(10,9,8,0.96)" }}
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      {/* Close */}
      <button
        className="absolute top-5 right-5 flex items-center gap-2 z-10"
        style={{ color: "rgba(245,239,230,0.55)", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em" }}
        onClick={onClose}
        data-testid="lightbox-close"
      >
        <span className="uppercase tracking-[0.15em]">Close</span>
        <span style={{ fontSize: "20px", lineHeight: 1 }}>×</span>
      </button>

      {/* Counter */}
      <div
        className="absolute top-5 left-5 text-[10px] font-medium"
        style={{ color: "rgba(245,239,230,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
      >
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {/* Prev */}
      {current > 0 && (
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
          style={{ width: "48px", height: "48px", color: "rgba(245,239,230,0.6)" }}
          onClick={e => { e.stopPropagation(); setCurrent(c => c - 1); }}
          data-testid="lightbox-prev"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}
      {/* Next */}
      {current < images.length - 1 && (
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
          style={{ width: "48px", height: "48px", color: "rgba(245,239,230,0.6)" }}
          onClick={e => { e.stopPropagation(); setCurrent(c => c + 1); }}
          data-testid="lightbox-next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      )}

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={`/carpets/${folderNum}/${images[current]}.png`}
          alt={`Photo ${current + 1}`}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={e => e.stopPropagation()}
          data-testid="lightbox-image"
        />
      </AnimatePresence>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setCurrent(i); }}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? "rgba(245,239,230,0.85)" : "rgba(245,239,230,0.25)",
              transition: "all 0.2s",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function CarpetDetail() {
  const { id } = useParams();
  const carpet = carpets.find(c => c.id === id);
  const [activeImg, setActiveImg] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxStart, setLightboxStart] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
  }, [id]);

  const handleCarouselScroll = useCallback(() => {
    if (!carouselRef.current || isScrolling.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const idx = Math.round(scrollLeft / clientWidth);
    setActiveImg(idx);
  }, []);

  const scrollToImage = useCallback((idx: number) => {
    if (!carouselRef.current) return;
    isScrolling.current = true;
    carouselRef.current.scrollTo({ left: idx * carouselRef.current.clientWidth, behavior: "smooth" });
    setActiveImg(idx);
    setTimeout(() => { isScrolling.current = false; }, 500);
  }, []);

  const openLightbox = (idx: number) => {
    setLightboxStart(idx);
    setLightboxOpen(true);
  };

  if (!carpet) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center" style={{ background: "#FAFAF8" }}>
        <div className="text-center">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>404</p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2rem", color: "#1C1916" }}>Piece not found</h1>
          <Link href="/collection" className="text-[11px] font-medium tracking-[0.1em] uppercase" style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid #1C1916", paddingBottom: "2px" }}>
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const imageIndices = Array.from({ length: carpet.imageCount }, (_, i) => i + 1);

  return (
    <div className="w-full min-h-[100dvh]" style={{ background: "#FAFAF8" }}>

      {/* ── GALLERY ── */}
      <div style={{ background: "#141210" }}>

        {/* Mobile: full-width horizontal swipe carousel */}
        <div
          className="md:hidden w-full relative"
          style={{ paddingTop: "64px" }}
        >
          <div
            ref={carouselRef}
            className="flex overflow-x-auto"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onScroll={handleCarouselScroll}
          >
            {imageIndices.map(n => (
              <div
                key={n}
                className="flex-shrink-0 w-full relative"
                style={{ scrollSnapAlign: "start", aspectRatio: "4/3" }}
                onClick={() => openLightbox(n - 1)}
              >
                <img
                  src={`/carpets/${carpet.folderNum}/${n}.png`}
                  alt={`${carpet.name} photo ${n}`}
                  className="w-full h-full object-cover"
                  data-testid={n === 1 ? "img-carpet-main" : undefined}
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imageIndices.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToImage(i)}
                style={{
                  width: i === activeImg ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === activeImg ? "rgba(245,239,230,0.9)" : "rgba(245,239,230,0.3)",
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>

          {/* Counter */}
          <div
            className="absolute top-[72px] right-4 text-[10px] font-medium"
            style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
          >
            {String(activeImg + 1).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
          </div>
        </div>

        {/* Desktop: large main image + thumbnail strip */}
        <div className="hidden md:block" style={{ paddingTop: "80px" }}>
          <div
            className="relative w-full overflow-hidden cursor-zoom-in"
            style={{ height: "75vh" }}
            onClick={() => openLightbox(activeImg)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={`/carpets/${carpet.folderNum}/${imageIndices[activeImg]}.png`}
                alt={`${carpet.name} — photo ${activeImg + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                data-testid="img-carpet-main"
              />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 h-28" style={{ background: "linear-gradient(to top, #141210, transparent)" }} />
            <div
              className="absolute bottom-5 right-6 text-[10px] font-medium"
              style={{ color: "rgba(245,239,230,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            >
              {String(activeImg + 1).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
            </div>
            {/* Zoom hint */}
            <div
              className="absolute bottom-5 left-6 flex items-center gap-1.5 text-[10px] font-medium"
              style={{ color: "rgba(245,239,230,0.3)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}
            >
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
              Click to enlarge
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 px-6 py-4 overflow-x-auto" style={{ background: "#141210", scrollbarWidth: "none" }}>
            {imageIndices.map((n, i) => (
              <button
                key={n}
                onClick={() => setActiveImg(i)}
                className="flex-shrink-0 overflow-hidden transition-all duration-200"
                style={{
                  width: "80px",
                  height: "60px",
                  outline: i === activeImg ? "1.5px solid rgba(245,239,230,0.75)" : "1px solid rgba(245,239,230,0.1)",
                  outlineOffset: i === activeImg ? "2px" : "0px",
                  opacity: i === activeImg ? 1 : 0.38,
                }}
                data-testid={`thumb-img-${n}`}
              >
                <img src={`/carpets/${carpet.folderNum}/${n}.png`} alt={`Photo ${n}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Name overlay at bottom of dark section */}
        <div className="px-6 md:px-10 pt-6 pb-8 md:pb-10">
          <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-2" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                {carpet.origin}
              </p>
              <h1
                className="leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", color: "#F5EFE6" }}
                data-testid="text-carpet-name"
              >
                {carpet.name}
              </h1>
            </div>
            <p
              className="italic text-base md:text-lg pb-0.5"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "rgba(245,239,230,0.4)", maxWidth: "360px", textAlign: "right" }}
              data-testid="text-carpet-tagline"
            >
              "{carpet.tagline}"
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-14 md:py-20 flex flex-col lg:flex-row gap-14 lg:gap-20">

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="w-full lg:w-[58%]"
        >
          {/* Story */}
          <p
            className="text-base leading-[1.9] mb-12"
            style={{ color: "#5A5450", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            data-testid="text-carpet-story"
          >
            {carpet.story}
          </p>

          {/* Curatorial note */}
          <div className="mb-12 p-8 md:p-10" style={{ background: "#F5EFE6" }}>
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
              Curatorial Notes
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.8" }}
              data-testid="text-carpet-details"
            >
              {carpet.details}
            </p>
          </div>

          {/* Photo grid */}
          {imageIndices.length > 1 && (
            <>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                Photography
              </p>
              <div className="grid grid-cols-3 gap-1.5 md:gap-2">
                {imageIndices.slice(1).map((n) => (
                  <button
                    key={n}
                    onClick={() => openLightbox(n - 1)}
                    className="overflow-hidden group relative"
                    data-testid={`grid-img-${n}`}
                  >
                    <img
                      src={`/carpets/${carpet.folderNum}/${n}.png`}
                      alt={`${carpet.name} photo ${n}`}
                      className="w-full object-cover transition-all duration-400 group-hover:brightness-75"
                      style={{ aspectRatio: "1" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.9 }}>
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.22 }}
          className="w-full lg:w-[42%]"
        >
          <div className="lg:sticky lg:top-24">

            {/* Specifications */}
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid #E4DDD4" }}>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-6" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                Specifications
              </p>
              <dl className="space-y-[14px]">
                {[
                  { label: "Dimensions", value: carpet.dimensions },
                  { label: "Total Area", value: carpet.totalArea },
                  { label: "Material", value: carpet.material },
                  { label: "Style", value: carpet.style },
                  { label: "Origin", value: carpet.origin },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline gap-4">
                    <dt className="text-xs font-medium flex-shrink-0" style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}>
                      {label}
                    </dt>
                    <div style={{ flex: 1, height: "1px", background: "#EFEBE6", margin: "0 4px", alignSelf: "center" }} />
                    <dd
                      className="text-sm text-right"
                      style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif" }}
                      data-testid={`spec-${label.toLowerCase().replace(" ", "-")}`}
                    >
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Colours */}
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid #E4DDD4" }}>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                Colour Palette
              </p>
              <div className="flex flex-wrap gap-2">
                {carpet.colors.map(color => (
                  <span
                    key={color}
                    className="text-xs px-3 py-1.5"
                    style={{ background: "#F0EAE2", color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
                    data-testid={`tag-color-${color.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Inquiry */}
            <div>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-3" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                Acquisition
              </p>
              <h4
                className="mb-3 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.5rem", color: "#1C1916" }}
              >
                Request a Private Viewing
              </h4>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Pricing is shared exclusively upon private request. Our curators are available for origin documentation, high-resolution archive imagery, and private viewings.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:info@yurdancarpet.com?subject=Inquiry: ${carpet.name}`}
                  className="w-full text-center py-4 text-[11px] font-medium tracking-[0.12em] uppercase transition-all duration-200"
                  style={{ background: "#141210", color: "#F5EFE6", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#2A2725")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#141210")}
                  data-testid="link-email-inquiry"
                >
                  Email Inquiry
                </a>
                <a
                  href={`https://wa.me/905551234567?text=I would like information about ${carpet.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 text-[11px] font-medium tracking-[0.12em] uppercase transition-all duration-200"
                  style={{ border: "1px solid #E4DDD4", color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1C1916"; e.currentTarget.style.color = "#1C1916"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E4DDD4"; e.currentTarget.style.color = "#7A726A"; }}
                  data-testid="link-whatsapp-inquiry"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 pb-16 pt-4" style={{ borderTop: "1px solid #E4DDD4" }}>
        <Link
          href="/collection"
          className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200 mt-8"
          style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
          data-testid="link-back-to-archive"
        >
          <svg width="20" height="1" viewBox="0 0 20 1" fill="none"><line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor"/></svg>
          Back to Collection
        </Link>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            images={imageIndices}
            folderNum={carpet.folderNum}
            startIndex={lightboxStart}
            onClose={() => setLightboxOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
