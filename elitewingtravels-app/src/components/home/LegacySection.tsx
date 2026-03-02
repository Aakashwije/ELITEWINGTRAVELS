"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/lib/data";

function AnimatedCounter({
    target,
    suffix,
    inView,
}: {
    target: number;
    suffix: string;
    inView: boolean;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span className="text-gradient-gold text-5xl md:text-6xl font-bold font-[var(--font-heading)]">
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

const timelineEvents = [
    { year: "2005", title: "Founded", desc: "EliteWing Travels established in Colombo" },
    { year: "2010", title: "Fleet Expansion", desc: "Luxury coach fleet introduced" },
    { year: "2015", title: "International Recognition", desc: "TripAdvisor Certificate of Excellence" },
    { year: "2020", title: "Digital Transformation", desc: "Online booking & virtual tours launched" },
    { year: "2026", title: "21 Years Strong", desc: "10,000+ travelers served, premium service leader" },
];

export default function LegacySection() {
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
                    <span className="section-label justify-center">Our Legacy</span>
                    <h2>
                        Established <span className="text-gradient-gold">2005</span>
                    </h2>
                    <p className="max-w-xl mx-auto mt-4">
                        21 years of crafting unforgettable luxury travel experiences across
                        Sri Lanka with dedication, passion, and excellence.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <AnimatedCounter
                                target={stat.value}
                                suffix={stat.suffix}
                                inView={inView}
                            />
                            <p className="mt-2 font-semibold text-sm">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline */}
                <div className="relative max-w-3xl mx-auto">
                    <div className="timeline-line hidden md:block" />
                    {timelineEvents.map((event, i) => (
                        <motion.div
                            key={event.year}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                            className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                }`}
                        >
                            <div className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                <div className="card-luxury p-6">
                                    <span className="text-[var(--color-gold)] font-bold text-lg font-[var(--font-heading)]">
                                        {event.year}
                                    </span>
                                    <h4 className="text-lg mt-1 mb-1">{event.title}</h4>
                                    <p className="text-sm">{event.desc}</p>
                                </div>
                            </div>
                            {/* Center dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--color-gold)] border-4 border-white shadow-lg hidden md:block z-10" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
