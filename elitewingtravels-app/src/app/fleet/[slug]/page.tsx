import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, CheckCircle2, User, Award, Globe, ShieldCheck } from "lucide-react";
import { fleet } from "@/lib/data";
import { Metadata } from "next";

interface Props {
    params: Promise<{
        slug: string;
    }>;
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

    if (!vehicle) {
        notFound();
    }

    return (
        <main className="bg-[var(--color-bg)] pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full bg-gray-900">
                <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex items-end pb-16">
                    <div className="container-luxury w-full">
                        <Link
                            href="/fleet"
                            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 mr-1" />
                            Back to Fleet
                        </Link>

                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            <span className="px-4 py-1.5 bg-[var(--color-gold)] text-white text-sm font-bold rounded-full">
                                {vehicle.category}
                            </span>
                            {vehicle.subCategory && (
                                <span className="px-4 py-1.5 border border-white/30 text-white text-sm font-medium rounded-full bg-black/20 backdrop-blur-sm">
                                    {vehicle.subCategory}
                                </span>
                            )}
                            <span className="px-4 py-1.5 bg-white/10 text-white text-sm font-medium rounded-full backdrop-blur-sm shadow-sm">
                                {vehicle.capacity}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {vehicle.name}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl">
                            {vehicle.description}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container-luxury mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Features & Safety */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)] flex items-center gap-2">
                                    Key Features
                                </h3>
                                <ul className="space-y-4">
                                    {vehicle.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-[var(--color-gold)] shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-2xl font-semibold mb-6 text-[var(--color-dark)] flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-[var(--color-gold)]" /> Safety Measures
                                </h3>
                                <ul className="space-y-4">
                                    {vehicle.safety.map((safetyItem, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                                            <span>{safetyItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

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
                    <div className="space-y-8">

                        {/* Driver Details Card */}
                        <div className="bg-gradient-to-br from-[#0a2d6b] to-[#061a3d] p-8 rounded-2xl shadow-xl text-white">
                            <h3 className="text-2xl font-semibold mb-6 text-white border-b border-white/20 pb-4">
                                Your Chauffeur
                            </h3>

                            <div className="flex items-center gap-6 mb-8">
                                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--color-gold)]">
                                    <Image
                                        src={vehicle.driverImage || "/fleet/driver-placeholder.jpg"}
                                        alt={vehicle.driverName || "EliteWing Chauffeur"}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm text-[var(--color-gold)] uppercase tracking-wider font-semibold mb-1">
                                        Assigned Chauffeur
                                    </p>
                                    <h4 className="text-2xl font-bold">
                                        {vehicle.driverName || "Professional Guide"}
                                    </h4>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <Award className="w-5 h-5 text-[var(--color-gold)]" />
                                    <div>
                                        <p className="text-xs text-white/60">Experience</p>
                                        <p className="font-medium">{vehicle.driverExperience || "Fully Licensed"}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Globe className="w-5 h-5 text-[var(--color-gold)]" />
                                    <div>
                                        <p className="text-xs text-white/60">Languages Spoken</p>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {(vehicle.driverLanguages || ["English"]).map((lang, i) => (
                                                <span key={i} className="px-2 py-0.5 bg-white/10 rounded text-sm">
                                                    {lang}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-sm text-white/80 italic border-l-2 border-[var(--color-gold)] pl-4">
                                "All our chauffeurs are highly trained professionals, offering not just a safe ride, but deep local knowledge to enhance your Sri Lankan journey."
                            </p>
                        </div>

                        {/* Booking CTA */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                            <h3 className="text-2xl font-semibold mb-4 text-[var(--color-dark)]">
                                Ready to Book?
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Contact us to check availability and get a tailored quote for the {vehicle.name}.
                            </p>
                            <Link href="/contact" className="btn-primary w-full justify-center">
                                Inquire Now
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
