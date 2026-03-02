import { Metadata } from "next";
import { tours } from "@/lib/data";
import { notFound } from "next/navigation";
import TourDetailClient from "./TourDetailClient";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const tour = tours.find((t) => t.slug === slug);
    if (!tour) return {};
    return {
        title: tour.name,
        description: tour.description,
        openGraph: {
            title: `${tour.name} | EliteWing Travels`,
            description: tour.description,
            images: [{ url: tour.image }],
        },
    };
}

export default async function TourDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const tour = tours.find((t) => t.slug === slug);
    if (!tour) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        name: tour.name,
        description: tour.description,
        touristType: "Luxury",
        provider: {
            "@type": "TravelAgency",
            name: "EliteWing Travels",
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {/* Hero */}
            <section className="relative h-[70vh] min-h-[500px] flex items-end bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40"
                    style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent" />
                <div className="relative z-10 container-luxury pb-16">
                    <span className="inline-block px-4 py-1.5 bg-[var(--color-gold)] text-white text-sm font-semibold rounded-full mb-4">
                        {tour.duration}
                    </span>
                    <h1 className="!text-white text-4xl md:text-5xl mb-3">{tour.name}</h1>
                    <p className="!text-white/80 text-lg max-w-2xl">{tour.tagline}</p>
                    <div className="mt-4">
                        <span className="text-[var(--color-gold)] text-2xl font-bold font-[var(--font-heading)]">
                            {tour.price}
                        </span>
                        <span className="!text-white/60 text-sm ml-2">per person</span>
                    </div>
                </div>
            </section>

            <TourDetailClient tour={tour} />
        </>
    );
}
