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
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <div className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }} 
                                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                        className="mb-4 flex justify-center"
                                    >
                                        <HeartHandshake size={80} strokeWidth={1} />
                                    </motion.div>
                                    <p className="text-xl font-[var(--font-heading)] italic">
                                        Ayubowan
                                    </p>
                                    <p className="text-sm mt-2 opacity-80">
                                        Traditional Sri Lankan Greeting
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[var(--color-gold)] rounded-3xl -z-10" />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="section-label">Our Philosophy</span>
                        <h2 className="mb-6">
                            <span className="text-gradient-gold">Ayubowan</span> –<br />
                            May You Live Long
                        </h2>
                        <p className="mb-6 text-lg">
                            In Sri Lanka, every journey begins with <em>Ayubowan</em> – a
                            greeting that means &ldquo;may you live long.&rdquo; It embodies
                            the warmth, generosity, and genuine care that defines Sri Lankan
                            hospitality.
                        </p>
                        <p className="mb-8">
                            At EliteWing Travels, we carry this philosophy into everything we
                            do. From your first inquiry to your fond farewell, every detail is
                            handled with meticulous care, ensuring your experience is not just
                            a tour – but a cherished memory that lasts a lifetime.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Shield, title: "Safety First", desc: "Licensed, insured & professional" },
                                { icon: Sparkles, title: "Premium Service", desc: "5-star quality guaranteed" },
                                { icon: Target, title: "Personalized", desc: "Tailored to your desires" },
                                { icon: Gem, title: "Authentic", desc: "Genuine cultural immersion" },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                                    className="bg-white rounded-2xl p-5 shadow-sm"
                                >
                                    <motion.div 
                                        whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
                                        transition={{ duration: 0.5 }}
                                        className="mb-3 text-[var(--color-primary)] inline-block"
                                    >
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </motion.div>
                                    <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                                    <p className="!text-xs !text-[var(--color-muted)]">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
