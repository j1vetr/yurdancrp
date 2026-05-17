import { motion } from "framer-motion";
import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";

const pillars = [
  {
    num: "01",
    title: "The Philosophy",
    body: "We believe that a masterwork carpet is a living document. It records the landscape it was born in, the cultural memory of its weavers, and the slow, deliberate passage of time. In an era of instant gratification and mass production, we source pieces that demand patience. A true carpet cannot be rushed; it can only unfold knot by knot.",
  },
  {
    num: "02",
    title: "The Archive",
    body: "Our collection is meticulously curated for luxury homes, architects, private collectors, and boutique hospitality spaces. We reject the concept of inventory in favour of the archive. We do not carry thousands of pieces; we carry only those that possess a soul, a story, and undeniable artistic merit.",
  },
  {
    num: "03",
    title: "Private Acquisitions",
    body: "Yurdan operates on a model of absolute discretion. We do not display prices publicly. We work directly with our clients and their design teams to ensure that each piece finds its proper context. Our curators are available for private consultations, sourcing requests, and architectural integration.",
  },
];

const galleryImages = [
  { folder: 1, img: 3 },
  { folder: 3, img: 1 },
  { folder: 5, img: 2 },
  { folder: 7, img: 1 },
  { folder: 2, img: 4 },
  { folder: 6, img: 3 },
];

export default function About() {
  usePageMeta({ title: "About | Yurdan Carpet", description: "Yurdan Carpet is a private archive of the world's finest handmade carpets, sourced with absolute discretion for collectors and luxury homes." });
  const waHref = "https://wa.me/905336781644?text=" + encodeURIComponent("Hello, I'd like to learn more about Yurdan Carpet.");
  const mapsHref = "https://maps.google.com/?q=Divan+Yolu+Cd.+No:16,+34110+Fatih,+Istanbul";

  return (
    <div className="w-full min-h-[100dvh]" style={{ background: "#FAFAF8" }}>

      {/* ── HERO ── */}
      <div style={{ background: "#141210" }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-36 md:pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            className="max-w-2xl"
          >
            <p
              className="text-[10px] font-medium tracking-[0.2em] uppercase mb-5"
              style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
            >
              About Yurdan
            </p>
            <h1
              className="leading-[1.08] mb-7"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.6rem, 5vw, 4.8rem)", color: "#F5EFE6" }}
              data-testid="text-about-headline"
            >
              Centuries of heritage.
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(245,239,230,0.45)" }}>Hours of human skill.</span>
            </h1>
            <p
              className="text-[15px] leading-[1.85]"
              style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "500px", fontWeight: 300 }}
            >
              Yurdan Carpet is not a store. We are a private archive in the heart of Istanbul, dedicated to the preservation and appreciation of the world's finest handmade carpets.
            </p>
          </motion.div>
        </div>

        {/* Image strip — full width, three panels */}
        <div className="w-full flex gap-0.5 overflow-hidden" style={{ height: "clamp(220px, 38vw, 480px)" }}>
          {[{ folder: 1, img: 1 }, { folder: 4, img: 2 }, { folder: 8, img: 1 }].map(({ folder, img }, i) => (
            <motion.div
              key={i}
              className="flex-1 overflow-hidden"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: i * 0.12 }}
            >
              <img
                src={`/carpets/${folder}/${img}.webp`}
                alt="Carpet"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.75) brightness(0.7)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── PILLARS ── */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {pillars.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: "20px", height: "1px", background: "#9B7B56" }} />
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif", letterSpacing: "0.12em" }}
                  >
                    {item.num}
                  </span>
                </div>
                <h2
                  className="mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.35rem, 1.8vw, 1.7rem)", color: "#1C1916" }}
                  data-testid={`text-philosophy-${i}`}
                >
                  {item.title}
                </h2>
                <p
                  className="text-[14px] leading-[1.9]"
                  style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE GRID — carpet gallery ── */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {galleryImages.map(({ folder, img }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="overflow-hidden"
                style={{ aspectRatio: "1", background: "#EDE7DF" }}
              >
                <img
                  src={`/carpets/${folder}/${img}.webp`}
                  alt="Archive piece"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  style={{ filter: "saturate(0.85)" }}
                />
              </motion.div>
            ))}
          </div>
          <p
            className="text-center mt-6 text-[11px] tracking-[0.14em] uppercase"
            style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif" }}
          >
            A selection from the archive
          </p>
        </div>
      </section>

      {/* ── CONTACT & VISIT ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        style={{ background: "#141210" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

            {/* Left — visit */}
            <div>
              <p
                className="text-[10px] font-medium tracking-[0.2em] uppercase mb-8"
                style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
              >
                Visit the Archive
              </p>

              <div className="space-y-6">
                {/* Address */}
                <div>
                  <p
                    className="text-[10px] tracking-[0.14em] uppercase mb-2"
                    style={{ color: "rgba(245,239,230,0.3)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Address
                  </p>
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[15px] leading-[1.7] transition-colors duration-200"
                    style={{ color: "rgba(245,239,230,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F5EFE6")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,239,230,0.65)")}
                    data-testid="link-about-maps"
                  >
                    Divan Yolu Cd. No:16<br />
                    Sultan Ahmet, Alemdar<br />
                    34110 Fatih / Istanbul
                  </a>
                </div>

                {/* Hours */}
                <div>
                  <p
                    className="text-[10px] tracking-[0.14em] uppercase mb-2"
                    style={{ color: "rgba(245,239,230,0.3)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Hours
                  </p>
                  <p
                    className="text-[15px] leading-[1.7]"
                    style={{ color: "rgba(245,239,230,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    Every day, 08:00 – 00:00
                  </p>
                </div>
              </div>
            </div>

            {/* Right — inquire */}
            <div>
              <p
                className="text-[10px] font-medium tracking-[0.2em] uppercase mb-8"
                style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
              >
                Get in Touch
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <p
                    className="text-[10px] tracking-[0.14em] uppercase mb-2"
                    style={{ color: "rgba(245,239,230,0.3)", fontFamily: "'Inter', sans-serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:info@yurdancarpet.com"
                    className="text-[15px] transition-colors duration-200"
                    style={{ color: "rgba(245,239,230,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F5EFE6")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,239,230,0.65)")}
                    data-testid="link-about-email"
                  >
                    info@yurdancarpet.com
                  </a>
                </div>

                <div>
                  <p
                    className="text-[10px] tracking-[0.14em] uppercase mb-2"
                    style={{ color: "rgba(245,239,230,0.3)", fontFamily: "'Inter', sans-serif" }}
                  >
                    WhatsApp
                  </p>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] transition-colors duration-200"
                    style={{ color: "rgba(245,239,230,0.65)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#F5EFE6")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,239,230,0.65)")}
                    data-testid="link-about-whatsapp"
                  >
                    +90 533 678 16 44
                  </a>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@yurdancarpet.com"
                  className="px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-center transition-colors duration-200"
                  style={{ background: "#F5EFE6", color: "#141210", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#FFFFFF")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#F5EFE6")}
                >
                  Email Us
                </a>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase text-center transition-all duration-200"
                  style={{ border: "1px solid rgba(245,239,230,0.18)", color: "rgba(245,239,230,0.55)", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,239,230,0.5)"; e.currentTarget.style.color = "#F5EFE6"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(245,239,230,0.18)"; e.currentTarget.style.color = "rgba(245,239,230,0.55)"; }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── COLLECTION LINK ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12" style={{ borderTop: "1px solid #E4DDD4" }}>
        <Link
          href="/collection"
          className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-200"
          style={{ color: "#9A9289", fontFamily: "'Inter', sans-serif" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#1C1916")}
          onMouseLeave={e => (e.currentTarget.style.color = "#9A9289")}
        >
          <svg width="20" height="1" viewBox="0 0 20 1" fill="none"><line x1="0" y1="0.5" x2="20" y2="0.5" stroke="currentColor"/></svg>
          View the Collection
        </Link>
      </div>

    </div>
  );
}
