import { Metadata } from "next";
import Image from "next/image";
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
            <section className="relative h-[70vh] md:h-[80vh] min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/assets/images/Destinations.png"
                    alt=""
                    fill
                    priority
                    quality={100}
                    sizes="100vw"
                    className="pointer-events-none select-none absolute inset-0 object-cover object-center z-0"
                />
                <div className="absolute inset-0 bg-black/40 z-0" />
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
                                    <div className="relative h-80 overflow-hidden group">
                                        <div className="w-full h-full absolute inset-0 grid grid-cols-2 grid-rows-2 transition-transform duration-700 group-hover:scale-110">
                                            {dest.gallery.slice(0, 4).map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className="w-full h-full bg-cover bg-center"
                                                    style={{ backgroundImage: `url('${img}')` }}
                                                />
                                            ))}
                                        </div>

                                        {/* Static overlay (Always visible) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                                        {/* Hover overlay (Visible on hover) */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6" />

                                        {/* Static Content (Hidden on hover) */}
                                        <div className="absolute bottom-4 left-5 right-5 transition-transform duration-500 group-hover:translate-y-8 group-hover:opacity-0">
                                            <span className="inline-block px-3 py-1 bg-[var(--color-gold)] text-white text-[10px] font-bold tracking-widest uppercase rounded-full mb-2">
                                                Best: {dest.bestTime}
                                            </span>
                                            <h3 className="!text-white text-3xl mb-1">{dest.name}</h3>
                                            <p className="!text-white/80 text-xs tracking-wide uppercase font-medium">{dest.tagline}</p>
                                        </div>

                                        {/* Hover Content (Visible on hover) */}
                                        <div className="absolute inset-x-5 bottom-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                                            <h3 className="!text-white text-2xl font-bold mb-3">{dest.name}</h3>
                                            <p className="text-white/90 text-sm mb-5 line-clamp-4 leading-relaxed">
                                                {dest.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {dest.highlights.slice(0, 3).map((h) => (
                                                    <span
                                                        key={h}
                                                        className="px-2.5 py-1 bg-white/20 text-white text-[10px] font-bold tracking-wider uppercase rounded-full backdrop-blur-md border border-white/10"
                                                    >
                                                        {h}
                                                    </span>
                                                ))}
                                            </div>
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
