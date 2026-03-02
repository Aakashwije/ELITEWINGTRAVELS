"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { fleet } from "@/lib/data";

export default function FleetSection() {
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
                    <span className="section-label justify-center">Our Fleet</span>
                    <h2>
                        Travel in{" "}
                        <span className="text-gradient-gold">Absolute Luxury</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4">
                        Our meticulously maintained fleet ensures every journey is as
                        comfortable and stylish as your destination.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {fleet.map((vehicle, i) => (
                        <motion.div
                            key={vehicle.slug}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="group"
                        >
                            <Link href={`/fleet/${vehicle.slug}`} className="block no-underline">
                                <div
                                    className="card-luxury overflow-hidden transition-all duration-500"
                                    style={{ perspective: "1000px" }}
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[#1a4fa0] transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${vehicle.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-[var(--color-gold)] text-white text-xs font-bold rounded-full">
                                                {vehicle.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl mb-1">{vehicle.name}</h3>
                                        <p className="text-sm !text-[var(--color-gold)] font-semibold mb-3">
                                            {vehicle.capacity}
                                        </p>
                                        <p className="text-sm mb-4 line-clamp-2">{vehicle.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {vehicle.features.slice(0, 3).map((f) => (
                                                <span
                                                    key={f}
                                                    className="px-2 py-1 bg-gray-50 text-[var(--color-muted)] text-xs rounded-lg"
                                                >
                                                    {f}
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
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <Link href="/fleet" className="btn-primary">
                        View Full Fleet
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
