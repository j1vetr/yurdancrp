import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { carpets } from "@/data/carpets";
import { useEffect, useRef, useState, useCallback } from "react";

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

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
      style={{ background: "rgba(10,9,8,0.97)" }}
      onClick={onClose}
      data-testid="lightbox-overlay"
    >
      <button
        className="absolute top-5 right-5 flex items-center gap-2 z-10"
        style={{ color: "rgba(245,239,230,0.5)", fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em" }}
        onClick={onClose}
        data-testid="lightbox-close"
      >
        <span className="uppercase tracking-[0.15em]">Close</span>
        <span style={{ fontSize: "22px", lineHeight: 1 }}>×</span>
      </button>

      <div
        className="absolute top-5 left-5 text-[10px] font-medium"
        style={{ color: "rgba(245,239,230,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
      >
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {current > 0 && (
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
          style={{ width: "48px", height: "48px", color: "rgba(245,239,230,0.55)" }}
          onClick={e => { e.stopPropagation(); setCurrent(c => c - 1); }}
          data-testid="lightbox-prev"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}
      {current < images.length - 1 && (
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center"
          style={{ width: "48px", height: "48px", color: "rgba(245,239,230,0.55)" }}
          onClick={e => { e.stopPropagation(); setCurrent(c => c + 1); }}
          data-testid="lightbox-next"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      )}

      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={`/carpets/${folderNum}/${images[current]}.webp`}
          alt={`Photo ${current + 1}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          onClick={e => e.stopPropagation()}
          data-testid="lightbox-image"
        />
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={e => { e.stopPropagation(); setCurrent(i); }}
            style={{
              width: i === current ? "22px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? "rgba(245,239,230,0.8)" : "rgba(245,239,230,0.2)",
              transition: "all 0.25s",
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
    setActiveImg(Math.round(scrollLeft / clientWidth));
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
  const waMessage = encodeURIComponent(`Hello, I'd like to inquire about "${carpet.name}".`);
  const waHref = `https://wa.me/905336781644?text=${waMessage}`;
  const emailHref = `mailto:info@yurdancarpet.com?subject=Inquiry - ${carpet.name}`;

  return (
    <div className="w-full min-h-[100dvh]" style={{ background: "#FAFAF8" }}>

      {/* ── HERO GALLERY ── */}
      <div style={{ background: "#0E0C0A" }}>

        {/* Mobile carousel */}
        <div className="md:hidden w-full relative" style={{ paddingTop: "64px" }}>
          <div
            ref={carouselRef}
            className="flex overflow-x-auto no-scrollbar"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
            onScroll={handleCarouselScroll}
          >
            {imageIndices.map(n => (
              <div
                key={n}
                className="flex-shrink-0 w-full"
                style={{ scrollSnapAlign: "start", aspectRatio: "4/3" }}
                onClick={() => openLightbox(n - 1)}
              >
                <img
                  src={`/carpets/${carpet.folderNum}/${n}.webp`}
                  alt={`${carpet.name} photo ${n}`}
                  className="w-full h-full object-cover"
                  data-testid={n === 1 ? "img-carpet-main" : undefined}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {imageIndices.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToImage(i)}
                style={{
                  width: i === activeImg ? "20px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === activeImg ? "rgba(245,239,230,0.85)" : "rgba(245,239,230,0.25)",
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>
          <div className="absolute top-[72px] right-4 text-[10px] font-medium" style={{ color: "rgba(245,239,230,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}>
            {String(activeImg + 1).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
          </div>
        </div>

        {/* Desktop: full-width hero + thumbnail strip */}
        <div className="hidden md:block" style={{ paddingTop: "80px" }}>
          {/* Hero image */}
          <div
            className="relative w-full overflow-hidden cursor-zoom-in"
            style={{ height: "82vh" }}
            onClick={() => openLightbox(activeImg)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={`/carpets/${carpet.folderNum}/${imageIndices[activeImg]}.webp`}
                alt={`${carpet.name} - photo ${activeImg + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                data-testid="img-carpet-main"
              />
            </AnimatePresence>

            {/* Bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-36" style={{ background: "linear-gradient(to top, #0E0C0A, transparent)" }} />

            {/* Counter */}
            <div className="absolute bottom-5 right-8 text-[10px] font-medium" style={{ color: "rgba(245,239,230,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}>
              {String(activeImg + 1).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
            </div>

            {/* Zoom hint */}
            <div className="absolute bottom-5 left-8 flex items-center gap-2 text-[10px] font-medium" style={{ color: "rgba(245,239,230,0.28)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}>
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
              Click to enlarge
            </div>
          </div>

          {/* Thumbnail strip */}
          <div
            className="flex gap-2 px-8 py-4 overflow-x-auto no-scrollbar"
            style={{ background: "#0E0C0A" }}
          >
            {imageIndices.map((n, i) => (
              <button
                key={n}
                onClick={() => setActiveImg(i)}
                className="flex-shrink-0 overflow-hidden transition-all duration-300"
                style={{
                  width: "88px",
                  height: "66px",
                  outline: i === activeImg ? "1.5px solid rgba(245,239,230,0.7)" : "1px solid rgba(245,239,230,0.08)",
                  outlineOffset: i === activeImg ? "3px" : "0",
                  opacity: i === activeImg ? 1 : 0.35,
                  transform: i === activeImg ? "scale(1)" : "scale(0.97)",
                }}
                data-testid={`thumb-img-${n}`}
              >
                <img src={`/carpets/${carpet.folderNum}/${n}.webp`} alt={`Thumbnail ${n}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Origin + name bar */}
        <div className="px-6 md:px-10 pt-7 pb-9">
          <div className="max-w-[1360px] mx-auto">
            <p
              className="text-[10px] font-medium tracking-[0.22em] uppercase mb-2.5"
              style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
            >
              {carpet.origin}
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
              <h1
                className="leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#F5EFE6" }}
                data-testid="text-carpet-name"
              >
                {carpet.name}
              </h1>
              <p
                className="italic pb-0.5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(1rem, 1.5vw, 1.2rem)", color: "rgba(245,239,230,0.35)", maxWidth: "380px", textAlign: "right" }}
                data-testid="text-carpet-tagline"
              >
                "{carpet.tagline}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 py-14 md:py-20">

          {/* Left: story + curatorial + photo grid */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="w-full lg:w-[58%] order-2 lg:order-1"
          >
            {/* Story */}
            <p
              className="text-base leading-[2] mb-14"
              style={{ color: "#5A5450", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              data-testid="text-carpet-story"
            >
              {carpet.story}
            </p>

            {/* Curatorial note */}
            <div
              className="mb-14 p-8 md:p-10"
              style={{ background: "#F0EAE2", borderLeft: "2px solid #9B7B56" }}
            >
              <p
                className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4"
                style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
              >
                Curatorial Notes
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6A625A", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.9" }}
                data-testid="text-carpet-details"
              >
                {carpet.details}
              </p>
            </div>

            {/* Photography grid */}
            {imageIndices.length > 1 && (
              <div>
                <p
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-5"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Photography
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-2">
                  {imageIndices.slice(1).map((n) => (
                    <button
                      key={n}
                      onClick={() => openLightbox(n - 1)}
                      className="overflow-hidden group relative"
                      data-testid={`grid-img-${n}`}
                    >
                      <img
                        src={`/carpets/${carpet.folderNum}/${n}.webp`}
                        alt={`${carpet.name} detail ${n}`}
                        className="w-full object-cover transition-all duration-500 group-hover:brightness-75 group-hover:scale-[1.02]"
                        style={{ aspectRatio: "1" }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.85 }}>
                          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right: sticky sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="w-full lg:w-[42%] order-1 lg:order-2"
          >
            <div className="lg:sticky lg:top-28">

              {/* Carpet name (desktop sidebar) */}
              <div
                className="hidden lg:block pb-7 mb-7"
                style={{ borderBottom: "1px solid #E4DDD4" }}
              >
                <p
                  className="text-[10px] font-medium tracking-[0.22em] uppercase mb-3"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  {carpet.origin}
                </p>
                <h2
                  className="leading-tight mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.8rem, 2.5vw, 2.6rem)", color: "#1C1916" }}
                >
                  {carpet.name}
                </h2>
                <p
                  className="italic text-sm"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#B0A89E" }}
                >
                  {carpet.dimensions} &nbsp;·&nbsp; {carpet.totalArea}
                </p>
              </div>

              {/* Specifications */}
              <div
                className="pb-7 mb-7"
                style={{ borderBottom: "1px solid #E4DDD4" }}
              >
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-5"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Specifications
                </p>
                <dl className="space-y-3.5">
                  {[
                    { label: "Dimensions", value: carpet.dimensions },
                    { label: "Total Area", value: carpet.totalArea },
                    { label: "Material", value: carpet.material },
                    { label: "Style", value: carpet.style },
                    { label: "Origin", value: carpet.origin },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-baseline gap-4">
                      <dt
                        className="text-xs font-medium flex-shrink-0"
                        style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}
                      >
                        {label}
                      </dt>
                      <div style={{ flex: 1, height: "1px", background: "#EDE7DF", alignSelf: "center" }} />
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

              {/* Colour palette */}
              <div
                className="pb-7 mb-7"
                style={{ borderBottom: "1px solid #E4DDD4" }}
              >
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
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

              {/* Inquiry CTAs */}
              <div className="hidden md:block">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Acquisition
                </p>
                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: "#9A9289", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Pricing is shared exclusively upon private request. Our curators are available for viewings and documentation.
                </p>

                {/* WhatsApp CTA — primary */}
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 py-4 mb-3 text-[12px] font-semibold tracking-[0.08em] uppercase transition-all duration-200"
                  style={{ background: "#25D366", color: "#fff", fontFamily: "'Inter', sans-serif", letterSpacing: "0.1em" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#1EBE5A")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
                  data-testid="link-whatsapp-inquiry"
                >
                  <WhatsAppIcon size={17} />
                  Inquire on WhatsApp
                </a>

                {/* Email CTA — secondary */}
                <a
                  href={emailHref}
                  className="w-full flex items-center justify-center gap-2 py-4 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                  style={{ border: "1px solid #D5CDC4", color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1C1916"; e.currentTarget.style.color = "#1C1916"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#D5CDC4"; e.currentTarget.style.color = "#7A726A"; }}
                  data-testid="link-email-inquiry"
                >
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
                  Email Inquiry
                </a>

                <p
                  className="text-center mt-4 text-[10px]"
                  style={{ color: "#C2B9B0", fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}
                >
                  No price is displayed publicly
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Back to collection */}
      <div
        className="max-w-[1360px] mx-auto px-6 md:px-10 pb-20 pt-2"
        style={{ borderTop: "1px solid #E8E1D8" }}
      >
        <Link
          href="/collection"
          className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 mt-8"
          style={{ color: "#9A9289", fontFamily: "'Inter', sans-serif" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#1C1916")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9A9289")}
          data-testid="link-back-to-archive"
        >
          <svg width="20" height="1" viewBox="0 0 20 1" fill="none"><line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor"/></svg>
          Back to Collection
        </Link>
      </div>

      {/* Mobile sticky bottom bar */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-2 px-4 py-3"
        style={{ background: "#FAFAF8", borderTop: "1px solid #E4DDD4", boxShadow: "0 -4px 20px rgba(20,18,16,0.08)" }}
      >
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] font-semibold tracking-[0.08em] uppercase"
          style={{ background: "#25D366", color: "#fff", fontFamily: "'Inter', sans-serif" }}
          data-testid="link-whatsapp-inquiry-mobile"
        >
          <WhatsAppIcon size={15} />
          WhatsApp
        </a>
        <a
          href={emailHref}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase"
          style={{ border: "1px solid #1C1916", color: "#1C1916", fontFamily: "'Inter', sans-serif" }}
          data-testid="link-email-inquiry-mobile"
        >
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          Email
        </a>
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
