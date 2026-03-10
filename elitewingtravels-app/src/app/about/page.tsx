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
            <section
                className="relative h-[56vh] md:h-[62vh] min-h-[320px] md:min-h-[420px] flex items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/destinations/galle-gen.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-[var(--color-gold)]/12 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-white/8 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,61,0.58),rgba(6,26,61,0.76))]" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:52px_52px] opacity-12" />
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Our Story
                    </span>
                    <h1 className="!text-white mb-4">
                        About <span className="text-gradient-gold">EliteWing</span>
                    </h1>
                    <p className="!text-white/70 text-base md:text-lg max-w-2xl mx-auto">
                        21 years of passion, dedication, and unwavering commitment to
                        delivering extraordinary travel experiences.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-14 items-start">
                        <div>
                            <span className="section-label">Since 2005</span>
                            <h2 className="mb-6">
                                A Legacy of{" "}
                                <span className="text-gradient-gold">Excellence</span>
                            </h2>
                            <p className="text-base md:text-lg mb-6">
                                Founded in 2005, EliteWing Travels was born from a simple yet
                                powerful vision to showcase the beauty and warmth of Sri Lanka
                                to the world through exceptional travel experiences.
                            </p>
                            <p className="mb-6">
                                Over two decades, we&apos;ve grown from a small, passionate team
                                to one of Sri Lanka&apos;s most trusted luxury travel providers.
                                Our commitment to quality, authenticity, and personalized service
                                has earned us the trust of over 10,000 international travelers.
                            </p>
                            <p>
                                Every journey we craft reflects our deep love for Sri Lanka -
                                its ancient heritage, lush landscapes, vibrant culture, and
                                above all, its warm and welcoming people.
                            </p>
                        </div>
                        <div className="relative lg:pt-2">
                            <div
                                className="group relative rounded-3xl aspect-[4/5] border border-[#e5e7eb] w-full max-w-[460px] mx-auto overflow-hidden shadow-[0_14px_30px_rgba(3,18,56,0.12)]"
                                style={{
                                    backgroundImage: "url('/assets/images/about%20page%20.jpeg')",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                }}
                            >
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(6,26,61,0.66)_100%)]" />
                                <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/35 bg-[rgba(6,26,61,0.48)] backdrop-blur-md p-3 text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                                    <p className="text-xs tracking-[0.16em] uppercase text-white font-semibold" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.45)" }}>
                                        Memorable Group Adventures
                                    </p>
                                </div>
                                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicles */}
            <section className="py-14 md:py-20 bg-[radial-gradient(circle_at_50%_0%,#f8fbff_0%,#eef5ff_45%,#e7f1ff_100%)] border-y border-[#d9e7fb]">
                <div className="container-luxury">
                    <div className="text-center mb-10 max-w-3xl mx-auto">
                        <span className="section-label justify-center">Our Fleet</span>
                        <h2>
                            Vehicles Built for <span className="text-gradient-gold">Every Journey</span>
                        </h2>
                        <p className="max-w-2xl mx-auto mt-4 text-[var(--color-primary)]/80">
                            From private sedans to group coaches, our fleet is selected for comfort,
                            safety, and smooth travel across Sri Lanka.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {[
                            {
                                title: "Cars & SUVs",
                                desc: "Ideal for couples, families, and executive travel with premium comfort.",
                                tag: "Private Travel",
                                image: "/Vehicles/Cars/Sedan/TOYOTA%20PRIUS.png",
                            },
                            {
                                title: "Luxury Vans",
                                desc: "Perfect for small groups needing spacious seating and luggage convenience.",
                                tag: "Group Comfort",
                                image: "/Vehicles/Vans/KDH%20Highroof%2014%20Seater/KFH%20HIGHROOF.png",
                            },
                            {
                                title: "Tour Coaches",
                                desc: "Reliable buses for larger groups, events, and islandwide tours.",
                                tag: "Large Groups",
                                image: "/Vehicles/Buses/Coaster%2029%20Seater/TOYOTA%20COASTER%2029%20SEATER.png",
                            },
                        ].map((item, index) => (
                            <div
                                key={item.title}
                                className="group relative overflow-hidden rounded-3xl bg-white border-2 border-[#d6e4fa] shadow-[0_12px_30px_rgba(11,61,145,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(11,61,145,0.13)]"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-primary),var(--color-gold))] opacity-65" />
                                <div
                                    className="relative h-24 overflow-hidden"
                                    style={{ backgroundImage: `url('${item.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}
                                >
                                    <div className="absolute inset-0 bg-[rgba(6,26,61,0.26)] backdrop-blur-[1px]" />
                                </div>
                                <div className="p-5 md:p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-gold)] group-hover:scale-110 transition-transform" />
                                        <p className="text-[11px] uppercase tracking-[0.14em] text-[var(--color-primary)] font-semibold">{item.tag}</p>
                                    </div>
                                    <h3 className="text-xl md:text-2xl mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed">{item.desc}</p>
                                </div>
                                <span className="absolute bottom-4 right-5 text-xs text-[var(--color-primary)]/35 font-semibold">0{index + 1}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/fleet" className="btn-primary shadow-[0_10px_22px_rgba(11,61,145,0.20)] hover:shadow-[0_14px_28px_rgba(11,61,145,0.24)]">
                            View Full Fleet
                        </Link>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-luxury bg-[var(--color-sky)]">
                <div className="container-luxury">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center rounded-2xl border border-[#d6e6fb] bg-white/80 p-5 md:p-6 shadow-[0_10px_26px_rgba(11,61,145,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(11,61,145,0.14)]">
                                <span className="text-gradient-gold text-4xl md:text-5xl font-bold font-[var(--font-heading)] leading-none">
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
            <section
                className="section-luxury relative overflow-hidden flex items-center"
                style={{
                    backgroundImage: "url('/assets/images/bottom-background-about-us-pictures.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "320px",
                }}
            >
                <div className="absolute -left-20 -top-16 h-52 w-52 rounded-full bg-[var(--color-gold)]/14 blur-2xl" />
                <div className="absolute -right-24 -bottom-16 h-64 w-64 rounded-full bg-white/8 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,61,0.45),rgba(6,26,61,0.62))]" />
                <div className="container-luxury text-center relative z-10">
                    <h2 className="!text-white mb-4">Ready to Experience the EliteWing Difference?</h2>
                    <p className="!text-white/75 text-lg max-w-xl mx-auto mb-8">
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
