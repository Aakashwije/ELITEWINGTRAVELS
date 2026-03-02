import { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
    title: "Destinations",
    description: "Explore Sri Lanka's most captivating destinations. From ancient citadels to golden beaches, each carefully selected for an extraordinary experience.",
};

export default function DestinationsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Explore Sri Lanka
                    </span>
                    <h1 className="!text-white mb-4">
                        Our <span className="text-gradient-gold">Destinations</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        Discover the jewels of Sri Lanka – each destination offering a
                        unique blend of natural beauty, culture, and luxury.
                    </p>
                </div>
            </section>

            {/* Grid */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {destinations.map((dest) => (
                            <Link
                                key={dest.slug}
                                href={`/destinations/${dest.slug}`}
                                className="block no-underline group"
                            >
                                <div className="card-luxury overflow-hidden">
                                    <div className="relative h-72 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[#0a2d6b] transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${dest.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-5 right-5">
                                            <span className="inline-block px-3 py-1 bg-[var(--color-gold)] text-white text-xs font-semibold rounded-full mb-2">
                                                Best: {dest.bestTime}
                                            </span>
                                            <h3 className="!text-white text-3xl mb-1">{dest.name}</h3>
                                            <p className="!text-white/80 text-sm">{dest.tagline}</p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <p className="text-sm mb-4 line-clamp-2">{dest.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {dest.highlights.slice(0, 4).map((h) => (
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
        </>
    );
}
