"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HeartHandshake, Shield, Sparkles, Target, Gem } from "lucide-react";

export default function HospitalitySection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="section-luxury-lg bg-[var(--color-sky)]" ref={ref}>
            <div className="container-luxury">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative mx-auto max-w-[400px] lg:max-w-none"
                    >
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-[6px] border-[var(--color-gold)] ring-[6px] ring-white bg-white">
                            {/* Decorative background aura */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-transparent opacity-10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
                            
                            <img 
                                src="/assets/images/ayubowan.png" 
                                alt="Sri Lankan Ayubowan Greeting" 
                                className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
                            />
                        </div>

                        {/* Decorative Gold Frame */}
                        <div className="absolute -inset-4 border-2 border-[var(--color-gold)]/30 rounded-[3rem] -z-10 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="section-label">Our Philosophy</span>
                        <h2 className="mb-6 text-4xl md:text-5xl font-bold leading-tight">
                            <span className="text-gradient-gold">Ayubowan</span> –<br />                   
                            <span className="font-light">May You Live Long</span>
                        </h2>
                        <p className="mb-6 text-lg md:text-xl text-[var(--color-dark)]/80 font-light leading-relaxed">
                            In Sri Lanka, every journey begins with <em className="text-[var(--color-gold)] font-medium not-italic">Ayubowan</em> – a
                            greeting that means &ldquo;may you live long.&rdquo; It embodies
                            the warmth, generosity, and genuine care that defines Sri Lankan
                            hospitality.
                        </p>
                        <p className="mb-10 text-base md:text-lg text-[var(--color-dark)]/70 font-light leading-relaxed">
                            At EliteWing Travels, we carry this philosophy into everything we
                            do. From your first inquiry to your fond farewell, every detail is
                            handled with meticulous care, ensuring your experience is not just
                            a tour – but a cherished memory that lasts a lifetime.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                            {[
                                { icon: Shield, title: "Safety First", desc: "Licensed, insured & professional" },
                                { icon: Sparkles, title: "Premium Service", desc: "5-star quality guaranteed" },
                                { icon: Target, title: "Personalized", desc: "Tailored to your desires" },
                                { icon: Gem, title: "Authentic", desc: "Genuine cultural immersion" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
                                    className="group relative bg-white rounded-2xl border border-[var(--color-gold)]/15 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.12)] hover:-translate-y-2 transition-all duration-500 p-7 text-center flex flex-col items-center overflow-hidden"
                                >
                                    {/* Hover background wash */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                                    {/* In-flow icon — no absolute, lives naturally in the card */}
                                    <div className="mb-5 w-16 h-16 bg-[var(--color-primary)] rounded-full border-[4px] border-[var(--color-gold)]/20 shadow-md flex items-center justify-center text-[var(--color-gold)] group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:text-white transition-all duration-500 relative z-10 shrink-0">
                                        <item.icon size={24} strokeWidth={2} />
                                    </div>

                                    <h4 className="text-[1.1rem] font-[var(--font-heading)] font-semibold text-[var(--color-primary)] tracking-wide mb-3 relative z-10">
                                        {item.title}
                                    </h4>

                                    {/* Expanding separator line */}
                                    <div className="w-8 h-[1px] bg-[var(--color-gold)]/50 mx-auto mb-4 group-hover:w-14 transition-all duration-500 relative z-10" />

                                    <p className="text-[14px] text-[var(--color-dark)]/70 leading-relaxed font-light relative z-10 px-2">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
