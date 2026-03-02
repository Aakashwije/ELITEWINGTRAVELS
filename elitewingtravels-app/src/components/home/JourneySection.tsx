"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const journeys = [
  {
    title: "Authentic Ceylon",
    image: "/destinations/sigiriya.jpg", // placeholder, assuming available
    href: "/tours/authentic",
  },
  {
    title: "Adventurous Spirit",
    image: "/destinations/ella.jpg",
    href: "/tours/adventure",
  },
  {
    title: "Barefoot Luxury",
    image: "/destinations/bentota.jpg",
    href: "/tours/luxury",
  },
  {
    title: "Following the Wild",
    image: "/destinations/yala.jpg",
    href: "/tours/wildlife",
  },
  {
    title: "Romantic Serendipity",
    image: "/destinations/galle.jpg",
    href: "/tours/honeymoon",
  },
  {
    title: "EliteWing Experiences",
    image: "/destinations/kandy.jpg",
    href: "/experiences",
  },
];

export default function JourneySection() {
  return (
    <section className="section-luxury bg-[#fafafa]">
      <div className="container-luxury text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label mb-4 inline-block">What's your journey?</span>
          <h2 className="mb-6">Your adventure. Your way.</h2>
          <p className="max-w-2xl mx-auto">
            Discover a curated collection of signature itineraries, thoughtfully designed to showcase the diverse beauty of Sri Lanka. 
            Whether you seek wild escapes, serene shores, or cultural deep dives, your perfect journey awaits.
          </p>
        </motion.div>
      </div>

      <div className="container-luxury px-0 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-6">
          {journeys.map((journey, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={journey.href} className="group relative block h-[400px] md:h-[450px] overflow-hidden md:rounded-xl">
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--color-primary)] to-[#0a2d6b] flex items-center justify-center transition-transform duration-700 group-hover:scale-110">
                  <span className="text-white/20 text-[6rem] font-bold">{journey.title.charAt(0)}</span>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-[2] flex flex-col items-center justify-end h-full text-center">
                  <h3 className="text-white text-2xl font-bold mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {journey.title}
                  </h3>
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 pb-2">
                    <span className="inline-block border-b-2 border-[var(--color-gold)] text-white pb-1 font-medium tracking-wider text-sm uppercase">
                      View Tour
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
