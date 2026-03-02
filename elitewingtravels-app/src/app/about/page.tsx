import { Metadata } from "next";
import Link from "next/link";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about EliteWing Travels – 21 years of crafting luxury travel experiences in Sri Lanka. Our story, mission, and commitment to excellence.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Our Story
                    </span>
                    <h1 className="!text-white mb-4">
                        About <span className="text-gradient-gold">EliteWing</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        21 years of passion, dedication, and unwavering commitment to
                        delivering extraordinary travel experiences.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="section-label">Since 2005</span>
                            <h2 className="mb-6">
                                A Legacy of{" "}
                                <span className="text-gradient-gold">Excellence</span>
                            </h2>
                            <p className="text-lg mb-6">
                                Founded in 2005, EliteWing Travels was born from a simple yet
                                powerful vision: to showcase the beauty and warmth of Sri Lanka
                                to the world through exceptional travel experiences.
                            </p>
                            <p className="mb-6">
                                Over two decades, we&apos;ve grown from a small, passionate team
                                to one of Sri Lanka&apos;s most trusted luxury travel providers.
                                Our commitment to quality, authenticity, and personalized service
                                has earned us the trust of over 10,000 international travelers.
                            </p>
                            <p>
                                Every journey we craft reflects our deep love for Sri Lanka –
                                its ancient heritage, lush landscapes, vibrant culture, and
                                above all, its warm and welcoming people.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-gold)] flex items-center justify-center">
                                <div className="text-center text-white p-8">
                                    <span className="text-6xl mb-4 block font-[var(--font-heading)]">21</span>
                                    <p className="text-xl font-semibold">Years of Excellence</p>
                                    <p className="text-sm opacity-80 mt-2">Established 2005</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[var(--color-gold)] rounded-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-luxury bg-[var(--color-sky)]">
                <div className="container-luxury">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <span className="text-gradient-gold text-4xl md:text-5xl font-bold font-[var(--font-heading)]">
                                    {stat.value.toLocaleString()}{stat.suffix}
                                </span>
                                <p className="mt-2 font-semibold text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="text-center mb-16">
                        <span className="section-label justify-center">What Drives Us</span>
                        <h2>
                            Our <span className="text-gradient-gold">Values</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "🛡️",
                                title: "Safety & Trust",
                                desc: "Every journey is backed by licensed chauffeurs, comprehensive insurance, and rigorous safety protocols.",
                            },
                            {
                                icon: "💎",
                                title: "Premium Quality",
                                desc: "From our luxury fleet to handpicked accommodations, we never compromise on quality or comfort.",
                            },
                            {
                                icon: "❤️",
                                title: "Authentic Hospitality",
                                desc: "True to our Ayubowan spirit, we treat every traveler as an honored guest, ensuring genuine warmth.",
                            },
                        ].map((value) => (
                            <div key={value.title} className="card-luxury p-8 text-center">
                                <span className="text-4xl mb-4 block">{value.icon}</span>
                                <h3 className="text-xl mb-3">{value.title}</h3>
                                <p className="text-sm">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-luxury bg-[var(--color-primary)]">
                <div className="container-luxury text-center">
                    <h2 className="!text-white mb-4">Ready to Experience the EliteWing Difference?</h2>
                    <p className="!text-white/70 text-lg max-w-xl mx-auto mb-8">
                        Join thousands of satisfied travelers who chose excellence.
                    </p>
                    <Link href="/contact" className="btn-white">
                        Start Your Journey
                    </Link>
                </div>
            </section>
        </>
    );
}
