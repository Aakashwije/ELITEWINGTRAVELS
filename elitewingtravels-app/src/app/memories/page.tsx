"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { memories, extraMemories } from "@/lib/data";

export default function MemoriesPage() {
    const allMemories = [...memories, ...extraMemories];

    return (
        <div className="min-h-screen bg-[var(--color-background)]">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--color-sky)]">
                <div className="container-luxury relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="section-label mb-4 inline-block"
                    >
                        Captured Moments
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-6"
                    >
                        Our Travel <span className="text-gradient-gold">Memories</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-[var(--color-muted)]"
                    >
                        A glimpse into the unforgettable journeys we&apos;ve shared with our wonderful travelers across the emerald isle of Sri Lanka.
                    </motion.p>
                </div>

                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-gold opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl -ml-32 -mb-32"></div>
            </section>

            {/* Gallery Grid */}
            <section className="section-luxury">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allMemories.map((memory, index) => (
                            <motion.div
                                key={`${memory.id}-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
                            >
                                <Image
                                    src={memory.image}
                                    alt={memory.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-[var(--color-gold)] font-medium mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        EliteWing Travels
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 text-center">
                        <Link href="/" className="btn-primary">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
