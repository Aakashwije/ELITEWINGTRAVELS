"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials, memories } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialsSection() {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const t = testimonials[current];

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

                <div className="max-w-3xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            {/* Avatar */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold overflow-hidden">
                                {t.name.charAt(0)}
                            </div>

                            {/* Stars */}
                            <div className="flex justify-center gap-1 mb-6">
                                {Array.from({ length: t.rating }).map((_, i) => (
                                    <svg
                                        key={i}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="var(--color-gold)"
                                    >
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="text-xl md:text-2xl font-[var(--font-heading)] italic text-[var(--color-dark)] leading-relaxed mb-6 px-4">
                                &ldquo;{t.quote}&rdquo;
                            </blockquote>

                            {/* Name & Country */}
                            <p className="font-semibold text-[var(--color-dark)] text-lg !mb-1">
                                {t.name}
                            </p>
                            <p className="!text-[var(--color-muted)] text-sm">{t.country}</p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="flex justify-center gap-2 mt-10">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 border-none cursor-pointer ${i === current
                                    ? "bg-[var(--color-gold)] w-8"
                                    : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                                aria-label={`Testimonial ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Image Tiles Grid */}
                <div className="mt-24">
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
