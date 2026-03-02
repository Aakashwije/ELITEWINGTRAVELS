import { Metadata } from "next";
import Link from "next/link";
import { destinations, tours } from "@/lib/data";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

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
            <section className="relative h-[70vh] min-h-[500px] flex items-end bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
                <div className="relative z-10 container-luxury pb-16">
                    <h1 className="!text-white text-4xl md:text-6xl mb-3">{dest.name}</h1>
                    <p className="!text-white/80 text-xl">{dest.tagline}</p>
                </div>
            </section>

            {/* Content */}
            <section className="section-luxury">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main */}
                        <div className="lg:col-span-2">
                            <h2 className="mb-6">About {dest.name}</h2>
                            <p className="text-lg leading-relaxed mb-12">{dest.description}</p>

                            {/* Attractions */}
                            <h3 className="mb-6">Key Attractions</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                                {dest.highlights.map((h) => (
                                    <div key={h} className="card-luxury p-5 flex items-center gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-[var(--color-sky)] flex items-center justify-center text-[var(--color-primary)]">
                                            ✦
                                        </span>
                                        <span className="font-medium text-sm">{h}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="card-luxury p-6">
                                <h4 className="text-lg mb-4">Best Time to Visit</h4>
                                <p className="text-[var(--color-gold)] font-semibold text-lg">{dest.bestTime}</p>
                            </div>

                            <div className="card-luxury p-6">
                                <h4 className="text-lg mb-4">Luxury Hotels</h4>
                                <ul className="space-y-3">
                                    {dest.hotels.map((h) => (
                                        <li key={h} className="flex items-center gap-2">
                                            <span className="text-[var(--color-gold)]">★</span>
                                            <span className="text-sm">{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="card-luxury p-6">
                                <h4 className="text-lg mb-4">Plan Your Visit</h4>
                                <Link href="/contact" className="btn-primary w-full justify-center">
                                    Inquire Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Tours */}
            <section className="section-luxury bg-[var(--color-sky)]">
                <div className="container-luxury">
                    <h2 className="text-center mb-12">
                        Related <span className="text-gradient-gold">Tours</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tours.slice(0, 3).map((tour) => (
                            <Link
                                key={tour.slug}
                                href={`/tours/${tour.slug}`}
                                className="block no-underline group"
                            >
                                <div className="card-luxury overflow-hidden">
                                    <div className="relative h-48 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[#1a4fa0] transition-transform duration-700 group-hover:scale-110"
                                            style={{
                                                backgroundImage: `url(${tour.image})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                            }}
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h4 className="mb-1">{tour.name}</h4>
                                        <p className="text-sm text-[var(--color-gold)]">{tour.duration}</p>
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
