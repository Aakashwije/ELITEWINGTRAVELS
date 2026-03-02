"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[998] bg-white/95 backdrop-blur-lg border-t border-gray-100 py-3 px-4 lg:hidden"
                >
                    <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
                        <div>
                            <p className="!text-[var(--color-dark)] font-semibold text-sm !m-0">
                                Plan Your Dream Trip
                            </p>
                            <p className="!text-[var(--color-muted)] text-xs !m-0">
                                Private tours from $99/day
                            </p>
                        </div>
                        <Link href="/contact" className="btn-primary !py-2.5 !px-5 !text-xs">
                            Inquire Now
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
