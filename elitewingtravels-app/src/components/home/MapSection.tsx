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
                            {/* Accurate Sri Lanka outline generated from GeoJSON */}
                            <path
                                d="M26.799,10.216L25.073,10.514L23.652,8.627L23.347,7.782L23.652,7.236L24.058,6.938L24.566,7.037L25.175,8.825ZM24.16,26.789L24.972,28.921L22.637,27.483L21.114,26.243L20.504,25.252L23.753,26.343ZM27.206,5L29.845,5.149L32.79,5.05L34.821,5.447L38.273,9.868L47.715,17.761L52.894,25.797L53.3,27.533L54.011,29.02L55.229,29.466L56.346,30.16L61.423,37.889L62.032,39.424L61.93,41.107L62.235,42.345L63.656,42.989L65.281,43.286L66.398,44.474L67.819,50.609L67.819,52.539L68.124,53.379L74.622,62.921L75.028,64.107L74.927,64.996L75.13,65.737L76.348,67.417L78.379,71.961L79.293,72.998L80.511,76.996L80.613,84.596L80.206,87.999L78.988,92.141L77.567,96.134L75.942,99.042L73.81,101.506L66.601,106.728L64.469,107.811L55.026,111.061L48.122,114.163L41.623,115L35.227,113.326L30.353,109.239L27.916,103.23L26.19,96.972L23.652,90.021L21.824,68.553L20.91,62.525L19.387,54.863L19.591,51.549L20.606,48.383L20.606,55.358L21.52,56.198L22.23,55.308L22.941,48.086L23.449,45.018L25.987,37.047L26.089,35.61L25.581,32.588L25.683,31.101L29.541,25.5L30.455,22.227L30.962,18.903L30.759,15.28L30.049,11.706L33.196,12.848L34.922,14.089L36.648,14.933L38.07,14.486L39.694,14.486L38.577,12.55L34.922,10.762L28.932,9.67L27.104,8.229L26.393,6.987L26.698,5.547Z"
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
