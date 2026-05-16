import { Link } from "wouter";
import { motion } from "framer-motion";
import { carpets } from "@/data/carpets";

function DecoDivider() {
  return (
    <div className="flex items-center gap-4 my-1">
      <div className="gold-rule w-8" />
      <svg width="8" height="8" viewBox="0 0 8 8" fill="#D4AF37" opacity="0.7">
        <rect x="2" y="0" width="4" height="4" transform="rotate(45 4 4)" />
      </svg>
      <div className="gold-rule flex-1" />
    </div>
  );
}

export default function Collection() {
  return (
    <div className="w-full min-h-screen pt-32 pb-32" style={{ background: "#0A0A0A" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-2xl mb-28"
        >
          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Özel Koleksiyon</p>
          <h1
            className="font-serif uppercase mb-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "0.12em", color: "#FFFFF0" }}
          >
            Arşiv
          </h1>
          <div className="gold-rule w-32 mb-8" />
          <p
            className="leading-relaxed"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "1.05rem", letterSpacing: "0.06em", color: "rgba(255,255,240,0.5)" }}
          >
            Seçilmiş şaheserlerin küratörlü koleksiyonu.
            Her parça, tekstil tarihinde tekrarlanamaz bir anı temsil eder.
          </p>
        </motion.div>

        {/* Gallery Walk */}
        <div className="flex flex-col gap-40 md:gap-52">
          {carpets.map((carpet, index) => (
            <motion.div
              key={carpet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 md:gap-16 items-center`}
              data-testid={`card-carpet-${carpet.id}`}
            >
              {/* Image */}
              <div className="w-full md:w-3/5">
                <Link href={`/carpet/${carpet.id}`} className="block overflow-hidden group relative" data-testid={`link-carpet-image-${carpet.id}`}>
                  <img
                    src={`/carpets/${carpet.folderNum}/1.png`}
                    alt={carpet.name}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-1000 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 left-4 w-8 h-[1px]" style={{ background: "#D4AF37" }} />
                    <div className="absolute top-4 left-4 w-[1px] h-8" style={{ background: "#D4AF37" }} />
                    <div className="absolute top-4 right-4 w-8 h-[1px]" style={{ background: "#D4AF37" }} />
                    <div className="absolute top-4 right-4 w-[1px] h-8" style={{ background: "#D4AF37" }} />
                    <div className="absolute bottom-4 left-4 w-8 h-[1px]" style={{ background: "#D4AF37" }} />
                    <div className="absolute bottom-4 left-4 w-[1px] h-8" style={{ background: "#D4AF37" }} />
                    <div className="absolute bottom-4 right-4 w-8 h-[1px]" style={{ background: "#D4AF37" }} />
                    <div className="absolute bottom-4 right-4 w-[1px] h-8" style={{ background: "#D4AF37" }} />
                  </div>
                </Link>
              </div>

              {/* Text */}
              <div className="w-full md:w-2/5 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-6">
                  <div className="gold-rule w-6" />
                  <p className="deco-label" style={{ color: "rgba(212,175,55,0.7)" }}>{carpet.origin}</p>
                </div>

                <h2
                  className="font-serif uppercase mb-4 leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", letterSpacing: "0.1em", color: "#FFFFF0" }}
                >
                  <Link href={`/carpet/${carpet.id}`} className="hover:text-[#D4AF37] transition-colors duration-300" data-testid={`link-carpet-title-${carpet.id}`}>
                    {carpet.name}
                  </Link>
                </h2>

                <p
                  className="mb-8 italic"
                  style={{ fontFamily: "'Poiret One', serif", fontSize: "1rem", letterSpacing: "0.05em", color: "rgba(212,175,55,0.75)" }}
                >
                  "{carpet.tagline}"
                </p>

                <DecoDivider />

                <div className="mt-8 space-y-3 mb-10 w-full">
                  {[
                    { label: "Malzeme", value: carpet.material },
                    { label: "Boyut", value: carpet.dimensions },
                    { label: "Alan", value: carpet.totalArea },
                    { label: "Stil", value: carpet.style },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between items-baseline gap-4">
                      <span className="deco-label flex-shrink-0" style={{ color: "rgba(212,175,55,0.6)" }}>{label}</span>
                      <span
                        className="text-right"
                        style={{ fontFamily: "'Poiret One', serif", fontSize: "0.85rem", letterSpacing: "0.04em", color: "rgba(255,255,240,0.6)" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/carpet/${carpet.id}`}
                  className="text-[10px] tracking-[0.2em] uppercase font-serif pb-1 transition-all duration-300 hover:text-[#F5E27A]"
                  style={{ color: "#D4AF37", borderBottom: "1px solid rgba(212,175,55,0.4)" }}
                  data-testid={`link-view-details-${carpet.id}`}
                >
                  Detaylar &amp; Talep
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mt-48 pt-20"
          style={{ borderTop: "1px solid rgba(212,175,55,0.2)" }}
        >
          <p className="deco-label mb-6" style={{ color: "#D4AF37" }}>Özel Talep</p>
          <h3
            className="font-serif uppercase mb-8"
            style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)", letterSpacing: "0.15em", color: "#FFFFF0" }}
          >
            Hiçbir parçanın kamuya açık fiyatı yoktur.
          </h3>
          <p
            className="max-w-lg mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Poiret One', serif", fontSize: "0.95rem", letterSpacing: "0.05em", color: "rgba(255,255,240,0.45)" }}
          >
            Küratörlerimiz, her parçanın doğru bağlamı bulması için müşterilerle doğrudan çalışır.
          </p>
          <a
            href="mailto:info@yurdancarpet.com"
            className="inline-block text-[10px] tracking-[0.25em] uppercase font-serif px-10 py-4 transition-all duration-400 hover:bg-[#D4AF37] hover:text-[#0A0A0A]"
            style={{ border: "1px solid #D4AF37", color: "#D4AF37" }}
            data-testid="link-collection-contact"
          >
            Küratörlerle İletişim
          </a>
        </motion.div>
      </div>
    </div>
  );
}
