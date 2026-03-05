"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { destinations } from "@/lib/data";

export default function DestinationsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-luxury-lg bg-[var(--color-sky)]" ref={ref}>
            <div className="container-luxury">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-4 inline-block">Fortresses, forests, temples, treasures</span>
                    <h2>
                        Magical destinations
                    </h2>
                    <p className="max-w-xl mx-auto mt-4">
                        Discover the diverse allure of Sri Lanka with our carefully selected magical escapes.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations
                        .filter(dest => ["sigiriya", "arugambay", "bentota", "colombo", "galle", "ella"].includes(dest.slug))
                        .map((dest, i) => (
                            <motion.div
                                key={dest.slug}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                            >
                                <Link href={`/destinations/${dest.slug}`} className="block no-underline group">
                                    <div className="card-luxury overflow-hidden">
                                        <div className="relative h-72 overflow-hidden group">
                                            <div
                                                className="w-full h-full bg-[var(--color-primary)] transition-transform duration-700 group-hover:scale-110"
                                                style={{
                                                    backgroundImage: `url(${dest.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />
                                            {/* Static overlay (Always visible) */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                                            {/* Hover overlay (Visible on hover) */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                                            {/* Static Content (Hidden on hover) */}
                                            <div className="absolute bottom-4 left-5 right-5 transition-transform duration-500 group-hover:translate-y-8 group-hover:opacity-0">
                                                <span className="inline-block px-3 py-1 bg-[var(--color-gold)] text-white text-xs font-semibold rounded-full mb-2">
                                                    {dest.bestTime}
                                                </span>
                                                <h3 className="!text-white text-2xl mb-1">{dest.name}</h3>
                                            </div>

                                            {/* Hover Content (Visible on hover) */}
                                            <div className="absolute inset-x-5 bottom-5 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                                <h3 className="!text-white text-2xl mb-2">{dest.name}</h3>
                                                <p className="text-white/90 text-sm mb-3 line-clamp-3">
                                                    {dest.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {dest.highlights.slice(0, 3).map((h) => (
                                                        <span
                                                            key={h}
                                                            className="px-2 py-1 bg-white/20 text-white text-[10px] font-medium rounded-full backdrop-blur-sm"
                                                        >
                                                            {h}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-24 flex flex-col items-center"
                >
                    <div className="flex items-center gap-2 mb-6 text-sm text-gray-800">
                        Your voyage of discovery begins here.
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mb-2 leading-tight">
                        Discover paradise, the EliteWing way
                    </h3>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-12 font-normal">
                        Your journey: your plan.
                    </h3>

                    <Link
                        href="/destinations"
                        className="inline-flex items-center gap-2 text-[#a3a300] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
                    >
                        View all destinations
                        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
