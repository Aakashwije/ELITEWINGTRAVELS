"use client";

import { useRef } from "react";
import Link from "next/link";
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {destinations.map((dest, i) => (
                        <motion.div
                            key={dest.slug}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <Link href={`/destinations/${dest.slug}`} className="block no-underline group">
                                <div className="card-luxury overflow-hidden">
                                    <div className="relative h-72 overflow-hidden">
                                        <div
                                            className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] to-[#0a2d6b] transition-transform duration-700 group-hover:scale-110"
                                        >
                                            <span className="text-white/20 text-6xl font-bold">{dest.name.charAt(0)}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-5 right-5">
                                            <span className="inline-block px-3 py-1 bg-[var(--color-gold)] text-white text-xs font-semibold rounded-full mb-2">
                                                {dest.bestTime}
                                            </span>
                                            <h3 className="!text-white text-2xl mb-1">{dest.name}</h3>
                                            <p className="!text-white/80 text-sm">{dest.tagline}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm mb-4 line-clamp-2">
                                            {dest.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {dest.highlights.slice(0, 3).map((h) => (
                                                <span
                                                    key={h}
                                                    className="px-3 py-1 bg-[var(--color-sky)] text-[var(--color-primary)] text-xs font-medium rounded-full"
                                                >
                                                    {h}
                                                </span>
                                            ))}
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
                    className="text-center mt-12"
                >
                    <Link href="/destinations" className="btn-primary">
                        View All Destinations
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
