"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Tour } from "@/lib/data";

export default function TourDetailClient({ tour }: { tour: Tour }) {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* Overview + Highlights */}
            <section className="section-luxury">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="mb-4">Overview</h2>
                            <p className="text-lg leading-relaxed">{tour.description}</p>

                            {/* Itinerary */}
                            <h2 className="mt-16 mb-8">Day-by-Day Itinerary</h2>
                            <div className="space-y-6">
                                {tour.itinerary.map((day, i) => (
                                    <motion.div
                                        key={day.day}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex gap-6"
                                    >
                                        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center">
                                            <div className="text-center">
                                                <span className="text-[var(--color-gold)] text-xs font-semibold block">
                                                    DAY
                                                </span>
                                                <span className="text-white text-xl font-bold">
                                                    {day.day}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-1 pb-6 border-b border-gray-100">
                                            <h4 className="text-lg mb-1">{day.title}</h4>
                                            <p className="text-sm">{day.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Booking Card */}
                            <div className="card-luxury p-6 sticky top-24">
                                <h3 className="text-xl mb-4">Book This Tour</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-muted)]">Duration</span>
                                        <span className="font-semibold">{tour.duration}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[var(--color-muted)]">Price</span>
                                        <span className="font-semibold text-[var(--color-gold)]">
                                            {tour.price}
                                        </span>
                                    </div>
                                </div>
                                <Link href="/contact" className="btn-primary w-full justify-center">
                                    Inquire Now
                                </Link>
                                <p className="text-xs text-center text-[var(--color-muted)] mt-3">
                                    Free cancellation up to 48 hours before
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="card-luxury p-6">
                                <h4 className="text-lg mb-4">Highlights</h4>
                                <ul className="space-y-3">
                                    {tour.highlights.map((h) => (
                                        <li key={h} className="flex items-start gap-3">
                                            <span className="text-[var(--color-gold)] mt-0.5">✦</span>
                                            <span className="text-sm">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Includes / Excludes */}
            <section className="section-luxury bg-[var(--color-sky)]">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card-luxury p-8">
                            <h3 className="text-xl mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-sm">
                                    ✓
                                </span>
                                Included
                            </h3>
                            <ul className="space-y-3">
                                {tour.includes.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm">
                                        <span className="text-green-500 mt-0.5">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-luxury p-8">
                            <h3 className="text-xl mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-sm">
                                    ✕
                                </span>
                                Not Included
                            </h3>
                            <ul className="space-y-3">
                                {tour.excludes.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm">
                                        <span className="text-red-400 mt-0.5">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section-luxury">
                <div className="container-luxury max-w-3xl">
                    <h2 className="text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {tour.faq.map((item, i) => (
                            <div key={i} className="card-luxury overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer bg-transparent border-none"
                                >
                                    <h4 className="text-base pr-4">{item.question}</h4>
                                    <span
                                        className={`text-[var(--color-gold)] text-xl transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="px-6 pb-6"
                                    >
                                        <p className="text-sm">{item.answer}</p>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-luxury bg-[var(--color-primary)]">
                <div className="container-luxury text-center">
                    <h2 className="!text-white mb-4">Ready to Experience This Journey?</h2>
                    <p className="!text-white/70 max-w-xl mx-auto mb-8">
                        Contact our travel experts to customize this tour and start planning
                        your dream Sri Lanka adventure.
                    </p>
                    <Link href="/contact" className="btn-white">
                        Start Planning
                    </Link>
                </div>
            </section>
        </>
    );
}
