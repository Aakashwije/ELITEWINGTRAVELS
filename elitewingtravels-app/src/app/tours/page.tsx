"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const tourPosters = [
    { id: 1, image: "/tour itinaries/tour itinary 1.png", title: "Tour Itinerary 1" },
    { id: 2, image: "/tour itinaries/tour itinary 2.png", title: "Tour Itinerary 2" },
    { id: 3, image: "/tour itinaries/tour itinary 3.png", title: "Tour Itinerary 3" },
    { id: 4, image: "/tour itinaries/tour itinary 4.png", title: "Tour Itinerary 4" },
    { id: 5, image: "/tour itinaries/tour itinary 5.png", title: "Tour Itinerary 5" },
];

export default function ToursPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[70vh] md:h-[80vh] min-h-[450px] md:min-h-[550px] flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/about-page.jpeg')] bg-cover bg-center opacity-85" />
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Curated Experiences
                    </span>
                    <h1 className="!text-white mb-4">
                        Luxury <span className="text-gradient-gold">Tours</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        Every journey is crafted with meticulous attention to detail,
                        ensuring an unforgettable Sri Lankan experience.
                    </p>
                </div>
            </section>

            {/* Tour Posters Section */}
            <section className="section-luxury-lg bg-[var(--color-background)]">
                <div className="container-luxury">
                    <div className="text-center mb-12">
                        <span className="section-label mb-4 inline-block">Our Packages</span>
                        <h2>
                            Tour <span className="text-gradient-gold">Itineraries</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourPosters.map((poster, index) => (
                            <motion.div
                                key={poster.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white"
                            >
                                {/* Poster Image */}
                                <div className="relative w-full aspect-[3/4]">
                                    <Image
                                        src={poster.image}
                                        alt={poster.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Hover Overlay with Book Now Button */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                                    <Link
                                        href="/contact"
                                        className="btn-primary transform scale-90 group-hover:scale-100 transition-transform duration-300"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA */}
            <section className="section-luxury bg-[var(--color-primary)]">
                <div className="container-luxury text-center">
                    <h2 className="!text-white mb-4">
                        Can&apos;t Find Your Perfect Tour?
                    </h2>
                    <p className="!text-white/70 text-lg max-w-xl mx-auto mb-8">
                        Let us design a bespoke journey tailored exclusively to your
                        preferences and desires.
                    </p>
                    <Link href="/contact" className="btn-white">
                        Design a Custom Tour
                    </Link>
                </div>
            </section>
        </>
    );
}
