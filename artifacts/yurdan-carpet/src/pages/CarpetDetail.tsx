import { useParams, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { carpets } from "@/data/carpets";
import { useEffect, useState } from "react";

function DecoFanDivider() {
  return (
    <div className="flex items-center justify-center py-6">
      <svg width="160" height="32" viewBox="0 0 160 32" fill="none">
        <line x1="0" y1="16" x2="54" y2="16" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5"/>
        <path d="M62 16 Q68 6 80 6 Q92 6 98 16 Q92 26 80 26 Q68 26 62 16Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.4"/>
        <path d="M67 16 Q73 10 80 10 Q87 10 93 16 Q87 22 80 22 Q73 22 67 16Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.6"/>
        <circle cx="80" cy="16" r="2.5" fill="#D4AF37" fillOpacity="0.7"/>
        <line x1="106" y1="16" x2="160" y2="16" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5"/>
      </svg>
    </div>
  );
}

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
      <div className="min-h-[100dvh] flex items-center justify-center" style={{ background: "#0A0A0A" }}>
        <div className="text-center">
          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>404</p>
          <h1 className="font-serif uppercase text-2xl mb-6 tracking-widest" style={{ color: "#FFFFF0" }}>Parça Bulunamadı</h1>
          <Link
            href="/collection"
            className="text-[10px] tracking-[0.2em] uppercase font-serif pb-1 transition-colors hover:text-[#D4AF37]"
            style={{ color: "#D4AF37", borderBottom: "1px solid rgba(212,175,55,0.4)" }}
          >
            Arşive Dön
          </Link>
        </div>
      </div>
    );
  }

  const imageIndices = Array.from({ length: carpet.imageCount }, (_, i) => i + 1);

  return (
    <div className="w-full min-h-[100dvh] pt-24" style={{ background: "#0A0A0A" }}>

      {/* ── HERO IMAGE GALLERY ── */}
      <div className="w-full">
        {/* Main large image */}
        <div className="relative w-full overflow-hidden" style={{ height: "70vh" }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImg}
              src={`/carpets/${carpet.folderNum}/${activeImg}.png`}
              alt={`${carpet.name} — fotoğraf ${activeImg}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              data-testid="img-carpet-main"
            />
          </AnimatePresence>
          {/* Gold frame */}
          <div className="absolute inset-4 pointer-events-none" style={{ border: "1px solid rgba(212,175,55,0.2)" }} />
          {/* Gradient bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: "linear-gradient(to top, #0A0A0A, transparent)" }} />
          {/* Image counter */}
          <div className="absolute bottom-8 right-8" style={{ fontFamily: "'Cinzel', serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(212,175,55,0.6)" }}>
            {String(activeImg).padStart(2, "0")} / {String(carpet.imageCount).padStart(2, "0")}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 px-4 md:px-8 py-4 overflow-x-auto" style={{ background: "#0A0A0A" }}>
          {imageIndices.map((n) => (
            <button
              key={n}
              onClick={() => setActiveImg(n)}
              className="flex-shrink-0 overflow-hidden transition-all duration-300"
              style={{
                width: "80px",
                height: "60px",
                outline: activeImg === n ? "1px solid #D4AF37" : "1px solid rgba(255,255,240,0.1)",
                outlineOffset: activeImg === n ? "2px" : "0px",
                opacity: activeImg === n ? 1 : 0.5,
              }}
              data-testid={`thumb-img-${n}`}
            >
              <img
                src={`/carpets/${carpet.folderNum}/${n}.png`}
                alt={`Fotoğraf ${n}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* ── MAIN CONTENT ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full lg:w-2/3"
        >
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="gold-rule w-8" />
              <p className="deco-label" style={{ color: "rgba(212,175,55,0.7)" }}>{carpet.origin}</p>
            </div>
            <h1
              className="font-serif uppercase mb-5 leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.1em", color: "#FFFFF0" }}
              data-testid="text-carpet-name"
            >
              {carpet.name}
            </h1>
            <p
              className="italic mb-8"
              style={{ fontFamily: "'Poiret One', serif", fontSize: "1.1rem", letterSpacing: "0.05em", color: "rgba(212,175,55,0.85)" }}
              data-testid="text-carpet-tagline"
            >
              "{carpet.tagline}"
            </p>
            <div className="gold-rule" />
          </div>

          {/* Story */}
          <div className="mb-14">
            <p
              className="leading-loose"
              style={{ fontFamily: "'Poiret One', serif", fontSize: "1.05rem", letterSpacing: "0.05em", color: "rgba(255,255,240,0.65)", lineHeight: "2" }}
              data-testid="text-carpet-story"
            >
              {carpet.story}
            </p>
          </div>

          {/* Curatorial Details */}
          <div
            className="p-8 md:p-12 mb-14 relative"
            style={{ background: "#0D1520", border: "1px solid rgba(212,175,55,0.2)" }}
          >
            <div className="absolute top-4 left-4 w-5 h-[1px]" style={{ background: "#D4AF37", opacity: 0.5 }} />
            <div className="absolute top-4 left-4 w-[1px] h-5" style={{ background: "#D4AF37", opacity: 0.5 }} />
            <div className="absolute bottom-4 right-4 w-5 h-[1px]" style={{ background: "#D4AF37", opacity: 0.5 }} />
            <div className="absolute bottom-4 right-4 w-[1px] h-5" style={{ background: "#D4AF37", opacity: 0.5 }} />
            <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Küratöryel Detaylar</p>
            <p
              className="leading-relaxed"
              style={{ fontFamily: "'Poiret One', serif", fontSize: "0.95rem", letterSpacing: "0.05em", color: "rgba(255,255,240,0.55)" }}
              data-testid="text-carpet-details"
            >
              {carpet.details}
            </p>
          </div>

          {/* Extra images grid */}
          <DecoFanDivider />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
            {imageIndices.slice(1, 7).map((n) => (
              <button
                key={n}
                onClick={() => { setActiveImg(n); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="overflow-hidden group"
                data-testid={`grid-img-${n}`}
              >
                <img
                  src={`/carpets/${carpet.folderNum}/${n}.png`}
                  alt={`${carpet.name} fotoğraf ${n}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700 group-hover:opacity-90"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── SIDEBAR ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full lg:w-1/3"
        >
          <div className="sticky top-32">

            {/* Specifications */}
            <div className="mb-10 pb-10" style={{ borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
              <p className="deco-label mb-8" style={{ color: "#D4AF37" }}>Özellikler</p>
              <dl className="space-y-5">
                {[
                  { label: "Boyut", value: carpet.dimensions },
                  { label: "Alan", value: carpet.totalArea },
                  { label: "Malzeme", value: carpet.material },
                  { label: "Stil", value: carpet.style },
                  { label: "Köken", value: carpet.origin },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="flex justify-between gap-4">
                      <dt className="deco-label flex-shrink-0" style={{ color: "rgba(212,175,55,0.6)" }}>{label}</dt>
                      <dd
                        className="text-right"
                        style={{ fontFamily: "'Poiret One', serif", fontSize: "0.85rem", letterSpacing: "0.04em", color: "rgba(255,255,240,0.65)" }}
                        data-testid={`spec-${label.toLowerCase()}`}
                      >
                        {value}
                      </dd>
                    </div>
                    <div className="gold-rule mt-3" style={{ opacity: 0.15 }} />
                  </div>
                ))}
              </dl>
            </div>

            {/* Color Palette */}
            <div className="mb-10 pb-10" style={{ borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
              <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Renk Paleti</p>
              <div className="flex flex-wrap gap-2">
                {carpet.colors.map(color => (
                  <span
                    key={color}
                    className="text-[10px] tracking-[0.12em] uppercase px-3 py-1.5 font-serif"
                    style={{ border: "1px solid rgba(212,175,55,0.3)", color: "rgba(255,255,240,0.6)" }}
                    data-testid={`tag-color-${color.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>

            {/* Acquisition */}
            <div>
              <p className="deco-label mb-3" style={{ color: "#D4AF37" }}>Edinim Talebi</p>
              <h4
                className="font-serif uppercase mb-6"
                style={{ fontSize: "1.1rem", letterSpacing: "0.12em", color: "#FFFFF0" }}
              >
                Özel Görüntüleme Talep Edin
              </h4>
              <div
                className="p-6 mb-8 relative"
                style={{ background: "#0D1520", border: "1px solid rgba(212,175,55,0.15)" }}
              >
                <div className="absolute top-3 left-3 w-4 h-[1px]" style={{ background: "#D4AF37", opacity: 0.4 }} />
                <div className="absolute top-3 left-3 w-[1px] h-4" style={{ background: "#D4AF37", opacity: 0.4 }} />
                <div className="absolute bottom-3 right-3 w-4 h-[1px]" style={{ background: "#D4AF37", opacity: 0.4 }} />
                <div className="absolute bottom-3 right-3 w-[1px] h-4" style={{ background: "#D4AF37", opacity: 0.4 }} />
                <p
                  className="leading-relaxed"
                  style={{ fontFamily: "'Poiret One', serif", fontSize: "0.85rem", letterSpacing: "0.04em", color: "rgba(255,255,240,0.45)" }}
                >
                  Fiyatlar yalnızca özel talep üzerine paylaşılmaktadır.
                  Küratörlerimiz; köken, yüksek çözünürlüklü arşiv görselleri ve
                  özel görüntüleme için hizmetinizdedir.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:info@yurdancarpet.com?subject=Talep: ${carpet.name}`}
                  className="w-full text-center py-4 text-[10px] tracking-[0.25em] uppercase font-serif transition-all duration-300"
                  style={{ background: "#D4AF37", color: "#0A0A0A" }}
                  data-testid="link-email-inquiry"
                >
                  E-posta ile Talep
                </a>
                <a
                  href={`https://wa.me/905551234567?text=${carpet.name} hakkında bilgi almak istiyorum.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-4 text-[10px] tracking-[0.25em] uppercase font-serif transition-all duration-300 hover:bg-[#D4AF37]/10"
                  style={{ border: "1px solid rgba(212,175,55,0.4)", color: "rgba(212,175,55,0.85)" }}
                  data-testid="link-whatsapp-inquiry"
                >
                  WhatsApp Talebi
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back */}
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-12 pb-20"
        style={{ borderTop: "1px solid rgba(212,175,55,0.15)", paddingTop: "3rem" }}
      >
        <Link
          href="/collection"
          className="text-[10px] tracking-[0.2em] uppercase font-serif flex items-center gap-4 transition-colors hover:text-[#D4AF37]"
          style={{ color: "rgba(255,255,240,0.4)" }}
          data-testid="link-back-to-archive"
        >
          <span className="inline-block w-8 h-[1px]" style={{ background: "currentColor" }} />
          Arşive Dön
        </Link>
      </div>
    </div>
  );
}
