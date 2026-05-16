import { useState } from "react";

const IMAGES = [1, 2, 3, 4, 5, 6, 7, 8];
const FOLDER = 1;
const BASE = "/carpets";

const SPECS = [
  { label: "Origin", value: "Isfahan, Persia" },
  { label: "Material", value: "Silk & Wool Blend" },
  { label: "Weave", value: "Hand-knotted" },
  { label: "Knot Density", value: "520 knots / in²" },
  { label: "Dimensions", value: "3.2 × 2.1 m" },
  { label: "Age", value: "Circa 1920–1940" },
  { label: "Condition", value: "Excellent" },
  { label: "Reference", value: "YC-IS-001" },
];

const COLORS = [
  { name: "Deep Crimson", hex: "#8B1A1A" },
  { name: "Ivory", hex: "#E8E3D8" },
  { name: "Antique Gold", hex: "#C9A84C" },
  { name: "Midnight Blue", hex: "#1C2951" },
];

function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function VariantB() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#F4F1EB",
        color: "#141210",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 56px",
          height: "64px",
          background: "#141210",
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(250,250,248,0.5)",
            textDecoration: "none",
          }}
        >
          ← Collection
        </a>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "19px",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "#FAFAF8",
          }}
        >
          YurdanCarpet
        </span>
        <div style={{ display: "flex", gap: "28px" }}>
          {["About", "Contact"].map((n) => (
            <a
              key={n}
              href="#"
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(250,250,248,0.45)",
                textDecoration: "none",
              }}
            >
              {n}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero image — full width, tall */}
      <div
        style={{
          width: "100%",
          height: "520px",
          position: "relative",
          overflow: "hidden",
          background: "#1a1714",
        }}
      >
        <img
          src={`${BASE}/${FOLDER}/${IMAGES[active]}.webp`}
          alt="Isfahan No. I"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            opacity: 0.92,
          }}
        />
        {/* Gradient overlay at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to bottom, transparent, rgba(20,18,16,0.45))",
          }}
        />
        {/* Nav arrows */}
        <button
          onClick={() => setActive((a) => Math.max(0, a - 1))}
          style={{
            position: "absolute",
            left: "28px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(250,250,248,0.12)",
            border: "1px solid rgba(250,250,248,0.2)",
            color: "#FAFAF8",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            backdropFilter: "blur(4px)",
          }}
          disabled={active === 0}
        >
          ‹
        </button>
        <button
          onClick={() => setActive((a) => Math.min(IMAGES.length - 1, a + 1))}
          style={{
            position: "absolute",
            right: "28px",
            top: "50%",
            transform: "translateY(-50%)",
            background: "rgba(250,250,248,0.12)",
            border: "1px solid rgba(250,250,248,0.2)",
            color: "#FAFAF8",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "18px",
            backdropFilter: "blur(4px)",
          }}
          disabled={active === IMAGES.length - 1}
        >
          ›
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        style={{
          background: "#141210",
          padding: "14px 56px",
          display: "flex",
          gap: "10px",
          overflowX: "auto",
        }}
      >
        {IMAGES.map((n, i) => (
          <button
            key={n}
            onClick={() => setActive(i)}
            style={{
              width: "60px",
              height: "44px",
              flexShrink: 0,
              border: "none",
              padding: 0,
              cursor: "pointer",
              outline: "none",
              opacity: active === i ? 1 : 0.38,
              transition: "opacity 0.18s",
              boxShadow: active === i ? "0 0 0 1.5px #9B7B56" : "none",
            }}
          >
            <img
              src={`${BASE}/${FOLDER}/${n}.webp`}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </button>
        ))}
      </div>

      {/* Content area */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 56px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 420px",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left: identity + story */}
        <div>
          {/* Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
            }}
          >
            <div style={{ width: "24px", height: "1px", background: "#9B7B56" }} />
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "#9B7B56",
                fontWeight: 500,
              }}
            >
              Private Archive · Isfahan, Persia
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "64px",
              fontWeight: 400,
              lineHeight: 0.95,
              margin: "0 0 40px",
              letterSpacing: "-0.02em",
              color: "#141210",
            }}
          >
            Isfahan<br />
            <span style={{ fontWeight: 300, fontStyle: "italic" }}>No. I</span>
          </h1>

          <p
            style={{
              fontSize: "14px",
              lineHeight: 1.9,
              color: "rgba(20,18,16,0.62)",
              maxWidth: "520px",
              marginBottom: "48px",
              letterSpacing: "0.01em",
            }}
          >
            Woven in the workshops of Isfahan during the late Qajar period, this piece exemplifies
            the classical Persian tradition at its most refined. The interlocking arabesque field,
            rendered in silk pile over a wool foundation, achieves a luminosity rarely encountered
            in works of this age. Each of the 520 knots per square inch was tied by hand — a pace
            that demanded years, not months.
          </p>

          {/* Color palette */}
          <div>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(20,18,16,0.4)",
                marginBottom: "16px",
                fontWeight: 500,
              }}
            >
              Colour Palette
            </p>
            <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
              {COLORS.map(({ name, hex }) => (
                <div key={name} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: hex,
                      border: "1px solid rgba(20,18,16,0.12)",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "10px", color: "rgba(20,18,16,0.55)", letterSpacing: "0.04em" }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: specs + inquiry */}
        <div
          style={{
            background: "#FAFAF8",
            padding: "40px 36px",
            position: "sticky",
            top: "24px",
          }}
        >
          {/* Spec table */}
          <p
            style={{
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(20,18,16,0.4)",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            Specifications
          </p>
          <div style={{ marginBottom: "36px" }}>
            {SPECS.map(({ label, value }, i) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px 0",
                  borderTop: i === 0 ? "1px solid rgba(20,18,16,0.1)" : "none",
                  borderBottom: "1px solid rgba(20,18,16,0.1)",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    color: "rgba(20,18,16,0.45)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#141210",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Inquiry note */}
          <p
            style={{
              fontSize: "10px",
              lineHeight: 1.7,
              color: "rgba(20,18,16,0.5)",
              marginBottom: "24px",
              letterSpacing: "0.01em",
            }}
          >
            This piece is available for private acquisition.
            Price details are provided upon direct enquiry.
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/905336781644"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "9px",
              background: "#25D366",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 24px",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 600,
              marginBottom: "10px",
            }}
          >
            <WhatsAppIcon />
            Inquire via WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:info@yurdancarpet.com"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              color: "#141210",
              textDecoration: "none",
              padding: "13px 24px",
              fontSize: "10px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontWeight: 500,
              border: "1px solid rgba(20,18,16,0.2)",
            }}
          >
            Send by Email
          </a>
        </div>
      </div>
    </div>
  );
}
