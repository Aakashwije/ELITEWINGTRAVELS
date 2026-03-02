"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { mapHotspots } from "@/lib/data";

export default function MapSection() {
    const [activeSpot, setActiveSpot] = useState<string | null>(null);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const activeData = mapHotspots.find((h) => h.id === activeSpot);

    return (
        <section className="section-luxury-lg" ref={ref}>
            <div className="container-luxury">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="section-label justify-center">Explore Sri Lanka</span>
                    <h2>
                        Discover Extraordinary{" "}
                        <span className="text-gradient-gold">Destinations</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4">
                        Click on the map to explore Sri Lanka&apos;s most captivating
                        regions, each offering unique experiences and unforgettable moments.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* SVG Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-full lg:w-1/2 max-w-md mx-auto"
                    >
                        <svg
                            viewBox="0 0 100 120"
                            className="w-full h-auto drop-shadow-2xl"
                        >
                            {/* Simplified Sri Lanka outline */}
                            <path
                                d="M45 8 C35 12, 30 20, 28 30 C26 38, 30 42, 32 48 C33 52, 30 58, 28 65 C26 72, 25 78, 30 85 C35 92, 38 98, 42 105 C46 110, 50 112, 54 108 C58 104, 62 95, 65 88 C68 80, 68 72, 66 65 C64 58, 65 52, 66 45 C67 38, 66 30, 62 22 C58 14, 52 8, 45 8Z"
                                fill="url(#mapGradient)"
                                stroke="var(--color-gold)"
                                strokeWidth="0.8"
                                className="drop-shadow-lg"
                            />
                            <defs>
                                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="#0a2d6b" />
                                </linearGradient>
                            </defs>

                            {/* Hotspots */}
                            {mapHotspots.map((spot) => (
                                <g
                                    key={spot.id}
                                    className="map-hotspot"
                                    onClick={() =>
                                        setActiveSpot(activeSpot === spot.id ? null : spot.id)
                                    }
                                >
                                    <circle
                                        cx={spot.x}
                                        cy={spot.y}
                                        r="3"
                                        fill="var(--color-gold)"
                                        className="animate-pulse-glow"
                                    />
                                    <circle
                                        cx={spot.x}
                                        cy={spot.y}
                                        r="5"
                                        fill="none"
                                        stroke="var(--color-gold)"
                                        strokeWidth="0.5"
                                        opacity="0.5"
                                    >
                                        <animate
                                            attributeName="r"
                                            from="4"
                                            to="8"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                        <animate
                                            attributeName="opacity"
                                            from="0.6"
                                            to="0"
                                            dur="2s"
                                            repeatCount="indefinite"
                                        />
                                    </circle>
                                    <text
                                        x={spot.x + 6}
                                        y={spot.y + 1}
                                        fill="white"
                                        fontSize="3.5"
                                        fontFamily="var(--font-body)"
                                        fontWeight="600"
                                    >
                                        {spot.label}
                                    </text>
                                </g>
                            ))}
                        </svg>
                    </motion.div>

                    {/* Info Panel */}
                    <div className="w-full lg:w-1/2">
                        <AnimatePresence mode="wait">
                            {activeData ? (
                                <motion.div
                                    key={activeData.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                    className="card-luxury p-8"
                                >
                                    <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)]">
                                        {activeData.category}
                                    </span>
                                    <h3 className="text-3xl mt-2 mb-3">{activeData.label}</h3>
                                    <p className="text-lg">{activeData.description}</p>
                                    <a
                                        href={`/destinations/${activeData.id}`}
                                        className="btn-primary mt-6 inline-flex"
                                    >
                                        Explore {activeData.label}
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-center lg:text-left"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {mapHotspots.map((spot, i) => (
                                            <motion.button
                                                key={spot.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                                onClick={() => setActiveSpot(spot.id)}
                                                className="card-luxury p-5 text-left cursor-pointer border-none bg-white"
                                            >
                                                <span className="text-xs font-semibold tracking-widest uppercase text-[var(--color-gold)]">
                                                    {spot.category}
                                                </span>
                                                <h4 className="text-lg mt-1">{spot.label}</h4>
                                                <p className="text-sm mt-1 !text-[var(--color-muted)]">
                                                    {spot.description}
                                                </p>
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
