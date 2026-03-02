"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

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
                    <span className="section-label justify-center">Testimonials</span>
                    <h2>
                        What Our <span className="text-gradient-gold">Guests Say</span>
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
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold overflow-hidden">
                                <div
                                    className="w-full h-full"
                                    style={{
                                        backgroundImage: `url(${t.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                />
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
            </div>
        </section>
    );
}
