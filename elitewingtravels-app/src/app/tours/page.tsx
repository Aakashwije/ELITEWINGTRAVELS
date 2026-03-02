import { Metadata } from "next";
import Link from "next/link";
import { tours } from "@/lib/data";

export const metadata: Metadata = {
    title: "Luxury Tours",
    description: "Discover curated luxury tour packages across Sri Lanka. Cultural heritage journeys, wildlife safaris, romantic honeymoons, and more.",
};

export default function ToursPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div className="absolute inset-0 bg-[url('/tours/tours-hero.jpg')] bg-cover bg-center opacity-30" />
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Curated Experiences
                    </span>
                    <h1 className="!text-white mb-4">
                        Luxury <span className="text-gradient-gold">Tours</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        Every journey is crafted with meticulous attention to detail,
                        ensuring an unforgettable Sri Lankan experience.
                    </p>
                </div>
            </section>

            {/* Tours Grid */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {tours.map((tour) => (
                            <Link
                                key={tour.slug}
                                href={`/tours/${tour.slug}`}
                                className="block no-underline group"
                            >
                                <div className="card-luxury overflow-hidden h-full flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[#1a4fa0] transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${tour.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                        <div className="absolute top-4 right-4">
                                            <span className="px-4 py-1.5 bg-[var(--color-gold)] text-white text-xs font-bold rounded-full">
                                                {tour.duration}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-4 left-5">
                                            <span className="text-white/80 text-sm font-semibold">
                                                {tour.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl mb-2">{tour.name}</h3>
                                        <p className="text-sm text-[var(--color-gold)] font-medium mb-3">
                                            {tour.tagline}
                                        </p>
                                        <p className="text-sm flex-1 line-clamp-3">{tour.description}</p>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {tour.highlights.slice(0, 3).map((h) => (
                                                <span
                                                    key={h}
                                                    className="px-3 py-1 bg-[var(--color-sky)] text-[var(--color-primary)] text-xs font-medium rounded-full"
                                                >
                                                    {h}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-luxury bg-[var(--color-primary)]">
                <div className="container-luxury text-center">
                    <h2 className="!text-white mb-4">
                        Can&apos;t Find Your Perfect Tour?
                    </h2>
                    <p className="!text-white/70 text-lg max-w-xl mx-auto mb-8">
                        Let us design a bespoke journey tailored exclusively to your
                        preferences and desires.
                    </p>
                    <Link href="/contact" className="btn-white">
                        Design a Custom Tour
                    </Link>
                </div>
            </section>
        </>
    );
}
