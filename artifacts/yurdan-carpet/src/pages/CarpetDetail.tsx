import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { carpets } from "@/data/carpets";
import { useEffect, useRef, useState, useCallback } from "react";

function WhatsAppIcon({ size = 17 }: { size?: number }) {
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
      transition={{ duration: 0.22 }}
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

      <div className="absolute top-5 left-5 text-[10px] font-medium" style={{ color: "rgba(245,239,230,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}>
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </div>

      {current > 0 && (
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10"
          style={{ color: "rgba(245,239,230,0.55)" }}
          onClick={e => { e.stopPropagation(); setCurrent(c => c - 1); }}
          data-testid="lightbox-prev"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      )}
      {current < images.length - 1 && (
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10"
          style={{ color: "rgba(245,239,230,0.55)" }}
          onClick={e => { e.stopPropagation(); setCurrent(c => c + 1); }}
          data-testid="lightbox-next"
        >
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
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
          transition={{ duration: 0.28 }}
          className="max-h-[90vh] max-w-[88vw] object-contain"
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

const COLOR_MAP: Record<string, string> = {
  "Deep Crimson": "#8B1A2A",
  "Ivory": "#F5EFE0",
  "Antique Gold": "#C9A84C",
  "Midnight Blue": "#1A2349",
  "Saffron": "#E8921A",
  "Saffron Yellow": "#E8921A",
  "Navy": "#1B2B5E",
  "Gold": "#C9A84C",
  "Golden Yellow": "#D4A43A",
  "Antique White": "#F0E8D5",
  "Antique Beige": "#D4C4A8",
  "Burgundy": "#6B1429",
  "Copper": "#B86A3A",
  "Anthracite": "#3A3A3A",
  "Deep Emerald": "#1A5C3A",
  "Crimson": "#8B1A2A",
  "Cream": "#F5EFE0",
  "Amber": "#C47A1A",
  "Agate Red": "#8C3025",
  "Beige": "#D9C9B0",
  "Rose": "#C4788A",
  "Silver Grey": "#B8B4B0",
  "Terracotta": "#C4613A",
  "Forest Green": "#2A5C2A",
  "White": "#F8F6F2",
  "Warm Brown": "#7A4E2A",
  "Khaki": "#A89060",
  "Faded Gold": "#C4A872",
  "Tea": "#C4A882",
  "Faded Rose": "#C49088",
};

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
  const emailHref = `mailto:info@yurdancarpet.com?subject=${encodeURIComponent(`Inquiry – ${carpet.name}`)}`;

  return (
    <div className="w-full min-h-[100dvh] pb-[120px] md:pb-0" style={{ background: "#FAFAF8" }}>

      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-28 pb-6">
        <nav className="flex items-center gap-2 text-[10px] font-medium tracking-[0.14em] uppercase" style={{ fontFamily: "'Inter', sans-serif", color: "#B0A89E" }}>
          <Link href="/collection" style={{ color: "#B0A89E" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#1C1916")}
            onMouseLeave={e => (e.currentTarget.style.color = "#B0A89E")}
          >
            Collection
          </Link>
          <span style={{ color: "#D5CDC4" }}>›</span>
          <span style={{ color: "#7A726A" }}>{carpet.name}</span>
        </nav>
      </div>

      {/* ── PRODUCT SECTION ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">

          {/* ── LEFT: GALLERY ── */}
          <div className="w-full lg:w-[58%]">

            {/* Mobile: main image + thumbnail strip */}
            <div className="lg:hidden">
              {/* Main image */}
              <div
                className="w-full relative overflow-hidden"
                style={{ aspectRatio: "3/4", background: "#F2EDE7" }}
                onClick={() => openLightbox(activeImg)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImg}
                    src={`/carpets/${carpet.folderNum}/${imageIndices[activeImg]}.webp`}
                    alt={`${carpet.name} – view ${activeImg + 1}`}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    data-testid="img-carpet-main"
                  />
                </AnimatePresence>
                {/* Counter */}
                <div
                  className="absolute bottom-3 right-3"
                  style={{ color: "rgba(28,25,22,0.4)", fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.12em" }}
                >
                  {String(activeImg + 1).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div
                className="flex gap-2 overflow-x-auto no-scrollbar mt-2 pb-1"
                style={{ scrollSnapType: "x mandatory" }}
              >
                {imageIndices.map((n, i) => (
                  <button
                    key={n}
                    onClick={() => setActiveImg(i)}
                    className="flex-shrink-0 overflow-hidden transition-all duration-200"
                    style={{
                      width: "64px",
                      height: "64px",
                      scrollSnapAlign: "start",
                      background: "#F2EDE7",
                      outline: i === activeImg ? "1.5px solid #9B7B56" : "1px solid #E0D8CF",
                      outlineOffset: i === activeImg ? "2px" : "0",
                    }}
                    data-testid={`thumb-img-${n}`}
                  >
                    <img
                      src={`/carpets/${carpet.folderNum}/${n}.webp`}
                      alt={`View ${n}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop: vertical thumbnails + main image */}
            <div className="hidden lg:flex gap-3 items-stretch">

              {/* Vertical thumbnail strip — distributed evenly top to bottom */}
              <div className="flex flex-col flex-shrink-0 justify-between" style={{ width: "68px" }}>
                {imageIndices.map((n, i) => (
                  <button
                    key={n}
                    onClick={() => setActiveImg(i)}
                    className="overflow-hidden flex-shrink-0 transition-all duration-200"
                    style={{
                      width: "68px",
                      height: "68px",
                      outline: i === activeImg ? "1.5px solid #9B7B56" : "1px solid #E0D8CF",
                      outlineOffset: i === activeImg ? "2px" : "0",
                      background: "#F2EDE7",
                    }}
                    data-testid={`thumb-img-${n}`}
                  >
                    <img
                      src={`/carpets/${carpet.folderNum}/${n}.webp`}
                      alt={`View ${n}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative">
                <div
                  className="relative overflow-hidden cursor-zoom-in w-full"
                  style={{ background: "#F2EDE7", aspectRatio: "16/17" }}
                  onClick={() => openLightbox(activeImg)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImg}
                      src={`/carpets/${carpet.folderNum}/${imageIndices[activeImg]}.webp`}
                      alt={`${carpet.name} – view ${activeImg + 1}`}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      data-testid="img-carpet-main"
                    />
                  </AnimatePresence>

                  {/* Counter + zoom hint */}
                  <div
                    className="absolute bottom-3 right-4 flex items-center gap-3"
                    style={{ color: "rgba(28,25,22,0.35)", fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.12em" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>
                      Enlarge
                    </span>
                    <span>{String(activeImg + 1).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: PRODUCT INFO (STICKY) ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full lg:w-[42%]"
          >
            <div className="lg:sticky lg:top-28">

              {/* Origin + Name */}
              <div className="pb-7 mb-7" style={{ borderBottom: "1px solid #E4DDD4" }}>
                <p
                  className="text-[10px] font-medium tracking-[0.22em] uppercase mb-3"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  {carpet.origin}
                </p>
                <h1
                  className="leading-tight mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2rem, 3vw, 2.8rem)", color: "#1C1916" }}
                  data-testid="text-carpet-name"
                >
                  {carpet.name}
                </h1>
                <p
                  className="italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "1.05rem", color: "#B0A89E" }}
                  data-testid="text-carpet-tagline"
                >
                  "{carpet.tagline}"
                </p>
              </div>

              {/* Specifications */}
              <div className="pb-7 mb-7" style={{ borderBottom: "1px solid #E4DDD4" }}>
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Specifications
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {[
                    { label: "Dimensions", value: carpet.dimensions },
                    { label: "Total Area", value: carpet.totalArea },
                    { label: "Material", value: carpet.material },
                    { label: "Style", value: carpet.style },
                    { label: "Origin", value: carpet.origin },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <dt
                        className="text-[9px] font-semibold tracking-[0.14em] uppercase mb-1"
                        style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif" }}
                      >
                        {label}
                      </dt>
                      <dd
                        className="text-[13px] font-medium"
                        style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif", letterSpacing: "0.01em" }}
                        data-testid={`spec-${label.toLowerCase().replace(" ", "-")}`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Colour Palette */}
              <div className="pb-7 mb-7" style={{ borderBottom: "1px solid #E4DDD4" }}>
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Colour Palette
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {carpet.colors.map(color => (
                    <div
                      key={color}
                      className="flex items-center gap-2.5"
                      data-testid={`tag-color-${color.toLowerCase().replace(/\s/g, "-")}`}
                    >
                      <div
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          background: COLOR_MAP[color] ?? "#C8B8A8",
                          border: "1px solid rgba(0,0,0,0.1)",
                          flexShrink: 0,
                        }}
                      />
                      <span className="text-[11px]" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }}>
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Acquisition — desktop only */}
              <div className="hidden md:block">
                <p
                  className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-2"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Acquisition
                </p>
                <p
                  className="text-sm mb-5 leading-relaxed"
                  style={{ color: "#9A9289", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  Pricing is shared exclusively upon private request. Our curators are available for viewings and documentation.
                </p>

                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 mb-3 text-[11px] font-semibold tracking-[0.1em] uppercase transition-colors duration-200"
                  style={{ background: "#25D366", color: "#fff", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#1EBE5A")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#25D366")}
                  data-testid="link-whatsapp-inquiry"
                >
                  <WhatsAppIcon size={16} />
                  Inquire on WhatsApp
                </a>

                <a
                  href={emailHref}
                  className="w-full flex items-center justify-center gap-2 py-[13px] text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
                  style={{ border: "1px solid #D5CDC4", color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1C1916"; e.currentTarget.style.color = "#1C1916"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#D5CDC4"; e.currentTarget.style.color = "#7A726A"; }}
                  data-testid="link-email-inquiry"
                >
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
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

      {/* ── EDITORIAL SECTION ── */}

      {/* Story — full width, light */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{ borderTop: "1px solid #E4DDD4" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">

            {/* Label column */}
            <div className="flex-shrink-0 md:w-[200px]">
              <div className="flex items-center gap-4 md:pt-2">
                <div style={{ width: "32px", height: "1px", background: "#9B7B56" }} />
                <p
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  The Piece
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="flex-1">
              <p
                className="leading-[1.4] mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  fontSize: "clamp(1.45rem, 2.2vw, 1.85rem)",
                  color: "#1C1916",
                  fontStyle: "italic",
                }}
              >
                "{carpet.tagline}"
              </p>
              <p
                className="leading-[2] text-[14.5px]"
                style={{ color: "#6A625A", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                data-testid="text-carpet-story"
              >
                {carpet.story}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Curatorial notes — dark band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9 }}
        style={{ background: "#141210" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20">

            {/* Label */}
            <div className="flex-shrink-0 md:w-[200px]">
              <div className="flex items-center gap-4 md:pt-1">
                <div style={{ width: "32px", height: "1px", background: "#9B7B56" }} />
                <p
                  className="text-[10px] font-semibold tracking-[0.22em] uppercase"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  Curatorial Notes
                </p>
              </div>
            </div>

            {/* Notes + mood */}
            <div className="flex-1">
              <p
                className="text-[14.5px] leading-[2] mb-10"
                style={{ color: "rgba(245,239,230,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                data-testid="text-carpet-details"
              >
                {carpet.details}
              </p>

              {/* Mood tag */}
              {carpet.mood && (
                <div className="flex items-center gap-4">
                  <div style={{ width: "32px", height: "1px", background: "rgba(155,123,86,0.5)" }} />
                  <p
                    className="text-[11px] tracking-[0.18em] uppercase italic"
                    style={{ color: "#9B7B56", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "0.95rem" }}
                  >
                    {carpet.mood}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── BACK LINK ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12" style={{ borderTop: "1px solid #E4DDD4" }}>
        <Link
          href="/collection"
          className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-200"
          style={{ color: "#9A9289", fontFamily: "'Inter', sans-serif" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#1C1916")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9A9289")}
          data-testid="link-back-to-archive"
        >
          <svg width="20" height="1" viewBox="0 0 20 1" fill="none"><line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor"/></svg>
          Back to Collection
        </Link>
      </div>

      {/* ── MOBILE STICKY BAR ── */}
      <div
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex flex-col gap-2 px-4 pt-3"
        style={{ background: "#FAFAF8", borderTop: "1px solid #E4DDD4", boxShadow: "0 -4px 20px rgba(20,18,16,0.08)", paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-3.5 text-[11px] font-semibold tracking-[0.08em] uppercase"
          style={{ background: "#25D366", color: "#fff", fontFamily: "'Inter', sans-serif" }}
          data-testid="link-whatsapp-inquiry-mobile"
        >
          <WhatsAppIcon size={15} />
          Inquire on WhatsApp
        </a>
        <a
          href={emailHref}
          className="w-full flex items-center justify-center gap-2 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase"
          style={{ border: "1px solid #1C1916", color: "#1C1916", fontFamily: "'Inter', sans-serif" }}
          data-testid="link-email-inquiry-mobile"
        >
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>
          Email Inquiry
        </a>
      </div>

      {/* ── LIGHTBOX ── */}
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
