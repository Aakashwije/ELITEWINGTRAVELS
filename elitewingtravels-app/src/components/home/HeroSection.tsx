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
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Fallback to simple img tag to guarantee visibility and avoid Next.js Image fill layout issues */}
                <img
                    src="/assets/images/home1.jpg"
                    alt="EliteWing Travels Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark blue gradient overlay to maintain text readability over the image */}
                <div className="absolute inset-0 bg-[#061a3d]/40 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4 w-full">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                    className="container-luxury relative z-10 w-full max-w-6xl mx-auto backdrop-blur-md bg-white/5 border border-white/20 p-8 py-16 md:p-16 md:py-24 lg:p-20 lg:py-32 rounded-3xl shadow-2xl overflow-hidden min-h-[300px] flex flex-col justify-center"
                >
                    {/* Glassmorphism ambient glow */}
                    <div className="absolute top-0 left-1/2 -top-10 -translate-x-1/2 w-3/4 h-24 bg-[var(--color-gold)]/20 blur-[60px] pointer-events-none" />
                    
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mb-8"
                    >
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white shadow-lg text-xs md:text-sm font-semibold tracking-widest uppercase">
                            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-gold)] animate-pulse-glow" />
                            EliteWing Travels • Since 2005
                        </span>
                    </motion.div>

                    <h1
                        ref={headlineRef}
                        className="!text-white text-5xl md:text-6xl lg:text-[5.5rem] font-bold mb-6 leading-[1.1] tracking-tight text-shadow-lg drop-shadow-md"
                    >
                        The Home of Sri Lankan Hospitality
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="!text-white/90 text-lg md:text-2xl max-w-2xl mx-auto mb-10 font-light tracking-wide drop-shadow-md"
                    >
                        Your adventure. Your way, beautifully crafted.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="/tours" className="btn-primary !bg-[var(--color-gold)] !border-[var(--color-gold)] !text-white hover:!bg-white hover:!text-[var(--color-gold)] shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                            Explore Journeys
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <Link href="/contact#tour-builder" className="btn-white !bg-transparent !border-white/50 !text-white hover:!bg-white hover:!text-[var(--color-primary)] shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                            Design Your Private Tour
                        </Link>
                    </motion.div>
                </motion.div>
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
