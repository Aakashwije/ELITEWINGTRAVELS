"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const journeys = [
  {
    title: "Authentic Ceylon",
    image: "/destinations/sigiriya-gen.png",
    href: "/tours/authentic",
    tag: "Culture & Heritage",
  },
  {
    title: "Adventurous Spirit",
    image: "/destinations/ella-gen.png",
    href: "/tours/adventure",
    tag: "Adventure",
  },
  {
    title: "Barefoot Luxury",
    image: "/destinations/bentota-gen.png",
    href: "/tours/luxury",
    tag: "Beach & Wellness",
  },
  {
    title: "Following the Wild",
    image: "/destinations/yala-gen.png",
    href: "/tours/wildlife",
    tag: "Wildlife",
  },
  {
    title: "Romantic Serendipity",
    image: "/destinations/galle-gen.png",
    href: "/tours/honeymoon",
    tag: "Honeymoon",
  },
  {
    title: "EliteWing Experiences",
    image: "/destinations/kandy-gen.png",
    href: "/experiences",
    tag: "Culture",
  },
];

export default function JourneySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section-luxury !pb-44"
      style={{
        background: 'linear-gradient(to bottom, #fafafa, #fafafa 85%, #f5f4f0)'
      }}
      ref={ref}
    >
      {/* Header */}
      <div className="container-luxury text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="section-label justify-center mb-4 inline-flex">What&apos;s your journey?</span>
          <h2 className="mb-5 text-center">Your adventure. Your way.</h2>
          <p className="max-w-2xl text-center">
            Discover a curated collection of signature itineraries, thoughtfully designed to
            showcase the diverse beauty of Sri Lanka. Whether you seek wild escapes, serene shores,
            or cultural deep dives, your perfect journey awaits.
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="container-luxury px-0 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">
          {journeys.map((journey, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div
                className="group relative block h-[400px] md:h-[460px] overflow-hidden md:rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-500 cursor-default"
                style={{ position: "relative" }}
              >
                {/* Photo — plain img for reliability, styled to fill */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={journey.image}
                  alt={journey.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent z-[1]" />

                {/* Tag pill – top-left */}
                <div className="absolute top-4 left-4 z-[2]">
                  <span className="inline-block bg-black/35 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/15">
                    {journey.tag}
                  </span>
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-1 left-2 right-0 p-8 pb-12 z-[2]">
                  <h3 className="!text-white text-2xl font-bold mb-3 transform translate-y-0 group-hover:translate-y-[-4px] transition-transform duration-300">
                    {journey.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="h-0.5 bg-[var(--color-gold)] w-8 group-hover:w-14 transition-all duration-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container-luxury mt-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-[#a3a300] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            Browse all itineraries
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </Link>
          <Link
            href="/#tour-builder"
            className="inline-flex items-center gap-2 text-[#a3a300] font-semibold text-sm tracking-wide hover:opacity-80 transition-opacity"
          >
            Build a custom journey
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
