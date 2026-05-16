import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import medallion from "@assets/Çalışma_Yüzeyi_17@3x_1778942870049.png";
import { carpets } from "@/data/carpets";

function DecoFanDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
        <line x1="0" y1="20" x2="72" y2="20" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6"/>
        <path d="M80 20 Q86 8 100 8 Q114 8 120 20 Q114 32 100 32 Q86 32 80 20Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.5"/>
        <path d="M84 20 Q90 12 100 12 Q110 12 116 20 Q110 28 100 28 Q90 28 84 20Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.7"/>
        <circle cx="100" cy="20" r="3" fill="#D4AF37" fillOpacity="0.8"/>
        <line x1="128" y1="20" x2="200" y2="20" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6"/>
      </svg>
    </div>
  );
}

function DecoDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-2">
      <div className="gold-rule w-16 md:w-32" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L14 9H21L15.5 13.5L17.5 21L12 16.5L6.5 21L8.5 13.5L3 9H10L12 2Z" fill="#D4AF37" opacity="0.8"/>
      </svg>
      <div className="gold-rule w-16 md:w-32" />
    </div>
  );
}

export default function Home() {
  const featuredCarpets = carpets.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <div className="w-full min-h-screen" style={{ background: "#0A0A0A" }}>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100dvh" }}
      >
        <motion.div className="absolute inset-0" style={{ y }}>
          <img
            src={`/carpets/${carpets[5].folderNum}/1.png`}
            alt="Yurdan Carpet Gallery"
            className="w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          />
        </motion.div>

        <div className="absolute inset-0 deco-pattern" />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at center, transparent 30%, #0A0A0A 100%)"
        }} />

        {/* Gold corner frames */}
        {[
          "absolute top-24 left-8 md:left-16",
          "absolute top-24 right-8 md:right-16",
          "absolute bottom-16 left-8 md:left-16",
          "absolute bottom-16 right-8 md:right-16"
        ].map((pos, i) => (
          <div key={i} className={`${pos} pointer-events-none`}>
            <div className={`absolute ${i < 2 ? "top-0" : "bottom-0"} ${i % 2 === 0 ? "left-0" : "right-0"} w-6 h-[1px]`} style={{ background: "#D4AF37" }} />
            <div className={`absolute ${i < 2 ? "top-0" : "bottom-0"} ${i % 2 === 0 ? "left-0" : "right-0"} w-[1px] h-6`} style={{ background: "#D4AF37" }} />
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <img
            src={medallion}
            alt=""
            className="h-12 w-12 mx-auto mb-8"
            style={{ filter: "sepia(1) saturate(3) hue-rotate(-10deg) brightness(0.85)", opacity: 0.9 }}
          />
          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Est. in the tradition of masters</p>
          <h1
            className="font-serif uppercase mb-6 leading-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", letterSpacing: "0.12em", color: "#FFFFF0" }}
          >
            Where Ancient Craft
            <br />
            <span className="gold-shimmer">Meets Modern Luxury</span>
          </h1>
          <DecoFanDivider />
          <p
            className="mb-12 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "1rem", letterSpacing: "0.08em", color: "rgba(255,255,240,0.65)" }}
          >
            Bir dijital sanat galerisi, bir tekstil arşivi ve özel koleksiyon deneyimi.
            Bir zemin kaplaması değil — bir miras.
          </p>
          <Link
            href="/collection"
            className="inline-block text-[10px] tracking-[0.25em] uppercase font-serif px-10 py-4 transition-all duration-400 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #D4AF37", color: "#D4AF37" }}
            data-testid="link-enter-gallery"
          >
            Koleksiyona Gir
          </Link>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-[1px] h-10" style={{ background: "linear-gradient(to bottom, transparent, #D4AF37)" }} />
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: "0.55rem", letterSpacing: "0.3em", color: "rgba(212,175,55,0.5)" }}>SCROLL</p>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="py-32 px-6 md:px-12 relative deco-pattern">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0A0A 0%, #0D1520 50%, #0A0A0A 100%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center relative z-10"
        >
          <DecoDivider />
          <h2
            className="font-serif uppercase my-8 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "0.15em", color: "#FFFFF0" }}
          >
            Galeri sessizliği.
            <br />
            <span style={{ color: "#D4AF37" }}>Nadir nesnelerin ağırlığı.</span>
          </h2>
          <p
            className="leading-relaxed"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "1rem", letterSpacing: "0.06em", color: "rgba(255,255,240,0.55)" }}
          >
            Yalnızca size davet edildiğiniz bir müzede yalınayak yürümek gibi.
            Yurdan; lüks evler, mimarlar, koleksiyonerler ve butik oteller için
            acelesi olmayan, dokunsal, zamansız parçalar sunar.
          </p>
          <DecoDivider />
        </motion.div>
      </section>

      {/* ── SELECTED WORKS ── */}
      <section className="py-24 relative" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-20 gap-4">
            <div>
              <p className="deco-label mb-3" style={{ color: "#D4AF37" }}>Seçili Parçalar</p>
              <h2
                className="font-serif uppercase"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", letterSpacing: "0.15em", color: "#FFFFF0" }}
              >
                Öne Çıkan Eserler
              </h2>
            </div>
            <Link
              href="/collection"
              className="text-[10px] tracking-[0.2em] uppercase font-serif pb-1 transition-colors hover:text-[#D4AF37]"
              style={{ color: "rgba(255,255,240,0.4)", borderBottom: "1px solid rgba(212,175,55,0.3)" }}
              data-testid="link-view-all"
            >
              Tümünü Gör
            </Link>
          </div>

          <div className="flex flex-col gap-40">
            {featuredCarpets.map((carpet, index) => (
              <motion.div
                key={carpet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-20 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <Link href={`/carpet/${carpet.id}`} className="block overflow-hidden group relative" data-testid={`link-carpet-${carpet.id}`}>
                    <img
                      src={`/carpets/${carpet.folderNum}/1.png`}
                      alt={carpet.name}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ border: "1px solid rgba(212,175,55,0.5)" }}
                    />
                  </Link>
                </div>

                <div className="w-full md:w-1/2 flex flex-col items-start">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="gold-rule w-8" />
                    <p className="deco-label" style={{ color: "rgba(212,175,55,0.7)" }}>{carpet.origin}</p>
                  </div>
                  <h3
                    className="font-serif uppercase mb-4"
                    style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.8rem)", letterSpacing: "0.1em", color: "#FFFFF0" }}
                  >
                    {carpet.name}
                  </h3>
                  <p
                    className="mb-8 italic"
                    style={{ fontFamily: "'Poiret One', serif", fontSize: "1.05rem", letterSpacing: "0.05em", color: "rgba(212,175,55,0.8)" }}
                  >
                    "{carpet.tagline}"
                  </p>
                  <p
                    className="mb-10 leading-relaxed"
                    style={{ fontFamily: "'Poiret One', serif", fontSize: "0.95rem", letterSpacing: "0.04em", color: "rgba(255,255,240,0.5)" }}
                  >
                    {carpet.story.substring(0, 180)}…
                  </p>
                  <Link
                    href={`/carpet/${carpet.id}`}
                    className="text-[10px] tracking-[0.2em] uppercase font-serif pb-1 transition-all duration-300 hover:text-[#F5E27A]"
                    style={{ color: "#D4AF37", borderBottom: "1px solid rgba(212,175,55,0.4)" }}
                    data-testid={`link-explore-${carpet.id}`}
                  >
                    Eseri İncele
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-40 px-6 text-center relative overflow-hidden deco-pattern" style={{ background: "#0D1520" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 70%)" }} />
        <div className="flex justify-center mb-12">
          <svg width="240" height="60" viewBox="0 0 240 60" fill="none">
            <path d="M120 55 L60 5" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
            <path d="M120 55 L80 2" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.4"/>
            <path d="M120 55 L100 0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5"/>
            <path d="M120 55 L120 0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.6"/>
            <path d="M120 55 L140 0" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5"/>
            <path d="M120 55 L160 2" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.4"/>
            <path d="M120 55 L180 5" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.3"/>
            <path d="M60 55 Q120 5 180 55" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.5"/>
            <path d="M75 55 Q120 18 165 55" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.6"/>
          </svg>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Özel Edinim</p>
          <h2
            className="font-serif uppercase mb-8 leading-tight"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "0.15em", color: "#FFFFF0" }}
          >
            Bir Miras Edinin
          </h2>
          <DecoFanDivider />
          <p
            className="mb-12 leading-relaxed"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "1rem", letterSpacing: "0.06em", color: "rgba(255,255,240,0.5)" }}
          >
            Koleksiyonumuz yalnızca özel talep üzerine sunulmaktadır. Mimarları,
            tasarımcıları ve koleksiyonerleri özel görüntüleme talebinde bulunmaya davet ediyoruz.
          </p>
          <a
            href="mailto:info@yurdancarpet.com"
            className="inline-block text-[10px] tracking-[0.25em] uppercase font-serif px-10 py-4 transition-all duration-400 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #D4AF37", color: "#D4AF37" }}
            data-testid="link-contact-curators-cta"
          >
            Küratörlerle İletişim
          </a>
        </motion.div>
      </section>
    </div>
  );
}
