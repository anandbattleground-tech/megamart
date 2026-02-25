"use client";

const brands = [
  { name: "Aurelia", bg: "#FF6B00", text: "#ffffff" },
  { name: "BIBA", bg: "#E31837", text: "#ffffff" },
  { name: "W", bg: "#CC0000", text: "#ffffff" },
  { name: "Allen Solly", bg: "#f5f5f5", text: "#111111" },
  { name: "Spykar", bg: "#ffffff", text: "#E31837", border: "#E31837" },
  { name: "Crimsoune Club", bg: "#0d1b8e", text: "#ffffff" },
];

// Duplicate for seamless infinite scroll
const allBrands = [...brands, ...brands, ...brands];

export function BrandCarousel() {
  return (
    <div className="relative overflow-hidden py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-6 animate-scroll-left"
        style={{ width: "max-content" }}
      >
        {allBrands.map((brand, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold tracking-wider uppercase min-w-[140px] h-16 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default select-none"
            style={{
              background: brand.bg,
              color: brand.text,
              border: brand.border ? `2px solid ${brand.border}` : "none",
            }}
          >
            {brand.name}
          </div>
        ))}
      </div>
    </div>
  );
}
