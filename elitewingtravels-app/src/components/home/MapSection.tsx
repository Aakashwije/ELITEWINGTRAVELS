"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ─── Coordinates recalibrated from live DOM measurements (% of image container)
// West coast (Colombo–Negombo): ~39–44% left
// South coast (Galle–Mirissa):  ~44–57% left, 85–88% top
// Central highlands (Kandy):    ~52% left, 69% top
// North (Anuradhapura):         ~51% left, 55% top
// East (Polonnaruwa, Arugam):   ~60–71% left

const allDestinations = [
  // ── North / North-central ──
  { label: "Anuradhapura",  x: "51%", y: "55%" },
  { label: "Wilpattu",      x: "46%", y: "51%" },
  { label: "Minneriya",     x: "57%", y: "59%" },
  { label: "Sigiriya",      x: "55%", y: "62%" },
  { label: "Polonnaruwa",   x: "60%", y: "62%" },
  { label: "Gammaduwa",     x: "53%", y: "64%" },
  // ── Central / Hill Country ──
  { label: "Kandy",         x: "53%", y: "69%" },
  { label: "Kithulgala",    x: "50%", y: "71%" },
  { label: "Rathnapura",    x: "49%", y: "76%" },
  { label: "Horton Plains", x: "55%", y: "75%" },
  { label: "Ella",          x: "57%", y: "76%" },
  { label: "Ranamure",      x: "51%", y: "78%" },
  { label: "Sinharaja",     x: "50%", y: "81%" },
  { label: "Maduru Oya",    x: "64%", y: "65%" },
  // ── West coast ──
  { label: "Negombo",       x: "44%", y: "67%" },
  { label: "Colombo",       x: "44%", y: "72%" },
  { label: "Bentota",       x: "46%", y: "78%" },
  { label: "Ingiriya",      x: "48%", y: "75%" },
  // ── South coast ──
  { label: "Galle",         x: "47%", y: "85%" },
  { label: "Unawatuna",     x: "49%", y: "86%" },
  { label: "Weligama",      x: "51%", y: "87%" },
  { label: "Mirissa",       x: "52%", y: "88%" },
  { label: "Polhena",       x: "55%", y: "88%" },
  // ── East coast ──
  { label: "Arugam Bay",    x: "62%", y: "69%" },
  // ── South-east ──
  { label: "Yala",          x: "56%", y: "80%" },
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

  const currentCategory = hoveredCategory ?? activeCategory;
  const activeCat       = categories.find((c) => c.id === currentCategory);
  const accentColor     = activeCat?.color ?? "var(--color-gold)";

  // Only the locations for the active/hovered category — none when idle
  const visibleLocations: string[] = activeCat ? activeCat.locations : [];
  const visibleDests = allDestinations.filter((d) =>
    visibleLocations.some(
      (l) => l.toLowerCase().replace(/\s/g, "") === d.label.toLowerCase().replace(/\s/g, "")
    )
  );

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

            {/* Idle hint — visible only when no category is selected */}
            <AnimatePresence>
              {!currentCategory && (
                <motion.div
                  key="idle-hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="flex flex-col items-center gap-2 mt-16">
                    <motion.div
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="text-2xl select-none"
                    >
                      👆
                    </motion.div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)]/50 text-center">
                      Hover a category<br />to explore
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Per-category pins — only relevant pins rendered */}
            <AnimatePresence mode="wait">
              {visibleDests.map((dest, i) => (
                <DestinationPin
                  key={`${currentCategory}-${dest.label}`}
                  dest={dest}
                  accentColor={accentColor}
                  delay={i * 0.06}
                />
              ))}
            </AnimatePresence>
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
  accentColor: string;
  delay: number;
}

function DestinationPin({ dest, accentColor, delay }: PinProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: -6 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0, y: -6 }}
      transition={{ duration: 0.35, delay, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={{ left: dest.x, top: dest.y, transform: "translate(-50%, -100%)" }}
    >
      <div className="flex flex-col items-center gap-0.5 cursor-pointer">
        <div className="relative flex flex-col items-center">
          {/* Pulse ring */}
          <motion.div
            className="absolute -inset-1 rounded-full"
            style={{ backgroundColor: accentColor }}
            animate={{ opacity: [0.3, 0.65, 0.3], scale: [1, 1.6, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Pin head */}
          <motion.div
            className="w-3 h-3 rounded-full border-2 border-white shadow-xl relative z-10"
            style={{ backgroundColor: accentColor }}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Needle tip */}
          <div
            className="w-0 h-0 z-10"
            style={{
              borderLeft: "3px solid transparent",
              borderRight: "3px solid transparent",
              borderTop: `5px solid ${accentColor}`,
            }}
          />
        </div>
        {/* Label pill */}
        <div
          className="text-[7.5px] font-bold px-1.5 py-[2px] rounded-full whitespace-nowrap shadow-sm"
          style={{ backgroundColor: accentColor, color: "white" }}
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
