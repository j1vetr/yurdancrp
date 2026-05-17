export function TrustBar() {
  const items = [
    {
      icon: "/icon-worldwide-shipping.png",
      title: "Worldwide Shipping",
      desc: "We deliver to over 50 countries with full insurance and tracking.",
    },
    {
      icon: "/icon-free-shipping.png",
      title: "Free Shipping",
      desc: "Complimentary delivery on all orders, no minimum required.",
    },
    {
      icon: "/icon-free-return.png",
      title: "Worry Free Return",
      desc: "30-day hassle-free returns. Your satisfaction is guaranteed.",
    },
  ];

  return (
    <div style={{ background: "#F5F0EB", borderTop: "1px solid #E4DDD4" }}>
      <div className="max-w-[1360px] mx-auto px-6 md:px-10 py-10 md:py-12">
        <div className="flex flex-col md:flex-row">
          {items.map(({ icon, title, desc }, idx) => (
            <div key={title} className="flex flex-col md:flex-row flex-1">
              {/* Horizontal divider on mobile, vertical on desktop */}
              {idx > 0 && (
                <>
                  <div
                    className="block md:hidden w-full"
                    style={{ height: "1px", background: "#E4DDD4" }}
                  />
                  <div
                    className="hidden md:block flex-shrink-0"
                    style={{ width: "1px", background: "#E4DDD4", margin: "0 4px" }}
                  />
                </>
              )}
              <div className="flex flex-col items-center text-center gap-4 flex-1 py-8 md:py-0 md:px-6">
                <img
                  src={icon}
                  alt={title}
                  className="w-20 h-20 object-contain"
                />
                <div>
                  <p
                    className="text-[11px] font-semibold tracking-[0.14em] uppercase mb-1.5"
                    style={{ color: "#1C1916", fontFamily: "'Inter', sans-serif" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-[11px] leading-relaxed"
                    style={{ color: "#9B8E84", fontFamily: "'Inter', sans-serif", maxWidth: "220px", margin: "0 auto" }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
