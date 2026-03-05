"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Coordinates calibrated against the actual srilanka_illustrated.png image ─
// The island landmass sits approximately within this image region:
//   Left edge  (west coast): ~38% from image left
//   Right edge (east coast): ~85% from image left
//   Top edge   (north tip):  ~44% from image top
//   Bottom edge(south tip):  ~97% from image top
//
// Reference points verified visually:
//   Anuradhapura  → x:52%, y:52%
//   Wilpattu      → x:42%, y:47%
//   Colombo       → x:40%, y:71%
//   Kandy         → x:55%, y:65%
//   Galle         → x:44%, y:90%

const allDestinations = [
  // ── North / North-central ──
  { label: "Anuradhapura",  x: "51%", y: "53%" },
  { label: "Wilpattu",      x: "42%", y: "48%" },
  { label: "Minneriya",     x: "63%", y: "57%" },
  { label: "Sigiriya",      x: "60%", y: "60%" },
  { label: "Polonnaruwa",   x: "68%", y: "61%" },
  { label: "Gammaduwa",     x: "56%", y: "63%" },
  // ── Central ──
  { label: "Kandy",         x: "55%", y: "68%" },
  { label: "Kithulgala",    x: "49%", y: "70%" },
  { label: "Rathnapura",    x: "48%", y: "75%" },
  { label: "Horton Plains", x: "58%", y: "74%" },
  { label: "Ella",          x: "64%", y: "75%" },
  { label: "Ranamure",      x: "51%", y: "78%" },
  { label: "Sinharaja",     x: "50%", y: "80%" },
  { label: "Maduru Oya",    x: "69%", y: "65%" },
  // ── West coast ──
  { label: "Negombo",       x: "39%", y: "66%" },
  { label: "Colombo",       x: "39%", y: "71%" },
  { label: "Bentota",       x: "42%", y: "77%" },
  { label: "Ingiriya",      x: "44%", y: "74%" },
  // ── South coast ──
  { label: "Galle",         x: "44%", y: "85%" },
  { label: "Unawatuna",     x: "47%", y: "86%" },
  { label: "Weligama",      x: "51%", y: "87%" },
  { label: "Mirissa",       x: "54%", y: "88%" },
  { label: "Polhena",       x: "57%", y: "88%" },
  // ── East coast ──
  { label: "Arugam Bay",    x: "71%", y: "68%" },
  // ── South-east ──
  { label: "Yala",          x: "62%", y: "79%" },
];

// ─── Category definitions ──────────────────────────────────────────────────────
const categories = [
  {
    id: "beaches",
    title: "Popular Beaches",
    image: "/assets/images/cat_beaches.png",
    description: "Sun-kissed shores & turquoise waters",
    side: "left" as const,
    color: "#4AADE8",
    locations: ["Bentota", "Unawatuna", "Weligama", "Mirissa", "Arugam Bay"],
  },
  {
    id: "wildlife",
    title: "Wildlife & Nature",
    image: "/assets/images/cat_wildlife.png",
    description: "Elephants, leopards & lush rainforests",
    side: "left" as const,
    color: "#5DBF72",
    locations: ["Sinharaja", "Horton Plains", "Yala", "Minneriya", "Wilpattu"],
  },
  {
    id: "adventure",
    title: "Adventure",
    image: "/assets/images/cat_adventure.png",
    description: "Mountain trails, surfing & white-water rafting",
    side: "left" as const,
    color: "#F4895F",
    locations: ["Galle", "Colombo", "Negombo", "Bentota", "Kithulgala"],
  },
  {
    id: "culture",
    title: "History & Culture",
    image: "/assets/images/cat_culture.png",
    description: "Ancient kingdoms & sacred temples",
    side: "right" as const,
    color: "#A08CF5",
    locations: ["Galle", "Colombo", "Kandy", "Sigiriya", "Polonnaruwa", "Anuradhapura"],
  },
  {
    id: "hidden",
    title: "Lesser Travelled",
    image: "/assets/images/cat_hidden.png",
    description: "Serene off-the-beaten-path gems",
    side: "right" as const,
    color: "#E07BB5",
    locations: ["Polhena", "Rathnapura", "Ella", "Gammaduwa", "Ranamure", "Maduru Oya"],
  },
  {
    id: "gastronomy",
    title: "Gastronomy",
    image: "/assets/images/cat_gastronomy.png",
    description: "Spices, street food & fine dining",
    side: "right" as const,
    color: "#F5C842",
    locations: ["Kandy", "Colombo", "Ingiriya", "Arugam Bay"],
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function MapSection() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [activeCategory, setActiveCategory]   = useState<string | null>(null);
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const leftCategories  = categories.filter((c) => c.side === "left");
  const rightCategories = categories.filter((c) => c.side === "right");

  const currentCategory      = hoveredCategory ?? activeCategory;
  const activeCat            = categories.find((c) => c.id === currentCategory);
  const highlightedLocations = activeCat ? activeCat.locations : [];
  const accentColor          = activeCat?.color ?? "var(--color-gold)";

  return (
    <section className="py-20 md:py-28 bg-[#f5f4f0]" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-primary)]/60 font-semibold mb-2">
            Explore
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-1 leading-tight">
            Our Island
          </h2>
          <p className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-gold)] italic">
            Sri Lanka
          </p>
          <Link
            href="/destinations"
            className="inline-flex items-center gap-2 mt-5 text-xs text-[var(--color-gold)] font-bold tracking-widest uppercase hover:opacity-60 transition-opacity"
          >
            View All Experiences
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] xl:grid-cols-[290px_1fr_290px] items-center gap-6 xl:gap-10">

          {/* LEFT TILES */}
          <div className="flex flex-col gap-4 order-2 lg:order-1">
            {leftCategories.map((cat, i) => (
              <CategoryTile
                key={cat.id}
                cat={cat}
                isActive={activeCategory === cat.id}
                isHovered={hoveredCategory === cat.id}
                onToggle={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                inView={inView}
                delay={0.08 * i}
                animDir="left"
              />
            ))}
          </div>

          {/* CENTER MAP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[340px] md:max-w-[440px] lg:max-w-none order-1 lg:order-2"
          >
            <img
              src="/assets/images/srilanka_illustrated.png"
              alt="Sri Lanka Illustrated Map"
              className="w-full h-auto drop-shadow-2xl"
            />

            {allDestinations.map((dest, i) => {
              const label = dest.label.toLowerCase().replace(/\s/g, "");
              const isHighlighted =
                highlightedLocations.length === 0 ||
                highlightedLocations.some((l) => l.toLowerCase().replace(/\s/g, "") === label);
              const isDimmed =
                highlightedLocations.length > 0 &&
                !highlightedLocations.some((l) => l.toLowerCase().replace(/\s/g, "") === label);
              return (
                <DestinationPin
                  key={dest.label}
                  dest={dest}
                  isHighlighted={isHighlighted}
                  isDimmed={isDimmed}
                  accentColor={accentColor}
                  inView={inView}
                  delay={0.55 + i * 0.04}
                />
              );
            })}
          </motion.div>

          {/* RIGHT TILES */}
          <div className="flex flex-col gap-4 order-3">
            {rightCategories.map((cat, i) => (
              <CategoryTile
                key={cat.id}
                cat={cat}
                isActive={activeCategory === cat.id}
                isHovered={hoveredCategory === cat.id}
                onToggle={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                inView={inView}
                delay={0.08 * i}
                animDir="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Destination Pin ──────────────────────────────────────────────────────────
interface PinProps {
  dest: { label: string; x: string; y: string };
  isHighlighted: boolean;
  isDimmed: boolean;
  accentColor: string;
  inView: boolean;
  delay: number;
}

function DestinationPin({ dest, isHighlighted, isDimmed, accentColor, inView, delay }: PinProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 8 }}
      animate={inView ? { opacity: isDimmed ? 0.18 : 1, scale: isHighlighted ? 1.25 : 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="absolute"
      style={{ left: dest.x, top: dest.y, transform: "translate(-50%, -100%)" }}
    >
      <div className="flex flex-col items-center gap-0.5 cursor-pointer">
        <div className="relative flex flex-col items-center">
          {/* Pulse ring when highlighted */}
          {isHighlighted && (
            <motion.div
              className="absolute -inset-1 rounded-full"
              style={{ backgroundColor: accentColor }}
              animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.6, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          {/* Pin head */}
          <motion.div
            className="w-3 h-3 rounded-full border-2 border-white shadow-xl relative z-10 transition-colors duration-300"
            style={{ backgroundColor: isHighlighted ? accentColor : "rgba(10,33,62,0.45)" }}
            animate={isHighlighted ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Needle tip */}
          <div
            className="w-0 h-0 z-10"
            style={{
              borderLeft: "3px solid transparent",
              borderRight: "3px solid transparent",
              borderTop: `5px solid ${isHighlighted ? accentColor : "rgba(10,33,62,0.45)"}`,
              transition: "border-top-color 0.3s",
            }}
          />
        </div>
        {/* Label pill */}
        <div
          className="text-[7.5px] font-bold px-1.5 py-[2px] rounded-full whitespace-nowrap shadow-sm border transition-all duration-300"
          style={{
            backgroundColor: isHighlighted ? accentColor : "rgba(255,255,255,0.9)",
            color: isHighlighted ? "white" : "var(--color-primary)",
            borderColor: isHighlighted ? "transparent" : "rgba(0,0,0,0.1)",
          }}
        >
          {dest.label}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Category Tile ────────────────────────────────────────────────────────────
interface TileProps {
  cat: typeof categories[0];
  isActive: boolean;
  isHovered: boolean;
  onToggle: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  inView: boolean;
  delay: number;
  animDir: "left" | "right";
}

function CategoryTile({
  cat, isActive, isHovered, onToggle, onMouseEnter, onMouseLeave, inView, delay, animDir,
}: TileProps) {
  const isEmphasized = isActive || isHovered;

  return (
    <motion.button
      initial={{ opacity: 0, x: animDir === "left" ? -32 : 32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      onClick={onToggle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative w-full text-left cursor-pointer focus:outline-none"
      aria-pressed={isActive}
    >
      <div
        className="flex items-center gap-4 rounded-2xl px-4 py-3 overflow-hidden"
        style={{
          backgroundColor: isEmphasized ? "white" : "#ECECEA",
          boxShadow: isEmphasized
            ? `0 8px 32px rgba(0,0,0,0.12), 0 0 0 2px ${cat.color}55`
            : "0 2px 8px rgba(0,0,0,0.06)",
          transform: isEmphasized ? "scale(1.02)" : "scale(1)",
          transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Circular image */}
        <div
          className="relative flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 shadow-md"
          style={{
            borderColor: isEmphasized ? cat.color : "transparent",
            boxShadow: isEmphasized ? `0 0 0 3px ${cat.color}30` : undefined,
            transition: "all 0.35s ease",
          }}
        >
          <img
            src={cat.image}
            alt={cat.title}
            className="w-full h-full object-cover"
            style={{ transform: isEmphasized ? "scale(1.12)" : "scale(1)", transition: "transform 0.5s ease" }}
          />
          {isEmphasized && (
            <div className="absolute inset-0 rounded-full opacity-20" style={{ backgroundColor: cat.color }} />
          )}
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <h4
            className="font-[var(--font-heading)] font-bold text-[0.92rem] leading-tight truncate"
            style={{ color: isEmphasized ? cat.color : "var(--color-primary)", transition: "color 0.3s" }}
          >
            {cat.title}
          </h4>
          <p className="text-[11px] text-[var(--color-primary)]/55 mt-0.5 leading-snug line-clamp-2">
            {cat.description}
          </p>

          {/* Location chips */}
          <AnimatePresence>
            {isEmphasized && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 6 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.28 }}
                className="flex flex-wrap gap-1 overflow-hidden"
              >
                {cat.locations.map((loc) => (
                  <span
                    key={loc}
                    className="text-[8px] font-bold px-1.5 py-[2px] rounded-full text-white"
                    style={{ backgroundColor: cat.color }}
                  >
                    📍 {loc}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Active dot */}
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{
            backgroundColor: isEmphasized ? cat.color : "transparent",
            boxShadow: isEmphasized ? `0 0 6px ${cat.color}` : "none",
            transition: "all 0.3s",
          }}
        />
      </div>
    </motion.button>
  );
}
