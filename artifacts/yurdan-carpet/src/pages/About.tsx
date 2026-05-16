import { motion } from "framer-motion";

const sections = [
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
    body: "Yurdan operates on a model of absolute discretion. We do not display prices publicly. We work directly with our clients and their design teams to ensure that each piece finds its proper context. Our curators are available for private consultations, sourcing requests, and architectural integration planning.",
  },
];

export default function About() {
  return (
    <div className="w-full min-h-[100dvh]" style={{ background: "#FAFAF8" }}>

      {/* ── HEADER ── */}
      <div style={{ background: "#141210", paddingTop: "100px", paddingBottom: "80px" }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
              About Yurdan
            </p>
            <h1
              className="leading-[1.1] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5EFE6" }}
              data-testid="text-about-headline"
            >
              Centuries of heritage.
              <br />
              <span style={{ fontStyle: "italic", color: "rgba(245,239,230,0.5)" }}>Hours of human skill.</span>
            </h1>
            <p className="text-base" style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "480px", fontWeight: 300 }}>
              Yurdan Carpet is not a store. We are a private archive dedicated to the preservation and appreciation of the world's finest handmade carpets.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── IMAGE BAND ── */}
      <div className="w-full overflow-hidden" style={{ height: "50vh" }}>
        <img
          src={`/carpets/${6}/3.png`}
          alt="Carpet detail"
          className="w-full h-full object-cover"
          style={{ filter: "saturate(0.7) brightness(0.85)" }}
        />
      </div>

      {/* ── PHILOSOPHY ── */}
      <section className="py-20 md:py-28 px-6 md:px-10">
        <div className="max-w-[1360px] mx-auto">
          <div className="max-w-3xl">
            {sections.map((item, i) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="flex gap-10 md:gap-16 mb-16 md:mb-20"
              >
                <div className="flex-shrink-0 pt-1">
                  <span className="text-xs font-medium" style={{ color: "#C8BFB4", fontFamily: "'Inter', sans-serif", letterSpacing: "0.08em" }}>{item.num}</span>
                </div>
                <div>
                  <h2
                    className="mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "#1C1916" }}
                    data-testid={`text-philosophy-${i}`}
                  >
                    {item.title}
                  </h2>
                  <p className="text-base leading-[1.85]" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 px-6 md:px-10" style={{ background: "#141210" }}>
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
              Private Consultation
            </p>
            <h2
              className="leading-[1.15]"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#F5EFE6" }}
            >
              Whether seeking a specific piece or wishing to explore the archive — our curators are at your disposal.
            </h2>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@yurdancarpet.com"
              className="px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
              style={{ background: "#F5EFE6", color: "#141210", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#FFFFFF")}
              onMouseLeave={e => (e.currentTarget.style.background = "#F5EFE6")}
              data-testid="link-about-email"
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
              data-testid="link-about-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
