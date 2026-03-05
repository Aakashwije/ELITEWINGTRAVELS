"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";

const categories = [
    {
        id: "beaches",
        title: "Popular Beaches",
        image: "/assets/images/cat_beaches.png",
        description: "Sun-kissed shores & whale watching paradise",
        side: "left",
    },
    {
        id: "wildlife",
        title: "Wildlife & Nature",
        image: "/assets/images/cat_wildlife.png",
        description: "Elephants, leopards & lush rainforests",
        side: "left",
    },
    {
        id: "adventure",
        title: "Adventure",
        image: "/assets/images/cat_adventure.png",
        description: "Mountain trails, surfing & zip-lining",
        side: "left",
    },
    {
        id: "culture",
        title: "History & Culture",
        image: "/assets/images/cat_culture.png",
        description: "Ancient kingdoms & sacred temples",
        side: "right",
    },
    {
        id: "hidden",
        title: "Lesser Travelled",
        image: "/assets/images/cat_hidden.png",
        description: "Serene off-the-beaten-path gems",
        side: "right",
    },
    {
        id: "gastronomy",
        title: "Gastronomy",
        image: "/assets/images/cat_gastronomy.png",
        description: "Spices, street food & fine dining",
        side: "right",
    },
];

const destinations = [
    { label: "Anuradhapura", x: "38%", y: "32%" },
    { label: "Sigiriya", x: "48%", y: "44%" },
    { label: "Polonnaruwa", x: "60%", y: "44%" },
    { label: "Kandy", x: "45%", y: "57%" },
    { label: "Colombo", x: "26%", y: "66%" },
    { label: "Mirissa", x: "40%", y: "88%" },
    { label: "Ella", x: "59%", y: "70%" },
];

export default function MapSection() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const leftCategories = categories.filter((c) => c.side === "left");
    const rightCategories = categories.filter((c) => c.side === "right");

    return (
        <section className="py-20 md:py-28 bg-[#f5f4f0]" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm uppercase tracking-[0.25em] text-[var(--color-primary)]/70 font-medium mb-1">
                        Explore
                    </p>
                    <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold text-[var(--color-primary)] mb-1">
                        Our Island
                    </h2>
                    <p className="text-3xl md:text-4xl font-[var(--font-heading)] font-bold text-[var(--color-gold)] italic">
                        Sri Lanka
                    </p>
                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--color-gold)] font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
                    >
                        View All Experiences
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </motion.div>

                {/* 3-column layout: Left Cards | Map | Right Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-4 lg:gap-6">

                    {/* LEFT CATEGORIES */}
                    <div className="flex flex-col gap-4 items-end pr-2">
                        {leftCategories.map((cat, i) => (
                            <motion.button
                                key={cat.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                                className="flex items-center gap-3 text-left group w-[220px]"
                            >
                                {/* Circular image — no box background */}
                                <div className={`shrink-0 w-12 h-12 rounded-full overflow-hidden border-[3px] shadow-md transition-all duration-300 ${
                                    activeCategory === cat.id
                                        ? "border-[var(--color-gold)] scale-110"
                                        : "border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)]"
                                }`}>
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <h4 className={`text-sm font-semibold font-[var(--font-heading)] leading-tight transition-colors duration-300 ${
                                        activeCategory === cat.id ? "text-[var(--color-gold)]" : "text-[var(--color-primary)] group-hover:text-[var(--color-gold)]"
                                    }`}>
                                        {cat.title}
                                    </h4>
                                    <p className="text-[11px] mt-0.5 font-light text-[var(--color-dark)]/60">
                                        {cat.description}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* CENTER MAP */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[380px] lg:max-w-[460px] xl:max-w-[520px]"
                    >
                        {/* Illustrated map */}
                        <img
                            src="/assets/images/srilanka_illustrated.png"
                            alt="Sri Lanka Illustrated Map"
                            className="w-full h-auto drop-shadow-2xl"
                        />

                        {/* Destination pins overlaid on map */}
                        {destinations.map((dest, i) => (
                            <motion.div
                                key={dest.label}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                                className="absolute"
                                style={{ left: dest.x, top: dest.y, transform: "translate(-50%,-50%)" }}
                            >
                                <div className="flex flex-col items-center gap-1 group cursor-pointer">
                                    {/* Pin dot */}
                                    <div className="w-3 h-3 rounded-full bg-[var(--color-gold)] border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 relative">
                                        <div className="absolute inset-0 rounded-full bg-[var(--color-gold)] animate-ping opacity-60" />
                                    </div>
                                    {/* Label */}
                                    <div className="bg-white/90 backdrop-blur-sm text-[var(--color-primary)] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow whitespace-nowrap border border-[var(--color-gold)]/20 group-hover:bg-[var(--color-gold)] group-hover:text-white transition-all duration-300">
                                        {dest.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* RIGHT CATEGORIES */}
                    <div className="flex flex-col gap-4 items-start pl-2">
                        {rightCategories.map((cat, i) => (
                            <motion.button
                                key={cat.id}
                                initial={{ opacity: 0, x: 30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                                className="flex items-center gap-3 flex-row-reverse text-right group w-[220px]"
                            >
                                {/* Circular image — no box background */}
                                <div className={`shrink-0 w-12 h-12 rounded-full overflow-hidden border-[3px] shadow-md transition-all duration-300 ${
                                    activeCategory === cat.id
                                        ? "border-[var(--color-gold)] scale-110"
                                        : "border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)]"
                                }`}>
                                    <img
                                        src={cat.image}
                                        alt={cat.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div>
                                    <h4 className={`text-sm font-semibold font-[var(--font-heading)] leading-tight transition-colors duration-300 ${
                                        activeCategory === cat.id ? "text-[var(--color-gold)]" : "text-[var(--color-primary)] group-hover:text-[var(--color-gold)]"
                                    }`}>
                                        {cat.title}
                                    </h4>
                                    <p className="text-[11px] mt-0.5 font-light text-[var(--color-dark)]/60">
                                        {cat.description}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
