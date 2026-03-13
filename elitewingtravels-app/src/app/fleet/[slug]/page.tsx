import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, User, ShieldCheck } from "lucide-react";
import { fleet } from "@/lib/data";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return fleet.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const vehicle = fleet.find((v) => v.slug === resolvedParams.slug);

    if (!vehicle) {
        return {
            title: "Vehicle Not Found",
        };
    }

    return {
        title: `${vehicle.name} | EliteWing Fleet`,
        description: vehicle.description,
    };
}

export default async function VehiclePage({ params }: Props) {
    const resolvedParams = await params;
    const vehicle = fleet.find((v) => v.slug === resolvedParams.slug);

    console.log("Fleet dynamic route requested slug:", resolvedParams.slug);
    console.log("Found vehicle:", !!vehicle);

    if (!vehicle) {
        notFound();
    }

    return (
        <main className="bg-[var(--color-bg)] pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full bg-black">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Minimal fade for back button and labels */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-0" />
                {/* Minimal fade for bottom title text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0" />

                <div className="absolute inset-0 flex items-end pb-16 z-10">
                    <div className="container-luxury w-full">
                        <Link
                            href="/fleet"
                            className="inline-flex items-center text-white hover:text-white mb-6 transition-colors drop-shadow-md font-medium"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Fleet
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="px-4 py-1.5 bg-[var(--color-gold)] text-white text-sm font-bold rounded-full shadow-md">
                                {vehicle.category}
                            </span>
                            {vehicle.subCategory && (
                                <span className="px-4 py-1.5 border border-white/30 text-white text-sm font-medium rounded-full bg-black/40 backdrop-blur-sm shadow-md">
                                    {vehicle.subCategory}
                                </span>
                            )}
                            <span className="px-4 py-1.5 bg-black/40 text-white text-sm font-medium rounded-full backdrop-blur-sm shadow-md border border-white/20">
                                {vehicle.capacity}
                            </span>
                        </div>

                        <h1 className="!text-white text-4xl md:text-6xl font-bold mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
                            {vehicle.name}
                        </h1>
                        <p className="text-xl !text-white max-w-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
                            {vehicle.description}
                        </p>
                    </div>
                </div>
            </section>

            <div className="h-7" />

            <div className="container-luxury mt-20 mb-24 md:mb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

                    {/* Main Content Area */}
                    <div className="lg:col-span-7 space-y-14">

                        {/* Features & Safety */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
                            <div>
                                <div className="h-7" />
                                <h3 className="text-2xl md:text-3xl font-semibold mb-7 text-[var(--color-dark)] flex items-center gap-2">
                                    Key Features
                                </h3>
                                <div className="h-3" />
                                <ul className="space-y-5">
                                    {vehicle.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0" />
                                            <span className="leading-normal">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="self-start">
                                <div className="h-7" />
                                <h3 className="text-2xl md:text-3xl font-semibold mb-7 text-[var(--color-dark)] flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-[var(--color-gold)]" /> Safety Measures
                                </h3>
                                <div className="h-3" />
                                <ul className="space-y-5">
                                    {vehicle.safety.map((safetyItem, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700">
                                            <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20">
                                                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]" />
                                            </span>
                                            <span className="leading-normal">{safetyItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="h-7" />

                        <div className="bg-white p-7 md:p-8 rounded-3xl shadow-lg border border-gray-100 text-center">
                            <div className="h-7" />
                            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-dark)]">
                                Ready to Book?
                            </h3>

                            <div className="h-7" />

                            <p className="text-gray-600 mb-6">
                                Contact us to check availability and get a tailored quote for the {vehicle.name}.
                            </p>

                            <div className="h-7" />

                            <Link href="/contact" className="btn-primary w-full justify-center">
                                Inquire Now
                            </Link>

                            <div className="h-7" />
                        </div>

                        <div className="h-7" />

                        {/* Gallery Section */}
                        {vehicle.gallery && vehicle.gallery.length > 0 && (
                            <div>
                                <h3 className="text-3xl font-semibold mb-8 text-[var(--color-dark)]">Vehicle Gallery</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {vehicle.gallery.map((img, i) => (
                                        <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                            <Image
                                                src={img}
                                                alt={`${vehicle.name} interior/exterior ${i + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-12 lg:col-span-5 lg:sticky lg:top-28 self-start">

                        {/* Driver Details Card */}
                        <div className="h-7" />
                        <div className="bg-gradient-to-br from-[#0a2d6b] to-[#061a3d] p-10 md:p-12 rounded-3xl shadow-xl text-white min-h-[390px] text-center">
                            <h3 className="text-3xl md:text-4xl font-semibold mb-9 text-white border-b border-white/20 pb-5">
                                Your Chauffeur
                            </h3>

                            <div className="h-3" />

                            <div className="mt-8 space-y-7 text-center">
                                <p className="text-sm text-white/80 font-medium">EliteWing Travels</p>

                                <div>
                                    <p className="text-sm text-[var(--color-gold)] uppercase tracking-wider font-semibold mb-2">
                                        Assigned Chauffeur
                                    </p>
                                    <h4 className="text-2xl md:text-3xl font-bold leading-tight">
                                        {vehicle.driverName || "Professional Guide"}
                                    </h4>
                                </div>

                                <div>
                                    <p className="text-xs text-white/70 uppercase tracking-wider mb-2">Experience</p>
                                    <p className="text-lg font-medium">{vehicle.driverExperience || "Fully Licensed"}</p>
                                </div>

                                <div>
                                    <p className="text-xs text-white/70 uppercase tracking-wider mb-2">Languages Spoken</p>
                                    <p className="text-base font-medium">{(vehicle.driverLanguages || ["English"]).join(" • ")}</p>
                                </div>

                                <div className="h-7" />

                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold)] font-semibold mb-2">
                                        EliteWing Promise
                                    </p>
                                    <p className="text-base leading-8 text-white/90">
                                        All our chauffeurs are highly trained professionals, offering not just a safe ride, but deep local knowledge to enhance your Sri Lankan journey.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
