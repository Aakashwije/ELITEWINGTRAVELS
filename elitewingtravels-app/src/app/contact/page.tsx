import { Metadata } from "next";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with EliteWing Travels. Plan your luxury Sri Lanka tour, inquire about our fleet, or request a custom itinerary.",
};

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Get in Touch
                    </span>
                    <h1 className="!text-white mb-4">
                        Contact <span className="text-gradient-gold">Us</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        Ready to start your dream journey? Our travel experts are here to
                        help you plan the perfect Sri Lanka experience.
                    </p>
                </div>
            </section>

            {/* Contact Split */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left - Info */}
                        <div>
                            <span className="section-label">EliteWing Travels</span>
                            <h2 className="mb-6">
                                Let&apos;s Plan Your <span className="text-gradient-gold">Journey</span>
                            </h2>
                            <p className="text-lg mb-10">
                                Whether you&apos;re dreaming of a cultural odyssey, a beach
                                escape, or a tailor-made adventure, our team is ready to bring
                                your vision to life.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-sky)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                                        📍
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">Address</h4>
                                        <p className="text-sm">{siteConfig.address}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-sky)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                                        📞
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">Phone</h4>
                                        <a href={`tel:${siteConfig.phone}`} className="text-sm text-[var(--color-primary)] no-underline hover:text-[var(--color-gold)] transition-colors">
                                            {siteConfig.phone}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[var(--color-sky)] flex items-center justify-center text-[var(--color-primary)] flex-shrink-0">
                                        ✉️
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">Email</h4>
                                        <a href={`mailto:${siteConfig.email}`} className="text-sm text-[var(--color-primary)] no-underline hover:text-[var(--color-gold)] transition-colors">
                                            {siteConfig.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center flex-shrink-0">
                                        💬
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold mb-1">WhatsApp</h4>
                                        <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-green-600 no-underline hover:text-green-700 transition-colors">
                                            Chat with us instantly
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-3xl overflow-hidden shadow-lg h-64">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.45932234025!2d79.78616569999999!3d6.9218386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, filter: "saturate(0.8) contrast(1.1)" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="EliteWing Travels Location"
                                />
                            </div>
                        </div>

                        {/* Right - Form */}
                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
