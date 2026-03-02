"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="container-luxury flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 no-underline">
                    <div className="flex flex-col">
                        <span
                            className={`font-[var(--font-heading)] text-xl font-bold tracking-wide transition-colors duration-300 ${scrolled ? "text-[var(--color-primary)]" : "text-white"
                                }`}
                        >
                            ELITEWING
                        </span>
                        <span
                            className={`text-[0.65rem] font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${scrolled ? "text-[var(--color-gold)]" : "text-[var(--color-gold)]"
                                }`}
                        >
                            TRAVELS
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium tracking-wide no-underline transition-colors duration-300 hover:text-[var(--color-gold)] ${scrolled ? "text-[var(--color-dark)]" : "text-white"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/contact" className="btn-primary !py-3 !px-6 !text-sm">
                        Book Now
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
                    aria-label="Toggle menu"
                >
                    {[0, 1, 2].map((i) => (
                        <motion.span
                            key={i}
                            className={`block w-6 h-0.5 rounded transition-colors ${scrolled ? "bg-[var(--color-dark)]" : "bg-white"
                                }`}
                            animate={
                                mobileOpen
                                    ? i === 0
                                        ? { rotate: 45, y: 8 }
                                        : i === 1
                                            ? { opacity: 0 }
                                            : { rotate: -45, y: -8 }
                                    : { rotate: 0, y: 0, opacity: 1 }
                            }
                            transition={{ duration: 0.3 }}
                        />
                    ))}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white shadow-xl overflow-hidden"
                    >
                        <div className="container-luxury py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-[var(--color-dark)] font-medium text-lg no-underline py-2 border-b border-gray-100 hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary text-center mt-2"
                            >
                                Book Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
