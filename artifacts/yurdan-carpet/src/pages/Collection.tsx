import { Link } from "wouter";
import { motion } from "framer-motion";
import { carpets } from "@/data/carpets";

export default function Collection() {
  return (
    <div className="w-full min-h-screen" style={{ background: "#FAFAF8" }}>

      {/* ── HEADER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: "240px", background: "#141210" }}>
        {/* Background video */}
        <video
          src="/hero-clip-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.55 }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(14,12,10,0.72)" }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(14,12,10,0.95) 100%)" }} />

        {/* Text */}
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-10" style={{ paddingTop: "100px", paddingBottom: "36px" }}>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[10px] font-medium tracking-[0.22em] uppercase mb-4"
              style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
            >
              Yurdan Carpet
            </p>
            <h1
              className="leading-[1.05]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                color: "#F5EFE6",
              }}
            >
              Our Collection
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-10 md:gap-y-14">
          {carpets.map((carpet, i) => (
            <motion.div
              key={carpet.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
              data-testid={`card-carpet-${carpet.id}`}
            >
              <Link
                href={`/carpet/${carpet.id}`}
                className="block group"
                data-testid={`link-carpet-${carpet.id}`}
              >
                {/* Image */}
                <div
                  className="overflow-hidden mb-3"
                  style={{ aspectRatio: "4/3", background: "#EDE8E2" }}
                >
                  <img
                    src={`/carpets/${carpet.folderNum}/1.webp`}
                    alt={carpet.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <p
                  className="text-[9px] font-medium tracking-[0.14em] uppercase mb-1"
                  style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                >
                  {carpet.origin}
                </p>
                <h2
                  className="leading-tight mb-1"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2vw, 1.3rem)",
                    color: "#1C1916",
                  }}
                >
                  {carpet.name}
                </h2>
                <p
                  className="text-[11px]"
                  style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif" }}
                >
                  {carpet.dimensions}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM CTA ── */}
        <div
          className="mt-20 md:mt-28 pt-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6"
          style={{ borderTop: "1px solid #E4DDD4" }}
        >
          <p
            className="text-sm"
            style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif", maxWidth: "380px" }}
          >
            All pieces are available by private inquiry only. No prices are publicly displayed.
          </p>
          <a
            href="mailto:info@yurdancarpet.com"
            className="flex-shrink-0 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
            style={{ background: "#141210", color: "#F5EFE6", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#2A2725")}
            onMouseLeave={e => (e.currentTarget.style.background = "#141210")}
            data-testid="link-collection-contact"
          >
            Private Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
