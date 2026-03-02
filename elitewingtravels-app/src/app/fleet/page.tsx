import { Metadata } from "next";
import Link from "next/link";
import { fleet } from "@/lib/data";

export const metadata: Metadata = {
    title: "Luxury Fleet",
    description: "Travel in absolute luxury with EliteWing's premium fleet. Luxury coaches, executive vans, and private sedans for your Sri Lanka journey.",
};

export default function FleetPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[var(--color-primary)] via-[#0a2d6b] to-[#061a3d]">
                <div className="relative z-10 text-center container-luxury">
                    <span className="section-label justify-center !text-[var(--color-gold)]">
                        Premium Transport
                    </span>
                    <h1 className="!text-white mb-4">
                        Our <span className="text-gradient-gold">Luxury Fleet</span>
                    </h1>
                    <p className="!text-white/70 text-lg max-w-2xl mx-auto">
                        Every vehicle in our fleet is meticulously maintained and equipped
                        with modern amenities for the ultimate travel comfort.
                    </p>
                </div>
            </section>

            {/* Fleet Grid */}
            <section className="section-luxury-lg">
                <div className="container-luxury">
                    <div className="space-y-20">
                        {fleet.map((vehicle, i) => (
                            <div
                                key={vehicle.slug}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:direction-rtl" : ""
                                    }`}
                            >
                                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                                    <div className="card-luxury overflow-hidden">
                                        <div className="relative h-80 overflow-hidden">
                                            <div
                                                className="w-full h-full bg-gradient-to-br from-[var(--color-primary)] to-[#1a4fa0]"
                                                style={{
                                                    backgroundImage: `url(${vehicle.image})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />
                                            <div className="absolute top-4 right-4">
                                                <span className="px-4 py-1.5 bg-[var(--color-gold)] text-white text-sm font-bold rounded-full">
                                                    {vehicle.category}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                                    <span className="section-label">{vehicle.category}</span>
                                    <h2 className="mb-2">{vehicle.name}</h2>
                                    <p className="text-[var(--color-gold)] font-semibold mb-4">
                                        {vehicle.capacity}
                                    </p>
                                    <p className="mb-6">{vehicle.description}</p>

                                    <h4 className="text-sm font-semibold mb-3 text-[var(--color-dark)]">
                                        Features
                                    </h4>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {vehicle.features.map((f) => (
                                            <div key={f} className="flex items-center gap-2 text-sm">
                                                <span className="text-[var(--color-gold)]">✦</span>
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <h4 className="text-sm font-semibold mb-3 text-[var(--color-dark)]">
                                        Safety
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {vehicle.safety.map((s) => (
                                            <span
                                                key={s}
                                                className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full"
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>

                                    <Link href="/contact" className="btn-primary">
                                        Inquire About This Vehicle
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
