import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/data";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--color-dark)] text-white">
            {/* Main Footer */}
            <div className="section-luxury">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Brand */}
                        <div>
                            <div className="mb-6 flex items-center gap-4">
                                <img 
                                    src="/assets/images/elitewing.png" 
                                    alt="EliteWing Travels Logo" 
                                    className="w-14 h-14 object-cover rounded-full border border-white/20 shadow-lg"
                                />
                                <div>
                                    <h3 className="!text-white text-2xl mb-1">ELITEWING</h3>
                                    <span className="text-[var(--color-gold)] text-xs tracking-[0.3em] font-semibold">
                                        TRAVELS
                                    </span>
                                </div>
                            </div>
                            <p className="!text-gray-400 text-sm leading-relaxed mb-6">
                                Premium luxury travel experiences in Sri Lanka since 2005.
                                Discover authentic hospitality with our curated journeys.
                            </p>
                            <div className="flex gap-4">
                                {Object.entries(siteConfig.social).map(([platform, url]) => (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[var(--color-gold)] transition-all duration-300 no-underline text-sm"
                                        aria-label={platform}
                                    >
                                        {platform[0].toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="!text-white text-lg mb-6">Quick Links</h4>
                            <ul className="space-y-3 list-none">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-[var(--color-gold)] transition-colors no-underline text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Destinations */}
                        <div>
                            <h4 className="!text-white text-lg mb-6">Top Destinations</h4>
                            <ul className="space-y-3 list-none">
                                {["Sigiriya", "Galle", "Kandy", "Ella", "Bentota"].map((d) => (
                                    <li key={d}>
                                        <Link
                                            href={`/destinations/${d.toLowerCase()}`}
                                            className="text-gray-400 hover:text-[var(--color-gold)] transition-colors no-underline text-sm"
                                        >
                                            {d}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <h4 className="!text-white text-lg mb-6">Get in Touch</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 group">
                                    <MapPin className="text-[var(--color-gold)] mt-1 w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
                                    <span className="text-gray-400 text-sm">{siteConfig.address}</span>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <Phone className="text-[var(--color-gold)] mt-1 w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                                    <a
                                        href={`tel:${siteConfig.phone}`}
                                        className="text-gray-400 hover:text-[var(--color-gold)] transition-colors no-underline text-sm"
                                    >
                                        {siteConfig.phone}
                                    </a>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <Mail className="text-[var(--color-gold)] mt-1 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                                    <a
                                        href={`mailto:${siteConfig.email}`}
                                        className="text-gray-400 hover:text-[var(--color-gold)] transition-colors no-underline text-sm"
                                    >
                                        {siteConfig.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 py-6">
                <div className="container-luxury flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="!text-gray-500 text-sm">
                        © {currentYear} {siteConfig.name}. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link
                            href="/privacy"
                            className="text-gray-500 hover:text-[var(--color-gold)] text-sm no-underline transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms"
                            className="text-gray-500 hover:text-[var(--color-gold)] text-sm no-underline transition-colors"
                        >
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
