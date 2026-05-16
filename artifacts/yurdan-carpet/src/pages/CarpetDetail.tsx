import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { carpets } from "@/data/carpets";
import { useEffect, useState } from "react";

export default function CarpetDetail() {
  const { id } = useParams();
  const carpet = carpets.find(c => c.id === id);
  const [activeImg, setActiveImg] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(1);
  }, [id]);

  if (!carpet) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center" style={{ background: "#FAFAF8" }}>
        <div className="text-center">
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>404</p>
          <h1 className="mb-6" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "2rem", color: "#1C1916" }}>Piece not found</h1>
          <Link
            href="/collection"
            className="text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid #1C1916", paddingBottom: "2px" }}
          >
            Back to Collection
          </Link>
        </div>
      </div>
    );
  }

  const imageIndices = Array.from({ length: carpet.imageCount }, (_, i) => i + 1);

  return (
    <div className="w-full min-h-[100dvh]" style={{ background: "#FAFAF8" }}>

      {/* ── HERO IMAGE ── */}
      <div style={{ background: "#141210", paddingTop: "72px" }}>
        <div className="relative w-full overflow-hidden" style={{ height: "72vh" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImg}
              src={`/carpets/${carpet.folderNum}/${activeImg}.png`}
              alt={`${carpet.name} — photo ${activeImg}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              data-testid="img-carpet-main"
            />
          </AnimatePresence>
          <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #141210, transparent)" }} />
          <div
            className="absolute bottom-5 right-6 text-[10px] font-medium"
            style={{ color: "rgba(245,239,230,0.4)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
          >
            {String(activeImg).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 px-4 md:px-6 py-4 overflow-x-auto" style={{ background: "#141210" }}>
          {imageIndices.map(n => (
            <button
              key={n}
              onClick={() => setActiveImg(n)}
              className="flex-shrink-0 overflow-hidden transition-all duration-200"
              style={{
                width: "72px",
                height: "56px",
                outline: activeImg === n ? "1.5px solid rgba(245,239,230,0.7)" : "1px solid rgba(245,239,230,0.12)",
                outlineOffset: "0px",
                opacity: activeImg === n ? 1 : 0.4,
              }}
              data-testid={`thumb-img-${n}`}
            >
              <img src={`/carpets/${carpet.folderNum}/${n}.png`} alt={`Photo ${n}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-16 md:py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Main */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-[60%]"
        >
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
            {carpet.origin}
          </p>
          <h1
            className="mb-3 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(2.2rem, 4vw, 3.6rem)", color: "#1C1916" }}
            data-testid="text-carpet-name"
          >
            {carpet.name}
          </h1>
          <p
            className="italic mb-8 text-lg"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "#9B7B56" }}
            data-testid="text-carpet-tagline"
          >
            "{carpet.tagline}"
          </p>

          <div className="mb-10" style={{ height: "1px", background: "#E4DDD4" }} />

          <p
            className="text-base leading-[1.85] mb-12"
            style={{ color: "#5A5450", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            data-testid="text-carpet-story"
          >
            {carpet.story}
          </p>

          {/* Curatorial note */}
          <div className="p-8 mb-12" style={{ background: "#F5EFE6" }}>
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
              Curatorial Notes
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              data-testid="text-carpet-details"
            >
              {carpet.details}
            </p>
          </div>

          {/* Photo grid */}
          <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
            Photography
          </p>
          <div className="grid grid-cols-3 gap-2">
            {imageIndices.slice(1, 7).map(n => (
              <button
                key={n}
                onClick={() => { setActiveImg(n); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="overflow-hidden group"
                data-testid={`grid-img-${n}`}
              >
                <img
                  src={`/carpets/${carpet.folderNum}/${n}.png`}
                  alt={`${carpet.name} photo ${n}`}
                  className="w-full object-cover transition-opacity duration-300 group-hover:opacity-75"
                  style={{ aspectRatio: "1" }}
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="w-full lg:w-[40%]"
        >
          <div className="sticky top-28">
            {/* Specifications */}
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid #E4DDD4" }}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-6" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                Specifications
              </p>
              <dl className="space-y-4">
                {[
                  { label: "Dimensions", value: carpet.dimensions },
                  { label: "Total Area", value: carpet.totalArea },
                  { label: "Material", value: carpet.material },
                  { label: "Style", value: carpet.style },
                  { label: "Origin", value: carpet.origin },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-baseline gap-3">
                    <dt className="text-xs font-medium flex-shrink-0" style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif", letterSpacing: "0.04em" }}>
                      {label}
                    </dt>
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

            {/* Colors */}
            <div className="mb-8 pb-8" style={{ borderBottom: "1px solid #E4DDD4" }}>
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
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
              <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-3" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                Acquisition
              </p>
              <h4
                className="mb-4 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.4rem", color: "#1C1916" }}
              >
                Request a Private Viewing
              </h4>
              <p className="text-sm mb-6 leading-relaxed" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }}>
                Pricing is shared exclusively upon private request. Our curators are available for origin documentation, high-resolution archive imagery, and private viewings.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:info@yurdancarpet.com?subject=Inquiry: ${carpet.name}`}
                  className="w-full text-center py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
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
                  className="w-full text-center py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
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
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 pb-16" style={{ borderTop: "1px solid #E4DDD4", paddingTop: "2rem" }}>
        <Link
          href="/collection"
          className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.1em] uppercase transition-colors duration-200"
          style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
          data-testid="link-back-to-archive"
        >
          <span style={{ display: "inline-block", width: "24px", height: "1px", background: "currentColor" }} />
          Back to Collection
        </Link>
      </div>
    </div>
  );
}
