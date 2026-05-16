import { Link } from "wouter";
import { motion } from "framer-motion";
import { carpets } from "@/data/carpets";

export default function Collection() {
  return (
    <div className="w-full min-h-screen" style={{ background: "#FAFAF8" }}>

      {/* ── HEADER ── */}
      <div style={{ background: "#141210", paddingTop: "100px", paddingBottom: "64px" }}>
        <div className="max-w-[1360px] mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-medium tracking-[0.18em] uppercase mb-4" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
              Private Collection
            </p>
            <h1
              className="leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5EFE6" }}
            >
              The Archive
            </h1>
            <p className="mt-4 text-sm" style={{ color: "rgba(245,239,230,0.45)", fontFamily: "'Inter', sans-serif", maxWidth: "420px" }}>
              12 pieces. Silk, wool and antique. Each available by private inquiry only — no prices displayed.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-12 md:gap-y-16">
          {carpets.map((carpet, i) => (
            <motion.div
              key={carpet.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              data-testid={`card-carpet-${carpet.id}`}
            >
              <Link href={`/carpet/${carpet.id}`} className="block group" data-testid={`link-carpet-image-${carpet.id}`}>
                <div className="overflow-hidden mb-4" style={{ aspectRatio: "4/3", background: "#F0EAE2" }}>
                  <img
                    src={`/carpets/${carpet.folderNum}/1.png`}
                    alt={carpet.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </Link>

              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex-1">
                    <p className="text-[10px] font-medium tracking-[0.12em] uppercase mb-1" style={{ color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}>
                      {carpet.origin}
                    </p>
                    <h2
                      className="leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: "1.3rem", color: "#1C1916" }}
                    >
                      <Link
                        href={`/carpet/${carpet.id}`}
                        className="hover:opacity-70 transition-opacity duration-200"
                        data-testid={`link-carpet-title-${carpet.id}`}
                      >
                        {carpet.name}
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span
                    className="inline-block px-2 py-1 text-[10px] font-medium tracking-[0.08em] uppercase"
                    style={{ background: "#F0EAE2", color: "#7A726A", fontFamily: "'Inter', sans-serif" }}
                  >
                    {carpet.material}
                  </span>
                  <span
                    className="inline-block px-2 py-1 text-[10px] font-medium tracking-[0.08em] uppercase"
                    style={{ background: "#EDE8E2", color: "#9B7B56", fontFamily: "'Inter', sans-serif" }}
                  >
                    {carpet.style}
                  </span>
                  <span className="w-full text-xs mt-0.5" style={{ color: "#B0A89E", fontFamily: "'Inter', sans-serif" }}>
                    {carpet.dimensions}
                  </span>
                </div>

                <Link
                  href={`/carpet/${carpet.id}`}
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-200"
                  style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif", borderBottom: "1px solid #E4DDD4", paddingBottom: "2px" }}
                  data-testid={`link-view-details-${carpet.id}`}
                >
                  Inquire
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6" style={{ borderTop: "1px solid #E4DDD4" }}>
          <div>
            <p className="text-sm font-medium mb-1" style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif" }}>
              No piece has a publicly displayed price.
            </p>
            <p className="text-sm" style={{ color: "#7A726A", fontFamily: "'Inter', sans-serif" }}>
              Our curators work directly with clients to match each piece to its right context.
            </p>
          </div>
          <a
            href="mailto:info@yurdancarpet.com"
            className="flex-shrink-0 px-7 py-3.5 text-[11px] font-medium tracking-[0.1em] uppercase transition-all duration-200"
            style={{ background: "#141210", color: "#F5EFE6", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#2A2725")}
            onMouseLeave={e => (e.currentTarget.style.background = "#141210")}
            data-testid="link-collection-contact"
          >
            Contact Curators
          </a>
        </div>
      </div>
    </div>
  );
}
