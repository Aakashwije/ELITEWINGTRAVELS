"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { memories } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-luxury-lg" ref={ref}>
            <div className="container-luxury">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="section-label mb-4 inline-block">Tales of travels</span>
                    <h2>
                        Stories from <span className="text-gradient-gold">all over</span>
                    </h2>
                </motion.div>

                {/* Image Tiles Grid */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                    >
                        {memories.map((memory, index) => (
                            <motion.div
                                key={memory.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                className="group relative aspect-square overflow-hidden rounded-xl cursor-default"
                            >
                                <Image
                                    src={memory.image}
                                    alt={memory.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                    <span className="text-white text-xs font-semibold tracking-wider uppercase">
                                        {memory.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* View More Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="text-center mt-12"
                    >
                        <Link href="/memories" className="btn-secondary group">
                            <span>View more memories</span>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
