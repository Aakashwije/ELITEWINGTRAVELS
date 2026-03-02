"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        let gsapModule: typeof import("gsap") | null = null;

        const initGSAP = async () => {
            gsapModule = await import("gsap");
            const gsap = gsapModule.gsap || gsapModule.default;

            if (headlineRef.current) {
                const text = headlineRef.current.innerText;
                headlineRef.current.innerHTML = text
                    .split("")
                    .map(
                        (char) =>
                            `<span style="display:inline-block;opacity:0;transform:translateY(60px)">${char === " " ? "&nbsp;" : char
                            }</span>`
                    )
                    .join("");

                const spans = headlineRef.current.querySelectorAll("span");
                gsap.to(spans, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.03,
                    ease: "power3.out",
                    delay: 0.5,
                });
            }
        };

        initGSAP();
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="/hero-poster.jpg"
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Fallback gradient if no video */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]" />
            </div>

            {/* Overlay */}
            <div className="hero-overlay absolute inset-0 z-[1]" />

            {/* Content */}
            <div className="relative z-[2] h-full flex items-center justify-center text-center">
                <div className="container-luxury">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse-glow" />
                            Since 2005 • 21 Years of Excellence
                        </span>
                    </motion.div>

                    <h1
                        ref={headlineRef}
                        className="!text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Experience Sri Lanka Like Never Before
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="!text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light tracking-wide"
                    >
                        Private Tours. Luxury Fleet. Authentic Hospitality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link href="/tours" className="btn-white">
                            Explore Journeys
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/contact#tour-builder" className="btn-secondary !border-white/40 !text-white hover:!bg-white/10">
                            Design Your Private Tour
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2"
            >
                <span className="text-white/60 text-xs tracking-widest uppercase">
                    Scroll to Explore
                </span>
                <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)]"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
