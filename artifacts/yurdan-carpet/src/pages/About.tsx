import { motion } from "framer-motion";
import heroImg from "@/assets/images/hero.png";
import medallion from "@assets/Çalışma_Yüzeyi_17@3x_1778942870049.png";

function DecoFanDivider() {
  return (
    <div className="flex items-center justify-center py-8">
      <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
        <line x1="0" y1="20" x2="72" y2="20" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5"/>
        <path d="M80 20 Q86 8 100 8 Q114 8 120 20 Q114 32 100 32 Q86 32 80 20Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.4"/>
        <path d="M84 20 Q90 12 100 12 Q110 12 116 20 Q110 28 100 28 Q90 28 84 20Z" stroke="#D4AF37" strokeWidth="0.5" fill="none" strokeOpacity="0.65"/>
        <circle cx="100" cy="20" r="3" fill="#D4AF37" fillOpacity="0.75"/>
        <line x1="128" y1="20" x2="200" y2="20" stroke="#D4AF37" strokeWidth="0.5" strokeOpacity="0.5"/>
      </svg>
    </div>
  );
}

const philosophy = [
  {
    title: "The Philosophy",
    body: "We believe that a masterwork carpet is a living document. It records the landscape it was born in, the cultural memory of its weavers, and the slow, deliberate passage of time. In an era of instant gratification and mass production, we source pieces that demand patience. A true carpet cannot be rushed; it can only unfold knot by knot.",
  },
  {
    title: "The Archive",
    body: "Our collection is meticulously curated for luxury homes, architects, private collectors, and boutique hospitality spaces. We reject the concept of inventory in favor of the archive. We do not carry thousands of pieces; we carry only those pieces that possess a soul, a story, and undeniable artistic merit.",
  },
  {
    title: "Private Acquisitions",
    body: "Yurdan operates on a model of absolute discretion. We do not display prices publicly. We work directly with our clients and their design teams to ensure that each piece finds its proper context. Our curators are available for private consultations, sourcing requests, and architectural integration planning.",
  },
];

export default function About() {
  return (
    <div className="w-full min-h-[100dvh] pt-24" style={{ background: "#0A0A0A" }}>

      {/* ── HEADER ── */}
      <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <img
            src={medallion}
            alt="Yurdan Medallion"
            className="h-14 w-14 mx-auto mb-10"
            style={{ filter: "sepia(1) saturate(3) hue-rotate(-10deg) brightness(0.85)", opacity: 0.85 }}
          />

          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Est. in the tradition of masters</p>

          <h1
            className="font-serif uppercase mb-8 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", letterSpacing: "0.12em", color: "#FFFFF0" }}
            data-testid="text-about-headline"
          >
            Centuries of Heritage,
            <br />
            <span style={{ color: "#D4AF37" }}>Hours of Human Skill</span>
          </h1>

          <DecoFanDivider />

          <p
            className="leading-relaxed max-w-2xl mx-auto"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "1.05rem", letterSpacing: "0.06em", color: "rgba(255,255,240,0.55)" }}
          >
            Yurdan Carpet is not a store. We are a private archive dedicated to the preservation
            and appreciation of the world's finest handmade carpets.
          </p>
        </motion.div>
      </section>

      {/* ── FULL WIDTH IMAGE ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="w-full relative"
        style={{ height: "60vh" }}
      >
        <img
          src={heroImg}
          alt="Gallery interior"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(0.5) brightness(0.5) sepia(0.2)" }}
        />
        {/* Gold overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 20%, transparent 80%, #0A0A0A 100%)" }}
        />
        {/* Center text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <div className="gold-rule w-24 mx-auto mb-6" />
            <p
              className="font-serif uppercase tracking-[0.25em] text-sm md:text-base"
              style={{ color: "#D4AF37" }}
            >
              A Living Document of Human Devotion
            </p>
            <div className="gold-rule w-24 mx-auto mt-6" />
          </div>
        </div>
      </motion.section>

      {/* ── PHILOSOPHY SECTIONS ── */}
      <section className="py-32 relative" style={{ background: "#0A0A0A" }}>
        <div className="max-w-3xl mx-auto px-6 md:px-12">

          {philosophy.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="mb-20"
            >
              {i > 0 && (
                <div className="gold-rule mb-20" style={{ opacity: 0.2 }} />
              )}

              <div className="flex items-center gap-4 mb-6">
                <div className="gold-rule w-8" />
                <p className="deco-label" style={{ color: "#D4AF37" }}>0{i + 1}</p>
              </div>

              <h2
                className="font-serif uppercase mb-6"
                style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "0.15em", color: "#FFFFF0" }}
                data-testid={`text-philosophy-${i}`}
              >
                {item.title}
              </h2>

              <p
                className="leading-loose"
                style={{ fontFamily: "'Poiret One', serif", fontSize: "1rem", letterSpacing: "0.05em", color: "rgba(255,255,240,0.55)" }}
              >
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-32 text-center px-6 relative deco-pattern"
        style={{ background: "#0D1520", borderTop: "1px solid rgba(212,175,55,0.15)" }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 65%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Private Consultation</p>
          <h2
            className="font-serif uppercase mb-6"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", letterSpacing: "0.15em", color: "#FFFFF0" }}
          >
            Begin a Conversation
          </h2>
          <DecoFanDivider />
          <p
            className="mb-12 leading-relaxed"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "0.95rem", letterSpacing: "0.06em", color: "rgba(255,255,240,0.45)" }}
          >
            Whether you are seeking a specific piece or wishing to explore our archive,
            our curators are at your disposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@yurdancarpet.com"
              className="inline-block text-[10px] tracking-[0.25em] uppercase font-serif px-10 py-4 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
              style={{ border: "1px solid #D4AF37", color: "#D4AF37" }}
              data-testid="link-about-email"
            >
              Contact Curators
            </a>
            <a
              href="https://wa.me/905551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[10px] tracking-[0.25em] uppercase font-serif px-10 py-4 transition-all duration-300 hover:bg-[#FFFFF0]/10"
              style={{ border: "1px solid rgba(255,255,240,0.2)", color: "rgba(255,255,240,0.5)" }}
              data-testid="link-about-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
