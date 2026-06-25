const products = [
  {
    name: "CoRoute",
    tag: "Live",
    description:
      "City-to-city ride sharing with verified riders, fair pricing, and smart routes across the US South.",
    href: "https://co-route-five.vercel.app",
    iconBg: "bg-[rgba(29,158,117,0.15)]",
    iconColor: "text-[#5DCAA5]",
    glowColor: "rgba(93,202,165,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l4-8 4 4 4-6 4 6" />
        <circle cx="3" cy="17" r="1" />
        <circle cx="21" cy="13" r="1" />
      </svg>
    ),
  },
  {
    name: "CampusDeals",
    tag: "Active build",
    description:
      "Connecting UMBC students with local Arbutus business deals via verified email and QR code redemption.",
    href: "https://github.com/SrikarSistla08/CampusDeals",
    iconBg: "bg-[rgba(186,117,23,0.15)]",
    iconColor: "text-[#EF9F27]",
    glowColor: "rgba(239,159,39,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    name: "LOC",
    tag: "In progress",
    description:
      "A campus community platform integrating student life, local businesses, and university systems.",
    href: null,
    iconBg: "bg-[rgba(83,74,183,0.15)]",
    iconColor: "text-[#AFA9EC]",
    glowColor: "rgba(175,169,236,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "More coming",
    tag: "On the horizon",
    description:
      "ArrivalKit, CampusGigs, and eventually LocalLayer — the unified platform endgame.",
    href: null,
    iconBg: "bg-[rgba(24,95,165,0.15)]",
    iconColor: "text-[#85B7EB]",
    glowColor: "rgba(133,183,235,0.15)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    ),
  },
];

export default function Products() {
  return (
    <section id="products" className="px-10 py-20 max-w-content mx-auto">
      <p className="text-[11px] tracking-[0.1em] text-white/25 uppercase mb-12">
        Portfolio
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] border border-white/[0.06] rounded-xl overflow-hidden">
        {products.map((product, i) => {
          const inner = (
            <div
              className="bg-[#0f0f0f] hover:bg-[#141414] transition-all duration-300 p-7 h-full group/card relative overflow-hidden"
              style={
                {
                  "--glow": product.glowColor,
                } as React.CSSProperties
              }
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${product.iconBg} ${product.iconColor} transition-transform duration-300 group-hover/card:scale-110`}
              >
                {product.icon}
              </div>
              <p className="text-[15px] font-medium text-[#f0f0f0] mb-1.5">
                {product.name}
              </p>
              <span className="inline-block text-[11px] text-white/30 border border-white/10 rounded px-2 py-0.5 mb-3">
                {product.tag}
              </span>
              <p className="text-[13px] text-white/40 leading-relaxed">
                {product.description}
              </p>
              <div
                className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at 50% 50%, var(--glow), transparent 60%)`,
                }}
              />
            </div>
          );

          return product.href ? (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {inner}
            </a>
          ) : (
            <div key={product.name}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}
