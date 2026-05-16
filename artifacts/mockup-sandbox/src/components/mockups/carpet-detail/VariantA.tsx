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
  { name: "Ivory", hex: "#F5F0E8" },
  { name: "Antique Gold", hex: "#C9A84C" },
  { name: "Midnight Blue", hex: "#1C2951" },
];

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function VariantA() {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#FAFAF8",
        color: "#141210",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: "68px",
          borderBottom: "1px solid rgba(20,18,16,0.08)",
          background: "#FAFAF8",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <a
          href="#"
          style={{
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#9B7B56",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ fontSize: "14px" }}>←</span>
          Collection
        </a>
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "0.04em",
          }}
        >
          YurdanCarpet
        </span>
        <div style={{ display: "flex", gap: "32px" }}>
          {["Collection", "About", "Contact"].map((n) => (
            <a
              key={n}
              href="#"
              style={{
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#141210",
                textDecoration: "none",
                opacity: 0.6,
              }}
            >
              {n}
            </a>
          ))}
        </div>
      </nav>

      {/* Main content */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* LEFT: Image panel */}
        <div
          style={{
            width: "58%",
            display: "flex",
            flexDirection: "row",
            background: "#F0EDE8",
            position: "relative",
          }}
        >
          {/* Thumbnail strip */}
          <div
            style={{
              width: "72px",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "24px 14px 24px 14px",
              overflowY: "auto",
            }}
          >
            {IMAGES.map((n, i) => (
              <button
                key={n}
                onClick={() => setActive(i)}
                style={{
                  width: "44px",
                  height: "56px",
                  padding: 0,
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                  opacity: active === i ? 1 : 0.45,
                  transition: "opacity 0.2s",
                  flexShrink: 0,
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

          {/* Main image */}
          <div style={{ flex: 1, position: "relative" }}>
            <img
              src={`${BASE}/${FOLDER}/${IMAGES[active]}.webp`}
              alt="Isfahan No. I"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Image counter */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                fontSize: "10px",
                letterSpacing: "0.12em",
                color: "rgba(250,250,248,0.7)",
                fontWeight: 500,
              }}
            >
              {String(active + 1).padStart(2, "0")} / {String(IMAGES.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* RIGHT: Info panel */}
        <div
          style={{
            width: "42%",
            overflowY: "auto",
            padding: "52px 56px 48px 56px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Tag line */}
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#9B7B56",
              marginBottom: "20px",
              fontWeight: 500,
            }}
          >
            Isfahan · Persia · Silk &amp; Wool
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "52px",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              margin: "0 0 8px 0",
              color: "#141210",
            }}
          >
            Isfahan
            <br />
            <em style={{ fontWeight: 300 }}>No. I</em>
          </h1>

          {/* Divider */}
          <div
            style={{
              width: "36px",
              height: "1px",
              background: "#9B7B56",
              margin: "28px 0",
            }}
          />

          {/* Specs */}
          <div style={{ marginBottom: "36px" }}>
            {SPECS.map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "11px 0",
                  borderBottom: "1px solid rgba(20,18,16,0.07)",
                }}
              >
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(20,18,16,0.45)",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#141210",
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Colors */}
          <div style={{ marginBottom: "44px" }}>
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(20,18,16,0.45)",
                marginBottom: "14px",
                fontWeight: 500,
              }}
            >
              Palette
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              {COLORS.map(({ name, hex }) => (
                <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: hex,
                      border: "1px solid rgba(20,18,16,0.1)",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.08em",
                      color: "rgba(20,18,16,0.5)",
                      textAlign: "center",
                      lineHeight: 1.3,
                      maxWidth: "52px",
                    }}
                  >
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "auto" }}>
            <a
              href="https://wa.me/905336781644"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                background: "#141210",
                color: "#FAFAF8",
                textDecoration: "none",
                padding: "16px 32px",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              <WhatsAppIcon />
              Inquire via WhatsApp
            </a>
            <a
              href="mailto:info@yurdancarpet.com"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                background: "transparent",
                color: "#141210",
                textDecoration: "none",
                padding: "15px 32px",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                border: "1px solid rgba(20,18,16,0.25)",
              }}
            >
              Send an Enquiry
            </a>

            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.1em",
                color: "rgba(20,18,16,0.35)",
                textAlign: "center",
                margin: "8px 0 0",
                textTransform: "uppercase",
              }}
            >
              No prices displayed — private acquisition only
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
