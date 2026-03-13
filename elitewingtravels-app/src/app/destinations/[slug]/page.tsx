import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { destinations } from "@/lib/data";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

const tourPosters = [
    { id: 1, image: "/tour itinaries/tour itinary 1.png", title: "Tour Itinerary 1" },
    { id: 2, image: "/tour itinaries/tour itinary 2.png", title: "Tour Itinerary 2" },
    { id: 3, image: "/tour itinaries/tour itinary 3.png", title: "Tour Itinerary 3" },
    { id: 4, image: "/tour itinaries/tour itinary 4.png", title: "Tour Itinerary 4" },
    { id: 5, image: "/tour itinaries/tour itinary 5.png", title: "Tour Itinerary 5" },
];

export async function generateStaticParams() {
    return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const dest = destinations.find((d) => d.slug === slug);
    if (!dest) return {};
    return {
        title: dest.name,
        description: dest.description,
        openGraph: {
            title: `${dest.name} | EliteWing Travels`,
            description: dest.description,
            images: [{ url: dest.image }],
        },
    };
}

export default async function DestinationPage({ params }: PageProps) {
    const { slug } = await params;
    const dest = destinations.find((d) => d.slug === slug);
    if (!dest) notFound();

    return (
        <>
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center bg-black">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${encodeURI(dest.image)}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="relative z-10 container-luxury text-center">
                    <h1 className="!text-white text-4xl md:text-6xl mb-3">{dest.name}</h1>
                    <p className="!text-white/85 text-xl">{dest.tagline}</p>
                </div>
            </section>

            <div className="h-16 md:h-10 bg-white" aria-hidden="true" />

            {/* ── About Section ── */}
            <section className="pt-20 md:pt-28 pb-32 md:pb-40 bg-white">
                <div className="container-luxury max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="block w-10 h-[3px] rounded-full bg-[var(--color-gold)]" />
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">Discover</p>
                    </div>
                    <h2 className="mb-8">About {dest.name}</h2>
                    <p className="text-lg md:text-xl leading-[1.9] text-[var(--color-muted)] mb-20">{dest.description}</p>
                </div>
            </section>

            <div className="h-16 md:h-10 bg-white" aria-hidden="true" />

            {/* ── Key Attractions Section ── */}
            <section className="py-20 md:py-28 bg-[var(--color-sky)]/30">
                <div className="container-luxury max-w-5xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <span className="block w-10 h-[3px] rounded-full bg-[var(--color-gold)]" />
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold)]">Explore</p>
                    </div>
                    <h3 className="mb-12">Key Attractions</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                        {dest.highlights.map((h, i) => (
                            <div
                                key={h}
                                className="group flex items-center gap-6 rounded-2xl border border-[var(--color-border)] bg-white px-7 py-6 hover:border-[var(--color-gold)]/50 hover:shadow-lg transition-all duration-300 shadow-sm"
                            >
                                <span className="h-12 w-12 rounded-2xl bg-[var(--color-gold)]/10 flex items-center justify-center font-bold text-sm text-[var(--color-primary)] flex-shrink-0 group-hover:bg-[var(--color-gold)]/20 transition-colors duration-300">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-semibold text-lg text-[var(--color-primary)] leading-relaxed">{h}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="h-16 md:h-18 bg-white" aria-hidden="true" />

            {/* ── Did You Know + Info Cards Section ── */}
            <section className="py-20 md:py-28 bg-white">
                <div className="container-luxury max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                        {/* Did You Know */}
                        <div className="relative overflow-hidden rounded-[2rem] bg-[var(--color-primary)] p-12 md:p-16 flex flex-col justify-center items-center text-center">
                            <span className="absolute -top-16 -right-16 w-56 h-56 bg-white/5 rounded-full" />
                            <span className="absolute -bottom-10 -left-10 w-36 h-36 bg-white/5 rounded-full" />
                            <p className="relative text-base md:text-lg font-extrabold uppercase tracking-[0.22em] text-[var(--color-gold)] mb-8">Did You Know</p>
                            <p className="relative text-2xl md:text-3xl text-white font-light leading-[1.75] max-w-[34ch] text-center">
                                {dest.name} is one of Sri Lanka&apos;s most cherished destinations, celebrated for its{" "}
                                <span className="text-[var(--color-gold)] font-medium">
                                    {dest.highlights.slice(0, 3).join(", ")}
                                </span>
                                {" "}&mdash; offering every traveler an unforgettable blend of discovery, culture, and natural beauty.
                            </p>
                        </div>

                        {/* Info Cards */}
                        <div className="space-y-0 flex flex-col justify-center">

                            {/* Best Time */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="w-10 h-10 rounded-xl bg-[var(--color-sky)] flex items-center justify-center text-base flex-shrink-0">🌤️</span>
                                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)]">Best Time to Visit</p>
                                </div>
                                <p className="text-4xl font-bold text-[var(--color-primary)] mb-4">{dest.bestTime}</p>
                                <p className="text-base text-[var(--color-muted)] leading-relaxed">
                                    This season offers the most comfortable weather and ideal conditions to explore {dest.name}.
                                </p>
                            </div>

                            <div className="h-10 md:h-8" aria-hidden="true" />

                            {/* CTA Card */}
                            <div className="hidden md:block rounded-[2rem] bg-[var(--color-primary)] p-10 text-center">
                                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold)] mb-3">Ready to Visit?</p>
                                <h4 className="!text-white text-2xl font-semibold mb-4">Plan Your {dest.name} Trip</h4>
                                <p className="text-white/70 text-base mb-8 leading-relaxed">Our travel experts will craft a personalised itinerary just for you.</p>
                                <Link href="/contact" className="btn-primary w-full justify-center py-4 text-base font-semibold">
                                    Inquire Now
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tours */}
            <section
                className="section-luxury"
                style={{
                    background: 'linear-gradient(to bottom, white, var(--color-sky) 20%, var(--color-sky))'
                }}
            >
                <div className="container-luxury">
                    <h2 className="text-center mb-12">
                        Related <span className="text-gradient-gold">Tours</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {tourPosters.map((poster) => (
                            <div
                                key={poster.id}
                                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-white"
                            >
                                {/* Poster Image */}
                                <div className="relative w-full aspect-[3/4]">
                                    <Image
                                        src={poster.image}
                                        alt={poster.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Hover Overlay with Book Now Button */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                                    <Link
                                        href="/contact"
                                        className="btn-primary transform scale-90 group-hover:scale-100 transition-transform duration-300"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
